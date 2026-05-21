import type { Metadata } from "next";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import BrandBar from "@/components/BrandBar";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "End-to-end knitwear manufacturing under one roof — from enquiry to dispatch. Premium yarn expertise, design & development, private label, sampling, and quality assurance.",
  openGraph: {
    title: "What We Do | GOLFLINE",
    description:
      "End-to-end knitwear manufacturing under one roof with premium yarn expertise.",
  },
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  const steps = [
    { num: "01", title: "Enquiry & Brief" },
    { num: "02", title: "Sample Development" },
    { num: "03", title: "Order Confirmation" },
    { num: "04", title: "Production & QC" },
    { num: "05", title: "Packing & Dispatch" },
  ];

  const yarns = [
    "Merino Wool",
    "Lambswool",
    "Cashmere",
    "Cashmere Blends",
    "Cotton",
    "Cotton Blends",
    "Acrylic",
    "Acrylic / Wool Blends",
  ];

  const services = [
    "Design & Development — from your tech pack or from scratch",
    "Private Label — consistent, repeatable product lines at every scale",
    "Sampling & Prototyping — fast, accurate samples with minimal revisions",
    "Quality Assurance — rigorous in-line and end-of-line QC at every stage",
  ];

  return (
    <>
      {/* Hero — split layout */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 animate-fade-in-up">
                What We Do
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
                End-to-end under one roof.
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-muted text-base sm:text-lg leading-relaxed animate-fade-in-up animation-delay-200">
                From the first enquiry to final dispatch, every step of
                production happens under our direct oversight. No
                subcontracting, no handoffs, no surprises.
              </p>
              <ul className="mt-6 space-y-2 animate-fade-in-up animation-delay-300">
                <li className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 w-1 h-1 bg-foreground shrink-0" />
                  Full-cycle flat-knit manufacturing
                </li>
                <li className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 w-1 h-1 bg-foreground shrink-0" />
                  35+ years of production expertise
                </li>
                <li className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 w-1 h-1 bg-foreground shrink-0" />
                  In-house quality control at every stage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps — headers only */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-12">
              A clear, structured production journey.
            </h2>
          </RevealOnScroll>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="flex items-baseline gap-4 py-5 border-b border-border">
                  <span className="font-serif text-xl text-muted/30">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-medium tracking-wide">
                    {step.title}
                  </h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What We Work With — pointer style */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                What We Work With
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                Premium yarn & fibre expertise.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3">
            {yarns.map((yarn, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <div className="flex items-center gap-3 py-2">
                  <span className="w-1.5 h-1.5 bg-foreground shrink-0" />
                  <span className="text-sm tracking-wide">{yarn}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services — pointer style */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="max-w-xl mb-12">
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                Our Services
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                What we offer.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {services.map((s, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="flex items-start gap-3 py-3 border-b border-border">
                  <span className="mt-2 w-1.5 h-1.5 bg-foreground shrink-0" />
                  <p className="text-base leading-relaxed">{s}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Product Photos Placeholder */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-12">
              Our Work
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/images/products/yarn-neutral.jpeg",
              "/images/products/yarn-knit-bw.jpeg",
              "/images/products/sewing-machine.jpeg",
              "/images/products/yarn-pink-green.jpeg",
            ].map((src, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={src}
                    alt="Production sample"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Bar */}
      <BrandBar />
    </>
  );
}
