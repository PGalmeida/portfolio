import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/Motion";

const featuredSlugs = ["connect", "valora", "medvet", "privateagro"];

const extras = [
  {
    slug: "banco-de-dados",
    label: "Banco de Dados",
    href: "https://github.com/PGalmeida/Banco_de_Dados",
  },
  {
    slug: "primevideo",
    label: "PrimeVideo API",
    href: "https://github.com/PGalmeida/PrimeVideo",
  },
  {
    slug: "herobook",
    label: "HeroBook",
    href: "https://hero-book-eight.vercel.app",
  },
  {
    slug: "projeto-hpc",
    label: "Projeto HPC",
    href: "https://github.com/PGalmeida/projeto-hpc",
  },
];

export function ProjectsSection() {
  const featured = projects.filter((p) => featuredSlugs.includes(p.slug));

  return (
    <section
      id="projetos"
      className="container-page scroll-mt-20 py-16 md:py-20"
    >
      <FadeIn>
        <p className="font-display text-sm font-semibold tracking-[0.14em] text-[#0b6b63] uppercase">
          Projetos
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0f1c24] md:text-4xl">
          Destaques profissionais e acadêmicos
        </h2>
        <p className="mt-3 max-w-2xl text-[#4a5c67]">
          Connect no Sicoob, TCCs Valora e PrivateAgro, e MedVet — os cases
          principais da trajetória.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-8 sm:gap-10 md:grid-cols-2">
        {featured.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.04} className="min-w-0">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 border-t border-[rgba(15,28,36,0.12)] pt-8">
        <p className="font-display text-sm font-semibold text-[#0f1c24]">
          Também no GitHub
        </p>
        <p className="mt-1 text-sm text-[#4a5c67]">
          Estudos de dados, apps pessoais e HPC — sem competir com os cases
          principais.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {extras.map((item) => (
            <li key={item.slug}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-[rgba(15,28,36,0.12)] bg-[#f7fafb] px-3 py-1.5 font-display text-xs font-semibold text-[#0f1c24] transition hover:border-[#0b6b63] hover:text-[#0b6b63]"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="https://github.com/PGalmeida"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md bg-[#0f1c24] px-3 py-1.5 font-display text-xs font-semibold text-white transition hover:bg-[#0b6b63]"
            >
              Ver perfil GitHub
            </Link>
          </li>
        </ul>
      </FadeIn>
    </section>
  );
}
