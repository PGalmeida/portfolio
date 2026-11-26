export type ProjectCategory =
  | "profissional"
  | "tcc"
  | "academico"
  | "dados"
  | "pessoal";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: ProjectCategory;
  featured: boolean;
  hasCasePage: boolean;
  role?: string;
  stack: string[];
  links: { label: string; href: string }[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "connect",
    title: "Connect",
    subtitle: "Intranet Sicoob 3 Colinas",
    summary:
      "Plataforma interna com módulos operacionais no estilo ERP/CRM: crédito, seguros, jurídico, carteira e governança — demonstrada aqui com dados fictícios.",
    category: "profissional",
    featured: true,
    hasCasePage: true,
    role: "Desenvolvimento e manutenção",
    stack: [
      "NestJS",
      "TypeORM",
      "MSSQL",
      "Redis",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
    ],
    links: [
      { label: "Ver case", href: "/projetos/connect" },
      { label: "Demos", href: "/demos/connect" },
    ],
    highlights: [
      "CCB e propostas de crédito",
      "Seguros e apólices",
      "Jurídico e recuperação de crédito",
      "Contatos, metas e carteira",
    ],
  },
  {
    slug: "valora",
    title: "Valora",
    subtitle: "TCC Uni-FACEF",
    summary:
      "Aplicação de finanças pessoais com carteiras, metas, Open Finance e educação financeira — TCC de graduação com foco em backend e modelagem de dados.",
    category: "tcc",
    featured: true,
    hasCasePage: true,
    role: "Desenvolvimento full stack (TCC)",
    stack: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
    ],
    links: [
      { label: "Ver case", href: "/projetos/valora" },
      { label: "API", href: "https://github.com/valora-TCC/valora-api" },
      { label: "Web", href: "https://github.com/valora-TCC/valora-web" },
    ],
    highlights: [
      "Org valora-TCC",
      "PostgreSQL + Supabase Auth/RLS",
      "Produto financeiro completo",
    ],
  },
  {
    slug: "medvet",
    title: "MedVet",
    subtitle: "Web II · Uni-FACEF",
    summary:
      "Sistema de gestão para clínicas veterinárias com chatbot OpenAI. Arquitetura com PostgreSQL e MongoDB; atuação principal no backend.",
    category: "academico",
    featured: true,
    hasCasePage: true,
    role: "Backend",
    stack: [
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "React",
      "JWT",
      "Docker",
      "OpenAI",
    ],
    links: [
      { label: "Ver case", href: "/projetos/medvet" },
      { label: "Org", href: "https://github.com/MedVetFacef/MedVet" },
      { label: "Demo", href: "https://med-vet-facef-lc2s.vercel.app" },
      {
        label: "Vídeo",
        href: "https://www.youtube.com/watch?v=LJmL1Y5XWuc",
      },
    ],
    highlights: [
      "Dual database Postgres + Mongo",
      "Chatbot com IA",
      "Org MedVetFacef",
    ],
  },
  {
    slug: "privateagro",
    title: "PrivateAgro",
    subtitle: "TCC técnico · ETEC",
    summary:
      "Gestão agrícola com plantios, custos e usuários — primeiro TCC, com CRUD, regras de negócio e banco relacional MySQL/MariaDB.",
    category: "tcc",
    featured: true,
    hasCasePage: true,
    role: "Desenvolvimento solo",
    stack: ["PHP", "Materialize", "MySQL", "MariaDB", "PDO"],
    links: [
      { label: "Ver case", href: "/projetos/privateagro" },
      {
        label: "Repositório",
        href: "https://github.com/PGalmeida/TCC_privateagro",
      },
    ],
    highlights: ["Dump SQL", "Plantios e custos", "Autenticação"],
  },
  {
    slug: "banco-de-dados",
    title: "Banco de Dados",
    subtitle: "Scripts e modelagem",
    summary:
      "Scripts SQL de modelagem (clínica, escola, loja e outros) — base da trilha prática em dados.",
    category: "dados",
    featured: false,
    hasCasePage: false,
    stack: ["SQL", "MySQL"],
    links: [
      {
        label: "Repositório",
        href: "https://github.com/PGalmeida/Banco_de_Dados",
      },
    ],
  },
  {
    slug: "clinica-ds",
    title: "Clínica DS",
    subtitle: "PHP + MySQL",
    summary: "Aplicação de clínica com CRUD e banco MySQL do curso técnico.",
    category: "dados",
    featured: false,
    hasCasePage: false,
    stack: ["PHP", "MySQL", "Materialize"],
    links: [
      {
        label: "Repositório",
        href: "https://github.com/PGalmeida/Clinica_DS",
      },
    ],
  },
  {
    slug: "tarefas-ds",
    title: "Tarefas DS",
    subtitle: "PHP + MySQL",
    summary: "App de tarefas com persistência MySQL.",
    category: "dados",
    featured: false,
    hasCasePage: false,
    stack: ["PHP", "MySQL"],
    links: [
      {
        label: "Repositório",
        href: "https://github.com/PGalmeida/Tarefas_DS",
      },
    ],
  },
  {
    slug: "primevideo",
    title: "PrimeVideo API",
    subtitle: "Spring Boot + PostgreSQL",
    summary:
      "Estudo de API e banco PostgreSQL com Spring Boot (Uni-FACEF).",
    category: "dados",
    featured: false,
    hasCasePage: false,
    stack: ["Java", "Spring Boot", "PostgreSQL"],
    links: [
      {
        label: "Repositório",
        href: "https://github.com/PGalmeida/PrimeVideo",
      },
    ],
  },
  {
    slug: "herobook",
    title: "HeroBook",
    subtitle: "Fichas de RPG",
    summary: "Criação e gestão de fichas de heróis em React.",
    category: "pessoal",
    featured: false,
    hasCasePage: false,
    stack: ["React", "JavaScript"],
    links: [
      { label: "Live", href: "https://hero-book-eight.vercel.app" },
      { label: "Repo", href: "https://github.com/PGalmeida/HeroBook" },
    ],
  },
  {
    slug: "primeflix",
    title: "PrimeFlix",
    subtitle: "Catálogo de filmes",
    summary: "Browser de filmes com API externa, detalhes e favoritos.",
    category: "pessoal",
    featured: false,
    hasCasePage: false,
    stack: ["React", "Axios"],
    links: [
      { label: "Repo", href: "https://github.com/PGalmeida/PrimeFlix" },
    ],
  },
  {
    slug: "calculadora-gastos",
    title: "Calculadora de Gastos",
    subtitle: "Flutter",
    summary: "Controle de despesas com lista, totais e gráficos.",
    category: "pessoal",
    featured: false,
    hasCasePage: false,
    stack: ["Flutter", "Dart"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/PGalmeida/CalculadoraGastos",
      },
    ],
  },
  {
    slug: "pokedex",
    title: "Pokédex",
    subtitle: "React + PokéAPI",
    summary: "Busca e exibição de Pokémon via API pública.",
    category: "pessoal",
    featured: false,
    hasCasePage: false,
    stack: ["React", "PokéAPI"],
    links: [
      { label: "Live", href: "https://pokeapi-one-pi.vercel.app" },
      { label: "Repo", href: "https://github.com/PGalmeida/pokeapi" },
    ],
  },
  {
    slug: "projeto-hpc",
    title: "Projeto HPC",
    subtitle: "Monte Carlo · MPI",
    summary:
      "Estimativa de π com Monte Carlo paralelizado (mpi4py) no Santos Dumont.",
    category: "pessoal",
    featured: false,
    hasCasePage: false,
    stack: ["Python", "MPI", "SLURM"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/PGalmeida/projeto-hpc",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const caseSlugs = projects
  .filter((p) => p.hasCasePage)
  .map((p) => p.slug);
