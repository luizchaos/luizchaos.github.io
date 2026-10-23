/*
 * All site copy lives here, one object per language.
 * Static strings are bound through [data-i18n="key"] in index.html;
 * lists (impact, experience, projects, education) are rendered by main.js.
 */
window.CONTENT = {
  en: {
    meta: {
      title: "Luiz Henrique Carvalho · Senior Software Engineer",
      description:
        "Senior Software Engineer in Recife, Brazil. Backend, microservices, distributed systems, Kubernetes and DevOps.",
    },
    nav: {
      about: "About",
      impact: "Impact",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Senior Software Engineer",
      tagline:
        "Backend, microservices and distributed systems. I like owning a service from the architecture diagram all the way to the Grafana dashboard.",
      ctaContact: "Get in touch",
      ctaProjects: "See projects",
      location: "Recife, Brazil",
      available: "Open to opportunities",
    },
    about: {
      title: "About me",
      p1: "I'm a Software Engineer at CESAR in Recife, Brazil, with 10+ years building software, from public-sector systems for the State of Pernambuco to global Lenovo platforms that manage millions of servers.",
      p2: "My focus is backend development, microservices, distributed systems and DevOps. I help shape architecture decisions, build CI/CD pipelines, run Kubernetes on bare metal and design asynchronous workflows. I regularly step in as Tech Lead, have served as Scrum Master for globally distributed teams, and work in English every day.",
      facts: [
        ["Role", "Senior Software Engineer"],
        ["Company", "CESAR · Lenovo projects"],
        ["Focus", "Backend · Distributed Systems · DevOps"],
        ["Languages", "Portuguese (native) · English (advanced)"],
      ],
    },
    impact: {
      title: "Impact highlights",
      items: [
        { value: "days → <1h", label: "Firmware & driver build and packaging time, enabling updates for millions of Lenovo servers worldwide" },
        { value: "2h → 30min", label: "ServiceNow ↔ XClarity One sync, by batching requests (up to 200 devices) and adding caching" },
        { value: "~25%", label: "Of the original device sync processing time" },
        { value: "5,000", label: "Devices per XClarity One Hub supported by the platform I contributed to" },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "CESAR",
          role: "Software Engineer",
          period: "Oct 2020 – Present",
          projects: [
            {
              name: "Lenovo Labrador",
              summary: "Firmware & driver build automation for Lenovo servers",
              bullets: [
                "Took part in architecture decisions and built Python/Flask microservices and their REST APIs",
                "Integrated with the GitHub GraphQL API to detect new drivers and trigger the build workflow",
                "Set up a bare-metal Kubernetes cluster with kubeadm: CNI, Ingress, Volumes and Autoscaling",
                "Designed a KVM-based Linux driver build system, automated with Flask and Paramiko",
                "Built CI/CD with Jenkins, Nexus and Ansible, one pipeline per microservice",
                "Grafana/Prometheus dashboards, Graylog logging, Control-M jobs, unit and smoke tests",
                "Result: build & packaging went from days to under 1 hour",
              ],
            },
            {
              name: "Atlas / Lenovo XClarity One",
              summary: "Global server management, analytics & failure prediction",
              bullets: [
                "Built microservices with Python/FastAPI and Node.js/Express in a globally distributed team",
                "Asynchronous processing with RabbitMQ, including memory failure prediction workflows",
                "Microservice owner: reviewed Merge Requests and made technical decisions",
                "Designed a ServiceNow app with two-way integration (devices, events, incidents), secured with JWT, API Keys and RBAC",
                "Batching and caching cut sync from ~2h to 30min (~25% of the original time)",
                "Served as Scrum Master: Planning, Refinement and Scrum of Scrums",
              ],
            },
            {
              name: "Jabil · Market Intelligence",
              summary: "Finding potential new customers with data",
              bullets: [
                "Data extraction, exploratory analysis, Decision Trees and Random Forest models",
                "Dashboards with a Django backend and an Angular frontend",
              ],
            },
            {
              name: "Plataforma Jovem · Caixa Econômica Federal",
              summary: "Banking MVP for users aged 12 to 17",
              bullets: [
                "Financial education and parental control features",
                "Angular frontend, Spring Boot backend, later migrated to Quarkus",
              ],
            },
          ],
        },
        {
          company: "Pitang Consultoria e Sistemas",
          role: "Software Developer",
          period: "Jun 2019 – Sep 2020",
          projects: [
            {
              name: "Pernambuco State Department of Education",
              summary: "Public services for citizens and public servants",
              bullets: [
                "Built Cartão Alimentação, Educa-PE, PE no Campus and Ganhe o Mundo",
                "Worked on Educa-PE as public schools moved online during COVID-19",
                "ETL with Pentaho Data Integration, DevOps and database work",
                "Stack: C#, Docker, Linux/Windows Server, TFS, IIS, Jenkins",
              ],
            },
          ],
        },
        {
          company: "Office of the Comptroller General of Pernambuco (SCGE-PE)",
          role: "Systems Development Support Coordinator",
          period: "2016 – 2019",
          projects: [
            {
              name: "Transparency Portal & Ombudsman Office",
              summary: "Public transparency for the State of Pernambuco",
              bullets: [
                "Dashboards and automated ETL for the Transparency Portal (thousands of daily visits)",
                "Helped modernize the state's transparency platform",
                "Built and supported tools for the state's ombudsman network",
                "Stack: Java, Python, JavaScript, PHP, Pentaho",
              ],
            },
          ],
        },
        {
          company: "PERPART",
          role: "Software Developer · IT Support Intern",
          period: "2015 – 2016",
          projects: [
            {
              name: "SISRF · Land Regularization System",
              summary: "For the Meu Imóvel Legal program",
              bullets: [
                "Built SISRF with PHP and JavaScript",
                "Supported Linux and Windows Server environments, automated tasks with Bash",
              ],
            },
          ],
        },
      ],
    },
    projects: {
      title: "Open source projects",
      subtitle: "A selection from my GitHub.",
      viewAll: "View all repositories",
      code: "Code",
      items: {
        "desktop-agent": "MCP server that lets Claude Desktop act on Windows: Playwright for the browser, UI Automation for the desktop, with a kill switch and safety rules. Long-term goal: NVDA screen reader integration.",
        tcc: "Final paper: prediction algorithms applied to Pernambuco ombudsman data.",
        "capvideo-bot": "Telegram bot that processes video, photo and text messages in real time. Dockerized, with structured logging.",
        "transactions-routine": "REST API for card accounts and transactions (purchases, withdrawals, payments) with Docker Compose and MySQL.",
        TelegramStatusBot: "Monitors a list of websites and sends a Telegram alert when any of them goes down.",
        "git-merge-request": "CLI tool to open GitLab Merge Requests straight from the terminal.",
      },
    },
    skills: {
      title: "Tech stack",
      groups: {
        languages: "Languages",
        backend: "Backend & Frameworks",
        devops: "Containers, Cloud & DevOps",
        observability: "Messaging & Observability",
        data: "Databases & Data",
        infra: "Infrastructure",
        practices: "Security & Practices",
      },
    },
    education: {
      title: "Education & certifications",
      items: [
        { title: "B.Sc. in Information Systems", org: "UFRPE · 2021" },
        { title: "Technical Degree in IT (Programming & Networking)", org: "Leiaut Carielo · 2016" },
        { title: "AI for Developers", org: "CESAR School" },
        { title: "Google Cloud Fundamentals", org: "Google Cloud" },
        { title: "Pentaho CE: Advanced Tools (PDI, CTools, PWS)", org: "Pentaho" },
      ],
    },
    contact: {
      title: "Let's talk",
      text: "I'm always happy to talk about backend architecture, Kubernetes, distributed systems or new opportunities.",
      email: "Email me",
      copy: "Copy email",
      copied: "Copied!",
    },
    footer: {
      built: "Built with plain HTML, CSS and JavaScript.",
    },
    ui: {
      toggleTheme: "Toggle theme",
      toggleLang: "Ver em português",
      menu: "Menu",
      skip: "Skip to content",
    },
  },

  pt: {
    meta: {
      title: "Luiz Henrique Carvalho · Engenheiro de Software Sênior",
      description:
        "Engenheiro de Software Sênior em Recife. Backend, microsserviços, sistemas distribuídos, Kubernetes e DevOps.",
    },
    nav: {
      about: "Sobre",
      impact: "Impacto",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Stack",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      role: "Engenheiro de Software Sênior",
      tagline:
        "Backend, microsserviços e sistemas distribuídos. Gosto de ser dono de um serviço do diagrama de arquitetura até o dashboard no Grafana.",
      ctaContact: "Fale comigo",
      ctaProjects: "Ver projetos",
      location: "Recife, Brasil",
      available: "Aberto a oportunidades",
    },
    about: {
      title: "Sobre mim",
      p1: "Sou Engenheiro de Software no CESAR, em Recife, com mais de 10 anos desenvolvendo software, de sistemas públicos para o Governo de Pernambuco a plataformas globais da Lenovo que gerenciam milhões de servidores.",
      p2: "Meu foco é desenvolvimento backend, microsserviços, sistemas distribuídos e DevOps. Participo de decisões de arquitetura, construo pipelines de CI/CD, opero Kubernetes em bare metal e desenho fluxos assíncronos. Atuo com frequência como Tech Lead, já fui Scrum Master de times distribuídos globalmente e trabalho em inglês todos os dias.",
      facts: [
        ["Cargo", "Engenheiro de Software Sênior"],
        ["Empresa", "CESAR · projetos Lenovo"],
        ["Foco", "Backend · Sistemas Distribuídos · DevOps"],
        ["Idiomas", "Português (nativo) · Inglês (avançado)"],
      ],
    },
    impact: {
      title: "Destaques de impacto",
      items: [
        { value: "dias → <1h", label: "Tempo de build e empacotamento de firmware e drivers, viabilizando atualizações para milhões de servidores Lenovo" },
        { value: "2h → 30min", label: "Sincronização ServiceNow ↔ XClarity One, com requisições em lote (até 200 dispositivos) e cache" },
        { value: "~25%", label: "Do tempo original de processamento da sincronização de dispositivos" },
        { value: "5.000", label: "Dispositivos por Hub do XClarity One suportados pela plataforma em que atuei" },
      ],
    },
    experience: {
      title: "Experiência",
      items: [
        {
          company: "CESAR",
          role: "Engenheiro de Software",
          period: "Out 2020 – Atual",
          projects: [
            {
              name: "Lenovo Labrador",
              summary: "Automação de build de firmware e drivers para servidores Lenovo",
              bullets: [
                "Participei de decisões de arquitetura e construí microsserviços Python/Flask e suas APIs REST",
                "Integração com a API GraphQL do GitHub para detectar novos drivers e disparar o build",
                "Montei um cluster Kubernetes bare metal com kubeadm: CNI, Ingress, Volumes e Autoscaling",
                "Desenhei um sistema de build de drivers Linux baseado em KVM, automatizado com Flask e Paramiko",
                "CI/CD com Jenkins, Nexus e Ansible, um pipeline por microsserviço",
                "Dashboards Grafana/Prometheus, logs no Graylog, jobs no Control-M, testes unitários e smoke tests",
                "Resultado: build e empacotamento caíram de dias para menos de 1 hora",
              ],
            },
            {
              name: "Atlas / Lenovo XClarity One",
              summary: "Gestão global de servidores, analytics e predição de falhas",
              bullets: [
                "Microsserviços com Python/FastAPI e Node.js/Express em time distribuído globalmente",
                "Processamento assíncrono com RabbitMQ, incluindo fluxos de predição de falha de memória",
                "Dono de microsserviço: revisão de Merge Requests e decisões técnicas",
                "App ServiceNow com integração bidirecional (dispositivos, eventos, incidentes), protegida com JWT, API Keys e RBAC",
                "Lotes e cache reduziram a sincronização de ~2h para 30min (~25% do tempo original)",
                "Atuei como Scrum Master: Planning, Refinamento e Scrum of Scrums",
              ],
            },
            {
              name: "Jabil · Market Intelligence",
              summary: "Identificação de novos clientes com dados",
              bullets: [
                "Extração de dados, análise exploratória, modelos de Árvore de Decisão e Random Forest",
                "Dashboards com backend Django e frontend Angular",
              ],
            },
            {
              name: "Plataforma Jovem · Caixa Econômica Federal",
              summary: "MVP bancário para jovens de 12 a 17 anos",
              bullets: [
                "Funcionalidades de educação financeira e controle parental",
                "Frontend Angular, backend Spring Boot, depois migrado para Quarkus",
              ],
            },
          ],
        },
        {
          company: "Pitang Consultoria e Sistemas",
          role: "Desenvolvedor de Software",
          period: "Jun 2019 – Set 2020",
          projects: [
            {
              name: "Secretaria de Educação de Pernambuco",
              summary: "Serviços públicos para cidadãos e servidores",
              bullets: [
                "Desenvolvi Cartão Alimentação, Educa-PE, PE no Campus e Ganhe o Mundo",
                "Atuei no Educa-PE durante a migração das escolas para o ensino remoto na COVID-19",
                "ETL com Pentaho Data Integration, DevOps e banco de dados",
                "Stack: C#, Docker, Linux/Windows Server, TFS, IIS, Jenkins",
              ],
            },
          ],
        },
        {
          company: "Secretaria da Controladoria-Geral do Estado de Pernambuco (SCGE-PE)",
          role: "Coordenador de Apoio ao Desenvolvimento de Sistemas",
          period: "2016 – 2019",
          projects: [
            {
              name: "Portal da Transparência & Ouvidoria-Geral",
              summary: "Transparência pública do Estado de Pernambuco",
              bullets: [
                "Dashboards e ETL automatizado para o Portal da Transparência (milhares de acessos diários)",
                "Ajudei a modernizar a plataforma de transparência do estado",
                "Desenvolvi e mantive ferramentas da rede de ouvidorias do estado",
                "Stack: Java, Python, JavaScript, PHP, Pentaho",
              ],
            },
          ],
        },
        {
          company: "PERPART",
          role: "Desenvolvedor de Software · Estagiário de Suporte de TI",
          period: "2015 – 2016",
          projects: [
            {
              name: "SISRF · Sistema de Regularização Fundiária",
              summary: "Para o programa Meu Imóvel Legal",
              bullets: [
                "Desenvolvi o SISRF com PHP e JavaScript",
                "Suporte a ambientes Linux e Windows Server, automação de tarefas com Bash",
              ],
            },
          ],
        },
      ],
    },
    projects: {
      title: "Projetos open source",
      subtitle: "Uma seleção do meu GitHub.",
      viewAll: "Ver todos os repositórios",
      code: "Código",
      items: {
        "desktop-agent": "Servidor MCP que permite ao Claude Desktop agir no Windows: Playwright no navegador, UI Automation no desktop, com kill switch e regras de segurança. Objetivo: integração com o leitor de tela NVDA.",
        tcc: "TCC: algoritmos de predição aplicados aos dados da Ouvidoria de Pernambuco.",
        "capvideo-bot": "Bot do Telegram que processa vídeos, fotos e textos em tempo real. Com Docker e logging estruturado.",
        "transactions-routine": "API REST de contas e transações de cartão (compras, saques, pagamentos) com Docker Compose e MySQL.",
        TelegramStatusBot: "Monitora uma lista de sites e envia alerta no Telegram quando algum cai.",
        "git-merge-request": "Ferramenta de linha de comando para abrir Merge Requests no GitLab direto do terminal.",
      },
    },
    skills: {
      title: "Stack técnica",
      groups: {
        languages: "Linguagens",
        backend: "Backend & Frameworks",
        devops: "Containers, Cloud & DevOps",
        observability: "Mensageria & Observabilidade",
        data: "Bancos & Dados",
        infra: "Infraestrutura",
        practices: "Segurança & Práticas",
      },
    },
    education: {
      title: "Formação & certificações",
      items: [
        { title: "Bacharelado em Sistemas de Informação", org: "UFRPE · 2021" },
        { title: "Técnico em Informática (Programação e Redes)", org: "Leiaut Carielo · 2016" },
        { title: "IA para Desenvolvedores", org: "CESAR School" },
        { title: "Google Cloud Fundamentals", org: "Google Cloud" },
        { title: "Pentaho CE: Ferramentas Avançadas (PDI, CTools, PWS)", org: "Pentaho" },
      ],
    },
    contact: {
      title: "Vamos conversar",
      text: "Estou sempre aberto a conversar sobre arquitetura backend, Kubernetes, sistemas distribuídos ou novas oportunidades.",
      email: "Enviar email",
      copy: "Copiar email",
      copied: "Copiado!",
    },
    footer: {
      built: "Feito com HTML, CSS e JavaScript puros.",
    },
    ui: {
      toggleTheme: "Alternar tema",
      toggleLang: "View in English",
      menu: "Menu",
      skip: "Pular para o conteúdo",
    },
  },
};

/* Language-independent data */
window.SHARED = {
  name: "Luiz Henrique Carvalho",
  email: "luizchaos@gmail.com",
  github: "https://github.com/luizchaos",
  linkedin: "https://www.linkedin.com/in/luiz-henrique-t-carvalho/",
  avatar: "https://avatars.githubusercontent.com/u/25927439?v=4",
  projects: [
    { repo: "desktop-agent", lang: "Python", tags: ["MCP", "Playwright", "pywinauto"], featured: true },
    { repo: "tcc", lang: "Python", tags: ["Machine Learning", "Jupyter"] },
    { repo: "capvideo-bot", lang: "Python", tags: ["Telegram", "Docker"] },
    { repo: "transactions-routine", lang: "Java", tags: ["Spring", "MySQL", "Docker"] },
    { repo: "TelegramStatusBot", lang: "Python", tags: ["Monitoring", "Telegram"] },
    { repo: "git-merge-request", lang: "Python", tags: ["CLI", "GitLab"] },
  ],
  skills: {
    languages: ["Python", "Java", "C#", "JavaScript", "TypeScript", "PHP", "Bash"],
    backend: ["Flask", "FastAPI", "Django", "Spring Boot", "Quarkus", "Node.js", "Express", "Angular", "GraphQL", "REST", "Microservices"],
    devops: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Argo CD", "Nexus", "GitHub Actions", "Control-M", "TFS", "GCP"],
    observability: ["RabbitMQ", "Grafana", "Prometheus", "Graylog", "OpenSearch"],
    data: ["PostgreSQL", "MySQL", "SQL Server", "Pentaho PDI", "ETL", "scikit-learn", "Random Forest"],
    infra: ["Linux", "Windows Server", "KVM", "Proxmox", "Nginx", "Apache", "IIS", "Portainer"],
    practices: ["JWT", "RBAC", "API Keys", "Code Review", "Unit & Smoke Tests", "Scrum", "ServiceNow"],
  },
};
