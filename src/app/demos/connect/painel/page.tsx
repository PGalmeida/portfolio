import type { Metadata } from "next";
import { DemoShell } from "@/components/demos/DemoShell";
import { PainelDemo } from "@/components/demos/PainelDemo";

export const metadata: Metadata = {
  title: "Demo Painel operacional Connect",
  description:
    "Dashboard demonstrativo com indicadores fictícios de metas, carteira, seguros e crédito.",
};

export default function PainelDemoPage() {
  return (
    <DemoShell
      title="Painel operacional"
      description="Visão geral sanitizada com KPIs e gráficos inventados — nenhum dado real."
      previewSrc="/screenshots/connect/dash.png"
    >
      <PainelDemo />
    </DemoShell>
  );
}
