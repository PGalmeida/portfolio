"use client";

import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { CurriculumDocument } from "@/components/cv/CurriculumDocument";

async function blobToDataUrl(blob: Blob) {
  const buffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:${blob.type};base64,${btoa(binary)}`;
}

export function DownloadCvButton({ className = "" }: { className?: string }) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);
    try {
      const photoRes = await fetch("/pedro.png");
      const photoBlob = await photoRes.blob();
      const photoSrc = await blobToDataUrl(photoBlob);

      const blob = await pdf(
        <CurriculumDocument photoSrc={photoSrc} />,
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Pedro-Almeida-Curriculo.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      className={`inline-flex items-center justify-center rounded-md bg-[#0b6b63] px-4 py-2.5 font-display text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70 ${className}`}
    >
      {loading ? "Gerando PDF…" : "Baixar currículo (PDF)"}
    </button>
  );
}
