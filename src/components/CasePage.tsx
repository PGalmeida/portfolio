import Link from "next/link";
import type { Project } from "@/content/projects";
import { FadeIn } from "@/components/Motion";

export function CasePage({
  project,
  children,
}: {
  project: Project;
  children?: React.ReactNode;
}) {
  return (
    <article className="container-page max-w-3xl py-12 md:py-16">
      <FadeIn>
        <Link
          href="/#projetos"
          className="font-display text-sm font-semibold text-ink-muted hover:text-accent"
        >
          ← Projetos
        </Link>
        <p className="mt-8 font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          {project.subtitle}
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
          {project.summary}
        </p>
        {project.role ? (
          <p className="mt-4 text-sm text-ink">
            <span className="font-display font-semibold">Papel:</span>{" "}
            {project.role}
          </p>
        ) : null}
      </FadeIn>

      <FadeIn delay={0.05} className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-accent-soft px-2.5 py-1 font-display text-xs font-semibold text-ink"
          >
            {tech}
          </span>
        ))}
      </FadeIn>

      {project.highlights?.length ? (
        <FadeIn delay={0.08} className="mt-10">
          <h2 className="font-display text-xl font-bold text-ink">Destaques</h2>
          <ul className="mt-4 space-y-2 text-ink-muted">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      ) : null}

      <FadeIn delay={0.1} className="mt-8 flex flex-wrap gap-4 text-sm">
        {project.links
          .filter((l) => !l.href.startsWith("/projetos/"))
          .map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="font-display font-semibold text-accent underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-display font-semibold text-accent underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ),
          )}
      </FadeIn>

      {children ? <div className="mt-12 space-y-10">{children}</div> : null}
    </article>
  );
}
