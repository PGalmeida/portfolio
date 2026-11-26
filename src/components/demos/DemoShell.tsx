import Image from "next/image";
import Link from "next/link";
import { demoBanner } from "@/content/demo-data";

export function DemoShell({
  title,
  description,
  children,
  previewSrc,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  previewSrc?: string;
}) {
  return (
    <div className="container-page py-10 md:py-14">
      <div className="rounded-md border border-[color-mix(in_oklab,#8a5a12_35%,transparent)] bg-[color-mix(in_oklab,#8a5a12_10%,white)] px-4 py-3 text-sm leading-relaxed text-[#8a5a12]">
        {demoBanner}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <Link
            href="/demos/connect"
            className="font-display text-sm font-semibold text-[#4a5c67] hover:text-[#0b6b63]"
          >
            ← Demos Connect
          </Link>
          <h1 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0f1c24] md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-[#4a5c67]">{description}</p>
        </div>
        <Link
          href="/projetos/connect"
          className="shrink-0 font-display text-sm font-semibold text-[#0b6b63] underline-offset-4 hover:underline"
        >
          Ver case Connect
        </Link>
      </div>

      {previewSrc ? (
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl border border-[rgba(15,28,36,0.12)] bg-[#dfe8eb] shadow-[0_12px_30px_rgba(15,28,36,0.06)]">
          <Image
            src={previewSrc}
            alt={`Preview ${title}`}
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 70vw, 100vw"
          />
        </div>
      ) : null}

      <div className="mt-8 overflow-hidden rounded-2xl border border-[rgba(15,28,36,0.12)] bg-[#f7fafb] shadow-[0_18px_40px_rgba(15,28,36,0.06)]">
        <div className="flex items-center gap-2 border-b border-[rgba(15,28,36,0.12)] bg-[#0f1c24] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f07178]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e0af68]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#9ece6a]" />
          <span className="ml-3 font-display text-xs text-white/70">
            Connect · demonstração interativa
          </span>
        </div>
        <div className="overflow-x-auto p-4 md:p-6">{children}</div>
      </div>
    </div>
  );
}
