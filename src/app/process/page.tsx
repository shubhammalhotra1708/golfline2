import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import BrandBar from "@/components/BrandBar";
import WorkCarousel from "@/components/WorkCarousel";

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
    {
      title: "Send us your brief",
      desc: "A reference image, mood board, or tech pack — whatever you have. We respond with feasibility and costing within 48 hours.",
      timeline: "48 HRS",
    },
    {
      title: "Sample development",
      desc: "We knit, link, finish, and deliver. Revision rounds until fit, feel, and finish are exactly right. No locking in until you're satisfied.",
      timeline: "10 DAYS",
    },
    {
      title: "Lock the order",
      desc: "Quantities, price per piece, and delivery date — confirmed in writing before we start a single production stitch.",
      timeline: "2 DAYS",
    },
    {
      title: "Production with live updates",
      desc: "In-line QC at every stage. Regular updates so you know exactly where your order is. No radio silence.",
      timeline: "4–6 WEEKS",
    },
    {
      title: "Packed and dispatched",
      desc: "Fully inspected, packed to your spec with your labels and hangtags, dispatched to your warehouse. Your launch is our deadline.",
      timeline: "ON SCHEDULE",
    },
  ];

  const yarns = [
    "Lambswool",
    "Cotton",
    "Cotton Blends",
    "Acrylic",
    "Acrylic / Wool Blends",
    "Mohair Blend",
  ];

  return (
    <>
      {/* Hero + Brand Bar = full viewport */}
      <section className="min-h-screen flex flex-col bg-surface pt-20">
        <div className="flex-1 flex items-center">
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
        </div>
        <BrandBar />
      </section>

      {/* Steps — with timelines */}
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
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-8 py-6 border-b border-border">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold tracking-wide">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0 sm:w-32">
                    <span className="text-sm font-semibold tracking-[0.1em] text-accent">
                      {step.timeline}
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What We Work With — pointer style */}
      <section className="py-20 lg:py-28 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
                What We Work With
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight text-white">
                Premium yarn & fibre.
              </h2>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {yarns.map((yarn, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <div className="flex items-center gap-3 py-2">
                  <span className="w-1.5 h-1.5 bg-white shrink-0" />
                  <span className="text-sm tracking-wide text-white/80">{yarn}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects carousel */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <RevealOnScroll>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Recent Projects
            </p>
          </RevealOnScroll>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <WorkCarousel />
        </div>
      </section>

    </>
  );
}
