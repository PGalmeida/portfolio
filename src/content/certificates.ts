export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  category: "cloud" | "dados" | "programacao" | "academico";
  credentialId?: string;
  href?: string;
  summary: string;
};

export const certificates: Certificate[] = [
  {
    id: "aws-cloud-architecting",
    title: "AWS Academy Graduate — Cloud Architecting",
    issuer: "Amazon Web Services (AWS)",
    issued: "Out 2025",
    category: "cloud",
    href: "https://www.credly.com/badges/643c6d38-fc17-4a60-8ee2-a5a02674e440",
    summary:
      "Badge de formação em arquitetura de nuvem pela AWS Academy — fundamentos de projetos em cloud.",
  },
  {
    id: "oracle-sql",
    title: "Oracle Programming with SQL",
    issuer: "Oracle Academy",
    issued: "Jan 2025",
    category: "dados",
    summary:
      "Programação e consultas SQL no ecossistema Oracle, com foco prático em banco de dados.",
  },
  {
    id: "oracle-database-design",
    title: "Database Design",
    issuer: "Oracle Academy",
    issued: "Ago 2024",
    category: "dados",
    credentialId:
      "xe0d604d4cc8c595ba646f1b8c63ccc1cfa5f9301707065615951fc9b6eacb245",
    summary:
      "Modelagem e design de bancos de dados relacionais com material oficial Oracle Academy.",
  },
  {
    id: "udemy-js-ts",
    title: "JavaScript e TypeScript do Básico ao Avançado",
    issuer: "Udemy",
    issued: "Out 2023",
    category: "programacao",
    credentialId: "UC-5fb48e43-1596-4a62-aaef-a2349cd06fc9",
    href: "https://www.udemy.com/certificate/UC-5fb48e43-1596-4a62-aaef-a2349cd06fc9/",
    summary:
      "Formação completa em JavaScript e TypeScript, do básico à aplicação avançada.",
  },
  {
    id: "udemy-python",
    title: "Python 3 do Básico ao Avançado",
    issuer: "Udemy",
    issued: "Fev 2023",
    category: "programacao",
    credentialId: "UC-cc229852-eb87-4391-9c80-28c2a6d37102",
    summary:
      "Curso abrangente de Python 3, com base sólida para desenvolvimento e automação.",
  },
  {
    id: "rocketseat-discover",
    title: "Discover",
    issuer: "Rocketseat",
    issued: "Formação",
    category: "programacao",
    summary:
      "Trilha Discover da Rocketseat — fundamentos de programação web e ecossistema moderno.",
  },
  {
    id: "unifacef-melhor-media",
    title: "Melhor Média — 3º semestre (Sistemas de Informação)",
    issuer: "Uni-FACEF",
    issued: "Set 2024",
    category: "academico",
    summary:
      "Reconhecimento acadêmico pela melhor média do semestre — segundo certificado consecutivo de destaque.",
  },
];

export const certificateCategories: {
  id: Certificate["category"];
  label: string;
}[] = [
  { id: "cloud", label: "Cloud" },
  { id: "dados", label: "Banco de dados" },
  { id: "programacao", label: "Programação" },
  { id: "academico", label: "Acadêmico" },
];
