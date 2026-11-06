/*
 * Contrato de Prestação de Serviços Educacionais – Educação Profissional Técnica de Nível Médio.
 * O texto das cláusulas (DOC.corpo, abaixo) foi copiado do arquivo
 * "CONTRATO DE PRESTAÇÃO DE SERVIÇOS EDUCACIONAIS.docx" sem alterações,
 * exceto: o e-mail institucional vem de ESCOLA.email (js/main.js).
 *
 * O que muda de um contrato para outro são só os dados que o cliente cadastra:
 * aluno, responsável legal, curso escolhido, forma de pagamento, vencimento,
 * autorização de imagem, cidade e data da assinatura.
 *
 * Blocos: titulo | subtitulo | h | p | escolha | assinaturas | local | quebra | secao | tabela
 * O mesmo array gera a tela, o PDF e o texto usado no código de verificação (hash).
 */
(function () {
  const DOC = {
  "corpo": [
    {
      "t": "titulo",
      "x": "CONTRATO DE PRESTAÇÃO DE SERVIÇOS EDUCACIONAIS"
    },
    {
      "t": "subtitulo",
      "x": "EDUCAÇÃO PROFISSIONAL TÉCNICA DE NÍVEL MÉDIO"
    },
    {
      "t": "p",
      "x": "Pelo presente instrumento particular, SUPERAR – CURSOS E TREINAMENTOS, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 33.543.032/0001-92, com sede na Rua Bráulio Montenegro, nº 58, bairro Vila Maria, Palmeira dos Índios/AL, doravante denominada CONTRATADA, e o(a) aluno(a) identificado(a) na ficha de matrícula e no Quadro-Resumo da Contratação, representado(a) ou assistido(a) por responsável legal quando necessário, doravante denominado(a) CONTRATANTE, ajustam a prestação de serviços educacionais mediante as cláusulas e condições seguintes."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 1 – OBJETO E CARACTERÍSTICAS DA OFERTA"
    },
    {
      "t": "p",
      "x": "1.1. Constitui objeto deste contrato a prestação, pela CONTRATADA, de serviços educacionais no âmbito da Educação Profissional Técnica de Nível Médio, correspondentes ao curso identificado no Quadro-Resumo da Contratação (Anexo I), compreendendo os componentes curriculares, os conteúdos programáticos, a carga horária, as atividades acadêmicas, os recursos de aprendizagem e as demais condições estabelecidas no plano de curso e na oferta aceita pelo CONTRATANTE no ato da matrícula."
    },
    {
      "t": "p",
      "x": "1.2. O curso será desenvolvido na modalidade de Educação a Distância (EaD), por meio do Ambiente Virtual de Aprendizagem (AVA) disponibilizado pela CONTRATADA, compreendendo as avaliações e demais atividades acadêmicas previstas no plano de curso aprovado, inclusive atividades presenciais obrigatórias, práticas profissionais e estágios supervisionados, quando aplicáveis, observadas as exigências regulamentares e as normas do sistema de ensino competente."
    },
    {
      "t": "p",
      "x": "1.3. A oferta observará o ato autorizativo do sistema de ensino competente, as diretrizes educacionais pertinentes e o plano de curso aprovado. O Anexo I individualiza as condições essenciais da contratação, integrando este instrumento para todos os fins, observadas as disposições do plano de curso e da regulamentação educacional pertinente."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 2 – MATRÍCULA E DOCUMENTAÇÃO"
    },
    {
      "t": "p",
      "x": "2.1. A matrícula dependerá do preenchimento da ficha de inscrição, do atendimento aos requisitos de ingresso, da apresentação dos documentos exigidos e do aceite das condições contratuais, além da confirmação de vaga na oferta escolhida. As informações fornecidas deverão ser verdadeiras e mantidas atualizadas pelo CONTRATANTE."
    },
    {
      "t": "p",
      "x": "2.2. A documentação exigida será informada no procedimento de matrícula e poderá abranger identificação, CPF, escolaridade e outros comprovantes necessários ao ingresso e à diplomação. Eventual pendência documental será comunicada ao aluno para regularização, observadas as exigências legais pertinentes."
    },
    {
      "t": "p",
      "x": "2.3. Na matrícula de menor de idade, será exigida a participação de seu responsável legal, observadas as regras de representação ou assistência aplicáveis. Havendo responsável financeiro distinto do aluno ou de seu responsável legal, aquele deverá ser devidamente identificado na contratação e manifestar concordância expressa com as obrigações financeiras assumidas, mediante assinatura física ou aceite eletrônico válido."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 3 – AVA, MÓDULOS E PRAZOS ACADÊMICOS"
    },
    {
      "t": "p",
      "x": "3.1. O acesso ao AVA será disponibilizado pela CONTRATADA mediante identificação e senha pessoais e intransferíveis, pelo endereço www.superargct.com.br ou por outro canal institucional informado. O CONTRATANTE deverá dispor de equipamento e conexão compatíveis e manter o sigilo de suas credenciais."
    },
    {
      "t": "p",
      "x": "3.2. As disciplinas, os materiais e as avaliações serão organizados em módulos de liberação progressiva, com datas próprias de abertura e conclusão, conforme a carga horária e a sequência curricular de cada curso. Cada módulo poderá compreender atividades de aprendizagem e avaliações finais, cujos prazos serão informados no AVA ou nos comunicados acadêmicos."
    },
    {
      "t": "p",
      "x": "3.3. Compete ao CONTRATANTE acompanhar os prazos e realizar as atividades no período estabelecido. Pendências decorrentes de módulos ou avaliações não concluídos poderão ser objeto de recuperação, reabertura ou regularização, mediante requerimento e análise pedagógica, segundo a disponibilidade de oferta e as normas do curso."
    },
    {
      "t": "p",
      "x": "3.4. O acesso regular ao AVA observará o período indicado no Anexo I. A necessidade de continuidade após esse prazo será analisada individualmente e, quando autorizada, terá condições e período adicional formalizados, não constituindo direito de acesso indeterminado. Falhas comprovadas dos sistemas institucionais que prejudiquem atividades ou avaliações ensejarão medidas de regularização e adequação dos prazos afetados."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 4 – ORGANIZAÇÃO PEDAGÓGICA E ATIVIDADES PRESENCIAIS"
    },
    {
      "t": "p",
      "x": "4.1. A CONTRATADA organizará a execução do curso conforme seu plano pedagógico, podendo ajustar calendários, distribuição de disciplinas, horários, profissionais e recursos didáticos, desde que preservadas a carga horária, a habilitação contratada e as exigências regulamentares."
    },
    {
      "t": "p",
      "x": "4.2. As atividades presenciais ou práticas obrigatórias, quando integrantes da formação, terão locais, datas, horários e orientações comunicados com antecedência adequada, considerando a composição de turmas e a disponibilidade da infraestrutura necessária. Sua execução observará os percentuais presenciais e demais requisitos estabelecidos nas normas do sistema de ensino competente."
    },
    {
      "t": "p",
      "x": "4.3. O CONTRATANTE deverá cumprir os componentes práticos, os estágios e as atividades presenciais obrigatórias previstos no plano de curso. Despesas individuais indispensáveis à participação, quando não abrangidas pelo preço contratado, deverão ser informadas previamente na oferta."
    },
    {
      "t": "p",
      "x": "4.4. A CONTRATADA poderá oferecer atividades presenciais complementares de caráter facultativo, conforme a demanda, a formação de turmas e a disponibilidade institucional. A participação nessas atividades será opcional e sua realização não constituirá condição obrigatória para a conclusão do curso, desde que não integrem os requisitos acadêmicos e regulamentares da formação."
    },
    {
      "t": "p",
      "x": "4.5. Quando previsto estágio supervisionado obrigatório, sua realização observará o plano de curso e a legislação específica, cabendo à instituição educacional responsável pela formação assegurar os procedimentos acadêmicos, a orientação e o acompanhamento necessários, inclusive a formalização dos instrumentos exigidos e o cumprimento das obrigações legais relativas à supervisão e ao seguro. O CONTRATANTE deverá observar as condições e orientações regularmente estabelecidas para participação e integralização do estágio."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 5 – DIREITOS E OBRIGAÇÕES DAS PARTES"
    },
    {
      "t": "p",
      "x": "5.1. A CONTRATADA obriga-se a disponibilizar os conteúdos e atividades previstos no plano de curso, manter orientação e suporte acadêmico compatíveis com a formação, informar os critérios de avaliação e conservar os registros necessários ao acompanhamento e à certificação do aluno."
    },
    {
      "t": "p",
      "x": "5.2. A CONTRATADA organizará módulos, cronogramas, atividades presenciais, práticas e demais compromissos obrigatórios, comunicando-os com antecedência adequada. Poderá ajustar a programação e a composição das turmas, desde que preservadas a habilitação, a carga horária, as condições essenciais contratadas e os requisitos regulamentares."
    },
    {
      "t": "p",
      "x": "5.3. São direitos do CONTRATANTE receber os serviços contratados, conhecer os critérios de avaliação, consultar sua situação acadêmica e financeira, solicitar esclarecimentos e requerer a apuração de falhas pelos canais institucionais."
    },
    {
      "t": "p",
      "x": "5.4. O CONTRATANTE deverá fornecer informações e documentos autênticos, manter seus dados atualizados, acompanhar os avisos e prazos do AVA, participar das atividades e avaliações obrigatórias, observar as orientações acadêmicas, as regras de convivência e segurança e cumprir as obrigações financeiras legitimamente assumidas."
    },
    {
      "t": "p",
      "x": "5.5. É vedada a fraude acadêmica, a utilização indevida de identidade ou conta de terceiros, o compartilhamento não autorizado de credenciais ou materiais e qualquer conduta que comprometa a integridade das avaliações, a segurança dos sistemas ou o respeito à comunidade educacional."
    },
    {
      "t": "p",
      "x": "5.6. As partes atuarão com boa-fé, respeito e cooperação. Dificuldades, ausências e ocorrências deverão ser comunicadas tempestivamente para análise de justificativa, recuperação ou regularização, conforme as possibilidades pedagógicas e as disposições deste contrato."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 6 – AVALIAÇÃO, FREQUÊNCIA E REGULARIZAÇÃO"
    },
    {
      "t": "p",
      "x": "6.1. A avaliação observará os critérios de aprendizagem, aproveitamento e aprovação previstos no plano de curso e informados ao CONTRATANTE, podendo compreender provas, atividades no AVA, trabalhos e práticas profissionais. A aprovação exigirá o cumprimento dos requisitos de cada componente curricular."
    },
    {
      "t": "p",
      "x": "6.2. A participação e a frequência serão apuradas de acordo com a modalidade EAD e com as exigências específicas das atividades presenciais, práticas e de estágio. A justificativa de ausência não dispensa, por si só, o cumprimento da carga horária e das atividades obrigatórias."
    },
    {
      "t": "p",
      "x": "6.3. Os resultados e registros de desempenho serão disponibilizados pelo AVA ou pelos canais institucionais. O CONTRATANTE poderá solicitar esclarecimentos e revisão fundamentada de resultados, conforme os critérios pedagógicos e os procedimentos da formação."
    },
    {
      "t": "p",
      "x": "6.4. A falta de realização, a insuficiência de aproveitamento ou a ausência em atividade obrigatória poderão gerar pendência acadêmica. Recuperações, reposições, segundas oportunidades e regularizações dependerão de requerimento e análise pedagógica, respeitados o plano de curso, a disponibilidade e os prazos institucionais, sem aprovação automática pelo decurso do tempo."
    },
    {
      "t": "p",
      "x": "6.5. O aproveitamento de estudos ou experiências anteriores dependerá de requerimento, documentação e análise de equivalência de competências, carga horária e componentes curriculares, inclusive avaliação específica quando legalmente cabível."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 7 – PREÇO, PARCELAMENTO E COMPROVAÇÃO DE PAGAMENTO"
    },
    {
      "t": "p",
      "x": "7.1. O preço total do curso, eventual valor de matrícula, descontos, quantidade de parcelas, vencimentos e formas de pagamento constarão do Anexo I, que individualiza as condições financeiras aceitas pelo CONTRATANTE."
    },
    {
      "t": "p",
      "x": "7.2. O parcelamento é forma de pagamento do preço contratado, não se confundindo com mensalidade por uso do AVA ou com a duração de cada módulo. A conclusão antecipada ou a maior demora individual não altera automaticamente o preço pactuado, ressalvados o cancelamento, o trancamento e os ajustes formalizados."
    },
    {
      "t": "p",
      "x": "7.3. A quitação ocorrerá com a confirmação do recebimento pela CONTRATADA ou pelo agente de pagamento. Havendo divergência, o CONTRATANTE poderá apresentar comprovante para conferência. Descontos e condições especiais observarão as regras previamente informadas e aceitas."
    },
    {
      "t": "p",
      "x": "7.4. Os procedimentos de cancelamento e trancamento de matrícula observarão as disposições das Cláusulas 11 e 12 deste contrato, inclusive quanto aos efeitos financeiros e à apuração das obrigações legitimamente constituídas durante a prestação dos serviços educacionais."
    },
    {
      "t": "p",
      "x": "7.5. Segundas vias e outros serviços administrativos extraordinários, facultativos e não compreendidos no preço do curso somente poderão ser cobrados quando legalmente admitidos e mediante orçamento individualizado, com descrição do serviço e valor informado antes da execução, aceito expressamente pelo CONTRATANTE. A solicitação não autoriza cobrança automática nem alteração unilateral das condições contratadas. Serviços obrigatórios, correções de erro institucional e primeiras vias abrangidas pelo preço não gerarão taxa adicional."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 8 – ATRASO E COBRANÇA"
    },
    {
      "t": "p",
      "x": "8.1. O atraso no pagamento sujeitará a parcela vencida à multa moratória de 2% (dois por cento) e a juros simples de mora de 1% (um por cento) ao mês, calculados proporcionalmente aos dias de atraso, observados os limites legais."
    },
    {
      "t": "p",
      "x": "8.2. A CONTRATADA poderá encaminhar avisos de cobrança, apresentar demonstrativos de valores e propor negociação mediante acordo registrado. Persistindo o débito, poderão ser adotadas medidas extrajudiciais ou judiciais de cobrança e, quando legalmente cabível, comunicação aos órgãos de proteção ao crédito, observados os direitos do consumidor."
    },
    {
      "t": "p",
      "x": "8.3. A inadimplência será tratada pelos meios legais de cobrança, resguardados os direitos acadêmicos do estudante, especialmente quanto a avaliações e documentação escolar. A renovação da matrícula ou celebração de novo vínculo observará as condições legais aplicáveis."
    },
    {
      "t": "p",
      "x": "8.4. A ausência às aulas, a inatividade no AVA ou a interrupção informal dos estudos não constituirão pedido de cancelamento ou trancamento nem extinguirão, por si, obrigações financeiras regularmente constituídas."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 9 – DURAÇÃO, ACESSO E CONCLUSÃO"
    },
    {
      "t": "p",
      "x": "9.1. As datas previstas de início e término da oferta, a carga horária e o período regular de acesso ao AVA serão os informados no Anexo I, observados os cronogramas específicos de cada módulo e componente curricular."
    },
    {
      "t": "p",
      "x": "9.2. A conclusão acadêmica dependerá da aprovação nas disciplinas, da integralização da carga horária e da realização das avaliações, práticas e estágios obrigatórios, quando aplicáveis. O decurso do prazo regular, a visualização de conteúdos ou o pagamento integral não equivalem à conclusão do curso."
    },
    {
      "t": "p",
      "x": "9.3. O CONTRATANTE com pendências poderá solicitar continuidade ou regularização acadêmica. A eventual prorrogação de acesso, reintegração a módulos ou participação em nova oferta dependerá da compatibilidade curricular, do prazo de integralização, da disponibilidade e de condições previamente formalizadas. Valores adicionais somente poderão ser exigidos por serviços novos, quando legalmente admitidos e expressamente aceitos."
    },
    {
      "t": "p",
      "x": "9.4. O encerramento do período regular de oferta não elimina os registros dos componentes concluídos nem as obrigações legais e financeiras legitimamente existentes, observados os procedimentos de cancelamento, trancamento e documentação escolar previstos neste instrumento."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 10 – REMANEJAMENTO E IMPOSSIBILIDADE DE OFERTA"
    },
    {
      "t": "p",
      "x": "10.1. A abertura de turmas e a programação de atividades presenciais ou práticas poderão depender das condições de composição da turma e de disponibilidade de profissionais, espaços e recursos, observada a condição mínima de abertura quando expressamente informada no Anexo I."
    },
    {
      "t": "p",
      "x": "10.2. A CONTRATADA poderá reagendar atividades ou propor remanejamento para turma equivalente, preservados a habilitação, a carga horária e os requisitos acadêmicos. Mudança substancial de curso, modalidade, localidade de comparecimento obrigatório ou outras condições essenciais dependerá da concordância do CONTRATANTE."
    },
    {
      "t": "p",
      "x": "10.3. Não sendo possível prestar os serviços nas condições contratadas, a CONTRATADA oferecerá alternativa compatível, mediante concordância do CONTRATANTE, ou providenciará o encerramento do vínculo, sem ônus rescisório ao aluno, assegurada a restituição dos valores referentes aos serviços não prestados. Caso a oferta não tenha sido iniciada, haverá devolução integral dos valores pagos."
    },
    {
      "t": "p",
      "x": "10.4. Alterações decorrentes de iniciativa institucional ou circunstâncias excepcionais serão comunicadas, com readequação proporcional dos prazos para cumprimento das atividades afetadas, sem cobrança adicional pelos serviços já compreendidos no preço contratado."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 11 – ARREPENDIMENTO, DESISTÊNCIA E CANCELAMENTO"
    },
    {
      "t": "p",
      "x": "11.1. Nas contratações realizadas fora do estabelecimento comercial, inclusive pela internet, o CONTRATANTE poderá exercer o direito de arrependimento no prazo legal de 7 (sete) dias, contado da assinatura ou do recebimento do serviço, conforme aplicável, por meio do canal da contratação ou do e-mail contato@superargct.com.br, com devolução integral dos valores pagos e sem multa."
    },
    {
      "t": "p",
      "x": "11.2. Fora da hipótese de arrependimento, o CONTRATANTE poderá solicitar cancelamento definitivo da matrícula a qualquer tempo, por requerimento escrito ou eletrônico identificável. A data comprovada de recebimento produzirá efeitos para a apuração acadêmica e financeira, ainda que existam pendências."
    },
    {
      "t": "p",
      "x": "11.3. No cancelamento solicitado antes do início da prestação dos serviços educacionais, serão restituídos integralmente os valores eventualmente pagos pelo CONTRATANTE, observados os prazos legais aplicáveis."
    },
    {
      "t": "p",
      "x": "11.4. No cancelamento solicitado após o início da prestação dos serviços educacionais, a apuração financeira considerará os serviços efetivamente prestados até a data comprovada de recebimento do requerimento, observados os módulos ofertados, a carga horária desenvolvida, as atividades acadêmicas realizadas e os registros institucionais correspondentes. Serão considerados os pagamentos efetuados e os valores eventualmente devidos ou sujeitos à restituição, mediante demonstrativo fundamentado, observados os princípios da razoabilidade, proporcionalidade e as disposições legais aplicáveis."
    },
    {
      "t": "p",
      "x": "11.5. As parcelas vincendas serão ajustadas conforme a apuração financeira decorrente do cancelamento, permanecendo exigíveis apenas os valores legitimamente correspondentes aos serviços prestados. Ficam vedadas cobranças integrais automáticas de serviços não prestados ou retenções desproporcionais, assegurada a restituição de eventuais valores pagos a maior."
    },
    {
      "t": "p",
      "x": "11.6. A CONTRATADA confirmará o recebimento do requerimento, registrará a data e apresentará demonstrativo dos valores devidos ou a restituir, providenciando a devolução e a regularização das cobranças futuras nos prazos legalmente aplicáveis. Eventuais débitos anteriores legítimos não impedirão o processamento do cancelamento."
    },
    {
      "t": "p",
      "x": "11.7. A inatividade no AVA, a ausência às aulas ou a interrupção informal de frequência não constituem pedido de cancelamento. A rescisão preservará os registros acadêmicos dos componentes efetivamente concluídos."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 12 – TRANCAMENTO, RETORNO E TRANSFERÊNCIA"
    },
    {
      "t": "p",
      "x": "12.1. O trancamento constitui suspensão temporária do vínculo acadêmico, requerida por escrito ou meio eletrônico identificável e sujeita à análise conforme a organização do curso e os prazos de integralização. A CONTRATADA registrará o pedido e, se deferido, informará o período autorizado, as pendências e as condições de retorno."
    },
    {
      "t": "p",
      "x": "12.2. O requerimento de trancamento e sua efetivação, quando deferido, não estarão sujeitos à cobrança de taxa administrativa. Permanecerão exigíveis, entretanto, os valores legitimamente devidos pelos serviços educacionais prestados até a data de início dos efeitos do trancamento, observadas as condições financeiras estabelecidas neste contrato."
    },
    {
      "t": "p",
      "x": "12.3. Durante o trancamento deferido, ficará suspensa a exigência de participação nas atividades abrangidas. Os efeitos financeiros sobre parcelas e períodos não usufruídos serão apurados e informados por escrito, sem cancelamento automático de valores legitimamente relativos a serviços já prestados."
    },
    {
      "t": "p",
      "x": "12.4. O retorno dependerá de solicitação ou confirmação no prazo comunicado, da compatibilidade curricular e da disponibilidade de turma ou módulo. Não será assegurado o mesmo calendário, turma ou equipe, mas serão preservados os componentes regularmente concluídos."
    },
    {
      "t": "p",
      "x": "12.5. Se houver alterações curriculares durante o afastamento, o retorno poderá exigir adaptações ou complementação de conteúdos e cargas horárias indispensáveis, mediante análise pedagógica. Encerrado o período de trancamento sem manifestação, a CONTRATADA comunicará as alternativas de retorno, prorrogação ou encerramento, sem presumir automaticamente desistência ou autorizar cobranças futuras não contratadas."
    },
    {
      "t": "p",
      "x": "12.6. Transferências de turma ou curso serão analisadas conforme vagas, requisitos de ingresso e equivalência curricular; alterações de curso ou preço dependerão de concordância e formalização específicas. O aproveitamento de estudos observará os procedimentos acadêmicos aplicáveis."
    },
    {
      "t": "p",
      "x": "12.7. Após cancelamento definitivo, eventual retorno dependerá de nova contratação, admitida a análise de aproveitamento dos componentes já integralizados."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 13 – DIPLOMA E DOCUMENTAÇÃO ACADÊMICA"
    },
    {
      "t": "p",
      "x": "13.1. Concluídos os componentes curriculares, integralizada a carga horária e atendidos os requisitos legais e acadêmicos da habilitação profissional, inclusive a comprovação da conclusão do Ensino Médio, independentemente da forma de oferta do curso, o CONTRATANTE terá direito à expedição do diploma de Técnico de Nível Médio pela instituição educacional legalmente responsável, devidamente credenciada e com o curso autorizado, observado o prazo informado no Anexo I e as normas do sistema de ensino competente."
    },
    {
      "t": "p",
      "x": "13.2. O diploma será expedido e registrado pela instituição educacional legalmente responsável pela oferta, devidamente credenciada e autorizada, observadas as normas do sistema de ensino competente, o cadastramento no Sistema Nacional de Informações da Educação Profissional e Tecnológica (SISTEC) e a inserção do respectivo código autenticador, conforme a regulamentação vigente. Quando a instituição responsável pela diplomação for distinta da CONTRATADA, sua identificação deverá ser previamente informada ao CONTRATANTE e registrada no Anexo I. As certificações intermediárias dependerão de previsão no plano de curso aprovado."
    },
    {
      "t": "p",
      "x": "13.3. A CONTRATADA manterá os registros escolares previstos na legislação. O aluno poderá solicitar histórico, declarações e demais documentos pelos canais institucionais, independentemente da existência de débitos, observadas as normas aplicáveis e os prazos necessários à emissão."
    },
    {
      "t": "p",
      "x": "13.4. A primeira via do diploma e dos documentos obrigatórios de conclusão integra o preço contratado, sem taxa adicional. A segunda via, apresentações especiais facultativas ou outros serviços documentais extraordinários somente serão cobrados se legalmente permitidos, após informação e aceite específicos do preço, nos termos do item 7.5. Não haverá cobrança por correção de erro imputável à instituição. A diplomação não assegura emprego, aprovação em concurso ou registro automático em conselho profissional."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 14 – PROPRIEDADE INTELECTUAL, DADOS E IMAGEM"
    },
    {
      "t": "p",
      "x": "14.1. Os conteúdos, videoaulas, apostilas, avaliações, marcas e demais materiais disponibilizados pela CONTRATADA ou por titulares autorizados destinam-se ao uso pessoal e educacional do CONTRATANTE, sendo vedada sua reprodução, distribuição ou comercialização não autorizada, ressalvados os usos permitidos por lei."
    },
    {
      "t": "p",
      "x": "14.2. A CONTRATADA tratará os dados pessoais necessários à matrícula, execução dos serviços, gestão acadêmica e financeira, cumprimento de obrigações legais e registro de diplomas, observadas as bases legais, finalidades e medidas de segurança previstas na Lei Geral de Proteção de Dados Pessoais (LGPD). O compartilhamento ocorrerá apenas quando necessário e juridicamente autorizado."
    },
    {
      "t": "p",
      "x": "14.3. O CONTRATANTE poderá solicitar informações sobre o tratamento e exercer os direitos previstos na LGPD pelos canais institucionais. Os registros acadêmicos e contratuais serão mantidos pelo período legalmente exigível."
    },
    {
      "t": "p",
      "x": "14.4. A divulgação promocional ou institucional da imagem, voz ou depoimento identificável do aluno dependerá de autorização livre, específica e facultativa, colhida em campo destacado na seção de aceite deste contrato. A negativa não interferirá na matrícula nem no aproveitamento acadêmico; a autorização poderá ser revogada por comunicação à CONTRATADA, observados os tratamentos anteriores legitimamente realizados e os conteúdos sob seu controle."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 15 – ATENDIMENTO, OCORRÊNCIAS E MEDIDAS DISCIPLINARES"
    },
    {
      "t": "p",
      "x": "15.1. Os requerimentos e solicitações referentes à matrícula, avaliações, frequência, recuperação de aprendizagem, aproveitamento de estudos, atividades presenciais e práticas, estágios supervisionados, transferências, trancamento, cancelamento, documentação acadêmica, questões financeiras e demais assuntos relacionados à formação poderão ser apresentados pelo Ambiente Virtual de Aprendizagem (AVA), quando disponível, pelo e-mail contato@superargct.com.br ou por outros canais oficiais divulgados. A CONTRATADA registrará o recebimento das solicitações e informará os procedimentos e encaminhamentos pertinentes, observados os prazos legais, regulamentares e acadêmicos aplicáveis."
    },
    {
      "t": "p",
      "x": "15.2. Falhas do AVA, divergências de lançamento ou outras ocorrências vinculadas aos serviços contratados serão apuradas com base nos registros e documentos apresentados, adotando-se as medidas de correção, reposição, readequação de prazos ou restituição cabíveis. Falhas exclusivas de equipamentos ou conexão particulares serão avaliadas segundo os requisitos técnicos previamente informados."
    },
    {
      "t": "p",
      "x": "15.3. Infrações como fraude acadêmica, violência, assédio, dano intencional ao patrimônio ou uso indevido dos sistemas poderão resultar em orientação, advertência, invalidação da atividade irregular ou, em situações graves ou reiteradas, rescisão motivada, mediante apuração, comunicação ao aluno e oportunidade de manifestação."
    },
    {
      "t": "p",
      "x": "15.4. A eventual rescisão motivada resguardará os registros dos componentes concluídos e a apuração proporcional das obrigações financeiras. Danos materiais comprovados poderão ser objeto de reparação nos termos da lei. Os descumprimentos meramente financeiros serão disciplinados pela Cláusula 8."
    },
    {
      "t": "p",
      "x": "15.5. A aplicação de medidas disciplinares observará a natureza e a gravidade da ocorrência, a existência de reincidência, os prejuízos comprovados e as circunstâncias envolvidas. A rescisão motivada será reservada às situações graves ou reiteradas que comprometam a regularidade da relação educacional, mediante decisão fundamentada e comunicação formal ao CONTRATANTE."
    },
    {
      "t": "p",
      "x": "15.6. O CONTRATANTE poderá solicitar esclarecimentos ou reconsideração de medida disciplinar aplicada, mediante requerimento fundamentado apresentado pelos canais institucionais. A CONTRATADA analisará a manifestação, considerando os registros da ocorrência e os elementos apresentados, assegurando a preservação dos direitos acadêmicos e contratuais legalmente reconhecidos."
    },
    {
      "t": "h",
      "x": "CLÁUSULA 16 – ACEITE, DISPOSIÇÕES FINAIS E FORO"
    },
    {
      "t": "p",
      "x": "16.1. Este contrato, a ficha de matrícula, o Quadro-Resumo (Anexo I) e o plano de curso disponibilizado ao CONTRATANTE disciplinam a contratação. As condições específicas regularmente aceitas prevalecerão em caso de divergência, desde que compatíveis com a legislação. Alterações substanciais de objeto, preço ou modalidade exigirão informação prévia e concordância quando cabível."
    },
    {
      "t": "p",
      "x": "16.2. O instrumento poderá ser celebrado por assinatura física ou aceite eletrônico que registre a identidade do participante, a versão contratual e a data da manifestação, sendo disponibilizada cópia em meio que permita sua conservação. A autorização de imagem será registrada separadamente do aceite geral."
    },
    {
      "t": "p",
      "x": "16.3. A tolerância ocasional de uma parte não importará renúncia de direitos. A invalidade de disposição específica não afetará as demais, quando estas puderem subsistir. Permanecerão exigíveis após o término as obrigações que por sua natureza ou por lei devam subsistir."
    },
    {
      "t": "p",
      "x": "16.4. As partes poderão buscar solução consensual de divergências pelos canais institucionais, sem prejuízo do acesso aos órgãos de defesa do consumidor e ao Poder Judiciário. Fica eleito o foro da Comarca de Palmeira dos Índios/AL, observadas as normas de competência e as prerrogativas legalmente asseguradas ao consumidor."
    },
    {
      "t": "h",
      "x": "AUTORIZAÇÃO FACULTATIVA DE USO DE IMAGEM, VOZ E DEPOIMENTOS"
    },
    {
      "t": "p",
      "x": "Para divulgação institucional e promocional das atividades educacionais da CONTRATADA, inclusive em site, redes sociais e materiais informativos, manifesto minha decisão sobre o uso de minha imagem, voz e eventuais depoimentos. A autorização é independente da matrícula, gratuita e revogável pelos canais oficiais."
    },
    {
      "t": "escolha",
      "x": ""
    },
    {
      "t": "p",
      "x": "A ausência de marcação será considerada não autorização. Em caso de menor de idade, a manifestação caberá ao responsável legal, observadas as normas de proteção aplicáveis."
    },
    {
      "t": "h",
      "x": "DECLARAÇÃO DE CIÊNCIA E ACEITE"
    },
    {
      "t": "p",
      "x": "Declaro ter recebido ou acessado previamente este contrato, o Quadro-Resumo da Contratação (Anexo I) e as informações essenciais da formação escolhida, manifestando concordância com as condições pactuadas por assinatura física ou aceite eletrônico registrado."
    }
  ],
  "extra": {
    "assinaturaDispensada": "A assinatura manuscrita é dispensada quando houver aceite eletrônico válido e devidamente registrado.",
    "anexoTitulo": "ANEXO I – QUADRO-RESUMO DA CONTRATAÇÃO",
    "anexoIntro": "Este anexo integra o contrato e reúne os dados da matrícula e as condições acadêmicas e financeiras contratadas. Preencher apenas os campos aplicáveis; nos demais, registrar “Não se aplica”.",
    "anexoDeclaracao": "Declaro ciência de que os valores e condições deste Anexo I integram o contrato e de que serviços facultativos extraordinários exigem informação e aceitação específicas.",
    "servicosFacultativos": "Os serviços administrativos adicionais solicitados pelo CONTRATANTE, não incluídos no valor do curso, poderão ser cobrados quando legalmente permitidos, mediante informação prévia dos valores e concordância do CONTRATANTE antes da prestação do serviço solicitado, observadas as Cláusulas 7.5 e 13.4 deste contrato."
  }
};

  /*
   * Anexo I – regras do arquivo "ANEXO I AUTOMACAO_SUPERAR.pdf":
   *  - forma de oferta: Subsequente; requisito: Ensino Médio concluído;
   *  - início do curso e do AVA = data da assinatura; término = início + duração do curso
   *    em meses (campo duracaoMeses em js/cursos-data.js), mantendo o dia do mês
   *    ou usando o último dia do mês quando ele não existir (31/08 + 6 meses = 28/02);
   *  - diploma: até 120 dias após a conclusão (não é somado às datas);
   *  - turma e mínimo de alunos: em branco;
   *  - matrícula: valor de UMA parcela, incluída no preço total (não soma de novo);
   *  - descontos: "Não se aplica." por padrão.
   * Os campos abaixo são da Superar (o aluno não preenche). Para mudar, altere aqui.
   */
  const CONTRATO = {
    versao: "06/11/2026",
    anexo: {
      atoAutorizacao: "",       // vazio = usa ESCOLA.ato (js/main.js). Um curso pode ter o seu: atoAutorizacao em cursos-data.js
      formaOferta: "Subsequente", // "Subsequente" | "Concomitante" | "Integrado ao Ensino Médio"
      requisitos: "Ter concluído o Ensino Médio, mediante comprovação documental.",
      prazoDiplomaDias: 120,
      turma: "", minimoAlunos: "", // ficam em branco
      matriculaCondicao: "Incluída no preço total", // "Incluída no preço total" | "Cobrada à parte" | "Não se aplica"
      descontos: "Não se aplica.",
      outroCanal: "",           // ex.: "WhatsApp (82) 98164-3033"; vazio = linha em branco
    },
  };
  window.CONTRATO = CONTRATO;

  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const linha = (v, n = 30) => v || "_".repeat(n);
  const marca = (on) => (on ? "( X )" : "(    )");
  const dataBR = (dt) => dt ? dt.toLocaleDateString("pt-BR") : "____/____/________";

  // Soma meses de calendário (não dias). Se o dia não existir no mês final, usa o último dia dele.
  function somaMeses(dt, n) {
    const alvo = new Date(dt.getFullYear(), dt.getMonth() + n, 1);
    const ultimo = new Date(alvo.getFullYear(), alvo.getMonth() + 1, 0).getDate();
    alvo.setDate(Math.min(dt.getDate(), ultimo));
    return alvo;
  }
  window.somaMeses = somaMeses;

  // Período regular previsto e acesso ao AVA: da assinatura até assinatura + duração do curso.
  function periodo(c, quando) {
    const inicio = new Date(quando.getFullYear(), quando.getMonth(), quando.getDate());
    const n = +c.duracaoMeses;
    return { inicio, termino: n > 0 ? somaMeses(inicio, n) : null };
  }
  window.periodoCurso = periodo;

  const atoDoCurso = (c) => {
    const E = window.ESCOLA;
    return c.atoAutorizacao || CONTRATO.anexo.atoAutorizacao || (E.ato ? `${E.ato.resolucao} (${E.ato.publicacao})` : "");
  };

  window.gerarContrato = function (d) {
    const E = window.ESCOLA, A = CONTRATO.anexo, c = d.curso;
    const aluno = d.aluno, r = d.responsavel, menor = !!r;
    const quando = d.dataAssinatura ? new Date(d.dataAssinatura) : new Date();
    const B = [];

    for (const b of DOC.corpo) {
      if (b.t === "escolha") B.push({ t: "escolha", valor: d.imagem || "" });
      else B.push({ t: b.t, x: b.x.split("contato@superargct.com.br").join(E.email) });
    }

    const pessoa = (p) => `${p.nome.toUpperCase()} – CPF ${p.cpf}`;
    B.push({ t: "assinaturas", slots: [
      { rotulo: "CONTRATANTE – ALUNO(A)", nome: pessoa(aluno), assina: !menor,
        obs: menor ? (d.idadeAluno < 16 ? "Representado(a) pelo responsável legal" : "Assistido(a) pelo responsável legal") : "" },
      { rotulo: "CONTRATADA", nome: "SUPERAR – CURSOS E TREINAMENTOS", assina: false, obs: "Contrato ofertado eletronicamente pela CONTRATADA" },
      { rotulo: "RESPONSÁVEL LEGAL (quando aplicável)", nome: menor ? `${pessoa(r)} – ${r.parentesco}` : "Não se aplica", assina: menor },
      { rotulo: "RESPONSÁVEL FINANCEIRO (quando distinto)", nome: "Não se aplica", assina: false },
    ] });
    B.push({ t: "p", x: DOC.extra.assinaturaDispensada });
    const local = r || aluno;
    B.push({ t: "local", x: `${local.cidade}/${local.uf}, ${quando.getDate()} de ${meses[quando.getMonth()]} de ${quando.getFullYear()}.` });

    // ANEXO I – QUADRO-RESUMO DA CONTRATAÇÃO
    const total = c.parcelas * c.valorParcela; // a matrícula já está dentro deste total
    const P = periodo(c, quando);
    const registro = d.dataAssinatura
      ? new Date(d.dataAssinatura).toLocaleString("pt-BR", { timeZone: "America/Maceio" }) + (d.protocolo ? ` – Protocolo ${d.protocolo}` : "")
      : "registrada no momento da assinatura";
    B.push({ t: "quebra" });
    B.push({ t: "titulo", x: DOC.extra.anexoTitulo });
    B.push({ t: "p", x: DOC.extra.anexoIntro });
    B.push({ t: "secao", x: "1. IDENTIFICAÇÃO" });
    B.push({ t: "tabela", linhas: [
      ["Aluno(a) / Contratante", `Nome: ${aluno.nome}   CPF: ${aluno.cpf}`],
      ["Responsável legal/financeiro (se houver)", menor ? `Nome: ${r.nome}   CPF: ${r.cpf}` : "Não se aplica"],
    ] });
    B.push({ t: "secao", x: "2. DADOS ACADÊMICOS" });
    B.push({ t: "tabela", linhas: [
      ["Curso técnico contratado", c.nome],
      ["Ato de autorização / órgão competente", linha(atoDoCurso(c), 40)],
      ["Modalidade", "Educação a Distância (EaD), com atividades presenciais, quando previstas no plano de curso."],
      ["Carga horária total", `${c.cargaHoraria.toLocaleString("pt-BR")} horas`],
      ["Forma de oferta", ["Subsequente", "Concomitante", "Integrado ao Ensino Médio"].map((o) => `${marca(A.formaOferta === o)} ${o}`).join("   ")],
      ["Requisitos de ingresso", linha(A.requisitos, 40)],
      ["Período regular previsto", `Início: ${dataBR(P.inicio)}     Término: ${dataBR(P.termino)}`],
      ["Acesso regular ao AVA", `Início: ${dataBR(P.inicio)}     Até: ${dataBR(P.termino)}`],
      ["Avaliação e frequência", "Conforme plano de curso e critérios comunicados ao aluno."],
      ["Documento de conclusão", "Diploma de técnico de nível médio, atendidos os requisitos."],
      ["Prazo previsto de emissão", `Até ${A.prazoDiplomaDias} dias após a conclusão do curso e a regularização documental.`],
      ["Turma / abertura (se aplicável)", `Turma: ${A.turma}     Mínimo de alunos: ${A.minimoAlunos}`],
    ] });
    B.push({ t: "secao", x: "3. CONDIÇÕES FINANCEIRAS" });
    B.push({ t: "tabela", linhas: [
      ["Preço total contratado", brl(total)],
      ["Matrícula (quando cobrada)", A.matriculaCondicao === "Não se aplica" ? "Não se aplica" : brl(c.valorParcela)],
      ["Condição da matrícula", ["Incluída no preço total", "Cobrada à parte", "Não se aplica"].map((o) => `${marca(A.matriculaCondicao === o)} ${o}`).join("   ")],
      ["Descontos / condições especiais", linha(A.descontos, 40)],
      ["Parcelamento e vencimento", `${c.parcelas} parcelas de ${brl(c.valorParcela)}  |  Vencimento: dia ${d.pagamento.vencimento}`],
      ["Forma de pagamento", d.pagamento.forma],
    ] });
    B.push({ t: "secao", x: "4. SERVIÇOS ADMINISTRATIVOS FACULTATIVOS" });
    B.push({ t: "tabela", linhas: [["Serviços administrativos facultativos", DOC.extra.servicosFacultativos]] });
    B.push({ t: "secao", x: "5. CANAIS E REGISTRO" });
    B.push({ t: "tabela", linhas: [
      ["Atendimento", `${E.email}  |  Outro canal: ${linha(A.outroCanal, 24)}`],
      ["Versão contratual / registro do aceite", `Versão: ${CONTRATO.versao}   Data/hora: ${registro}`],
    ] });
    B.push({ t: "p", x: DOC.extra.anexoDeclaracao });
    return B;
  };

  const textoEscolha = (v) => `${marca(v === "autorizo")} AUTORIZO     ${marca(v === "nao")} NÃO AUTORIZO`;

  window.contratoHTML = function (blocos) {
    const e = window.esc;
    let h = "";
    for (const b of blocos) {
      if (b.t === "titulo") h += `<h4 class="titulo">${e(b.x)}</h4>`;
      else if (b.t === "subtitulo") h += `<p class="subtitulo">${e(b.x)}</p>`;
      else if (b.t === "h") h += `<h4>${e(b.x)}</h4>`;
      else if (b.t === "p") h += `<p>${e(b.x)}</p>`;
      else if (b.t === "escolha") h += `<p class="escolha" id="contratoEscolha">${e(textoEscolha(b.valor))}</p>`;
      else if (b.t === "local") h += `<p class="local">${e(b.x)}</p>`;
      else if (b.t === "quebra") h += `<hr class="quebra">`;
      else if (b.t === "secao") h += `<h5>${e(b.x)}</h5>`;
      else if (b.t === "tabela") h += `<table class="anexo">${b.linhas.map(([k, v]) => `<tr><th>${e(k)}</th><td>${e(v)}</td></tr>`).join("")}</table>`;
      else if (b.t === "assinaturas") h += `<div class="assinaturas">${b.slots.map((s) => `
        <div class="slot"><div class="traco"></div><strong>${e(s.rotulo)}</strong><span>${e(s.nome)}</span>${s.obs ? `<small>${e(s.obs)}</small>` : ""}</div>`).join("")}</div>`;
    }
    return h;
  };
  window.textoEscolhaImagem = textoEscolha;

  // Texto puro do contrato: é dele que se calcula o código de verificação SHA-256.
  window.contratoTexto = (blocos) => blocos.map((b) => {
    if (b.t === "escolha") return textoEscolha(b.valor);
    if (b.t === "tabela") return b.linhas.map(([k, v]) => `${k}: ${v}`).join("\n");
    if (b.t === "assinaturas") return b.slots.map((s) => `${s.rotulo}: ${s.nome}${s.obs ? " (" + s.obs + ")" : ""}`).join("\n");
    if (b.t === "quebra") return "";
    return b.x;
  }).join("\n");
})();
