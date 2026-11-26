import type { Metadata } from "next";
import { DemoShell } from "@/components/demos/DemoShell";
import { CrmDemo } from "@/components/demos/CrmDemo";

export const metadata: Metadata = {
  title: "Demo CRM Connect",
  description: "Sandbox de carteira/CRM com dados fictícios.",
};

export default function CrmDemoPage() {
  return (
    <DemoShell
      title="CRM / Carteira"
      description="Lista de contatos, filtros e detalhe com documentos mascarados."
      previewSrc="/screenshots/connect/crm.jpg"
    >
      <CrmDemo />
    </DemoShell>
  );
}
