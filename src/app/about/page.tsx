import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import BrandBar from "@/components/BrandBar";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Golfline is a vertically integrated knitwear manufacturing unit based in Ludhiana, Punjab. For over 35 years, we have built a reputation for producing precision-crafted sweaters and pullovers.",
  openGraph: {
    title: "About Us | GOLFLINE",
    description:
      "35+ years of knitwear excellence. Vertically integrated manufacturing from Ludhiana, Punjab.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 animate-fade-in-up">
            About Us
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
            35+ Years of Knitwear Excellence
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="space-y-6 text-muted text-base sm:text-lg leading-relaxed">
              <p>
                Golfline is a vertically integrated knitwear manufacturing unit
                based in Ludhiana, Punjab. For over 35 years, we have built a
                reputation for producing precision-crafted sweaters and
                pullovers that meet the exacting standards of international
                fashion brands and discerning domestic buyers.
              </p>
              <p>
                Our facility combines traditional craftsmanship with modern
                production capabilities, enabling us to deliver consistent
                quality at scale — from development samples to full production
                runs.
              </p>
            </div>
          </RevealOnScroll>
        </div>
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

      {/* Brand Bar */}
      <BrandBar />
    </>
  );
}
