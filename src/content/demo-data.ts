/** Dados 100% fictícios para demos Connect — nunca dados reais. */

export const demoBanner =
  "Ambiente demonstrativo — dados fictícios. Intranet corporativa sanitizada.";

export type DemoContact = {
  id: string;
  name: string;
  document: string;
  agency: string;
  segment: string;
  phone: string;
  email: string;
  status: "Ativo" | "Prospect" | "Inativo";
};

export const demoContacts: DemoContact[] = [
  {
    id: "C-1001",
    name: "Cooperado Demo Alpha",
    document: "***.***.***-01",
    agency: "Agência 0001",
    segment: "PF",
    phone: "(00) 90000-0001",
    email: "alpha.demo@example.com",
    status: "Ativo",
  },
  {
    id: "C-1002",
    name: "Cooperado Demo Beta",
    document: "***.***.***-02",
    agency: "Agência 0002",
    segment: "PJ",
    phone: "(00) 90000-0002",
    email: "beta.demo@example.com",
    status: "Ativo",
  },
  {
    id: "C-1003",
    name: "Cooperado Demo Gama",
    document: "***.***.***-03",
    agency: "Agência 0001",
    segment: "PF",
    phone: "(00) 90000-0003",
    email: "gama.demo@example.com",
    status: "Prospect",
  },
  {
    id: "C-1004",
    name: "Cooperado Demo Delta",
    document: "***.***.***-04",
    agency: "Agência 0003",
    segment: "PJ",
    phone: "(00) 90000-0004",
    email: "delta.demo@example.com",
    status: "Inativo",
  },
  {
    id: "C-1005",
    name: "Cooperado Demo Épsilon",
    document: "***.***.***-05",
    agency: "Agência 0002",
    segment: "PF",
    phone: "(00) 90000-0005",
    email: "epsilon.demo@example.com",
    status: "Ativo",
  },
];

export type DemoPolicy = {
  id: string;
  client: string;
  product: string;
  premium: string;
  status: "Vigente" | "Pendente" | "Cancelada";
  start: string;
  end: string;
};

export const demoPolicies: DemoPolicy[] = [
  {
    id: "AP-2201",
    client: "Cooperado Demo Alpha",
    product: "Prestamista Demo",
    premium: "R$ 1.250,00",
    status: "Vigente",
    start: "01/2025",
    end: "01/2026",
  },
  {
    id: "AP-2202",
    client: "Cooperado Demo Beta",
    product: "Vida Demo",
    premium: "R$ 890,00",
    status: "Vigente",
    start: "03/2025",
    end: "03/2026",
  },
  {
    id: "AP-2203",
    client: "Cooperado Demo Gama",
    product: "Residencial Demo",
    premium: "R$ 420,00",
    status: "Pendente",
    start: "06/2025",
    end: "06/2026",
  },
  {
    id: "AP-2204",
    client: "Cooperado Demo Delta",
    product: "Empresarial Demo",
    premium: "R$ 3.100,00",
    status: "Cancelada",
    start: "01/2024",
    end: "01/2025",
  },
];

export type DemoProposal = {
  id: string;
  client: string;
  product: string;
  amount: string;
  stage: "Entrada" | "Análise" | "Aprovação" | "Formalização" | "Concluída";
  agency: string;
};

export const demoProposals: DemoProposal[] = [
  {
    id: "CCB-501",
    client: "Cooperado Demo Alpha",
    product: "CCB Demo",
    amount: "R$ 25.000,00",
    stage: "Análise",
    agency: "0001",
  },
  {
    id: "CCB-502",
    client: "Cooperado Demo Beta",
    product: "CCB Demo",
    amount: "R$ 80.000,00",
    stage: "Aprovação",
    agency: "0002",
  },
  {
    id: "CCB-503",
    client: "Cooperado Demo Gama",
    product: "CCB Demo",
    amount: "R$ 12.500,00",
    stage: "Entrada",
    agency: "0001",
  },
  {
    id: "CCB-504",
    client: "Cooperado Demo Épsilon",
    product: "CCB Demo",
    amount: "R$ 40.000,00",
    stage: "Formalização",
    agency: "0002",
  },
  {
    id: "CCB-505",
    client: "Cooperado Demo Delta",
    product: "CCB Demo",
    amount: "R$ 15.000,00",
    stage: "Concluída",
    agency: "0003",
  },
];

export type DemoLegalCase = {
  id: string;
  client: string;
  type: "Cobrança" | "Acordo" | "Judicial";
  amount: string;
  status: "Aberto" | "Em acordo" | "Encerrado";
  agency: string;
  openedAt: string;
};

export const demoLegalCases: DemoLegalCase[] = [
  {
    id: "JUR-3101",
    client: "Cooperado Demo Alpha",
    type: "Cobrança",
    amount: "R$ 18.***,**",
    status: "Aberto",
    agency: "0001",
    openedAt: "03/2025",
  },
  {
    id: "JUR-3102",
    client: "Cooperado Demo Beta",
    type: "Acordo",
    amount: "R$ 42.***,**",
    status: "Em acordo",
    agency: "0002",
    openedAt: "01/2025",
  },
  {
    id: "JUR-3103",
    client: "Cooperado Demo Gama",
    type: "Judicial",
    amount: "R$ 9.***,**",
    status: "Aberto",
    agency: "0001",
    openedAt: "05/2025",
  },
  {
    id: "JUR-3104",
    client: "Cooperado Demo Delta",
    type: "Cobrança",
    amount: "R$ 7.***,**",
    status: "Encerrado",
    agency: "0003",
    openedAt: "11/2024",
  },
  {
    id: "JUR-3105",
    client: "Cooperado Demo Épsilon",
    type: "Acordo",
    amount: "R$ 25.***,**",
    status: "Em acordo",
    agency: "0002",
    openedAt: "02/2025",
  },
];

export const demoDashboardKpis = [
  {
    id: "metas",
    label: "Metas",
    value: "87%",
    detail: "Percentual atingido",
    footnote: "Meta: 90% | Previsão: 92%",
  },
  {
    id: "carteira",
    label: "Carteira",
    value: "R$ 128,7 Mi",
    detail: "Saldo total da carteira",
    footnote: "Var. 30 dias: +2,4%",
  },
  {
    id: "seguros",
    label: "Seguros",
    value: "R$ 24,3 Mi",
    detail: "Prêmios emitidos (ano)",
    footnote: "Vigência: 92% | Renovação: 68%",
  },
  {
    id: "credito",
    label: "Crédito",
    value: "R$ 36,8 Mi",
    detail: "Volume de crédito",
    footnote: "Inadimplência: 1,7%",
  },
];

export const demoPortfolioSegments = [
  { name: "Corporate", share: "42%", amount: "R$ 54,0 Mi" },
  { name: "Médias empresas", share: "28%", amount: "R$ 36,0 Mi" },
  { name: "Pequenas empresas", share: "20%", amount: "R$ 25,7 Mi" },
  { name: "Outros", share: "10%", amount: "R$ 13,0 Mi" },
];

export const demoIndicatorMonths = [
  { month: "Dez", metas: 72, credito: 18 },
  { month: "Jan", metas: 75, credito: 20 },
  { month: "Fev", metas: 78, credito: 21 },
  { month: "Mar", metas: 81, credito: 23 },
  { month: "Abr", metas: 84, credito: 24 },
  { month: "Mai", metas: 87, credito: 26 },
];

export const demoScreenshotSlots = [
  {
    id: "dash",
    title: "Painel operacional",
    caption: "Visão geral sanitizada da intranet (dados fictícios).",
    image: "/screenshots/connect/dash.png",
    href: "/demos/connect/painel",
  },
  {
    id: "crm",
    title: "Carteira / CRM",
    caption: "Lista de contatos com identificadores mascarados.",
    image: "/screenshots/connect/crm.png",
    href: "/demos/connect/crm",
  },
  {
    id: "seguro",
    title: "Módulo de seguros",
    caption: "Apólices e relatórios sem dados reais.",
    image: "/screenshots/connect/seguros.png",
    href: "/demos/connect/seguros",
  },
  {
    id: "credito",
    title: "Pipeline de crédito",
    caption: "Fluxo de propostas CCB em ambiente demonstrativo.",
    image: "/screenshots/connect/credito.png",
    href: "/demos/connect/credito",
  },
  {
    id: "juridico",
    title: "Jurídico / Recuperação",
    caption: "Processos de cobrança e acordo com dados inventados.",
    image: "/screenshots/connect/juridico.png",
    href: "/demos/connect/juridico",
  },
];

export const connectDemos = [
  {
    href: "/demos/connect/painel",
    title: "Painel operacional",
    description:
      "Dashboard com metas, carteira, seguros e crédito — só indicadores fictícios.",
    image: "/screenshots/connect/dash.png",
    tag: "Painel",
  },
  {
    href: "/demos/connect/crm",
    title: "CRM / Carteira",
    description:
      "Contatos fictícios, filtros e detalhe com documentos mascarados.",
    image: "/screenshots/connect/crm.png",
    tag: "CRM",
  },
  {
    href: "/demos/connect/seguros",
    title: "Seguros",
    description: "Apólices e resumo de relatório com prêmios inventados.",
    image: "/screenshots/connect/seguros.png",
    tag: "Seguros",
  },
  {
    href: "/demos/connect/credito",
    title: "Crédito / CCB",
    description: "Pipeline kanban de propostas em estágios operacionais.",
    image: "/screenshots/connect/credito.png",
    tag: "Crédito",
  },
  {
    href: "/demos/connect/juridico",
    title: "Jurídico / Recuperação",
    description:
      "Processos de cobrança, acordo e judicial com valores mascarados.",
    image: "/screenshots/connect/juridico.png",
    tag: "Jurídico",
  },
];
