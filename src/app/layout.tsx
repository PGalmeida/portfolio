import type { Metadata } from "next";
import { Source_Serif_4, Syne } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const source = Source_Serif_4({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pedro Gomes de Almeida — Portfolio",
    template: "%s · Pedro Gomes de Almeida",
  },
  description:
    "Portfolio de Pedro Gomes de Almeida — Assistente de Desenvolvimento no Sicoob 3 Colinas. Backend, bancos de dados, Connect, Valora, MedVet e PrivateAgro.",
  metadataBase: new URL("https://portfolio-pgalmeida.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon-32.png?v=13", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png?v=13", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=13", sizes: "180x180" }],
    shortcut: ["/favicon-32.png?v=13"],
  },
  openGraph: {
    title: "Pedro Gomes de Almeida — Portfolio",
    description:
      "Desenvolvedor focado em backend e bancos de dados. Projetos Connect, Valora, MedVet e PrivateAgro.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Gomes de Almeida — Portfolio",
    description:
      "Backend, bancos de dados e sistemas corporativos. Connect, Valora, MedVet e PrivateAgro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${syne.variable} ${source.variable} h-full`}
    >
      <body className="atmosphere grain flex min-h-full flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
