import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { DownloadCvButton } from "@/components/DownloadCvButton";

const projectLinks = [
  { href: "/projetos/connect", label: "Connect" },
  { href: "/projetos/valora", label: "Valora" },
  { href: "/projetos/medvet", label: "MedVet" },
  { href: "/projetos/privateagro", label: "PrivateAgro" },
];

const demoLinks = [
  { href: "/certificados", label: "Certificados" },
  { href: "/demos/connect", label: "Hub demos" },
  { href: "/demos/connect/crm", label: "CRM" },
  { href: "/demos/connect/seguros", label: "Seguros" },
  { href: "/demos/connect/credito", label: "Crédito" },
];

export function SiteFooter() {
  return (
    <footer
      id="contato"
      className="mt-16 scroll-mt-20 border-t border-[rgba(15,28,36,0.12)] bg-[#0f1c24] text-white md:mt-24"
    >
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr] md:gap-12">
          <div className="min-w-0">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/20">
                <Image
                  src={profile.photo}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-[center_18%]"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-brand text-xl font-semibold leading-snug">
                  {profile.fullName}
                </p>
                <p className="mt-1 text-sm text-white/65">
                  {profile.role} · {profile.company}
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Backend, bancos de dados e sistemas corporativos. Aberto a
              conversas sobre tecnologia e oportunidades.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <DownloadCvButton />
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 px-4 py-2.5 font-display text-sm font-semibold text-white transition hover:border-white/50"
              >
                Enviar e-mail
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#7dcdc4] uppercase">
              Projetos
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#projetos" className="transition hover:text-white">
                  Ver todos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-semibold tracking-[0.14em] text-[#7dcdc4] uppercase">
              Demos & contato
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {demoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {profile.fullName}
          </p>
          <p>Demos Connect usam apenas dados fictícios.</p>
        </div>
      </div>
    </footer>
  );
}
