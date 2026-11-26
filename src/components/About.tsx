import { profile } from "@/content/profile";
import { FadeIn } from "@/components/Motion";

export function About() {
  return (
    <section id="sobre" className="container-page scroll-mt-20 py-16 md:py-20">
      <FadeIn>
        <p className="font-display text-sm font-semibold tracking-[0.14em] text-[#0b6b63] uppercase">
          Sobre mim
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0f1c24] md:text-4xl">
          Backend, dados e sistemas que resolvem problemas reais
        </h2>
      </FadeIn>

      {/* Mesma grade do hero: coluna da direita = foto e Stack alinhados */}
      <div className="mt-10 grid items-start gap-8 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:gap-12">
        <FadeIn
          delay={0.05}
          className="min-w-0 space-y-4 text-base leading-relaxed text-[#4a5c67] md:text-lg"
        >
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </FadeIn>

        <FadeIn delay={0.1} className="min-w-0 w-full">
          <div className="rounded-2xl border border-[rgba(15,28,36,0.12)] bg-[#f7fafb]/90 p-5 sm:p-6">
            <p className="font-display text-sm font-semibold text-[#0f1c24]">
              Stack
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-[#d4ebe8] px-2.5 py-1 font-display text-xs font-semibold text-[#0f1c24]"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 border-t border-[rgba(15,28,36,0.12)] pt-5 text-sm text-[#4a5c67]">
              {profile.education.map((edu) => (
                <div key={edu.title}>
                  <p className="font-display font-semibold text-[#0f1c24]">
                    {edu.title}
                  </p>
                  <p className="mt-0.5">
                    {edu.org} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
