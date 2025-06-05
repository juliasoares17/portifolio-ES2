async function inserts(con) {
        try {
            const certificados = [
      [
        'Alura',
        'Duração: De 24/01/2025 a 03/02/2025',
        'Por meio deste evento, tive a oportunidade de aprimorar minhas habilidades em HTML e CSS e de ter meus primeiros contatos com a linguagem JavaScript, por meio da criação guiada de uma réplica do Spotify.',
        '/img/certificadoAlura.png',
        '/certificados/certificadoAlura.pdf'
      ],
      [
        'Hashtag Treinamentos',
        'Duração: De 13/01/2025 a 16/01/2025',
        'Durante a Jornada Python, aprendi mais sobre o potencial do Python e desenvolvi quatro projetos: um automatizador de tarefas, uma análise de cancelamentos de clientes, uma IA para previsões e um chat ao vivo.',
        '/img/certificadoHashtag.png',
        '/certificados/certificadoHashtag.pdf'
      ],
      [
        'Senai "Santos Dumont"',
        'Duração: De 14/06/2023 a 03/07/2023',
        'Estudando o conteúdo deste curso, aprimorei minha compreensão acerca de conceitos como representações de algoritmos, tipos de dados, variáveis indexadas, expressões aritméticas, literais e lógicas e estruturas de repetição e condição.',
        '/img/certificadoSenai.png',
        '/certificados/certificadoSenai.pdf'
      ]
    ];

    for (const cert of certificados) {
      const [existing] = await con.query(
        `SELECT id FROM certificados WHERE pdf_certificado = ?`, [cert[4]]
      );

      if (existing.length === 0) {
        await con.query(`
          INSERT INTO certificados (instituicao, duracao, descricao, imagem_certificado, pdf_certificado) 
          VALUES (?, ?, ?, ?, ?)`, cert
        );
        console.log(`✅ Certificado '${cert[0]}' inserido com sucesso!`);
      } else {
        console.log(`ℹ️ Certificado '${cert[0]}' já existe, pulando inserção.`);
      }
    }

     const projetos = [
      [
        'Mestre Ágil',
        'Projeto acadêmico do primeiro semestre de Análise e Desenvolvimento de Sistemas.',
        'Problema abordado: Os profissionais da empresa do cliente enfrentavam dificuldades para compreender e aplicar os princípios do SCRUM no ambiente de trabalho. O “Mestre Ágil” foi desenvolvido para resolver esse problema, oferecendo uma plataforma didática e interativa que simula a aplicação real da metodologia.',
        'Desafios enfrentados: Organizar um grande volume de conteúdo de forma clara, intuitiva e escalável, além de garantir um sistema de avaliação eficaz com feedback imediato e relatórios de progresso.',
        'Soluções adotadas: A adoção da própria metodologia SCRUM foi essencial para a organização e o progresso do projeto, com entregas contínuas e ajustes rápidos a partir de revisões frequentes. As tarefas foram bem distribuídas entre a equipe, garantindo foco e organização. Tecnologias como Flask, SQLite, Bootstrap e AWS foram essenciais para construir uma plataforma funcional, escalável e visualmente atrativa.',
        'Aprendizados obtidos: A equipe aprimorou tanto competências técnicas (como desenvolvimento fullstack e deploy) quanto interpessoais, como comunicação, autogestão e trabalho em equipe. O projeto também reforçou a importância do planejamento incremental e do feedback contínuo.',
        '/img/logo_API_1.png',
        'https://github.com/Titus-System/1Semestre-ADS',
        '16rem'
      ],
      [
        'IdScan',
        'Projeto acadêmico do segundo semestre de Análise e Desenvolvimento de Sistemas.',
        'Problema abordado: Empresas lidam com bilhões de informações todos os dias, e lidar com essas grandes quantidades manualmente acaba sendo demorado e massante. Diante desse problema, o IdScan surge como uma solução eficiente e offline para extrair e digitalizar informações de RGs por meio de inteligência artificial e OCR, permitindo edição e armazenamento local em um banco relacional.',
        'Desafios enfrentados: Criar uma aplicação 100% local, sem dependência de serviços externos, garantir que o processamento de imagens e a extração de dados fossem precisos e integrar o uso de IA, OCR e banco de dados MySQL de forma fluida.',
        'Soluções adotadas: Utilização da metodologia SCRUM novamente, para facilitar testes e melhorias contínuas, integração com o Ollama para a execução de modelos de linguagem e visão localmente, uso do Tesseract OCR para leitura de textos em imagens e implementação de processamento assíncrono para melhor experiência do usuário.',
        'Aprendizados obtidos: No desenvolvimento do IdScan, pude aprender a integrar IA, OCR e banco de dados local de forma funcional e eficiente, além de me aventurar pelo desenvolvimento de interfaces com Scene Builder. Desenvolver algo cujo processamento fosse 100% offline certamente foi uma experiência diferenciada.',
        '/img/logo_API_2.png',
        'https://github.com/Titus-System/2semestre-ADS',
        '23rem'
      ],
      [
        'InsightFlow',
        'Projeto acadêmico do terceiro semestre de Análise e Desenvolvimento de Sistemas. (em desenvolvimento)',
        'Problema abordado: A tomada de decisões no setor de logística e comércio exterior é dificultada pela dispersão e complexidade dos dados, além da falta de ferramentas analíticas eficazes. O InsightFlow surge como uma plataforma centralizada e interativa, que organiza essas informações de forma acessível e oferece recursos para facilitar sua análise.',
        'Desafios enfrentados: O InsightFlow enfrenta desafios como integrar uma base de dados nacional extensa com precisão, criar visualizações interativas e filtros avançados, além de estruturar um banco de dados robusto. E tudo isso enquanto a equipe ainda se adapta ao uso do React.',
        'Soluções adotadas: Adotamos um banco de dados relacional em MySQL para garantir precisão e flexibilidade na análise dos dados. As visualizações estão sendo desenvolvidas com bibliotecas compatíveis com React, como Recharts e react-geojson. A equipe segue com a metodologia SCRUM e vem se adaptando ao React de forma gradual, com tarefas bem distribuídas entre front e back-end.',
        'Aprendizados obtidos: O desenvolvimento do Insight Flow vem proporcionando um profundo entendimento sobre a aplicação de dados em contextos reais de negócio. A equipe aprendeu a lidar com grandes volumes de dados de forma estruturada, a implementar inteligência de dados de maneira acessível e a criar soluções visuais úteis para públicos não técnicos.',
        '/img/logo_API_3.png',
        'https://github.com/Titus-System/InsightFlow',
        '22rem'
      ],
      [
        'PSW-12',
        'Conjunto de projetos desenvolvidos durante um curso de Python e Django.',
        'Problema abordado: O evento Pystack Week-12 propôs resolver desafios cotidianos com Python. Trabalhei em soluções para organização pessoal, como o controle de assinaturas e o registro de experiências, transformando essas demandas em aplicações funcionais com backend, visualização de dados e Django.',
        'Desafios enfrentados: Durante o desenvolvimento dos projetos, lidei com vários conceitos novos, como a geração de gráficos visuais com bibliotecas Python e o próprio uso do framework Django, o que exigiu um esforço extra para compreender sua estrutura. Também estou trabalhando na melhoria da usabilidade das aplicações, tanto visual quanto funcionalmente.',
        'Soluções adotadas: Para superar os desafios, acompanhei atentamente as aulas e segui aplicando os conceitos estudados para resolver problemas que surgiram ao longo do desenvolvimento. Quanto às melhorias que estou aplicando aos projetos, estou pesquisando para proporcionar uma visualização melhor dos dados do primeiro projeto e personalizar o visual do segundo, além de estar pensando em possíveis funcionalidades novas para tornar as aplicações mais completas.',
        'Aprendizados obtidos: Durante o evento, aprofundei meu conhecimento em Python e conheci ferramentas importantes para projetos completos, como SQLModel e Matplotlib. Além disso, o contato com Django me introduziu a novas possibilidades para construir aplicações web escaláveis e organizadas.',
        '/img/logo_PSW.png',
        'https://github.com/juliasoares17/PSW-12',
        '27rem'
      ]
    ];

    for (const projeto of projetos) {
      const [existing] = await con.query(
        `SELECT id FROM projetos WHERE github_projeto = ?`, [projeto[7]]
      );

      if (existing.length === 0) {
        await con.query(`
          INSERT INTO projetos (titulo, legenda, descricao_problema, descricao_desafios, descricao_solucoes, descricao_aprendizados, imagem_projeto, github_projeto, largura_imagem) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, projeto
        );
        console.log(`✅ Projeto '${projeto[0]}' inserido com sucesso!`);
      } else {
        console.log(`ℹ️ Projeto '${projeto[0]}' já existe, pulando inserção.`);
      }
    }

        } catch (error) {
            console.error("Erro ao inserir dados:", error);
        }
    }

module.exports = { inserts };