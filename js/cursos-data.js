/* Dados dos cursos. Para editar preço, texto ou grade, altere aqui.
   cargaHoraria e duracaoMeses vêm das Matrizes Curriculares dos Cursos Técnicos EAD (PDF).
   valorParcela/parcelas vêm da Tabela de Preços (PDF). precoSiteAtual é só referência do site antigo.
   duracaoMeses: duração MÁXIMA do curso em meses (Matrizes Curriculares dos Cursos Técnicos EAD).
   É usada no Anexo I do contrato para calcular o término do curso e do acesso ao AVA.
   Se ficar null, a data de término sai em branco no contrato. */
window.CURSOS = [
  {
    "slug": "tecnico-em-administracao",
    "nome": "Técnico em Administração",
    "area": "Gestão e Negócios",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-administracao.webp",
    "resumo": "O Curso Técnico em Administração tem como objetivo formar profissionais qualificados para desempenhar atividades administrativas nos mais variados setores.",
    "oCurso": "<p>O Curso Técnico em Administração tem como objetivo formar profissionais qualificados para desempenhar atividades administrativas nos mais variados setores. Durante o curso, os alunos desenvolvem competências em áreas como planejamento, organização, direção e controle, além de noções de empreendedorismo e liderança.</p><p>O curso é voltado para quem busca uma formação rápida e prática, com foco na inserção no mercado de trabalho.</p>",
    "areaAtuacao": "<p>O Técnico em Administração pode atuar em diversas áreas e segmentos da economia, tanto no setor público quanto no privado. Entre as principais possibilidades de atuação estão:</p><ul><li>Empresas de pequeno, médio e grande porte, em diferentes setores.</li><li>Instituições públicas e organizações não governamentais (ONGs);</li><li>Escritórios de consultoria e assessoria administrativa;</li><li>Gestão de micro e pequenos empreendimentos;</li><li>Atendimento ao cliente, compras e vendas;</li><li>Controle de estoques e logística;</li><li>Setores de finanças, contabilidade e recursos humanos;</li></ul><p>A versatilidade da formação permite ao profissional atuar em praticamente qualquer tipo de organização, adaptando-se às necessidades específicas de cada instituição.</p>",
    "oProfissional": "<p>O Técnico em Administração é um profissional preparado para lidar com os desafios do ambiente organizacional. Ele se destaca por:</p><ul><li>Perfil Multidisciplinar: Domínio de várias áreas da administração, como finanças, logística e gestão de pessoas;</li><li>Habilidades Interpessoais: Capacidade de comunicação, trabalho em equipe e relacionamento interpessoal;</li><li>Organização e Planejamento: Eficiência em processos, foco em resultados e habilidades de análise;</li><li>Visão Estratégica: Contribui para a melhoria de processos e para o alcance de objetivos organizacionais;</li><li>Adaptabilidade: Pronto para trabalhar em diferentes contextos e cenários econômicos.</li></ul><p> </p><p>Esse profissional é essencial para o funcionamento eficiente de qualquer organização, desempenhando um papel fundamental na gestão e no sucesso dos negócios.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Administração",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Princípios Administrativos",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Matemática Financeira",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Fundamentos de Marketing",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Ética e Cidadania",
            "dist": "40h",
            "pres": "-",
            "total": "40h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Produção, Processos e Sistemas",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Logística e Qualidade",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Gestão Estratégica de Pessoas",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Informação, Informática e Inovação",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Crédito e Cobrança",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Economia e Finanças",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Comportamento do Consumidor na Era Digital",
            "dist": "40h",
            "pres": "-",
            "total": "40h"
          },
          {
            "nome": "Micro e Macrocrédito",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Estatística",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "29h",
            "total": "29h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-comercio-exterior",
    "nome": "Técnico em Comércio Exterior",
    "area": "Gestão e Negócios",
    "cargaHoraria": 856,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-comercio-exterior.webp",
    "resumo": "O curso Técnico em Comércio Exterior forma profissionais capacitados para atuar em operações comerciais internacionais, compreendendo desde os processos de importação e exportação até a gestão logística e aduaneira.",
    "oCurso": "<p>O curso Técnico em Comércio Exterior forma profissionais capacitados para atuar em operações comerciais internacionais, compreendendo desde os processos de importação e exportação até a gestão logística e aduaneira. A formação oferece conhecimentos em legislação, economia, negociação, câmbio, contratos e rotinas administrativas, preparando o estudante para atuar de forma estratégica no mercado global.</p>",
    "areaAtuacao": "<p>O Técnico em Comércio Exterior pode trabalhar em empresas privadas de diferentes segmentos que atuam no comércio internacional, em órgãos públicos, despachantes aduaneiros, transportadoras internacionais, agentes de carga e câmbio, além de assessorias especializadas. Entre suas atividades estão a elaboração de documentos, acompanhamento de processos de importação e exportação, análise de custos e viabilidade, negociação com fornecedores e clientes internacionais, além da logística e trâmites aduaneiros. </p>",
    "oProfissional": "<p>O profissional formado em Comércio Exterior possui perfil dinâmico, visão global e capacidade de adaptação às exigências do mercado internacional. Atua como elo entre empresas e parceiros estrangeiros, garantindo que processos sejam realizados de forma eficiente, legal e estratégica. Com habilidades de comunicação, organização e negociação, o Técnico em Comércio Exterior contribui diretamente para a expansão e competitividade das organizações no cenário mundial. </p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Comércio Exterior",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Estratégias de Internacionalização com Apoio das Novas Tendências Globais (OCDE, OEA)",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Geografia Econômica Mundial",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Legislação Aduaneira /Aspectos Introdutórios",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Negociação Internacional",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Operações e Condições de Compras e Venda",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Procedimentos de Transporte, Armazenamento e Logística Internacional",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Regimes Especiais Aduaneiros",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Siscomex – Sistema Integrado de Comércio Exterior",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Sistemática de Importação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Técnicas Administrativas na Exportação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Técnicas Administrativas na Importação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "IV Teoria e Prática Cambial",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "60h",
            "total": "60h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-contabilidade",
    "nome": "Técnico em Contabilidade",
    "area": "Gestão e Negócios",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-contabilidade.webp",
    "resumo": "O Curso Técnico em Contabilidade tem como objetivo formar profissionais capacitados para atuar em atividades relacionadas à gestão e controle de informações contábeis e financeiras.",
    "oCurso": "<p>O Curso Técnico em Contabilidade tem como objetivo formar profissionais capacitados para atuar em atividades relacionadas à gestão e controle de informações contábeis e financeiras. Durante o curso, os alunos aprendem a aplicar conceitos contábeis no dia a dia das empresas, sempre em conformidade com as normas e leis vigentes.</p><p>O curso combina teoria e prática, proporcionando ao aluno o preparo necessário para atender às demandas do mercado.</p>",
    "areaAtuacao": "<p>O Técnico em Contabilidade possui um campo de atuação amplo e diversificado, podendo atuar em:</p><ul><li>Escritórios de contabilidade;</li><li>Empresas de pequeno, médio e grande porte, em diferentes setores;</li><li>Organizações não governamentais (ONGs) e instituições públicas;</li><li>Bancos, seguradoras e instituições financeiras;</li><li>Consultorias financeiras e contábeis;</li><li>Controle e auditoria interna de empresas;</li><li>Empreendimentos próprios na área contábil e financeira.</li></ul><p> </p><p>Além disso, o profissional pode trabalhar diretamente com a elaboração de relatórios contábeis, apuração de tributos, registros financeiros e suporte em processos de tomada de decisão.</p>",
    "oProfissional": "<p>O Técnico em Contabilidade é um profissional essencial para a gestão eficiente das finanças e recursos organizacionais. Ele se destaca por:</p><ul><li>Conhecimento Técnico: Domínio das práticas e ferramentas contábeis e financeiras;</li><li>Atenção aos Detalhes: Capacidade de identificar e corrigir inconsistências financeiras e contábeis;</li><li>Conformidade Legal: Garantir que as atividades financeiras estejam alinhadas às legislações tributárias e trabalhistas;</li><li>Habilidades Analíticas: Competência para interpretar dados financeiros e oferecer insights estratégicos;</li><li>Ética e Responsabilidade: Compromisso com a transparência e confidencialidade das informações;</li><li>Capacidade de Adaptação: Pronto para atuar em diversos tipos de empresas e setores;</li></ul><p> </p><p>Este profissional é fundamental para a organização e a saúde financeira das empresas, desempenhando um papel-chave no planejamento e na tomada de decisões econômicas.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Contabilidade",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Contabilidade Aplicada",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Lançamento Contábeis",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Matemática Financeira",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Práticas Contábeis",
            "dist": "40h",
            "pres": "24h",
            "total": "64h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Análise das Demonstrações Contábeis",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Legislação Trabalhistas e Tributária",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Gestão Financeira",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Contabilidade de Custos",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Estatística",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Economia e Finanças",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Crédito e Cobrança",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Comportamento do Consumidor na Era Digital",
            "dist": "40h",
            "pres": "-",
            "total": "40h"
          },
          {
            "nome": "Micro e Macrocrédito",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "30h",
            "total": "30h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente escolha para aqueles que desejam ingressar rapidamente no mercado de trabalho ou fortalecer suas competências para atuar em um setor essencial para a economia e os negócios."
      }
    ]
  },
  {
    "slug": "tecnico-em-financas",
    "nome": "Técnico em Finanças",
    "area": "Gestão e Negócios",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-financas.webp",
    "resumo": "O Curso Técnico em Finanças tem como objetivo formar profissionais qualificados para atuar em atividades que envolvem o controle financeiro de empresas e indivíduos.",
    "oCurso": "<p>O Curso Técnico em Finanças tem como objetivo formar profissionais qualificados para atuar em atividades que envolvem o controle financeiro de empresas e indivíduos. Durante o curso, os alunos aprendem sobre administração financeira, análise de investimentos, operações bancárias, planejamento orçamentário e gestão de riscos financeiros. </p><p>O curso prepara os alunos para tomar decisões financeiras e otimizar o uso de recursos, além de gerir operações bancárias, contas a pagar e a receber, e fluxo de caixa.</p>",
    "areaAtuacao": "<p>O Técnico em Finanças pode atuar em diversas áreas, tanto no setor público quanto no privado, oferecendo suporte nas operações financeiras e estratégias de investimentos. Entre os principais campos de atuação estão:</p><ul><li>Bancos, cooperativas de crédito e instituições financeiras;</li><li>Empresas de consultoria financeira e planejamento de investimentos;</li><li>Departamentos financeiros de empresas de diferentes segmentos (indústria, comércio, serviços);</li><li>Controladoria e auditoria interna em empresas;</li><li>Tesourarias e departamentos de contabilidade;</li><li>Investimentos, corretoras de valores e mercado de capitais;</li><li>Administração de seguros e previdência privada.</li></ul><p>A flexibilidade do curso permite ao profissional atuar em diversas funções, como analista financeiro, assistente de tesouraria, analista de crédito, entre outras.</p>",
    "oProfissional": "<p>O Técnico em Finanças é um profissional altamente capacitado para tomar decisões financeiras estratégicas e operar as finanças de forma eficiente. Ele se destaca por:</p><ul><li>Conhecimento Técnico: Domínio das ferramentas financeiras, como cálculos financeiros, análise de custos e investimentos;</li><li>Análise e Planejamento: Capacidade de elaborar orçamentos, realizar análise de viabilidade e gestão de fluxo de caixa;</li><li>Habilidade em Tomada de Decisão: Aptidão para fornecer informações precisas para a tomada de decisões financeiras que impactem o desempenho da empresa;</li><li>Visão Estratégica: Compreensão do mercado financeiro e habilidade para otimizar os recursos financeiros de uma organização;</li><li>Ética e Conformidade: Cumprir as normas legais e fiscais relacionadas ao setor financeiro, garantindo a transparência e a confiabilidade das operações;</li><li>Tecnologia e Inovação: Capacidade de utilizar ferramentas tecnológicas e sistemas financeiros para automatizar processos e otimizar o gerenciamento financeiro;</li><li>Este profissional é essencial para a sustentabilidade financeira das empresas, contribuindo para a maximização dos lucros e a minimização de riscos.</li></ul><p> </p><p>O Curso Técnico em Finanças é uma ótima opção para quem deseja trabalhar diretamente com a gestão financeira e atuar de forma estratégica nas organizações, além de ter uma inserção rápida no mercado de trabalho com diversas oportunidades de crescimento profissional.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Finanças",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Princípios Administrativos",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Matemática Financeira",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Gestão de Documentos – Arquivística",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Comunicação Técnica",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Administração de Conflitos e Técnicas de Negociação",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Crédito e Cobrança",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Contabilidade Aplicada",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Micro e Macrocrédito",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Gestão Financeira",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Fundamentos de Direito Empresarial",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Análise das Demonstrações Contábeis",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Novas Tecnologias Aplicadas à Gestão Financeira",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Estatística",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "34h",
            "total": "34h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-logistica",
    "nome": "Técnico em Logística",
    "area": "Gestão e Negócios",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-logistica.webp",
    "resumo": "O Curso Técnico em Logística tem como objetivo formar profissionais capazes de coordenar, planejar e gerenciar a cadeia de suprimentos e os fluxos de mercadorias em diferentes setores.",
    "oCurso": "<p>O Curso Técnico em Logística tem como objetivo formar profissionais capazes de coordenar, planejar e gerenciar a cadeia de suprimentos e os fluxos de mercadorias em diferentes setores. Durante o curso, os alunos aprendem sobre processos relacionados à gestão de estoques, transporte, distribuição e administração de materiais, além de desenvolver habilidades estratégicas e analíticas.</p><p>O curso combina teoria e prática, oferecendo uma base sólida para o aluno atuar na melhoria dos processos logísticos e no suporte à tomada de decisões eficientes nas empresas.</p>",
    "areaAtuacao": "<p>O Técnico em Logística pode atuar em uma ampla gama de setores e áreas, devido à importância crescente da logística para o sucesso de empresas em vários segmentos. Entre as principais áreas de atuação estão:</p><ul><li>Gestão de Armazéns e Centros de Distribuição: Coordenação da entrada, armazenamento e saída de produtos;</li></ul> <ul><li>Transporte e Distribuição: Planejamento e gerenciamento das rotas e meios de transporte de mercadorias;</li></ul> <ul><li>Supply Chain Management (Gestão da Cadeia de Suprimentos): Coordenação e otimização de toda a cadeia de fornecimento, desde a matéria-prima até o cliente final;</li></ul> <ul><li>Logística Internacional: Gestão de importação, exportação e o transporte de mercadorias entre diferentes países;</li></ul> <ul><li>Indústria e Comércio: Coordenação de atividades logísticas em setores como produção, varejo e atacado;</li></ul> <ul><li>Consultoria e Projetos Logísticos: Implementação de soluções logísticas para empresas que buscam melhorar sua eficiência operacional.</li></ul> <p>A logística é um campo fundamental para empresas de todos os tipos, desde indústrias até comércios, e o profissional formado pode atuar tanto em grandes corporações quanto em pequenas e médias empresas.</p>",
    "oProfissional": "<p>O Técnico em Logística é um profissional essencial para a organização dos fluxos de materiais e mercadorias, sendo responsável por garantir que os processos logísticos ocorram de forma eficiente e econômica. O perfil desse profissional inclui:</p><ul><li>Habilidades Organizacionais: Capacidade de planejar, coordenar e otimizar processos logísticos complexos, assegurando a fluidez e a redução de custos;</li></ul> <ul><li>Visão Estratégica: Habilidade para implementar soluções que melhorem o desempenho logístico de uma empresa, desde o gerenciamento de estoques até a escolha de meios de transporte mais eficientes;</li></ul> <ul><li>Capacidade de Análise: Aptidão para analisar dados logísticos, identificar gargalos e propor soluções viáveis para otimizar os fluxos de trabalho;</li></ul> <ul><li>Conhecimento em Tecnologia: Familiaridade com sistemas de gestão empresarial (ERP), ferramentas de rastreamento de mercadorias e outras tecnologias que suportam a logística moderna;</li></ul> <ul><li>Habilidade de Comunicação e Negociação: Capacidade de trabalhar com equipes e negociar com fornecedores, transportadoras e outros parceiros logísticos;</li></ul> <ul><li>Ética e Responsabilidade: Responsabilidade na gestão de recursos materiais, humanos e financeiros, cumprindo com as normas legais e regulatórias.</li></ul> <p>Esse profissional desempenha um papel fundamental na cadeia de valor das organizações, sendo responsável por garantir que os produtos cheguem de forma segura, pontual e eficiente ao consumidor final.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Logística",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Logística e Qualidade",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Logística Reversa e Sustentabilidade",
            "dist": "40h",
            "pres": "19h",
            "total": "59h"
          },
          {
            "nome": "Negócios Eletrônicos para Logística no Comércio Eletrônico",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Logística Internacional",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Controle de Estoque e Operação de Armazéns",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Distribuição e Transportes",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Tendências Regionais",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Custos Logísticas",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Cadeia de Suprimentos",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Administração de Materiais",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Legislação Aplicada à Logística",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "PPCP – Planejamento, Programação e Controle da Produção",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O Curso Técnico em Logística é uma excelente opção para quem deseja atuar em um setor com alta demanda no mercado de trabalho, pois a logística é essencial para a operação de empresas em diversos segmentos. O profissional dessa área tem uma ampla gama de possibilidades de atuação e uma carreira com boas perspectivas de crescimento."
      }
    ]
  },
  {
    "slug": "tecnico-em-recursos-humanos",
    "nome": "Técnico em Recursos Humanos",
    "area": "Gestão e Negócios",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-recursos-humanos.webp",
    "resumo": "O Curso Técnico em Recursos Humanos prepara os estudantes para atuar na gestão de pessoas dentro das organizações, oferecendo uma formação prática e objetiva para lidar com os desafios dessa área.",
    "oCurso": "<p>O Curso Técnico em Recursos Humanos prepara os estudantes para atuar na gestão de pessoas dentro das organizações, oferecendo uma formação prática e objetiva para lidar com os desafios dessa área. Este curso técnico tem como objetivo proporcionar conhecimento sobre as funções de Recursos Humanos, desenvolvendo habilidades em processos de recrutamento, seleção, treinamento, administração de pessoal, além de outras áreas de gestão de pessoas.</p>",
    "areaAtuacao": "<p>O profissional técnico em Recursos Humanos pode atuar em diversas áreas dentro das organizações, incluindo:</p><ul><li>Recrutamento e Seleção: Condução de processos seletivos, entrevistas, aplicação de testes e integração de novos colaboradores;</li></ul> <ul><li>Treinamento e Desenvolvimento: Planejamento e execução de programas de treinamento e desenvolvimento para capacitar e aprimorar os funcionários;</li></ul> <ul><li>Departamento Pessoal: Administração de benefícios, folha de pagamento, férias, rescisões e demais processos relacionados à área trabalhista;</li></ul> <ul><li>Gestão de Desempenho: Avaliação de desempenho e ações para melhorar o desempenho dos funcionários;</li></ul> <ul><li>Consultoria de RH: Atuação como consultor em empresas, sugerindo melhorias em processos de gestão de pessoas;</li></ul> <ul><li>Qualidade de Vida no Trabalho: Criação de programas que busquem promover o bem-estar e a motivação dos funcionários.</li></ul><p> </p>",
    "oProfissional": "<p>O profissional técnico em Recursos Humanos deve ser proativo, ter boas habilidades de comunicação e organização, além de ser capaz de trabalhar em equipe e lidar com diferentes tipos de situações e pessoas. As principais competências do profissional incluem:</p><ul><li>Conhecimento de Legislação Trabalhista: Compreensão profunda das normas que regem as relações de trabalho, como a CLT e convenções coletivas;</li></ul> <ul><li>Habilidade Interpessoal: Capacidade de se relacionar bem com colaboradores de diferentes níveis hierárquicos e manter um ambiente de trabalho saudável;</li></ul> <ul><li>Empatia e Inteligência Emocional: Habilidade para entender as necessidades e sentimentos dos outros, essencial para lidar com questões como conflitos e motivação;</li></ul> <ul><li>Organização e Planejamento: Capacidade de planejar e gerenciar atividades, como treinamentos e processos de recrutamento;</li></ul> <ul><li>Tomada de Decisão: Saber tomar decisões que impactem positivamente a empresa e seus colaboradores.</li></ul> <p>Esse profissional deve estar atento às mudanças no mercado de trabalho e à evolução das práticas de gestão de pessoas, sendo fundamental em qualquer organização que busque melhorar seu capital humano e alcançar resultados consistentes.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Recursos Humanos",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Gestão Estratégica de Pessoas",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Treinamento e Desenvolvimento",
            "dist": "40h",
            "pres": "19h",
            "total": "59h"
          },
          {
            "nome": "Rotinas Administrativas em Recursos Humanos",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Recrutamentos e Seleção",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Plano de Benefícios",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Psicologia do Trabalho",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Liderança e Coaching",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Gestão de Desempenho e Avaliação",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Legislação Trabalhistas e Previdenciária",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Gestão de Cargos e Carreiras",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Rotinas e Cálculos Trabalhistas",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Fundamentos de Saúde e Segurança do Trabalho",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-secretaria-escolar",
    "nome": "Técnico em Secretaria Escolar",
    "area": "Gestão e Negócios",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-secretaria-escolar.webp",
    "resumo": "O Curso Técnico em Secretaria Escolar é uma formação voltada para capacitar profissionais a atuarem na organização e administração de processos administrativos nas instituições educacionais.",
    "oCurso": "<p>O Curso Técnico em Secretaria Escolar é uma formação voltada para capacitar profissionais a atuarem na organização e administração de processos administrativos nas instituições educacionais. O técnico de secretaria escolar tem um papel fundamental na gestão da documentação, comunicação e apoio à equipe pedagógica e aos alunos, garantindo que a rotina escolar aconteça de forma eficiente e organizada.</p><p>O curso busca proporcionar tanto conhecimentos técnicos de administração quanto uma compreensão da dinâmica do ambiente escolar, permitindo que o aluno esteja preparado para lidar com a rotina do setor.</p>",
    "areaAtuacao": "<p>O Técnico em Secretaria Escolar pode atuar em diversas instituições de ensino, como:</p><ul><li>Escolas Públicas e Privadas: De educação infantil, ensino fundamental, ensino médio e até educação de jovens e adultos (EJA);</li></ul> <ul><li>Instituições de Ensino Superior: Faculdades e universidades que necessitam de um suporte administrativo para gerir matrículas, registros acadêmicos e outros serviços;</li></ul> <ul><li>Centros de Formação e Cursos Técnicos: Escolas que oferecem cursos de formação e capacitação profissional, onde o técnico de secretaria escolar organiza processos administrativos e auxilia na parte burocrática da educação;</li></ul> <ul><li>Secretarias de Educação: Órgãos públicos ligados à administração do sistema educacional, onde o profissional pode atuar no planejamento e implementação de políticas educacionais.</li></ul> <p>A área de atuação é vasta, pois o técnico pode trabalhar em qualquer instituição que exija organização, controle e suporte à gestão educacional.</p>",
    "oProfissional": "<p>O profissional formado no Curso Técnico em Secretaria Escolar tem como principal função organizar a parte administrativa da instituição de ensino, garantindo que todos os processos burocráticos ocorram de forma eficiente e que as informações estejam sempre atualizadas. Algumas das principais responsabilidades incluem:</p><ul><li>Atendimento a Alunos e Pais: Prestar informações sobre a rotina escolar, matrícula, documentos necessários, resultados de exames e outros aspectos administrativos;</li></ul> <ul><li>Organização e Controle de Matrículas: Registrar e controlar o processo de matrícula de alunos, incluindo informações de documentos e histórico escolar;</li></ul> <ul><li>Gestão de Documentação Acadêmica: Emitir e organizar documentos como certificados, históricos escolares, transferências, declarações e outros registros dos alunos;</li></ul> <ul><li>Controle de Frequência e Notas: Acompanhar o registro de frequência e notas dos alunos, alimentando sistemas de gestão escolar e preparando relatórios para professores e coordenação;</li></ul> <ul><li>Apoio à Gestão Pedagógica: Auxiliar a equipe pedagógica, organizando calendários, comunicados e documentos necessários para o andamento das atividades escolares;</li></ul> <ul><li>Controle de Recursos Administrativos: Gerenciar o estoque de materiais escolares e outros recursos necessários ao funcionamento da instituição.</li></ul> <p>Além de um bom conhecimento administrativo, o profissional precisa ter habilidades interpessoais, pois irá lidar diretamente com alunos, pais, professores e outros funcionários da escola. Também é importante que ele tenha boa organização, proatividade, capacidade de lidar com prazos e uma postura ética, respeitando as normas educacionais e a privacidade dos alunos.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Secretaria Escolar",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Gestão Secretarial – Técnicas Secretariais",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Redação Oficial e Empresarial",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Organização de Arquivos, Registros e Escrituração Escolar",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Princípios da Gestão Escolar e Organização do Trabalho Pedagógico",
            "dist": "40h",
            "pres": "19h",
            "total": "59h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Ética e Cidadania",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Finanças Escolares – Matemática Comercial e Financeira",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Recursos Informatizados Aplicados à Rotina Secretarial",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Gestão Pedagógica e Acadêmica dos Cursos",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Organização Escolar – Nível Básico, Nível Médio e Profissional, Nível Superior",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Qualidade em Educação",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Programas e Políticas Públicas",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Legislação e Política Educacional",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-secretariado",
    "nome": "Técnico em Secretariado",
    "area": "Gestão e Negócios",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-secretariado.webp",
    "resumo": "O curso Técnico em Secretariado prepara profissionais para atuar no apoio administrativo e organizacional de empresas públicas e privadas, desenvolvendo competências em gestão de documentos, atendimento ao público, redação empresarial, organização de agendas e eventos, além do uso de tecnologias aplicadas ao ambiente corporativo.",
    "oCurso": "<p>O curso Técnico em Secretariado prepara profissionais para atuar no apoio administrativo e organizacional de empresas públicas e privadas, desenvolvendo competências em gestão de documentos, atendimento ao público, redação empresarial, organização de agendas e eventos, além do uso de tecnologias aplicadas ao ambiente corporativo. A formação combina teoria e prática, proporcionando ao estudante habilidades técnicas e comportamentais essenciais para o mercado de trabalho.</p>",
    "areaAtuacao": "<p>O Técnico em Secretariado pode atuar em empresas de diferentes portes e segmentos, instituições de ensino, órgãos públicos, escritórios, consultorias, associações e organizações do terceiro setor. Suas funções incluem organização de processos administrativos, elaboração de relatórios, atendimento e recepção de clientes, apoio a gestores, coordenação de reuniões e viagens, além de controle de correspondências e arquivos.</p>",
    "oProfissional": "<p>O profissional formado em Secretariado é dinâmico, comunicativo, organizado e comprometido com a eficiência no ambiente de trabalho. Com postura ética, discrição e visão estratégica, contribui para a otimização dos processos administrativos, fortalecendo a imagem institucional e apoiando diretamente a tomada de decisões de gestores e equipes.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Secretariado",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Comportamento Organizacional e Ética",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Comunicação Técnica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Inglês Instrumental",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Espanhol Instrumental",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Gestão de Documentos – Arquivística",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Organização de Eventos e Feiras",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Qualidade em Serviços e no Atendimento",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Recursos Tecnológicos",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Redação Oficial e Empresarial",
            "dist": "40h",
            "pres": "10h",
            "total": "50h"
          },
          {
            "nome": "Relações Interpessoais: Gestão de Pessoas",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Técnicas Secretarias e suas Aplicações",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Viagens e Reuniões – Cerimonial e Protocolo",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-servicos-juridicos",
    "nome": "Técnico em Serviços Jurídicos",
    "area": "Gestão e Negócios",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-servicos-juridicos.webp",
    "resumo": "O Curso Técnico em Serviços Jurídicos é uma formação profissionalizante voltada para preparar o aluno para atuar em atividades administrativas e operacionais em escritórios de advocacia, departamentos jurídicos de empresas, tribunais e órgãos públicos.",
    "oCurso": "<p>O Curso Técnico em Serviços Jurídicos é uma formação profissionalizante voltada para preparar o aluno para atuar em atividades administrativas e operacionais em escritórios de advocacia, departamentos jurídicos de empresas, tribunais e órgãos públicos. O técnico em serviços jurídicos tem como principal função dar suporte a advogados e demais profissionais da área, organizando processos, documentos, e realizando atividades que garantem o bom andamento dos serviços jurídicos.</p><p>Durante o curso, o aluno aprende sobre o funcionamento do sistema jurídico e adquire habilidades técnicas para lidar com os aspectos burocráticos e administrativos do direito.</p><p>O curso proporciona uma formação que mistura teoria e prática, capacitando o aluno a trabalhar diretamente com advogados, juízes, promotores, entre outros profissionais do ramo jurídico.</p>",
    "areaAtuacao": "<p>O Técnico em Serviços Jurídicos pode atuar em diversos segmentos dentro do setor jurídico, como:</p><ul><li>Escritórios de Advocacia: Auxiliando advogados na organização de processos, na elaboração de documentos jurídicos e no acompanhamento de prazos e audiências;</li></ul> <ul><li>Departamentos Jurídicos de Empresas: Trabalhando em grandes empresas, ajudando na gestão de contratos, elaboração de pareceres jurídicos e apoio administrativo às áreas que lidam com questões legais;</li></ul> <ul><li>Tribunais e Justiça: Atuando em varas, juizados especiais ou tribunais, oferecendo suporte aos juízes e servidores do Judiciário na organização de processos e documentos;</li></ul> <ul><li>Órgãos Públicos: Trabalhando em órgãos governamentais, como Procuradorias e Defensorias Públicas, ajudando na organização de processos administrativos e jurídicos;</li></ul> <ul><li>Consultorias Jurídicas: Prestando serviços de apoio administrativo para consultorias especializadas que oferecem orientação jurídica a empresas e indivíduos.</li></ul> <p>Essa área oferece uma variedade de oportunidades de emprego, já que todos os tipos de serviços jurídicos exigem uma estrutura administrativa sólida e bem organizada.</p>",
    "oProfissional": "<p>O Técnico em Serviços Jurídicos é um profissional que atua diretamente no suporte e apoio ao trabalho dos advogados, juízes, procuradores e demais profissionais do setor. Algumas das principais responsabilidades desse profissional incluem:</p><ul><li>Gestão de Processos e Prazos: Organizar e controlar os prazos processuais, garantindo que os documentos sejam entregues nos tempos certos e que os processos não sofram atrasos;</li></ul> <ul><li>Elaboração e Organização de Documentos: Preparar e organizar documentos jurídicos, como petições, contratos, contestações, recursos e sentenças, além de fazer o arquivamento adequado desses materiais;</li></ul> <ul><li>Atendimento ao Cliente: Fazer o primeiro atendimento de clientes, fornecendo informações sobre os processos, agendando compromissos e facilitando a comunicação entre clientes e advogados;</li></ul> <ul><li>Auxílio na Pesquisa Jurídica: Ajudar na busca e organização de jurisprudências, doutrinas e outras referências legais que auxiliam no desenvolvimento dos casos;</li></ul> <ul><li>Assistência Administrativa: Prestar apoio na gestão de documentos e registros do escritório ou departamento jurídico, controlando registros e correspondências;</li></ul> <ul><li>Utilização de Ferramentas Tecnológicas: Dominar o uso de softwares jurídicos para gerir processos e arquivos digitais, facilitando o acompanhamento de casos e a comunicação com os tribunais.</li></ul> <p>Além dessas funções, o técnico em serviços jurídicos deve manter uma postura ética e profissional, pois lidará com informações confidenciais e com a complexidade do direito. A comunicação eficaz, atenção aos detalhes, organização e proatividade são habilidades essenciais para o bom desempenho da função.</p><p>Esse profissional tem uma grande demanda no mercado de trabalho, já que a rotina jurídica é bastante burocrática e exige uma boa gestão de documentos, prazos e comunicação, e o técnico em serviços jurídicos é fundamental para garantir a organização e eficiência nesses processos.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Serviços Jurídicos",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Organização de Serviços Registrais e Notariais",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Processos Eletrônicos",
            "dist": "40h",
            "pres": "19h",
            "total": "59h"
          },
          {
            "nome": "Atribuições do Analista Técnico Judiciário",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Serviços Extrajudiciais",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Conciliação, Mediação e Arbitragem",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Legislação Trabalhistas e Tributária",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Legislação Previdenciária",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Administração de Conflitos e Técnicas de Negociação",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Noções de Processo Civil e Noções de Processos Penal",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Direito Cível",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Introdução ao Direito Penal",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Contratos",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-transacoes-imobiliarias",
    "nome": "Técnico em Transações Imobiliárias",
    "area": "Gestão e Negócios",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-transacoes-imobiliarias.webp",
    "resumo": "O Curso Técnico em Transações Imobiliárias é uma formação voltada para capacitar profissionais a atuarem no mercado imobiliário, com foco em atividades relacionadas à compra, venda, locação e administração de imóveis.",
    "oCurso": "<p>O Curso Técnico em Transações Imobiliárias é uma formação voltada para capacitar profissionais a atuarem no mercado imobiliário, com foco em atividades relacionadas à compra, venda, locação e administração de imóveis. Este curso prepara o aluno para trabalhar com as questões jurídicas, financeiras e comerciais que envolvem o setor imobiliário, atuando como intermediário em transações e oferecendo suporte a clientes em suas decisões imobiliárias.<br/>Durante a formação, o aluno é introduzido a várias disciplinas que abrangem aspectos legais, financeiros e operacionais do mercado imobiliário.<br/>O curso prepara o aluno para compreender o mercado e as necessidades dos clientes, além de desenvolver habilidades para operar nas diversas etapas de uma transação imobiliária.</p>",
    "areaAtuacao": "<p>O profissional formado no Curso Técnico em Transações Imobiliárias pode atuar em diversas áreas dentro do mercado imobiliário, em empresas ou como autônomo. Algumas das principais áreas de atuação incluem:</p><ul><li>Imobiliárias: Trabalhando como corretor de imóveis, auxiliando clientes na compra, venda e locação de imóveis, além de oferecer consultoria sobre o mercado e condições de financiamento;</li></ul> <ul><li>Empresas de Construção e Incorporação: Trabalhando no setor de vendas de imóveis novos, oferecendo suporte em projetos de vendas de empreendimentos imobiliários;</li></ul> <ul><li>Departamentos Imobiliários de Bancos e Instituições Financeiras: Atuando na análise de financiamentos imobiliários, ajudando os clientes a entender as melhores opções de crédito para aquisição de imóveis;</li></ul> <ul><li>Consultorias Imobiliárias: Prestando serviços especializados de análise de mercado, avaliação de imóveis e orientações para investidores do setor imobiliário;</li></ul> <ul><li>Administração de Imóveis: Trabalhando como administrador de bens imobiliários, cuidando da gestão e manutenção de imóveis alugados, controlando pagamentos de aluguéis e contratos com inquilinos;</li></ul> <ul><li>Cartórios de Registro de Imóveis: Atuando na parte burocrática das transações imobiliárias, com a redação e registro de contratos de compra e venda, financiamentos e outros documentos legais.</li></ul> <p>O mercado imobiliário oferece diversas possibilidades de atuação para quem se especializa na área, com grande demanda por profissionais que compreendam os aspectos legais e financeiros das transações e que saibam lidar com as necessidades dos clientes.</p>",
    "oProfissional": "<p>O profissional formado no Curso Técnico em Transações Imobiliárias tem a função de intermediar e dar suporte a transações no mercado de imóveis. Ele pode atuar em diversas frentes, dependendo do seu campo de interesse. Algumas das principais responsabilidades e funções desse profissional incluem:</p><ul><li>Corretagem de Imóveis: Atuar como intermediário nas transações de compra, venda e locação de imóveis, apresentando opções aos clientes e negociando as melhores condições de compra ou aluguel;</li></ul> <ul><li>Avaliação de Imóveis: Realizar a avaliação de propriedades, levando em consideração aspectos como localização, estado de conservação, demanda no mercado e outros fatores que influenciam o preço;</li></ul> <ul><li>Assessoria Jurídica e Contratual: Elaborar e revisar contratos de compra, venda e locação, garantindo que todas as cláusulas estejam conforme a legislação vigente e que os direitos das partes envolvidas sejam respeitados;</li></ul> <ul><li>Consultoria Financeira e de Crédito Imobiliário: Orientar clientes sobre opções de financiamento, taxas de juros e condições de pagamento, ajudando-os a encontrar a melhor solução financeira para adquirir um imóvel;</li></ul> <ul><li>Gestão de Imóveis: Administrar imóveis alugados, cuidando do recebimento de aluguéis, controle de manutenção e resolução de problemas com inquilinos;</li></ul> <ul><li>Marketing e Divulgação: Promover imóveis por meio de anúncios, redes sociais, websites e outras ferramentas de marketing, buscando atrair potenciais compradores ou locatários.</li></ul> <p>Além das habilidades técnicas e legais, o profissional deve possuir uma boa comunicação, habilidades de negociação, ética e compreensão das necessidades dos clientes. Também é fundamental que o técnico em transações imobiliárias tenha uma visão estratégica e esteja sempre atualizado sobre as tendências do mercado, mudanças legislativas e inovações tecnológicas que afetam o setor.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Transações Imobiliárias",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Fundamentos de Marketing",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Marketing Digital",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Redação Oficial e Empresarial",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Leitura e Desenho de Projeto Prediais",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Avaliação de Imóveis",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Administração de Imóveis e Locações",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Ética e Cidadania",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Contratos",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Matemática Financeira",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Economia e Finanças",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Processos de Compra, Venda, Locação e Permuta de Imóveis",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Operações de Imóveis",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "44h",
            "total": "44h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-guia-de-turismo",
    "nome": "Técnico em Guia de Turismo",
    "area": "Comunicação e Vendas",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-guia-de-turismo.webp",
    "resumo": "O curso Técnico em Guia de Turismo tem como objetivo capacitar profissionais para planejar, conduzir e acompanhar grupos em viagens, passeios e atividades turísticas, de forma ética, segura e responsável.",
    "oCurso": "<p>O curso Técnico em Guia de Turismo tem como objetivo capacitar profissionais para planejar, conduzir e acompanhar grupos em viagens, passeios e atividades turísticas, de forma ética, segura e responsável. A formação envolve conhecimentos sobre geografia, história, cultura, patrimônio, legislação, idiomas, hospitalidade e primeiros socorros, proporcionando ao estudante habilidades essenciais para atuar no setor de turismo, que é um dos mais dinâmicos da economia.</p>",
    "areaAtuacao": "<p>O Técnico em Guia de Turismo pode atuar em agências e operadoras de turismo, empresas de transporte turístico, cruzeiros, parques temáticos, áreas de proteção ambiental, patrimônios culturais, eventos e receptivos turísticos. Também pode atuar de forma autônoma, conduzindo grupos em viagens nacionais e internacionais. Suas atividades incluem recepção e acompanhamento de turistas, interpretação cultural e ambiental, elaboração de roteiros, mediação entre viajantes e prestadores de serviço e a promoção de experiências seguras e enriquecedoras.</p>",
    "oProfissional": "<p>O profissional formado em Guia de Turismo é comunicativo, organizado e preparado para lidar com diferentes públicos, culturas e situações. Atua como mediador cultural e agente de hospitalidade, valorizando a diversidade e promovendo o turismo sustentável. Sua postura ética, seu conhecimento técnico e sua habilidade de relacionamento tornam a experiência do turista mais completa e significativa, contribuindo para o fortalecimento do setor turístico e para o desenvolvimento local e regional.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Guia de Turismo",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Comunicação, Liderança e Relações Interpessoais",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "História Aplicada ao Turismo",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Especificidades do Guia de Turismo",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Educação Ambiental",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "História, Cultura e Representação Brasileira",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Inglês Instrumental",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Espanhol Instrumental",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Geografia Aplicada ao Turismo",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Atrativos Naturais",
            "dist": "40h",
            "pres": "10h",
            "total": "50h"
          },
          {
            "nome": "Ecossistemas Brasileiros e Gestão Ambiental",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Manifestação Popular",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Técnicas de Trabalho e Noções Operacionais de Turismo",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-marketing",
    "nome": "Técnico em Marketing",
    "area": "Comunicação e Vendas",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-marketing.webp",
    "resumo": "O curso Técnico em Marketing forma profissionais capacitados para planejar, executar e analisar estratégias de marketing, comunicando de forma eficiente produtos, serviços e marcas ao público-alvo.",
    "oCurso": "<p>O curso Técnico em Marketing forma profissionais capacitados para planejar, executar e analisar estratégias de marketing, comunicando de forma eficiente produtos, serviços e marcas ao público-alvo. A formação abrange técnicas de publicidade, promoção, vendas, pesquisa de mercado, marketing digital, branding e comunicação empresarial, preparando o estudante para atuar em um mercado dinâmico e em constante transformação.</p>",
    "areaAtuacao": "<p>O Técnico em Marketing pode atuar em empresas de diversos setores, agências de publicidade e marketing, startups, departamentos de comunicação, consultorias, e-commerce e órgãos públicos. Suas funções incluem análise de mercado, planejamento de campanhas, gestão de redes sociais, criação de conteúdo, atendimento ao cliente, monitoramento de resultados e apoio em estratégias de branding e promoção de produtos e serviços.</p>",
    "oProfissional": "<p>O profissional formado em Marketing é criativo, analítico e orientado para resultados, capaz de identificar tendências e oportunidades de mercado. Com habilidades de comunicação, planejamento e uso de ferramentas digitais, ele contribui para o fortalecimento da imagem e competitividade das organizações, tornando as estratégias de marketing mais eficientes e alinhadas às necessidades do público.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Marketing",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Análise e Tendência de Mercado",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Comportamento do Consumidor na Era Digital",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Fundamentos de Marketing",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Gestão de Marcas e Branding",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Gestão de Produtos e Serviços",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Legislação Aplicada e Direito do Consumidor",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Marketing de Varejo",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Marketing Digital",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Marketing Social e Ambiental",
            "dist": "40h",
            "pres": "10h",
            "total": "50h"
          },
          {
            "nome": "Pesquisa de Marketing",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Planejamento de Marketing",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Promoção de Eventos",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-publicidade",
    "nome": "Técnico em Publicidade",
    "area": "Comunicação e Vendas",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-publicidade.webp",
    "resumo": "O Curso Técnico em Publicidade tem como objetivo formar profissionais aptos a planejar, criar e veicular campanhas publicitárias que atendam aos objetivos de comunicação das marcas e empresas.",
    "oCurso": "<p>O Curso Técnico em Publicidade tem como objetivo formar profissionais aptos a planejar, criar e veicular campanhas publicitárias que atendam aos objetivos de comunicação das marcas e empresas. Durante o curso, os alunos aprendem a lidar com a criação de anúncios, estratégias de marketing e mídia, além de desenvolver habilidades em design, redação publicitária e planejamento de campanhas.</p><p>O curso é voltado para aqueles que desejam trabalhar com a criação e a gestão de campanhas publicitárias, utilizando tanto mídias tradicionais quanto digitais.</p>",
    "areaAtuacao": "<p>O Técnico em Publicidade pode atuar em diversas áreas e setores da comunicação e marketing, sempre com foco em campanhas publicitárias e estratégias de promoção. Entre as principais áreas de atuação estão:</p><ul><li>Agências de Publicidade e Propaganda: Desenvolvimento de campanhas para clientes de diferentes setores (varejo, serviços, produtos);</li></ul> <ul><li>Departamentos de Marketing e Comunicação de Empresas: Planejamento e execução de ações publicitárias para a promoção de produtos e serviços;</li></ul> <ul><li>Publicidade Digital: Gestão de anúncios em plataformas online, como redes sociais (Facebook, Instagram, Google Ads), marketing de conteúdo e e-mail marketing;</li></ul> <ul><li>Produção Audiovisual: Criação de vídeos publicitários, comerciais de TV, vídeos institucionais, entre outros;</li></ul> <ul><li>Relações Públicas e Promoções: Organização de eventos e promoções, com o objetivo de fortalecer a imagem da marca;</li></ul> <ul><li>Consultoria de Marketing e Publicidade: Oferecimento de serviços de consultoria para empresas em campanhas e estratégias publicitárias.</li></ul> <p>Além disso, o técnico pode trabalhar como freelancer ou abrir sua própria agência, oferecendo serviços criativos e estratégicos para diferentes tipos de empresas e marcas.</p>",
    "oProfissional": "<p>O Técnico em Publicidade é um profissional criativo, estratégico e analítico, responsável por criar e executar ações publicitárias que envolvam as audiências e impactem positivamente a percepção de uma marca ou produto. O perfil deste profissional inclui:</p><ul><li>Criatividade: Capacidade de desenvolver ideias originais e inovadoras para campanhas publicitárias que se destaquem no mercado;</li></ul><p> </p><ul><li>Habilidades de Comunicação: Aptidão para criar mensagens claras, persuasivas e adequadas ao público-alvo;</li></ul><p> </p><ul><li>Conhecimento em Design e Produção Visual: Compreensão de como criar e apresentar conteúdos visuais que atraiam a atenção do público e transmitam a mensagem desejada;</li></ul><p> </p><ul><li>Gestão de Projetos: Capacidade de coordenar o planejamento e a execução de campanhas publicitárias, garantindo que os prazos e orçamentos sejam cumpridos;</li></ul><p> </p><ul><li>Habilidade em Marketing Digital: Conhecimento de estratégias e ferramentas para criar campanhas publicitárias eficazes em plataformas digitais;</li></ul><p> </p><ul><li>Análise de Resultados: Capacidade de mensurar e analisar o desempenho das campanhas publicitárias, ajustando estratégias conforme necessário;</li></ul><p> </p><ul><li>Adaptabilidade e Atualização: Capacidade de se adaptar às mudanças rápidas no mercado publicitário, especialmente com a evolução das plataformas digitais e do comportamento do consumidor.</li></ul><p> </p><p>Esse profissional tem um papel fundamental na construção e manutenção da imagem das marcas, sendo responsável por comunicar suas mensagens de maneira eficaz e impactante, utilizando as ferramentas de mídia e marketing adequadas.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Publicidade",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Introdução à Comunicação e Publicidade",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Ética e Cidadania",
            "dist": "40h",
            "pres": "19h",
            "total": "59h"
          },
          {
            "nome": "Estética em Comunicação",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Linguagens da Comunicação",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Gestão e Atendimento Publicitário",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Redação Publicitária",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Teorias da Comunicação",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Design em Publicidade",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Comportamento do Consumidor na Era Digital",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Estratégias de Comunicação e Mídia",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Comunicação Digital",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Produção Gráfica",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O Curso Técnico em Publicidade é uma excelente escolha para quem deseja ingressar no mercado de comunicação e marketing, com foco na criação e gestão de campanhas. Com um mercado em constante crescimento e evolução, especialmente nas áreas digitais, o curso oferece amplas oportunidades de atuação e desenvolvimento profissional para quem busca uma carreira criativa e dinâmica."
      }
    ]
  },
  {
    "slug": "tecnico-em-vendas",
    "nome": "Técnico em Vendas",
    "area": "Comunicação e Vendas",
    "cargaHoraria": 900,
    "duracaoMeses": 12,
    "parcelas": 13,
    "valorParcela": 130,
    "precoSiteAtual": "13x R$ 125,00",
    "imagem": "assets/cursos/tecnico-em-vendas.webp",
    "resumo": "O curso Técnico em Vendas tem como objetivo formar profissionais preparados para atuar em processos de comercialização de produtos e serviços, desenvolvendo estratégias que ampliem os resultados das organizações.",
    "oCurso": "<p>O curso Técnico em Vendas tem como objetivo formar profissionais preparados para atuar em processos de comercialização de produtos e serviços, desenvolvendo estratégias que ampliem os resultados das organizações. A formação contempla técnicas de vendas, marketing, gestão de clientes, negociação, atendimento, comunicação e uso de ferramentas digitais, capacitando o estudante a compreender o comportamento do consumidor e a aplicar práticas modernas de vendas.</p>",
    "areaAtuacao": "<p>O Técnico em Vendas pode atuar em empresas de diversos portes e <br/>segmentos, como indústrias, comércios, prestadoras de serviços, startups e ecommerces. Suas funções incluem prospecção e fidelização de clientes, atendimento consultivo, gestão de carteira, organização de processos comerciais, análise de mercado, execução de campanhas promocionais e suporte às áreas de marketing e pós-venda. Também pode atuar de forma autônoma, empreendendo em seu próprio negócio.</p>",
    "oProfissional": "<p>O profissional formado em Vendas é comunicativo, proativo e orientado para resultados, sendo capaz de identificar oportunidades e construir relacionamentos sólidos com clientes. Com visão estratégica, habilidades de negociação e domínio de técnicas modernas, ele contribui diretamente para o crescimento e a competitividade das organizações, tornando-se peça-chave na geração de valor e no fortalecimento da marca.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Vendas",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Administração de Conflitos e Técnicas de Negociação",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Análise e Tendências de Mercado",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Comportamento do Consumidor na Era Digital",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Contabilidade Aplicada",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Crédito e Cobrança",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Gestão de Produtos e Serviços",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Gestão de Vendas",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Gestão Financeiras",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Legislação Aplicada e Direito do Consumidor",
            "dist": "40h",
            "pres": "10h",
            "total": "50h"
          },
          {
            "nome": "Marketing de Relacionamento",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Operações de Multicanais – OMNICHANNEL",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Pesquisa de Marketing",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-desenvolvimento-de-sistemas",
    "nome": "Técnico em Desenvolvimento de Sistemas",
    "area": "Tecnologia",
    "cargaHoraria": 1266,
    "duracaoMeses": 24,
    "parcelas": 19,
    "valorParcela": 140,
    "precoSiteAtual": "19x R$ 145,00",
    "imagem": "assets/cursos/tecnico-em-desenvolvimento-de-sistemas.webp",
    "resumo": "O curso Técnico em Desenvolvimento de Sistemas prepara o estudante para atuar na criação, manutenção e integração de softwares, aplicativos e sistemas informatizados.",
    "oCurso": "<p>O curso Técnico em Desenvolvimento de Sistemas prepara o estudante para atuar na criação, manutenção e integração de softwares, aplicativos e sistemas informatizados. Durante a formação, o aluno desenvolve competências em programação, banco de dados, análise de requisitos, documentação técnica e <br/>metodologias ágeis, adquirindo habilidades práticas e teóricas que atendem às demandas crescentes do mercado tecnológico.</p>",
    "areaAtuacao": "<p>O Técnico em Desenvolvimento de Sistemas pode atuar em empresas de tecnologia, startups, indústrias, órgãos públicos, escritórios de desenvolvimento de software, consultorias e também de forma autônoma. Suas atividades envolvem análise e desenvolvimento de sistemas, programação de aplicações web e mobile, manutenção de sistemas já existentes, administração de bancos de dados, testes de software e suporte técnico especializado.</p>",
    "oProfissional": "<p>O profissional formado em Desenvolvimento de Sistemas é criativo, analítico e capaz de propor soluções inovadoras para diferentes demandas digitais. Com sólida base tecnológica e visão empreendedora, ele contribui para o avanço da transformação digital em diversos setores, desenvolvendo sistemas seguros, eficientes e alinhados às necessidades do usuário. Sua atuação é fundamental para a modernização de processos e a competitividade das organizações em um mercado cada vez mais conectado.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Desenvolvimento de Sistemas",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Informação, Informática e Inovação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Linguagens de Programação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Lógica de Programação e Algoritmos",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Administração e Sistemas",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Análise de Sistemas",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Desenvolvimento de Sistemas",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Desenvolvimento Mobile",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Desenvolvimento WEB",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Estrutura de Banco de Dados",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Gestão da Informação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Gestão de Banco de Dados",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Gestão de Projetos",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Metodologias Ágeis e Projetos",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Modelagem de Sistemas",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo IV",
        "disciplinas": [
          {
            "nome": "Redes e Comunicação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Segurança Digital",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Sistemas e Mapeamentos de Processos",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "WEB Design e Desenho Vetorial",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "50h",
            "total": "50h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-informatica",
    "nome": "Técnico em Informática",
    "area": "Tecnologia",
    "cargaHoraria": 1300,
    "duracaoMeses": 24,
    "parcelas": 19,
    "valorParcela": 140,
    "precoSiteAtual": "19x R$ 145,00",
    "imagem": "assets/cursos/tecnico-em-informatica.webp",
    "resumo": "O Curso Técnico em Informática tem como objetivo capacitar o aluno para atuar no desenvolvimento e na manutenção de soluções tecnológicas, seja no design de sistemas e aplicativos ou na administração de redes e hardware.",
    "oCurso": "<p>O Curso Técnico em Informática tem como objetivo capacitar o aluno para atuar no desenvolvimento e na manutenção de soluções tecnológicas, seja no design de sistemas e aplicativos ou na administração de redes e hardware.</p><p>O curso é voltado tanto para quem deseja atuar como desenvolvedor de software quanto para quem pretende trabalhar na administração de sistemas e redes. Ele combina teoria e prática, proporcionando uma base sólida para o aluno se inserir no mercado de tecnologia.</p>",
    "areaAtuacao": "<p>O Técnico em Informática pode atuar em uma ampla gama de áreas no setor de tecnologia da informação, tanto em empresas de TI quanto em organizações de outros setores que necessitam de suporte tecnológico. As principais áreas de atuação incluem:</p><ul><li>Desenvolvimento de Software: Criação de programas, sistemas e aplicativos para diferentes plataformas (desktop, web, mobile);</li></ul> <ul><li>Administração de Redes e Infraestrutura de TI: Gestão de redes de computadores, servidores e serviços de nuvem;</li></ul> <ul><li>Suporte Técnico e Atendimento ao Usuário: Assistência em sistemas e dispositivos, solucionando problemas técnicos e configurando dispositivos;</li></ul> <ul><li>Segurança da Informação: Proteção de dados e sistemas contra ameaças e ataques cibernéticos, incluindo o uso de ferramentas de firewall, criptografia e antivírus;</li></ul> <ul><li>Análise de Dados e Banco de Dados: Gerenciamento e análise de grandes volumes de dados para fornecer informações valiosas às empresas;</li></ul> <ul><li>Testes e Qualidade de Software: Realização de testes para garantir que os sistemas e aplicativos funcionem corretamente;</li></ul> <ul><li>Empreendedorismo: Desenvolvimento de soluções tecnológicas para startups ou empresas próprias, como consultorias e serviços de TI.</li></ul>",
    "oProfissional": "<p>O Técnico em Informática é um profissional essencial para o funcionamento das operações tecnológicas de qualquer organização. Ele se destaca por:</p><ul><li>Habilidades Técnicas: Conhecimento profundo em diversas linguagens de programação, redes de computadores, sistemas operacionais e hardware;</li></ul> <ul><li>Pensamento Analítico e Criativo: Capacidade de resolver problemas complexos e criar soluções inovadoras para desafios tecnológicos;</li></ul> <ul><li>Trabalho em Equipe: Habilidade para trabalhar com equipes multidisciplinares em projetos de desenvolvimento de sistemas, infraestrutura e segurança;</li></ul> <ul><li>Atenção aos Detalhes: Cuidado com a qualidade do código e o desempenho dos sistemas, buscando otimizar processos e reduzir falhas;</li></ul> <ul><li>Capacidade de Aprendizado Contínuo: Como a tecnologia está sempre em evolução, o profissional precisa estar disposto a aprender constantemente novas linguagens, ferramentas e práticas;</li></ul> <ul><li>Habilidade de Comunicação: Capacidade de traduzir soluções técnicas para uma linguagem compreensível aos usuários e stakeholders não técnicos.</li></ul> <p>Esse profissional é fundamental para as empresas que dependem de tecnologia para suas operações diárias, desde a criação de software até a implementação de soluções para problemas técnicos.</p><p>Esse profissional é essencial para o funcionamento eficiente de qualquer organização, desempenhando um papel fundamental na gestão e no sucesso dos negócios.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Informática",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Princípios da Utilização do Computador como Ferramenta de Trabalho e Pesquisa",
            "dist": "40h",
            "pres": "14h",
            "total": "54h"
          },
          {
            "nome": "Lógica de Programação e Algoritmos",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Banco de Dados",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Fundamentos da Informática",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Manutenção e Arquitetura de Computadores",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Redes e Comunicação",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Segurança Digital",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Análise de Sistemas",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Lógica de Programação",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Segurança da Informação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Técnica em Desenvolvimento e Projeto de Sistemas",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Gestão da Informação",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "Engenharia de Software",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Negócios Digitais e Comércio Eletrônico",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          }
        ]
      },
      {
        "titulo": "Módulo IV",
        "disciplinas": [
          {
            "nome": "Recursos Multimídia",
            "dist": "40h",
            "pres": "15h",
            "total": "55h"
          },
          {
            "nome": "Identidade Visual e Animação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Desenvolvimento Web",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Desenvolvimento Mobile",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Web Design e Desenho Vetorial",
            "dist": "40h",
            "pres": "30h",
            "total": "70h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "50h",
            "total": "50h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O Curso Técnico em Informática é uma excelente escolha para quem deseja trabalhar com tecnologia e está interessado em um campo com vastas oportunidades de emprego e crescimento. O setor de TI está em constante expansão, e as habilidades adquiridas durante o curso abrem portas para uma ampla gama de carreiras e projetos inovadores."
      }
    ]
  },
  {
    "slug": "tecnico-em-automacao-industrial",
    "nome": "Técnico em Automação Industrial",
    "area": "Indústria",
    "cargaHoraria": 1366,
    "duracaoMeses": 24,
    "parcelas": 19,
    "valorParcela": 160,
    "precoSiteAtual": "19x R$ 165,00",
    "imagem": "assets/cursos/tecnico-em-automacao-industrial.webp",
    "resumo": "O curso Técnico em Automação Industrial tem como objetivo capacitar profissionais para atuar no desenvolvimento, instalação, operação e manutenção de sistemas automatizados utilizados nos mais diversos segmentos da indústria.",
    "oCurso": "<p>O curso Técnico em Automação Industrial tem como objetivo capacitar profissionais para atuar no desenvolvimento, instalação, operação e manutenção de sistemas automatizados utilizados nos mais diversos segmentos da indústria. A formação integra conhecimentos de elétrica, eletrônica, informática e mecânica, preparando o estudante para compreender e aplicar tecnologias modernas que otimizam processos produtivos, aumentam a eficiência e garantem maior competitividade às empresas.</p>",
    "areaAtuacao": "<p>O Técnico em Automação Industrial pode atuar em indústrias de diversos setores, como automotivo, alimentício, químico, farmacêutico, siderúrgico, energético e de tecnologia. Suas funções incluem a operação e programação de controladores lógicos programáveis (CLPs), robôs industriais, sensores e sistemas de supervisão, além da implementação de projetos de automação e manutenção preventiva e corretiva de equipamentos.</p>",
    "oProfissional": "<p>O profissional formado em Automação Industrial é capaz de integrar diferentes áreas do conhecimento para propor soluções inovadoras e sustentáveis aos desafios da indústria moderna. Com visão crítica, raciocínio lógico e perfil inovador, ele desempenha papel estratégico na transformação digital do setor produtivo, garantindo processos mais ágeis, seguros e de qualidade.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Automação Industrial",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Informática Básica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Matemática Instrumental",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Empreendedorismo",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Eletricidade I",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Introdução à Segurança do Trabalho – NR10 e NR12",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Eletricidade II",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          },
          {
            "nome": "Instrumentação Eletrônica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Desenho Técnico",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Indústria 4.0",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Internet das Coisas (Sensores e Atuadores)",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Eletrônica I",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Investigação Científica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Comandos Elétricos e Acionamentos Eletrônicos",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Controladores Lógicos Programáveis",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Mediação e Intervenção Sociocultural",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Eletrônica II",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      },
      {
        "titulo": "Módulo IV",
        "disciplinas": [
          {
            "nome": "Metrologia",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Redes Industriais",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Robótica Industrial",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Sistemas Hidráulicos e Pneumáticos",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Sistemas Supervisórios e Redes",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "50h",
            "total": "50h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-eletrotecnica",
    "nome": "Técnico em Eletrotécnica",
    "area": "Indústria",
    "cargaHoraria": 1376,
    "duracaoMeses": 24,
    "parcelas": 19,
    "valorParcela": 160,
    "precoSiteAtual": "19x R$ 165,00",
    "imagem": "assets/cursos/tecnico-em-eletrotecnica.webp",
    "resumo": "O curso Técnico em Eletrotécnica tem como objetivo formar profissionais capacitados para atuar no planejamento, instalação, operação e manutenção de sistemas elétricos de baixa e média tensão.",
    "oCurso": "<p>O curso Técnico em Eletrotécnica tem como objetivo formar profissionais capacitados para atuar no planejamento, instalação, operação e manutenção de sistemas elétricos de baixa e média tensão. A formação abrange desde fundamentos de eletricidade, eletrônica e automação até normas de segurança e eficiência energética, proporcionando ao estudante uma base sólida e alinhada às exigências do setor elétrico.</p>",
    "areaAtuacao": "<p>O Técnico em Eletrotécnica pode atuar em concessionárias de energia, indústrias, empresas de engenharia elétrica, construtoras, órgãos públicos e prestadoras de serviços. Suas atividades incluem elaboração de projetos elétricos, supervisão de instalações, manutenção preventiva e corretiva, testes em sistemas elétricos, dimensionamento de circuitos e implementação de medidas de sustentabilidade energética.</p>",
    "oProfissional": "<p>O profissional formado em Eletrotécnica possui perfil técnico, organizado e comprometido com a segurança e a qualidade dos serviços prestados. Ele é capaz de desenvolver soluções eficientes para diferentes demandas, garantindo o funcionamento adequado e sustentável de sistemas elétricos. Sua atuação é essencial para a modernização da infraestrutura, a redução de custos energéticos e o fortalecimento da indústria e dos serviços ligados à eletricidade.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Eletrotécnica",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Matemática Instrumental",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Informática Básica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Empreendedorismo",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Introdução à Segurança do Trabalho NR10 e NR12",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Desenho Técnico",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Eletricidade I",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Instalações Elétricas Industriais",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Instalações Elétricas Prediais",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Instrumentação Industrial",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Máquinas Elétricas I",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Eletricidade II",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Automação Industrial",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Comandos Elétricos e Acionamentos Eletrônicos",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Geração, Transmissão e Distribuição de Energia",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Investigação Cientifica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Máquinas Elétricas II",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo IV",
        "disciplinas": [
          {
            "nome": "Mediação e Intervenção Sociocultural",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Metrologia",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Sistema Elétrico de Potência",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "60h",
            "total": "60h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-eletronica",
    "nome": "Técnico em Eletrônica",
    "area": "Indústria",
    "cargaHoraria": 1416,
    "duracaoMeses": 24,
    "parcelas": 19,
    "valorParcela": 160,
    "precoSiteAtual": "19x R$ 165,00",
    "imagem": "assets/cursos/tecnico-em-eletronica.webp",
    "resumo": "O curso Técnico em Eletrônica tem como objetivo capacitar profissionais para projetar, instalar, operar e realizar manutenção em sistemas e equipamentos eletrônicos.",
    "oCurso": "<p>O curso Técnico em Eletrônica tem como objetivo capacitar profissionais para projetar, instalar, operar e realizar manutenção em sistemas e equipamentos eletrônicos. A formação integra teoria e prática, com foco em circuitos, dispositivos, instrumentação, automação e novas tecnologias, preparando o estudante para atender às necessidades de um setor em constante inovação.</p>",
    "areaAtuacao": "<p>O Técnico em Eletrônica pode atuar em indústrias de diversos segmentos, empresas de telecomunicações, manutenção de equipamentos médicos e hospitalares, automação industrial, empresas de energia, laboratórios de pesquisa e assistência técnica. Suas funções incluem a análise de circuitos, montagem e reparo de sistemas eletrônicos, desenvolvimento de protótipos, programação de microcontroladores e suporte técnico especializado.</p>",
    "oProfissional": "<p>O profissional formado em Eletrônica possui perfil analítico, técnico e inovador, sendo capaz de desenvolver soluções eficazes para diferentes aplicações tecnológicas. Com uma visão voltada para a eficiência, segurança e qualidade, ele contribui para o avanço tecnológico e o fortalecimento da indústria. Sua atuação é estratégica para garantir o funcionamento e a modernização de equipamentos e sistemas eletrônicos em múltiplos setores.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Eletrônica",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Informática Básica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Matemática Instrumental",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Introdutório ao Curso de Eletrônica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Eletricidade I",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Introdução à Segurança do Trabalho – NR10 e NR12",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Eletricidade II",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Instrumentação Eletrônica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Desenho Técnico",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Lógica de Programação",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Internet das Coisas (Sensores e Atuadores)",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Eletrônica I",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Investigação Científica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Eletrônica de Potência",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Empreendedorismo",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Mediação e Intervenção Sociocultural",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Eletrônica II",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo IV",
        "disciplinas": [
          {
            "nome": "Metrologia",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Projeto de Circuitos e Placas",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Sistemas Digitais",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Sistemas Microprocessados",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "60h",
            "total": "60h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-agronegocio",
    "nome": "Técnico em Agronegócio",
    "area": "Ambiente e Agro",
    "cargaHoraria": 1286,
    "duracaoMeses": 24,
    "parcelas": 19,
    "valorParcela": 140,
    "precoSiteAtual": "19x R$ 145,00",
    "imagem": "assets/cursos/tecnico-em-agronegocio.webp",
    "resumo": "O curso Técnico em Agronegócio tem como objetivo formar profissionais preparados para atuar em todas as etapas da cadeia produtiva agrícola e pecuária, unindo conhecimento prático e teórico.",
    "oCurso": "<p>O curso Técnico em Agronegócio tem como objetivo formar profissionais preparados para atuar em todas as etapas da cadeia produtiva agrícola e pecuária, unindo conhecimento prático e teórico. Com uma formação atualizada, o estudante desenvolve competências para planejar, executar egerenciar atividades relacionadas à produção, comercialização esustentabilidade do setor, atendendo às demandas do mercado e às inovações do campo.</p>",
    "areaAtuacao": "<p>O profissional técnico em Agronegócio pode atuar em propriedades rurais, cooperativas, agroindústrias, empresas de assistência técnica, órgãos públicos e privados ligados ao setor agropecuário, além de empreender em seu próprio negócio. Sua atuação contempla o planejamento e gestão da produção, análise de custos, controle de qualidade, logística, comercialização de produtos, preservação ambiental e uso de tecnologias aplicadas ao campo.</p>",
    "oProfissional": "<p>O Técnico em Agronegócio é um profissional dinâmico, com visão estratégica e empreendedora, capaz de integrar os conhecimentos da agricultura, pecuária, administração e tecnologia. Ele contribui para o fortalecimento do setor agropecuário, promovendo práticas sustentáveis, aumento da produtividade e melhoria da qualidade dos produtos. Preparado para enfrentar desafios, o profissional formado possui um papel fundamental no desenvolvimento econômico e social do país, especialmente em regiões com forte vocação agrícola.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Agronegócio",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Administração Rural",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Agricultura Familiar",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Assistência Técnica e Extensão Rural",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Associativismo Rural",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Contabilidade Rural",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Custos no Agronegócio",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Economia Rural",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Fundamentos de Produção e Logística",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Gestão de Resíduos Sólidos",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Legislação Agrária e Ambiental",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Manejo e Recuperação Ambiental",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Marketing Aplicado",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Marketing de Produtos e Serviços",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Mudanças Climáticas e Poluição Atmosférica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo IV",
        "disciplinas": [
          {
            "nome": "Qualidade e Desempenho",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Qualidade e Segurança Alimentar",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Técnicas de Reprodução Animal",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Tecnologia e Inovação em Agropecuária",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Turismo Rural",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "50h",
            "total": "50h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-meio-ambiente",
    "nome": "Técnico em Meio Ambiente",
    "area": "Ambiente e Agro",
    "cargaHoraria": 1376,
    "duracaoMeses": 24,
    "parcelas": 19,
    "valorParcela": 140,
    "precoSiteAtual": "19x R$ 145,00",
    "imagem": "assets/cursos/tecnico-em-meio-ambiente.webp",
    "resumo": "O curso Técnico em Meio Ambiente tem como objetivo formar profissionais capacitados para atuar na preservação, recuperação e gestão sustentável dos recursos naturais.",
    "oCurso": "<p>O curso Técnico em Meio Ambiente tem como objetivo formar profissionais capacitados para atuar na preservação, recuperação e gestão sustentável dos recursos naturais. A formação integra conhecimentos de ecologia, legislação ambiental, educação ambiental, monitoramento de impactos e tecnologias sustentáveis, preparando o estudante para planejar e implementar ações que promovam o equilíbrio ambiental em diferentes contextos.</p>",
    "areaAtuacao": "<p>O Técnico em Meio Ambiente pode atuar em órgãos públicos, empresas privadas, consultorias ambientais, indústrias, ONGs, unidades de conservação e projetos de pesquisa. Suas funções incluem monitoramento e análise ambiental, gestão de resíduos, licenciamento ambiental, educação e conscientização ambiental, planejamento de programas sustentáveis e execução de projetos de conservação e recuperação de ecossistemas.</p>",
    "oProfissional": "<p>O profissional formado em Meio Ambiente possui perfil analítico, ético e comprometido com a sustentabilidade. Com habilidades para identificar problemas ambientais e propor soluções práticas, ele contribui para a preservação dos recursos naturais, para a conscientização da sociedade e para o desenvolvimento sustentável de organizações e comunidades. Sua atuação é fundamental para promover práticas ambientalmente responsáveis em diversos setores da sociedade.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Introdução ao Curso de Formação Técnica Profissional e as Relações com o Mercado de Trabalho em Técnico em Meio Ambiente",
            "dist": "20h",
            "pres": "-",
            "total": "20h"
          },
          {
            "nome": "Formação Inicial em Educação à Distância",
            "dist": "56h",
            "pres": "-",
            "total": "56h"
          },
          {
            "nome": "Cidades e Ecossistemas",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Economia Ambiental",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Educação Ambiental",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Empreendedorismo",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Ética e Cidadania",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Avaliação de Risco e Impacto Ambiental",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Fontes de Produções de Energia",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Gestão de Resíduos Sólidos I",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Gestão de Resíduos Sólidos II",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Legislação Ambiental e PPRA",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Manejo e Recuperação Ambiental",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Mudanças Climáticas e Poluição Atmosférica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Produção e Desenvolvimento Sustentável",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Projetos de Ecologia e Ciências Ambientais",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Investigação Cientifica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Química Ambiental",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          }
        ]
      },
      {
        "titulo": "Módulo IV",
        "disciplinas": [
          {
            "nome": "Saneamento Ambiental e Sustentabilidade",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Tratamento de Efluentes",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Turismo Ecológico",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "60h",
            "total": "60h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  },
  {
    "slug": "tecnico-em-enfermagem",
    "nome": "Técnico em Enfermagem",
    "area": "Saúde",
    "cargaHoraria": 1840,
    "duracaoMeses": 30,
    "parcelas": 24,
    "valorParcela": 180,
    "precoSiteAtual": "24x R$ 185,00",
    "imagem": "assets/cursos/tecnico-em-enfermagem.webp",
    "resumo": "O curso Técnico em Enfermagem tem como objetivo formar profissionais qualificados para prestar assistência integral à saúde, atuando na promoção, prevenção, recuperação e reabilitação dos indivíduos e comunidades.",
    "oCurso": "<p>O curso Técnico em Enfermagem tem como objetivo formar profissionais qualificados para prestar assistência integral à saúde, atuando na promoção, prevenção, recuperação e reabilitação dos indivíduos e comunidades. A formação une teoria e prática em disciplinas de anatomia, fisiologia, farmacologia, biossegurança e técnicas de enfermagem, preparando o estudante para atuar de forma ética, humanizada e segura nos diferentes níveis de atenção à saúde.</p>",
    "areaAtuacao": "<p>O Técnico em Enfermagem pode atuar em hospitais, clínicas, unidades básicas de saúde, laboratórios, serviços de urgência e emergência, home care, instituições de longa permanência e empresas de saúde ocupacional. Suas atividades incluem prestar cuidados diretos aos pacientes, administrar medicamentos, realizar procedimentos de enfermagem, auxiliar em exames e cirurgias, acompanhar a evolução clínica e promover ações educativas em saúde.</p>",
    "oProfissional": "<p>O profissional formado em Enfermagem é comprometido, responsável e preparado para trabalhar em equipe multiprofissional, sempre priorizando a dignidade e o bem-estar do paciente. Com competências técnicas e postura ética, contribui para a qualidade do atendimento em saúde e para a valorização da vida, sendo peça fundamental no funcionamento dos serviços de saúde públicos e privados.</p>",
    "modulos": [
      {
        "titulo": "Módulo I",
        "disciplinas": [
          {
            "nome": "Ética, Legislação e Bioética em Enfermagem",
            "dist": "40h",
            "pres": "-",
            "total": "40h"
          },
          {
            "nome": "Fundamentos de Enfermagem",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Segurança do Paciente, Biossegurança e Educação para o Autocuidado",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "História da Enfermagem",
            "dist": "40h",
            "pres": "-",
            "total": "40h"
          },
          {
            "nome": "Informática Básica",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Língua Portuguesa",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          },
          {
            "nome": "Matemática Básica",
            "dist": "-",
            "pres": "40h",
            "total": "40h"
          }
        ]
      },
      {
        "titulo": "Módulo II",
        "disciplinas": [
          {
            "nome": "Anatomia e Fisiologia Humana",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Microbiologia e Parasitologia",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Enfermagem em Saúde Coletiva",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Introdução a Enfermagem e Organização do Processo de Trabalho",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Práticas de Primeiros Socorros",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Samu e o Atendimento de Emergência",
            "dist": "-",
            "pres": "20h",
            "total": "20h"
          }
        ]
      },
      {
        "titulo": "Módulo III",
        "disciplinas": [
          {
            "nome": "Psicologia Aplicada à Saúde",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Gestão dos Serviços de Saúde e Enfermagem",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Atendimento Domiciliar",
            "dist": "40h",
            "pres": "20h",
            "total": "60h"
          },
          {
            "nome": "Nutrição e Farmacologia nos Ciclos de Vida",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Assistência de Enfermagem em Bloco Operatório",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Assistência de Enfermagem em Saúde Mental",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Estágio Supervisionado I",
            "dist": "-",
            "pres": "100h",
            "total": "100h"
          }
        ]
      },
      {
        "titulo": "Módulo IV",
        "disciplinas": [
          {
            "nome": "Assistência de Enfermagem em Situações Clínicas e Cirurgias no Adulto e Idoso",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Estágio Supervisionado II",
            "dist": "-",
            "pres": "100h",
            "total": "100h"
          },
          {
            "nome": "Assistência de Enfermagem em Unidade de Terapia Intensiva",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Assistência de Enfermagem em Urgência e Emergência",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Assistência de Enfermagem na Saúde da Mulher, Criança e Adolescente",
            "dist": "40h",
            "pres": "40h",
            "total": "80h"
          },
          {
            "nome": "Estágio Supervisionado III",
            "dist": "-",
            "pres": "100h",
            "total": "100h"
          },
          {
            "nome": "TCC – Trabalho de Conclusão de Curso",
            "dist": "-",
            "pres": "60h",
            "total": "60h"
          }
        ]
      }
    ],
    "faq": [
      {
        "pergunta": "Para quem é o curso técnico?",
        "resposta": "O curso é uma excelente opção para quem deseja ingressar rapidamente no mercado de trabalho ou se preparar para empreender com solidez e competência."
      }
    ]
  }
];
