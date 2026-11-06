<?php
/*
 * Recebe a inscrição assinada e envia por e-mail.
 *   POST ?acao=iniciar  -> gera protocolo, data/hora oficial e registra o IP
 *   POST ?acao=enviar   -> recebe dados + PDF assinado, confere e envia os e-mails
 */
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailException;

require __DIR__ . '/lib/PHPMailer/Exception.php';
require __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require __DIR__ . '/lib/PHPMailer/SMTP.php';

$cfg = require __DIR__ . '/config.php';
date_default_timezone_set($cfg['fuso']);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function responder(int $status, array $dados): void
{
    http_response_code($status);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE);
    exit;
}

function ip_cliente(array $cfg): string
{
    if ($cfg['confiar_proxy']) {
        foreach (['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR'] as $h) {
            if (!empty($_SERVER[$h])) {
                $ip = trim(explode(',', $_SERVER[$h])[0]);
                if (filter_var($ip, FILTER_VALIDATE_IP)) return $ip;
            }
        }
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'desconhecido';
}

function h(?string $s): string
{
    return htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');
}

/* Limite simples: no máximo 20 requisições por IP a cada 10 minutos */
function limitar(string $ip): void
{
    $dir = sys_get_temp_dir() . '/superar_rl';
    if (!is_dir($dir)) @mkdir($dir, 0700, true);
    $arq = $dir . '/' . hash('sha256', $ip);
    $agora = time();
    $lista = is_file($arq) ? array_filter(array_map('intval', explode(',', (string) file_get_contents($arq))), fn($t) => $t > $agora - 600) : [];
    if (count($lista) >= 20) responder(429, ['ok' => false, 'erro' => 'Muitas tentativas. Aguarde alguns minutos.']);
    $lista[] = $agora;
    @file_put_contents($arq, implode(',', $lista), LOCK_EX);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') responder(405, ['ok' => false, 'erro' => 'Método não permitido']);

$ip = ip_cliente($cfg);
limitar($ip);
$acao = $_GET['acao'] ?? '';

/* ---------- 1. Início: protocolo, data/hora e IP ---------- */
if ($acao === 'iniciar') {
    $protocolo = 'SUP-' . date('Ymd') . '-' . strtoupper(bin2hex(random_bytes(3)));
    $dataHora = date('c');
    $token = hash_hmac('sha256', "$protocolo|$dataHora|$ip", $cfg['segredo']);
    responder(200, ['protocolo' => $protocolo, 'dataHora' => $dataHora, 'ip' => $ip, 'token' => $token]);
}

if ($acao !== 'enviar') responder(400, ['ok' => false, 'erro' => 'Ação inválida']);

/* ---------- 2. Envio ---------- */
if (!empty($_POST['website'])) responder(200, ['ok' => true]); // robô (campo invisível preenchido)

$protocolo = (string) ($_POST['protocolo'] ?? '');
$dataHora  = (string) ($_POST['dataHora'] ?? '');
$ipInicio  = (string) ($_POST['ip'] ?? '');
$token     = (string) ($_POST['token'] ?? '');

if (!preg_match('/^SUP-\d{8}-[A-F0-9]{6}$/', $protocolo)) responder(400, ['ok' => false, 'erro' => 'Protocolo inválido']);
if (!hash_equals(hash_hmac('sha256', "$protocolo|$dataHora|$ipInicio", $cfg['segredo']), $token)) {
    responder(400, ['ok' => false, 'erro' => 'Protocolo não reconhecido. Recarregue a página e tente de novo.']);
}
$ts = strtotime($dataHora);
if (!$ts || time() - $ts > 3 * 3600) responder(400, ['ok' => false, 'erro' => 'A sessão expirou. Recarregue a página e assine novamente.']);

$dados = json_decode((string) ($_POST['dados'] ?? ''), true);
$evid  = json_decode((string) ($_POST['evidencias'] ?? ''), true) ?: [];
// O navegador troca \n por \r\n no envio de formulários; volta ao original antes de calcular o hash
$texto = str_replace("\r\n", "\n", (string) ($_POST['contratoTexto'] ?? ''));
$hashInformado = (string) ($_POST['hashContrato'] ?? '');
$assinatura = (string) ($_POST['assinatura'] ?? '');

if (!is_array($dados) || empty($dados['aluno']['nome']) || empty($dados['curso']['nome'])) responder(400, ['ok' => false, 'erro' => 'Dados incompletos']);
$aluno = $dados['aluno'];
$resp  = $dados['responsavel'] ?? null;
$sign  = $resp ?: $aluno;
if (!filter_var($sign['email'] ?? '', FILTER_VALIDATE_EMAIL)) responder(400, ['ok' => false, 'erro' => 'E-mail inválido']);
if (strlen($texto) < 500 || strlen($texto) > 100000) responder(400, ['ok' => false, 'erro' => 'Contrato inválido']);

// O hash do texto do contrato é recalculado aqui para garantir que confere com o que está no PDF
$hashContrato = hash('sha256', $texto);
if (!hash_equals($hashContrato, strtolower($hashInformado))) responder(400, ['ok' => false, 'erro' => 'O texto do contrato não confere com o código de verificação.']);

// PDF
$pdf = $_FILES['pdf'] ?? null;
if (!$pdf || $pdf['error'] !== UPLOAD_ERR_OK || $pdf['size'] > 8 * 1024 * 1024) responder(400, ['ok' => false, 'erro' => 'PDF não recebido']);
$pdfBin = (string) file_get_contents($pdf['tmp_name']);
if (strncmp($pdfBin, '%PDF', 4) !== 0) responder(400, ['ok' => false, 'erro' => 'Arquivo inválido']);
$hashPdf = hash('sha256', $pdfBin);
$pdfNome = "contrato-superar-$protocolo.pdf";

// Assinatura (PNG em base64)
$assBin = null;
if (preg_match('#^data:image/png;base64,([A-Za-z0-9+/=]+)$#', $assinatura, $m)) {
    $assBin = base64_decode($m[1], true);
    if ($assBin === false || strlen($assBin) > 1024 * 1024) $assBin = null;
}

$recebidoEm = date('c');

/* ---------- Corpo do e-mail para a escola ---------- */
function tabela(string $titulo, array $linhas): string
{
    $html = '<h3 style="font-family:Arial,sans-serif;color:#0b2a5b;margin:24px 0 8px">' . h($titulo) . '</h3>'
        . '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;width:100%;max-width:680px">';
    foreach ($linhas as $k => $v) {
        $html .= '<tr><td style="border-bottom:1px solid #e2e8f0;color:#5b6b82;width:38%;vertical-align:top">' . h($k)
            . '</td><td style="border-bottom:1px solid #e2e8f0;color:#0f1b2d">' . nl2br(h((string) $v)) . '</td></tr>';
    }
    return $html . '</table>';
}
function pessoa(array $p): array
{
    $end = trim(($p['logradouro'] ?? '') . ', ' . ($p['numero'] ?? '') . (empty($p['complemento']) ? '' : ' – ' . $p['complemento'])
        . "\n" . ($p['bairro'] ?? '') . ' – ' . ($p['cidade'] ?? '') . '/' . ($p['uf'] ?? '') . ' – CEP ' . ($p['cep'] ?? ''));
    $br = fn($iso) => !empty($iso) ? implode('/', array_reverse(explode('-', $iso))) : '';
    $rg = trim(($p['rg'] ?? '') . ' ' . ($p['rgOrgao'] ?? '')) . (!empty($p['rgData']) ? ' – expedido em ' . $br($p['rgData']) : '');
    $l = ['Nome' => $p['nome'] ?? '', 'CPF' => $p['cpf'] ?? '', 'RG' => $rg, 'Nascimento' => $br($p['nascimento'] ?? '')];
    if (isset($p['mae'])) $l['Filiação'] = 'Pai: ' . (($p['pai'] ?? '') !== '' ? $p['pai'] : 'não informado') . "\nMãe: " . $p['mae'];
    if (!empty($p['escola'])) $l['Ensino médio'] = $p['escola'] . ' – ' . ($p['escolaCidade'] ?? '') . '/' . ($p['escolaUf'] ?? '') . ' – conclusão: ' . ($p['anoConclusao'] ?? '');
    if (!empty($p['parentesco'])) $l['Parentesco'] = $p['parentesco'];
    return $l + ['E-mail' => $p['email'] ?? '', 'Telefone' => $p['telefone'] ?? '', 'Endereço' => $end];
}

$c = $dados['curso'];
$total = (float) $c['parcelas'] * (float) $c['valorParcela'];
$brl = fn($v) => 'R$ ' . number_format((float) $v, 2, ',', '.');
$fmt = fn($iso) => $iso ? date('d/m/Y H:i:s', strtotime($iso)) : '—';

$corpo = '<div style="font-family:Arial,sans-serif;color:#0f1b2d">'
    . '<div style="background:#0b2a5b;color:#fff;padding:18px 22px;border-radius:8px 8px 0 0"><strong style="font-size:18px">Nova matrícula assinada</strong><br>'
    . 'Protocolo ' . h($protocolo) . '</div>'
    . tabela('Curso e pagamento', [
        'Curso' => $c['nome'], 'Polo' => $dados['polo'] ?? '', 'Carga horária' => $c['cargaHoraria'] . ' horas',
        'Valor' => $c['parcelas'] . 'x de ' . $brl($c['valorParcela']) . ' (total ' . $brl($total) . ')',
        'Forma de pagamento' => $dados['pagamento']['forma'] ?? '', 'Dia de vencimento' => $dados['pagamento']['vencimento'] ?? '',
    ])
    . tabela('Aluno(a)', pessoa($aluno))
    . ($resp ? tabela('Responsável legal (assinou o contrato)', pessoa($resp)) : '')
    . tabela('Registro da assinatura eletrônica', [
        'Data e hora (servidor)' => $fmt($dataHora), 'IP no início' => $ipInicio, 'IP no envio' => $ip,
        'Navegador / dispositivo' => $evid['userAgent'] ?? '', 'Fuso do aparelho' => $evid['fusoHorario'] ?? '',
        'Leitura até o final' => $fmt($evid['leituraConcluida'] ?? ''), 'Aceite do contrato' => $fmt($evid['aceite_contrato'] ?? ''),
        'Uso de imagem (facultativo)' => isset($evid['imagem']['escolha']) ? (($evid['imagem']['escolha'] === 'autorizo' ? 'AUTORIZO' : 'NÃO AUTORIZO') . ' – ' . $fmt($evid['imagem']['em'] ?? '')) : 'Não marcado (vale como não autorização)', 'Declaração de veracidade' => $fmt($evid['aceite_dados'] ?? ''),
        'SHA-256 do texto do contrato' => $hashContrato, 'SHA-256 do PDF' => $hashPdf, 'Recebido em' => $fmt($recebidoEm),
    ])
    . '<p style="font-size:13px;color:#5b6b82;margin-top:24px">O contrato assinado está em anexo. Guarde este e-mail: ele faz parte da prova da assinatura.</p></div>';

/* ---------- Envio ---------- */
function novo_email(array $cfg): PHPMailer
{
    $m = new PHPMailer(true);
    $m->CharSet = 'UTF-8';
    if (!empty($cfg['smtp']['host']) && !empty($cfg['smtp']['senha'])) {
        $m->isSMTP();
        $m->Host = $cfg['smtp']['host'];
        $m->Port = (int) $cfg['smtp']['porta'];
        $m->SMTPAuth = true;
        $m->Username = $cfg['smtp']['usuario'];
        $m->Password = $cfg['smtp']['senha'];
        $seg = $cfg['smtp']['seguranca'];
        if ($seg === 'ssl') $m->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        elseif ($seg === 'tls') $m->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        else { $m->SMTPSecure = ''; $m->SMTPAutoTLS = false; }
    } else {
        $m->isMail(); // sem SMTP configurado: usa o envio padrão da hospedagem
    }
    $m->setFrom($cfg['remetente_email'], $cfg['remetente_nome']);
    $m->isHTML(true);
    return $m;
}

// Cópia de segurança no servidor
if ($cfg['salvar_copia']) {
    $dir = __DIR__ . '/registros';
    if (!is_dir($dir)) @mkdir($dir, 0750, true);
    @file_put_contents("$dir/$protocolo.pdf", $pdfBin);
    @file_put_contents("$dir/$protocolo.json", json_encode([
        'protocolo' => $protocolo, 'dataHora' => $dataHora, 'recebidoEm' => $recebidoEm, 'ipInicio' => $ipInicio, 'ipEnvio' => $ip,
        'dados' => $dados, 'evidencias' => $evid, 'hashContrato' => $hashContrato, 'hashPdf' => $hashPdf, 'contratoTexto' => $texto,
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}

try {
    $m = novo_email($cfg);
    foreach ((array) $cfg['email_destino'] as $d) $m->addAddress($d);
    $m->addReplyTo($sign['email'], $sign['nome']);
    $m->Subject = "Nova matrícula: {$aluno['nome']} – {$c['nome']} ($protocolo)";
    $m->Body = $corpo;
    $m->AltBody = strip_tags(str_replace(['</tr>', '</h3>'], ["\n", "\n"], $corpo));
    $m->addStringAttachment($pdfBin, $pdfNome, 'base64', 'application/pdf');
    if ($assBin) $m->addStringAttachment($assBin, "assinatura-$protocolo.png", 'base64', 'image/png');
    $m->send();
} catch (MailException $e) {
    error_log('Superar – falha ao enviar e-mail da escola: ' . $e->getMessage());
    if (!$cfg['salvar_copia']) responder(500, ['ok' => false, 'erro' => 'Não foi possível enviar o e-mail. Tente novamente.']);
}

if ($cfg['enviar_copia_aluno']) {
    try {
        $m = novo_email($cfg);
        $m->addAddress($sign['email'], $sign['nome']);
        if ($resp && filter_var($aluno['email'] ?? '', FILTER_VALIDATE_EMAIL) && strcasecmp($aluno['email'], $resp['email']) !== 0) {
            $m->addCC($aluno['email'], $aluno['nome']);
        }
        $m->addReplyTo(((array) $cfg['email_destino'])[0] ?? $cfg['remetente_email']);
        $m->Subject = "Seu contrato com a Superar – protocolo $protocolo";
        $primeiro = h(explode(' ', trim($sign['nome']))[0]);
        $m->Body = '<div style="font-family:Arial,sans-serif;color:#0f1b2d;font-size:15px;line-height:1.6;max-width:600px">'
            . "<p>Olá, $primeiro!</p>"
            . '<p>Recebemos a matrícula no curso <strong>' . h($c['nome']) . '</strong>. O contrato assinado está em anexo.</p>'
            . '<p><strong>Protocolo:</strong> ' . h($protocolo) . '<br><strong>Assinado em:</strong> ' . h($fmt($dataHora)) . '</p>'
            . '<p>Nossa equipe vai entrar em contato com os próximos passos e o acesso ao Ambiente Virtual de Aprendizagem.</p>'
            . '<p style="background:#f3fbff;border-left:4px solid #19a7e0;padding:10px 14px">Você pode desistir da matrícula em até <strong>7 dias</strong> a partir da assinatura, sem nenhum custo '
            . '(Código de Defesa do Consumidor, art. 49). Basta responder a este e-mail.</p>'
            . '<p style="font-size:12px;color:#5b6b82">Código de verificação do contrato (SHA-256): ' . h($hashContrato) . '</p>'
            . '<p>Superar – Cursos e Treinamentos</p></div>';
        $m->AltBody = "Recebemos sua matrícula no curso {$c['nome']}. Protocolo $protocolo. O contrato assinado está em anexo. "
            . "Você pode desistir em até 7 dias sem custo (CDC, art. 49), respondendo a este e-mail.";
        $m->addStringAttachment($pdfBin, $pdfNome, 'base64', 'application/pdf');
        $m->send();
    } catch (MailException $e) {
        error_log('Superar – falha ao enviar cópia ao aluno: ' . $e->getMessage());
    }
}

responder(200, ['ok' => true, 'protocolo' => $protocolo, 'hashPdf' => $hashPdf]);
