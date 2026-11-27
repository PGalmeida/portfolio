import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/Motion";
import { connectDemos, demoBanner } from "@/content/demo-data";

export const metadata: Metadata = {
  title: "Demos Connect",
  description:
    "Demonstrações interativas sanitizadas dos módulos Painel, CRM, Seguros, Crédito e Jurídico do Connect.",
};

export default function ConnectDemosHubPage() {
  const [featured, ...rest] = connectDemos;

  return (
    <div className="container-page py-12 md:py-16">
      <div className="rounded-md border border-[color-mix(in_oklab,#8a5a12_35%,transparent)] bg-[color-mix(in_oklab,#8a5a12_10%,white)] px-4 py-3 text-sm leading-relaxed text-[#8a5a12]">
        {demoBanner}
      </div>

      <FadeIn className="mt-8">
        <p className="font-display text-sm font-semibold tracking-[0.14em] text-[#0b6b63] uppercase">
          Connect
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#0f1c24] sm:text-4xl md:text-5xl">
          Demos ERP / CRM
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[#4a5c67] sm:text-lg">
          Sandboxes interativos inspirados na intranet Sicoob 3 Colinas. Explore
          os módulos com dados 100% fictícios.
        </p>
      </FadeIn>

      {featured ? (
        <FadeIn className="mt-10">
          <Link
            href={featured.href}
            className="group grid overflow-hidden rounded-2xl border border-[rgba(15,28,36,0.12)] bg-[#f7fafb] shadow-[0_16px_40px_rgba(15,28,36,0.08)] md:grid-cols-[1.35fr_0.65fr]"
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                unoptimized
                className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <span className="w-fit rounded-md bg-[#d4ebe8] px-2.5 py-1 font-display text-[11px] font-semibold text-[#0b6b63]">
                {featured.tag}
              </span>
              <h2 className="font-display mt-4 text-2xl font-bold text-[#0f1c24] md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5c67] md:text-base">
                {featured.description}
              </p>
              <span className="mt-6 font-display text-sm font-semibold text-[#0b6b63]">
                Abrir demo interativa →
              </span>
            </div>
          </Link>
        </FadeIn>
      ) : null}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {rest.map((demo, i) => (
          <FadeIn key={demo.href} delay={i * 0.05} className="min-w-0">
            <Link
              href={demo.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(15,28,36,0.12)] bg-[#f7fafb] transition hover:border-[#0b6b63]/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={demo.image}
                  alt={demo.title}
                  fill
                  unoptimized
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
                <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 font-display text-[11px] font-semibold text-[#0b6b63]">
                  {demo.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-xl font-bold text-[#0f1c24]">
                  {demo.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4a5c67]">
                  {demo.description}
                </p>
                <span className="mt-4 font-display text-sm font-semibold text-[#0b6b63]">
                  Abrir demo →
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12 rounded-2xl border border-[rgba(15,28,36,0.12)] bg-[#0f1c24] px-6 py-8 text-white md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-bold">
              Quer o contexto do projeto?
            </p>
            <p className="mt-1 text-sm text-white/70">
              Veja o case Connect com stack, papel e galeria completa.
            </p>
          </div>
          <Link
            href="/projetos/connect"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0b6b63] px-5 py-2.5 font-display text-sm font-semibold text-white transition hover:brightness-110"
          >
            Ver case Connect
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
