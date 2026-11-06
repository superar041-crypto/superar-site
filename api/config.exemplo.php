<?php
/*
 * CONFIGURAÇÃO DO ENVIO DAS INSCRIÇÕES
 * MODELO: copie este arquivo para config.php e preencha os campos marcados com <<< ALTERAR.
 * O config.php real não vai para o GitHub (tem senha e chave secreta).
 */
return [
    // Para onde vão as inscrições (pode ter mais de um e-mail)
    'email_destino' => ['contato@superar.com'],              // <<< ALTERAR para o seu e-mail

    // Conta de e-mail que ENVIA as mensagens (crie uma no painel da hospedagem, ex.: matriculas@superargct.com.br)
    'smtp' => [
        'host'     => 'mail.superargct.com.br',                     // <<< ALTERAR (servidor SMTP da hospedagem)
        'porta'    => 465,                                          // 465 (SSL) ou 587 (TLS)
        'seguranca'=> 'ssl',                                        // 'ssl' para 465, 'tls' para 587, '' sem criptografia
        'usuario'  => 'matriculas@superargct.com.br',               // <<< ALTERAR
        'senha'    => '',                                           // <<< ALTERAR (senha da conta de e-mail)
    ],
    'remetente_email' => 'matriculas@superargct.com.br',            // <<< ALTERAR (mesmo e-mail do usuário SMTP)
    'remetente_nome'  => 'Superar – Matrículas',

    // Enviar cópia do contrato assinado para o aluno/responsável (Decreto 7.962/2013, art. 4º, IV)
    'enviar_copia_aluno' => true,

    // Guardar cópia de cada inscrição (JSON + PDF) na pasta api/registros, protegida contra acesso externo.
    // Recomendado: se um e-mail falhar, a inscrição não se perde.
    'salvar_copia' => true,

    // Chave secreta usada para validar o protocolo. Não compartilhe.
    'segredo' => 'TROQUE-POR-UMA-CHAVE-LONGA-E-ALEATORIA',

    // Se o site ficar atrás de Cloudflare/proxy, mude para true para ler o IP real do aluno.
    'confiar_proxy' => false,

    'fuso' => 'America/Maceio',
];
