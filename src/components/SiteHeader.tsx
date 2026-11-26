"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const links = [
  { href: "/#sobre", label: "Sobre", match: "sobre" },
  { href: "/#projetos", label: "Projetos", match: "projetos" },
  { href: "/certificados", label: "Certificados", match: "certificados" },
  { href: "/demos/connect", label: "Demos", match: "demos" },
  { href: "/#contato", label: "Contato", match: "contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash.replace("#", ""));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  function isActive(match: string) {
    if (match === "demos") {
      return pathname.startsWith("/demos");
    }
    if (match === "certificados") {
      return pathname.startsWith("/certificados");
    }
    if (pathname !== "/") return false;
    return hash === match;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(15,28,36,0.12)] bg-[color-mix(in_oklab,#e8eef1_88%,transparent)] backdrop-blur-md">
      <div className="container-page flex min-h-14 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="font-brand max-w-[58%] text-[13px] font-semibold leading-snug text-[#0f1c24] sm:max-w-none sm:text-sm md:text-[15px]"
          onClick={() => setHash("")}
        >
          {profile.fullName}
        </Link>

        <nav className="hidden items-center gap-1 font-display text-sm font-semibold md:flex">
          {links.map((link) => {
            const active = isActive(link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 transition-colors ${
                  active
                    ? "bg-[#d4ebe8] text-[#0b6b63]"
                    : "text-[#4a5c67] hover:text-[#0b6b63]"
                }`}
                onClick={() => {
                  if (link.match !== "demos") setHash(link.match);
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[rgba(15,28,36,0.12)] px-3 py-1.5 font-display text-xs font-semibold text-[#0f1c24] md:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav className="border-t border-[rgba(15,28,36,0.12)] bg-[#f7fafb]/95 px-5 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const active = isActive(link.match);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 font-display text-sm font-semibold ${
                      active
                        ? "bg-[#d4ebe8] text-[#0b6b63]"
                        : "text-[#0f1c24]"
                    }`}
                    onClick={() => {
                      setOpen(false);
                      if (link.match !== "demos") setHash(link.match);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
