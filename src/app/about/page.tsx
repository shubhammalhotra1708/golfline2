import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import BrandBar from "@/components/BrandBar";

export const metadata: Metadata = {
  title: "About Golfline | Knitwear Manufacturer Since 1990",
  description:
    "Vertically integrated knitwear manufacturer in Ludhiana, Punjab. In-house knitting, linking, washing, finishing, pressing. Trusted by domestic and international brands since 1990.",
  openGraph: {
    title: "About Golfline | Knitwear Manufacturer Since 1990",
    description:
      "Vertically integrated knitwear manufacturing from Ludhiana, Punjab since 1990.",
  },
  alternates: {
    canonical: "/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://golfline.in" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://golfline.in/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero + Brand Bar = full viewport */}
      <section className="min-h-screen flex flex-col bg-surface pt-20">
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 animate-fade-in-up">
                  About Us
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
                  Three Decades of Knitwear Excellence
                </h1>
              </div>
              <div className="flex flex-col justify-end">
                <div className="space-y-6 text-muted text-base sm:text-lg leading-relaxed animate-fade-in-up animation-delay-200">
                  <p>
                    Golfline is the best knitwear manufacturing unit in Ludhiana, Punjab, with complete in-house production capabilities. We specialise in crafting high-quality sweaters and pullovers with a strong focus on fit, finish, and consistency. From international fashion labels to domestic buyers, we work closely with every client to deliver products that meet their quality standards and design requirements.
                  </p>
                  <p>
                    Our facility combines traditional craftsmanship with modern
                    production capabilities, enabling us to deliver consistent
                    quality at scale — from development samples to full production
                    runs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BrandBar />
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <RevealOnScroll>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                  Vision
                </p>
                <p className="text-base sm:text-lg text-muted leading-relaxed">
                  To become the go-to partner for high-end D2C brands, offering
                  full-cycle solutions that combine innovation and artisanal
                  authenticity, ensuring reliable and repeatable results over
                  time.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                  Mission
                </p>
                <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
                  <p>
                    We create high-quality knitwear by combining artisanal
                    expertise and advanced technologies to transform brands&apos;
                    stylistic visions into industrially feasible products.
                  </p>
                  <p>
                    We position ourselves not only as executors, but also as
                    technical and creative partners, able to support brands
                    throughout the entire process, from vision to finished
                    garment.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 lg:py-28 bg-accent text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-8">
              Founder&apos;s Message
            </p>
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl leading-relaxed italic">
              &ldquo;I understand the frustrations of inconsistent quality and
              delayed timelines that plague the fashion industry. At Golfline, we
              have built a team and a process specifically designed to eliminate
              these risks at the root. We don&apos;t just execute — we partner in
              your success.&rdquo;
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>

    </>
  );
}
