/* ============================================================
   js/projetos.js — DADOS dos projetos (nenhuma lógica aqui)
   ============================================================
   Quem transforma isto em cards, filtro e modal é o js/main.js.

   Cada item de "projetos" (um objeto entre { }) é um repositório:
   - id, nome, descricao
   - tecnologias: lista de textos. Os 8 que têm botão de filtro no
     index.html (HTML, CSS, JavaScript, Python, C, SQL, MySQL, Bootstrap)
     precisam estar escritos IGUAL. Tags extras (ex.: "GitHub Actions")
     aparecem no card, mas não têm botão de filtro.
   - imagem e imagemAlt: capa do card (img/projetos/) e o texto alternativo dela
   - repositorio: link do repositório; demo: site publicado ("" se não houver)
   - subprojetos: lista de { nome, link, descricao (opcional), demo (opcional) }

   A ordem da lista é a ordem dos cards: o que está mais pronto vem primeiro.
   Leia cada descrição e ajuste ao que o código realmente faz. As marcadas
   com CONFIRA foram escritas sem eu ver o repositório.
   ============================================================ */

const projetos = [
  {
    id: "steam-price-tracker",
    nome: "Steam Price Tracker",
    descricao: "Automação em Python que consulta a API da Steam, compara com o histórico salvo em JSON e avisa pelo Telegram quando um jogo sobe ou cai de preço. Roda agendada no GitHub Actions e tem comandos de bot para gerenciar a lista de jogos.",
    tecnologias: ["Python", "GitHub Actions", "Telegram API"],
    imagem: "img/projetos/steam-price-tracker.webp",
    imagemAlt: "Código Python do rastreador de preços e, no canto, a notificação do Telegram avisando a queda de preço de um jogo",
    repositorio: "https://github.com/pietrobitencourt/steam-price-tracker",
    demo: "",
    subprojetos: []
  },

  {
    id: "front-end-web-development",
    nome: "Desenvolvimento Front-End para Web",
    descricao: "Quatro sites feitos na disciplina: dois só com HTML e CSS e dois com Bootstrap, usando carrossel, accordion e modal.",
    tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    imagem: "img/projetos/front-end-web-development.webp",
    imagemAlt: "Página inicial do site Dia Mundial dos Animais, com carrossel e a foto de um cachorro",
    repositorio: "https://github.com/pietrobitencourt/front-end-web-development",
    demo: "",
    subprojetos: [
      {
        nome: "PetShop Taguatinga",
        descricao: "Site de uma pet shop com galeria de fotos, mapa e contato, só com HTML e CSS.",
        link: "https://github.com/pietrobitencourt/front-end-web-development/tree/main/01-petshop-taguatinga"
      },
      {
        nome: "Picos do Brasil",
        descricao: "Site sobre os 7 picos mais altos do Brasil, só com HTML e CSS.",
        link: "https://github.com/pietrobitencourt/front-end-web-development/tree/main/02-picos-do-brasil"
      },
      {
        nome: "Recanto News",
        descricao: "Portal de notícias com Bootstrap e Font Awesome.",
        link: "https://github.com/pietrobitencourt/front-end-web-development/tree/main/03-recanto-news"
      },
      {
        nome: "Dia Mundial dos Animais",
        descricao: "Site em Bootstrap com carrossel, accordion e modal, feito em dupla.",
        link: "https://github.com/pietrobitencourt/front-end-web-development/tree/main/04-dia-mundial-animais"
      }
      // TODO (depois): o próprio portfólio entra aqui como 05-portfolio
    ]
  },

  {
    id: "projetos-criativos",
    nome: "Projetos Criativos",
    descricao: "Experimentos visuais feitos com código. O primeiro, “Coração”, forma um coração com frases de “eu te amo” em vários idiomas, em versão Python (turtle) e em versão web publicada no GitHub Pages.", // CONFIRA
    tecnologias: ["HTML", "CSS", "JavaScript", "Python"],
    imagem: "img/projetos/projetos-criativos.png",
    imagemAlt: "Coração formado por frases de “eu te amo” em vários idiomas, em tons de vermelho e laranja sobre fundo preto",
    repositorio: "https://github.com/pietrobitencourt/projetos-criativos",
    demo: "https://pietrobitencourt.github.io/projetos-criativos/",
    subprojetos: [
      {
        nome: "Coração",
        descricao: "Coração formado por frases em vários idiomas.",
        link: "https://github.com/pietrobitencourt/projetos-criativos/tree/main/coracao",
        demo: "https://pietrobitencourt.github.io/projetos-criativos/coracao/"
      }
    ]
  },

  {
    id: "database-modeling",
    nome: "Modelagem de Banco de Dados",
    descricao: "Trabalhos da disciplina de Modelagem de Dados: diagramas MER/DER no BRModelo, script DDL de uma locadora, DML do sistema Fórmula 1 em MySQL e o projeto final de um sistema de delivery de restaurante (MER, DER no Workbench e script SQL).",
    tecnologias: ["SQL", "MySQL", "BRModelo"],
    imagem: "img/projetos/database-modeling.webp",
    imagemAlt: "Diagrama entidade-relacionamento do sistema de delivery de restaurante, feito no BRModelo",
    repositorio: "https://github.com/pietrobitencourt/database-modeling",
    demo: "",
    subprojetos: [
      {
        nome: "Lista MER/DER",
        descricao: "Lista de 7 partes de diagramas entidade-relacionamento no BRModelo.",
        link: "https://github.com/pietrobitencourt/database-modeling/tree/main/01-lista-mer-der"
      },
      {
        nome: "Reserva de carros (DDL)",
        descricao: "Script DDL do sistema de reservas de uma locadora de carros.",
        link: "https://github.com/pietrobitencourt/database-modeling/tree/main/02-reserva-carros-ddl"
      },
      {
        nome: "Sistema Fórmula 1 (DML)",
        descricao: "Banco, tabelas, registros e consultas no MySQL Workbench, em grupo.",
        link: "https://github.com/pietrobitencourt/database-modeling/tree/main/03-dml-formula1"
      },
      {
        nome: "Projeto final: delivery de restaurante",
        descricao: "Modelo conceitual (MER), modelo lógico (DER) e script SQL de um sistema de delivery.",
        link: "https://github.com/pietrobitencourt/database-modeling/tree/main/04-projeto-final-delivery-restaurante"
      }
    ]
  },

  {
    id: "algoritmos-pensamento-computacional",
    nome: "Algoritmos e Pensamento Computacional",
    descricao: "Programas em C e fluxogramas da disciplina: calculadora, operações com arrays, cadastro de equipamentos em arquivo TXT, painel de senhas de uma clínica e monitoramento de temperatura.",
    tecnologias: ["C", "Flowgorithm"],
    imagem: "img/projetos/algoritmos-pensamento-computacional.webp",
    imagemAlt: "Terminal com o menu do sistema de senhas de uma clínica",
    repositorio: "https://github.com/pietrobitencourt/desenvolvimento-de-algoritmo-e-pensamento-computacional",
    demo: "",
    subprojetos: [
      {
        nome: "Calculadora em C",
        descricao: "Calculadora com 20 funções, portada do Flowgorithm para C.",
        link: "https://github.com/pietrobitencourt/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/Calculadora_em_C"
      },
      {
        nome: "Array e vetor",
        descricao: "Operações sobre um array de 20 inteiros.",
        link: "https://github.com/pietrobitencourt/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/array-vetor"
      },
      {
        nome: "Cadastro de equipamentos",
        descricao: "Cadastro e listagem de equipamentos com menu, salvos em arquivo TXT.",
        link: "https://github.com/pietrobitencourt/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/cadastro-equipamentos"
      },
      {
        nome: "Calculadora no Flowgorithm",
        descricao: "Versão em fluxograma da calculadora com 20 funções.",
        link: "https://github.com/pietrobitencourt/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/calculadora-flowgorithm"
      },
      {
        nome: "Clínica de senhas",
        descricao: "Painel de chamada com filas Urgente, Preferencial e Normal.",
        link: "https://github.com/pietrobitencourt/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/clinica-senhas"
      },
      {
        nome: "Desafio de monitoramento",
        descricao: "Monitoramento da temperatura de uma máquina industrial, com limite e relatório final.",
        link: "https://github.com/pietrobitencourt/desenvolvimento-de-algoritmo-e-pensamento-computacional/tree/main/desafio-monitoramento"
      }
    ]
  },

  {
    id: "tracker-candidaturas",
    nome: "Tracker de Candidaturas",
    descricao: "Projeto full stack em desenvolvimento para organizar minhas candidaturas de estágio em um quadro kanban.",
    tecnologias: ["Python", "MySQL", "JavaScript"],
    imagem: "img/projetos/tracker-candidaturas.webp",
    imagemAlt: "Capa do projeto Tracker de Candidaturas",
    repositorio: "https://github.com/pietrobitencourt/tracker-candidaturas",
    demo: "",
    subprojetos: []
  },

  {
    id: "python-logic-exercises",
    nome: "Exercícios de Lógica em Python",
    descricao: "Listas de exercícios em Python sobre funções, estruturas de dados, laços e condicionais, publicadas aos poucos.",
    tecnologias: ["Python"],
    imagem: "img/projetos/python-logic-exercises.webp",
    imagemAlt: "Capa do projeto Exercícios de Lógica em Python",
    repositorio: "https://github.com/pietrobitencourt/python-logic-exercises",
    demo: "",
    subprojetos: []
  },

  {
    id: "kaprekar-python",
    nome: "Constante de Kaprekar",
    descricao: "Implementação em Python do algoritmo da constante de Kaprekar (6174): repete a subtração entre o maior e o menor número formados pelos dígitos até convergir.", // CONFIRA
    tecnologias: ["Python"],
    imagem: "img/projetos/kaprekar-python.webp",
    imagemAlt: "Capa do projeto Constante de Kaprekar",
    repositorio: "https://github.com/pietrobitencourt/kaprekar-python",
    demo: "",
    subprojetos: []
  }
];