import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const brands = [
  { name: "Chapter 2", src: "/images/brands/chapter2.png" },
  { name: "Superkicks", src: "/images/brands/superkicks.png" },
  { name: "BLCKORCHID", src: "/images/brands/blckorchid.png" },
  { name: "Freeze Studios", src: "/images/brands/freeze-studios.png" },
  { name: "Calcutta", src: "/images/brands/calcutta.webp" },
  { name: "CRAY", src: "/images/brands/cray.webp" },
  { name: "galli", src: "/images/brands/galli.webp" },
  { name: "EVEMEN", src: "/images/brands/evemen.png" },
  { name: "Black Farak", src: "/images/brands/black-farak.avif" },
  { name: "FB", src: "/images/brands/fb-monogram.png" },
];

export default function BrandBar() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-10 border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <p className="text-center font-serif text-2xl lg:text-3xl tracking-tight mb-2">
            Your Trusted B2B Partner
          </p>
          <p className="text-center text-xs tracking-[0.2em] uppercase text-muted mb-8">
            Trusted by leading brands across India and international markets
          </p>
        </RevealOnScroll>
      </div>
      <div className="overflow-hidden">
        <div className="flex items-center animate-scroll w-max">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="group mx-8 lg:mx-12 shrink-0 flex flex-col items-center gap-2"
              title={brand.name}
            >
              <div className="h-8 w-24 lg:h-10 lg:w-32 relative opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
              <span className="text-[10px] tracking-[0.15em] uppercase text-muted/0 group-hover:text-muted transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
