import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "@/components/CasePage";
import { ScreenshotGallery } from "@/components/gallery/ScreenshotGallery";
import { caseSlugs, getProject } from "@/content/projects";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectCaseRoute({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.hasCasePage) notFound();

  return (
    <CasePage project={project}>
      {slug === "connect" ? (
        <>
          <section className="space-y-6">
            <div>
              <h2 className="font-display text-xl font-bold text-[#0f1c24]">
                Problema
              </h2>
              <p className="mt-3 leading-relaxed text-[#4a5c67]">
                Processos operacionais espalhados pediam uma intranet única para
                crédito, seguros, jurídico, carteira e governança no dia a dia
                da cooperativa.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[#0f1c24]">
                O que fiz
              </h2>
              <p className="mt-3 leading-relaxed text-[#4a5c67]">
                Atuo no desenvolvimento e manutenção do Connect (API NestJS +
                web React): módulos, integrações, modelagem e evolução contínua
                da plataforma interna.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[#0f1c24]">
                Demonstração
              </h2>
              <p className="mt-3 leading-relaxed text-[#4a5c67]">
                As demos deste portfolio usam apenas dados fictícios — sem
                informações reais de cooperados ou sistemas internos.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/demos/connect"
                  className="inline-flex min-h-11 items-center rounded-md bg-[#0b6b63] px-4 py-2.5 font-display text-sm font-semibold text-white hover:brightness-110"
                >
                  Abrir demos interativas
                </Link>
                <Link
                  href="/demos/connect/painel"
                  className="inline-flex min-h-11 items-center rounded-md border border-[rgba(15,28,36,0.12)] px-4 py-2.5 font-display text-sm font-semibold text-[#0f1c24] hover:border-[#0b6b63]"
                >
                  Painel
                </Link>
                <Link
                  href="/demos/connect/crm"
                  className="inline-flex min-h-11 items-center rounded-md border border-[rgba(15,28,36,0.12)] px-4 py-2.5 font-display text-sm font-semibold text-[#0f1c24] hover:border-[#0b6b63]"
                >
                  CRM
                </Link>
                <Link
                  href="/demos/connect/seguros"
                  className="inline-flex min-h-11 items-center rounded-md border border-[rgba(15,28,36,0.12)] px-4 py-2.5 font-display text-sm font-semibold text-[#0f1c24] hover:border-[#0b6b63]"
                >
                  Seguros
                </Link>
                <Link
                  href="/demos/connect/credito"
                  className="inline-flex min-h-11 items-center rounded-md border border-[rgba(15,28,36,0.12)] px-4 py-2.5 font-display text-sm font-semibold text-[#0f1c24] hover:border-[#0b6b63]"
                >
                  Crédito
                </Link>
                <Link
                  href="/demos/connect/juridico"
                  className="inline-flex min-h-11 items-center rounded-md border border-[rgba(15,28,36,0.12)] px-4 py-2.5 font-display text-sm font-semibold text-[#0f1c24] hover:border-[#0b6b63]"
                >
                  Jurídico
                </Link>
              </div>
            </div>
          </section>
          <ScreenshotGallery />
        </>
      ) : null}

      {slug === "valora" ? (
        <section className="space-y-6">
          <div>
            <h2 className="font-display text-xl font-bold text-[#0f1c24]">
              Problema
            </h2>
            <p className="mt-3 leading-relaxed text-[#4a5c67]">
              Organizar finanças pessoais com carteiras, metas e educação
              financeira em um produto completo de TCC.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-[#0f1c24]">
              O que fiz
            </h2>
            <p className="mt-3 leading-relaxed text-[#4a5c67]">
              Backend NestJS + Prisma + PostgreSQL (Supabase), autenticação/RLS
              e frontend React/Vite. Repos canônicos na org valora-TCC.
            </p>
          </div>
        </section>
      ) : null}

      {slug === "medvet" ? (
        <section className="space-y-6">
          <div>
            <h2 className="font-display text-xl font-bold text-[#0f1c24]">
              Problema
            </h2>
            <p className="mt-3 leading-relaxed text-[#4a5c67]">
              Gestão de clínica veterinária com tutores, pets, consultas e
              assistência via chatbot.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-[#0f1c24]">
              O que fiz
            </h2>
            <p className="mt-3 leading-relaxed text-[#4a5c67]">
              Backend (APIs, JWT, dual DB Postgres + Mongo e integração OpenAI).
              Frontend em parceria. Org MedVetFacef, com vídeo e demo online.
            </p>
          </div>
        </section>
      ) : null}

      {slug === "privateagro" ? (
        <section className="space-y-6">
          <div>
            <h2 className="font-display text-xl font-bold text-[#0f1c24]">
              Problema
            </h2>
            <p className="mt-3 leading-relaxed text-[#4a5c67]">
              Controlar plantios, custos e usuários em um sistema agrícola para
              o TCC técnico da ETEC.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-[#0f1c24]">
              O que fiz
            </h2>
            <p className="mt-3 leading-relaxed text-[#4a5c67]">
              CRUD completo em PHP + MySQL/MariaDB, com modelagem SQL e regras
              de negócio — base prática antes dos projetos Uni-FACEF.
            </p>
          </div>
        </section>
      ) : null}
    </CasePage>
  );
}
