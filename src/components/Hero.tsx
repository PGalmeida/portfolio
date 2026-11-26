"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { DownloadCvButton } from "@/components/DownloadCvButton";

export function Hero() {
  return (
    <section className="relative">
      <div className="container-page grid items-center gap-10 py-14 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:gap-12 md:py-20 lg:py-24">
        <div className="order-2 min-w-0 md:order-1">
          <p className="font-display text-xs font-semibold tracking-[0.12em] text-[#0b6b63] uppercase sm:text-sm">
            {profile.role}
          </p>

          <h1 className="font-brand mt-3 text-[clamp(2rem,4.2vw,3.35rem)] font-bold leading-[1.15] tracking-normal text-[#0f1c24]">
            {profile.fullName}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4a5c67] sm:text-lg">
            {profile.heroLead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#projetos"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0f1c24] px-5 py-2.5 font-display text-sm font-semibold text-white transition hover:bg-[#0b6b63]"
            >
              Ver projetos
            </Link>
            <DownloadCvButton className="min-h-11" />
            <Link
              href="/#contato"
              className="inline-flex min-h-11 items-center justify-center px-3 py-2.5 font-display text-sm font-semibold text-[#4a5c67] transition hover:text-[#0b6b63]"
            >
              Contato
            </Link>
          </div>
        </div>

        <motion.div
          className="order-1 w-full min-w-0 md:order-2"
          initial={{ opacity: 0.96, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-full border border-[rgba(15,28,36,0.12)] bg-[#f7fafb] shadow-[0_20px_50px_rgba(15,28,36,0.14)] md:mx-0 md:max-w-none">
            <Image
              src={profile.photo}
              alt={`Foto de ${profile.fullName}`}
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-[center_18%]"
              sizes="(min-width: 768px) 30vw, 280px"
            />
          </div>
          <div className="mt-5 space-y-1 px-2 text-center md:px-0">
            <p className="font-display text-sm font-semibold text-[#0f1c24]">
              {profile.company}
            </p>
            <p className="text-sm leading-snug text-[#4a5c67]">
              {profile.role}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
