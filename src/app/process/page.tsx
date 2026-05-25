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
      timeline: "2–3 WEEKS",
      note: "10 days",
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

  const faqs = [
    {
      q: "What's your MOQ?",
      a: "Our MOQs are flexible and depend on the style, yarn, construction, and overall complexity of the garment. We work with both growing brands and established labels, so requirements are discussed based on the specific development and production scope.",
    },
    {
      q: "Do I need a tech pack to start?",
      a: "No. A reference image, an existing garment, or even a detailed idea is enough to begin. We develop the technicals during the sampling process itself. Some of our strongest styles have started from nothing more than a single photo.",
    },
    {
      q: "How long does the process take from first contact to delivery?",
      a: "For a completely new style, timelines are typically 8–12 weeks end to end. Sampling usually takes 2–3 weeks, revision rounds can add another 1–2 weeks depending on changes, and production generally runs 4–6 weeks. Repeat orders on approved styles move considerably faster.",
    },
    {
      q: "Is pricing transparent? Are there any hidden costs?",
      a: "Yes. Pricing is discussed at the briefing stage and finalised after sample development. We clearly break down per-piece production cost, sampling charges, and any labelling or packaging costs separately. Nothing moves forward without approval.",
    },
    {
      q: "Can you replicate a garment I already own?",
      a: "Yes. We regularly reverse engineer existing garments. You can send us the physical piece or bring it in, and we'll analyse the construction, gauge, yarn, and fit to recreate it as closely as possible. If any detail needs adjustment for production feasibility, we'll communicate that upfront.",
    },
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
                    {step.note && (
                      <p className="text-xs text-accent/60 mt-0.5">{step.note}</p>
                    )}
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

      {/* Our Work — scrolling carousel */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
              Our Work
            </h2>
          </RevealOnScroll>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <WorkCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-12">
              Frequently Asked Questions
            </h2>
          </RevealOnScroll>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="py-6 border-b border-border">
                  <h3 className="text-base font-semibold tracking-wide">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {faq.a}
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
