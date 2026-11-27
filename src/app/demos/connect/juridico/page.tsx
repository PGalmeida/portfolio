import type { Metadata } from "next";
import { DemoShell } from "@/components/demos/DemoShell";
import { JuridicoDemo } from "@/components/demos/JuridicoDemo";

export const metadata: Metadata = {
  title: "Demo Jurídico Connect",
  description:
    "Recuperação de crédito e processos demonstrativos com dados fictícios.",
};

export default function JuridicoDemoPage() {
  return (
    <DemoShell
      title="Jurídico / Recuperação"
      description="Processos de cobrança e acordo com cooperados e valores mascarados."
      previewSrc="/screenshots/connect/juridico.png"
    >
      <JuridicoDemo />
    </DemoShell>
  );
}
