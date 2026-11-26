import type { Metadata } from "next";
import { DemoShell } from "@/components/demos/DemoShell";
import { SegurosDemo } from "@/components/demos/SegurosDemo";

export const metadata: Metadata = {
  title: "Demo Seguros Connect",
  description: "Sandbox de apólices e relatório com dados fictícios.",
};

export default function SegurosDemoPage() {
  return (
    <DemoShell
      title="Seguros"
      description="Apólices demonstrativas e indicadores resumidos."
      previewSrc="/screenshots/connect/seguros.jpg"
    >
      <SegurosDemo />
    </DemoShell>
  );
}
