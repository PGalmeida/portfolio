import { ImageResponse } from "next/og";

export const alt = "Pedro Gomes de Almeida — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(145deg, #dfe8eb 0%, #e8eef1 45%, #d4ebe8 100%)",
          color: "#0f1c24",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#0b6b63",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            Pedro Gomes de Almeida
          </div>
          <div style={{ fontSize: 28, color: "#4a5c67", maxWidth: 820 }}>
            Assistente de Desenvolvimento · Sicoob 3 Colinas · Backend e bancos
            de dados
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#0b6b63" }}>
          Connect · Valora · MedVet · PrivateAgro
        </div>
      </div>
    ),
    size,
  );
}
