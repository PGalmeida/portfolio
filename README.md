# Portfolio — Pedro Almeida

Site pessoal em **Next.js (TypeScript) + Tailwind + Framer Motion**, com demos sanitizadas do Connect e geração de currículo em PDF.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — ambiente local
- `npm run build` — build de produção
- `npm start` — servir build

## Conteúdo

- Perfil e textos: `src/content/profile.ts`
- Projetos: `src/content/projects.ts`
- Dados fictícios das demos: `src/content/demo-data.ts`
- Foto: `public/pedro.png`

## Screenshots do Connect

1. Capture telas em **homologação** (nunca produção com PII real).
2. Mascare CPF, contas, nomes e qualquer identificador sensível.
3. Salve em `public/screenshots/connect/` (ex.: `crm.jpg`, `seguros.jpg`, `credito.jpg`, `dash.jpg`).
4. Atualize os caminhos em `src/content/demo-data.ts` e nas pages em `src/app/demos/connect/*/page.tsx`.
5. Faça commit dos arquivos — a Vercel só publica o que está no Git.

## Currículo PDF

O botão **Baixar currículo (PDF)** gera `Pedro-Almeida-Curriculo.pdf` no cliente com `@react-pdf/renderer`, a partir do content model (não usa o export bruto do LinkedIn).

## Deploy (Vercel)

1. Conecte o repositório GitHub `PGalmeida/portfolio` na Vercel.
2. Framework preset: Next.js.
3. Deploy automático a cada push na branch principal.

`Profile.pdf` na raiz é referência interna (está no `.gitignore`).

Logo da marca (favicon): `public/brand-pga-logo.png`.
