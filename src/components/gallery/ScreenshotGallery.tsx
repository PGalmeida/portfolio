import Image from "next/image";
import Link from "next/link";
import { demoScreenshotSlots } from "@/content/demo-data";

export function ScreenshotGallery() {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-bold text-[#0f1c24]">
            Galeria sanitizada
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#4a5c67]">
            Mockups ilustrativos com dados 100% inventados. Nenhum dado real de
            cooperados, clientes ou sistemas internos é exibido.
          </p>
        </div>
        <span className="rounded-md bg-[#8a5a12]/12 px-2.5 py-1 font-display text-[11px] font-semibold text-[#8a5a12]">
          Apenas fictício
        </span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {demoScreenshotSlots.map((slot) => (
          <figure
            key={slot.id}
            className="overflow-hidden rounded-2xl border border-[rgba(15,28,36,0.12)] bg-[#f7fafb] shadow-[0_12px_30px_rgba(15,28,36,0.06)]"
          >
            <Link href={slot.href} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#dfe8eb]">
                <Image
                  src={slot.image}
                  alt={slot.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c24]/45 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  <p className="font-display text-sm font-semibold text-white">
                    {slot.title}
                  </p>
                  <span className="rounded bg-white/90 px-2 py-0.5 font-display text-[10px] font-semibold text-[#0b6b63]">
                    Abrir
                  </span>
                </div>
              </div>
            </Link>
            <figcaption className="border-t border-[rgba(15,28,36,0.12)] px-4 py-3 text-xs text-[#4a5c67]">
              {slot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
