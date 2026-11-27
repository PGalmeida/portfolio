import type { Metadata } from "next";
import { DemoShell } from "@/components/demos/DemoShell";
import { CreditoDemo } from "@/components/demos/CreditoDemo";

export const metadata: Metadata = {
  title: "Demo Crédito Connect",
  description: "Pipeline CCB demonstrativo com dados fictícios.",
};

export default function CreditoDemoPage() {
  return (
    <DemoShell
      title="Crédito / CCB"
      description="Kanban de propostas em estágios — apenas dados inventados."
      previewSrc="/screenshots/connect/credito.svg"
    >
      <CreditoDemo />
    </DemoShell>
  );
}
