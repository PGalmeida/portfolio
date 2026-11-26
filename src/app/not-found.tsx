import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-1 flex-col items-start justify-center py-24 md:py-32">
      <p className="font-display text-sm font-semibold tracking-[0.14em] text-[#0b6b63] uppercase">
        Erro 404
      </p>
      <h1 className="font-brand mt-3 text-4xl font-bold text-[#0f1c24] md:text-5xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-[#4a5c67]">
        Esse caminho não existe neste portfolio. Volte para a home ou explore os
        projetos e demos.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0f1c24] px-5 py-2.5 font-display text-sm font-semibold text-white transition hover:bg-[#0b6b63]"
        >
          Ir para a home
        </Link>
        <Link
          href="/#projetos"
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-[rgba(15,28,36,0.12)] px-5 py-2.5 font-display text-sm font-semibold text-[#0f1c24] transition hover:border-[#0b6b63]"
        >
          Ver projetos
        </Link>
        <Link
          href="/demos/connect"
          className="inline-flex min-h-11 items-center justify-center px-3 py-2.5 font-display text-sm font-semibold text-[#4a5c67] transition hover:text-[#0b6b63]"
        >
          Demos Connect
        </Link>
      </div>
    </div>
  );
}
