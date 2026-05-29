import type { Metadata } from "next";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Our Work | Knitwear Portfolio",
  description:
    "Flat-knit knitwear manufactured by Golfline, Ludhiana. Sweaters, pullovers, jacquard knits, cable knits, rib knits for brands across India and internationally.",
  openGraph: {
    title: "Our Work | Knitwear Portfolio",
    description:
      "Flat-knit knitwear portfolio. Sweaters, pullovers, and jacquard knits manufactured in Ludhiana.",
  },
  alternates: {
    canonical: "/work",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://golfline.in" },
    { "@type": "ListItem", position: 2, name: "Our Work", item: "https://golfline.in/work" },
  ],
};

const gallery = [
  "/images/products/work-01.webp",
  "/images/products/work-02.webp",
  "/images/products/work-03.webp",
  "/images/products/work-04.webp",
  "/images/products/work-05.jpg",
  "/images/products/work-06.webp",
  "/images/products/work-07.webp",
  "/images/products/work-08.webp",
  "/images/products/work-09.webp",
  "/images/products/work-10.webp",
  "/images/products/work-11.webp",
  "/images/products/work-12.webp",
  "/images/products/work-13.jpeg",
  "/images/products/work-14.jpg",
  "/images/products/work-15.jpg",
  "/images/products/work-16.jpg",
  "/images/products/work-17.webp",
  "/images/products/work-18.png",
  "/images/products/work-19.png",
  "/images/products/work-20.png",
  "/images/products/work-21.png",
  "/images/products/work-22.png",
  "/images/products/work-23.jpeg",
  "/images/products/work-24.jpeg",
  "/images/products/work-25.jpeg",
  "/images/products/work-26.jpeg",
];

export default function WorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
            Our Work
          </p>
          <h1 className="font-serif text-3xl lg:text-4xl leading-tight">
            Gallery
          </h1>
          <p className="mt-3 text-sm text-muted">
           Knitwear produced at our Ludhiana facility.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {gallery.map((src, i) => (
            <RevealOnScroll key={i} delay={(i % 4) * 50}>
              <div className="mb-4 break-inside-avoid overflow-hidden group">
                <Image
                  src={src}
                  alt="Flat-knit knitwear manufactured by Golfline, Ludhiana"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
