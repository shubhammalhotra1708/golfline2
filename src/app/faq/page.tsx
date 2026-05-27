import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import BrandBar from "@/components/BrandBar";

export const metadata: Metadata = {
  title: "FAQ | Knitwear Manufacturing",
  description:
    "MOQs, sampling timelines, pricing, tech pack requirements, garment replication. Frequently asked questions about working with Golfline knitwear manufacturing.",
  openGraph: {
    title: "FAQ | Knitwear Manufacturing",
    description:
      "MOQs, timelines, pricing and more. Knitwear manufacturing FAQ.",
  },
  alternates: {
    canonical: "/faq",
  },
};

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

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero + Brand Bar */}
      <section className="min-h-screen flex flex-col bg-surface pt-20">
        <div className="flex-1 flex items-center">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 animate-fade-in-up">
              FAQ
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
              Frequently Asked Questions
            </h1>
            <p className="mt-8 text-muted text-base sm:text-lg leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
              MOQs, timelines, tech packs, pricing and more.
            </p>
          </div>
        </div>
        <BrandBar />
      </section>

      {/* FAQ List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <div className="py-8 border-b border-border">
                  <h2 className="text-lg font-semibold tracking-wide">
                    {faq.q}
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">
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
