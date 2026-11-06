# Site da Superar – como publicar e editar

## Páginas
| Arquivo | O que é |
|---|---|
| `index.html` | Home |
| `cursos.html` | Lista dos 22 cursos, com filtro por área e busca |
| `curso.html?c=<curso>` | Página de cada curso (gerada a partir de `js/cursos-data.js`) |
| `inscricao.html` | Ficha de inscrição → contrato preenchido → assinatura na tela → envio |
| `privacidade.html` | Política de Privacidade (LGPD) |

## Antes de publicar (obrigatório)
1. Se baixou o site do GitHub, copie `api/config.exemplo.php` para `api/config.php` (o arquivo real não fica no GitHub, porque guarda senha e chave secreta). Abra `api/config.php` e preencha:
   - `email_destino`: o e-mail que vai receber as inscrições;
   - `smtp`: dados de uma conta de e-mail da hospedagem (ex.: `matriculas@superargct.com.br`) – servidor, porta, usuário e senha;
   - `remetente_email`: o mesmo e-mail do usuário SMTP.
2. O site **precisa estar em HTTPS** (o cálculo do código de verificação do contrato só funciona em conexão segura).
3. A hospedagem precisa ter **PHP 7.4 ou superior** (a atual, com WordPress, já tem).

## Como publicar
1. Recomendado: envie tudo primeiro para uma subpasta (ex.: `superargct.com.br/novo/`) e faça uma inscrição de teste.
2. Confira se o e-mail chegou com o PDF anexo e se a cópia chegou ao e-mail do aluno.
3. Depois, substitua o site antigo pelo conteúdo desta pasta.

A pasta `api/registros/` guarda uma cópia de cada inscrição (JSON + PDF), protegida contra acesso pela internet. Se algum e-mail falhar, a inscrição não se perde.

## Como editar
- **Preço, texto ou grade de um curso:** `js/cursos-data.js` (`parcelas` e `valorParcela` definem o preço).
- **Endereço, CNPJ, WhatsApp, e-mail da escola:** início de `js/main.js` (objeto `ESCOLA`). Esses dados aparecem no site e no contrato.
- **Contrato:** `js/contrato.js`. O texto das cláusulas foi copiado do arquivo Word do contrato e não deve ser editado à mão; se o contrato mudar, o texto precisa ser extraído de novo. Os campos do Anexo I preenchidos pela escola (forma de oferta, requisitos, prazo do diploma, condição da matrícula, descontos, outro canal) ficam no objeto `CONTRATO.anexo`, logo após o texto das cláusulas. As datas do curso e do AVA são calculadas sozinhas: data da assinatura + `duracaoMeses` do curso (em `js/cursos-data.js`). A matrícula é sempre o valor de uma parcela, já incluída no total.
- **Formas de pagamento e dias de vencimento:** `inscricao.html`, etapa 1.

## Testar no computador
```bash
python -m http.server 8080 --directory site
```
Abra http://localhost:8080. Sem PHP, a inscrição funciona em "modo de teste": gera o PDF, mas não envia e-mail.
