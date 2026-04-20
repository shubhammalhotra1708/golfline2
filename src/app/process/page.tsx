import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Process / How We Work",
  description:
    "A clear, structured production journey — from enquiry to dispatch. Premium yarn expertise, end-to-end manufacturing under one roof.",
  openGraph: {
    title: "Process / How We Work | GOLFLINE",
    description:
      "From enquiry to dispatch — a clear, structured production journey with premium yarn expertise.",
  },
};

export default function ProcessPage() {
  const steps = [
    {
      num: "01",
      title: "Enquiry & Brief",
      desc: "Share your concept or tech pack. We respond with feasibility and costing within 48 hours.",
    },
    {
      num: "02",
      title: "Sample Development",
      desc: "Clear revision rounds until you are fully satisfied with fit and finish.",
    },
    {
      num: "03",
      title: "Order Confirmation",
      desc: "Quantities, timelines, and pricing locked before production begins.",
    },
    {
      num: "04",
      title: "Production & QC",
      desc: "In-line quality control throughout, with regular updates at every stage.",
    },
    {
      num: "05",
      title: "Packing & Dispatch",
      desc: "Fully inspected, packed to spec, and delivered on schedule.",
    },
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
    {
      num: "01",
      title: "Design & Development",
      desc: "From your tech pack or from scratch — we ensure precise interpretation of your vision at every revision.",
    },
    {
      num: "02",
      title: "Private Label",
      desc: "Consistent, repeatable product lines that carry your brand identity at every scale, every season.",
    },
    {
      num: "03",
      title: "Sampling & Prototyping",
      desc: "Fast, accurate sampling with minimal revisions. Production samples that closely mirror the approved garment.",
    },
    {
      num: "04",
      title: "Quality Assurance",
      desc: "Rigorous in-line and end-of-line QC at every stage. What leaves our facility is exactly what was agreed at sampling.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 animate-fade-in-up">
            Process
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
            How We Work
          </h1>
          <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
            A clear, structured production journey.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="flex gap-6 sm:gap-10 py-10 border-b border-border last:border-0">
                  <span className="font-serif text-3xl lg:text-4xl text-muted/30 shrink-0 w-12">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-wide">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What We Work With */}
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

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {yarns.map((yarn, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <div className="border border-border bg-white px-6 py-5 text-sm tracking-wide hover:border-foreground transition-colors duration-300">
                  {yarn}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                What We Do
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                End-to-end under one roof.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {services.map((s, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="border-t border-border pt-6">
                  <span className="text-xs tracking-[0.2em] text-muted">
                    {s.num}
                  </span>
                  <h3 className="mt-2 text-lg font-medium tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
