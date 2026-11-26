import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/Motion";
import {
  certificates,
  certificateCategories,
} from "@/content/certificates";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Certificados",
  description:
    "Certificados e conquistas de Pedro Gomes de Almeida — AWS, Oracle, Udemy, Rocketseat e Uni-FACEF.",
};

export default function CertificatesPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <FadeIn>
        <p className="font-display text-sm font-semibold tracking-[0.14em] text-[#0b6b63] uppercase">
          Formação contínua
        </p>
        <h1 className="font-brand mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#0f1c24] sm:text-4xl md:text-5xl">
          Certificados
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4a5c67] sm:text-lg">
          Credenciais e reconhecimentos alinhados a backend, bancos de dados e
          desenvolvimento — com origem no LinkedIn e em plataformas oficiais.
        </p>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex font-display text-sm font-semibold text-[#0b6b63] underline-offset-4 hover:underline"
        >
          Ver no LinkedIn →
        </a>
      </FadeIn>

      <div className="mt-12 space-y-12">
        {certificateCategories.map((cat, catIndex) => {
          const items = certificates.filter((c) => c.category === cat.id);
          if (!items.length) return null;

          return (
            <section key={cat.id}>
              <FadeIn delay={catIndex * 0.04}>
                <h2 className="font-display text-xl font-bold text-[#0f1c24]">
                  {cat.label}
                </h2>
              </FadeIn>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {items.map((cert, i) => (
                  <FadeIn
                    key={cert.id}
                    delay={catIndex * 0.04 + i * 0.03}
                    className="min-w-0"
                  >
                    <article className="flex h-full flex-col rounded-2xl border border-[rgba(15,28,36,0.12)] bg-[#f7fafb] p-5 transition hover:border-[#0b6b63]/35 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <p className="font-display text-xs font-semibold tracking-[0.12em] text-[#0b6b63] uppercase">
                          {cert.issuer}
                        </p>
                        <p className="font-display text-xs font-semibold text-[#4a5c67]">
                          {cert.issued}
                        </p>
                      </div>
                      <h3 className="font-display mt-3 text-lg font-bold leading-snug text-[#0f1c24]">
                        {cert.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4a5c67]">
                        {cert.summary}
                      </p>
                      {cert.credentialId ? (
                        <p className="mt-3 break-all font-display text-[11px] text-[#4a5c67]/80">
                          ID: {cert.credentialId}
                        </p>
                      ) : null}
                      {cert.href ? (
                        <a
                          href={cert.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex font-display text-sm font-semibold text-[#0b6b63] underline-offset-4 hover:underline"
                        >
                          Ver credencial →
                        </a>
                      ) : null}
                    </article>
                  </FadeIn>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <FadeIn className="mt-14 rounded-2xl border border-[rgba(15,28,36,0.12)] bg-[#0f1c24] px-6 py-8 text-white md:px-8">
        <p className="font-display text-lg font-bold">
          Quer ver a trajetória completa?
        </p>
        <p className="mt-1 text-sm text-white/70">
          Projetos, demos e contato estão na home do portfolio.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/#projetos"
            className="inline-flex min-h-11 items-center rounded-md bg-[#0b6b63] px-5 py-2.5 font-display text-sm font-semibold text-white hover:brightness-110"
          >
            Ver projetos
          </Link>
          <Link
            href="/#contato"
            className="inline-flex min-h-11 items-center rounded-md border border-white/25 px-5 py-2.5 font-display text-sm font-semibold text-white hover:border-white/50"
          >
            Contato
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
