import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const primary = project.links[0];

  return (
    <article className="group flex h-full min-w-0 flex-col border-t border-line pt-5 transition">
      <p className="font-display text-xs font-semibold tracking-[0.14em] text-accent uppercase">
        {project.subtitle}
      </p>
      <h3 className="font-display mt-2 text-xl font-bold leading-snug text-ink group-hover:text-accent md:text-2xl">
        {primary?.href.startsWith("/") ? (
          <Link href={primary.href} className="break-words">
            {project.title}
          </Link>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted md:text-base">
        {project.summary}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <li
            key={tech}
            className="rounded bg-bg-elevated px-2 py-0.5 font-display text-[11px] text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-3 text-sm">
        {project.links.map((link) =>
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
      </div>
    </article>
  );
}
