import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

/* ─── Brand Bar ─── */
function BrandBar() {
  const brands = [
    "BRAND A",
    "BRAND B",
    "BRAND C",
    "BRAND D",
    "BRAND E",
    "BRAND F",
    "BRAND G",
    "BRAND H",
  ];

  return (
    <section className="py-10 border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-muted mb-8">
          Trusted by leading brands across India and international markets
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-scroll w-max">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="mx-8 lg:mx-12 text-sm tracking-[0.2em] text-muted/50 font-medium whitespace-nowrap select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center pt-20">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight animate-fade-in-up">
          STITCHING DREAMS,
          <br />
          ONE KNIT AT A TIME
        </h1>
        <p className="mt-8 text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          With 35+ years of expertise, Golfline is your full-cycle partner for
          premium flat-knit manufacturing. We transform your design vision into
          market-ready reality with precision, consistency, and speed.
        </p>
        <div className="mt-10 animate-fade-in-up animation-delay-400">
          <Link
            href="/about"
            className="inline-block border border-foreground px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-foreground hover:text-white transition-all duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Metrics ─── */
function TrustMetrics() {
  const metrics = [
    { value: "35+", label: "Years of Expertise" },
    { value: "<48", label: "Hours Quote Response Time" },
    { value: "100%", label: "In-line Quality Control" },
    { value: "5", label: "Full-cycle Production Phases" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="text-center">
                <span className="font-serif text-4xl lg:text-5xl tracking-tight">
                  {m.value}
                </span>
                <p className="mt-3 text-sm text-muted tracking-wide leading-relaxed">
                  {m.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process / How We Work ─── */
function Process() {
  const steps = [
    {
      num: "01",
      title: "Enquiry & Brief",
      desc: "Share your concept, reference, or tech pack. We respond with feasibility and costing within 48 hours.",
    },
    {
      num: "02",
      title: "Sample Development",
      desc: "Development and revision rounds continue until you are fully satisfied with fit, construction, and finish.",
    },
    {
      num: "03",
      title: "Order Confirmation",
      desc: "Quantities, timelines, and pricing are locked before production begins.",
    },
    {
      num: "04",
      title: "Production & Quality Control",
      desc: "In-line quality checks at every stage with regular progress updates.",
    },
    {
      num: "05",
      title: "Packing & Dispatch",
      desc: "Fully inspected, packed to specification, and delivered on schedule.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Process
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
              A clear, structured production journey.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {steps.map((step, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="group">
                <span className="text-xs tracking-[0.2em] text-muted">
                  Step {step.num}
                </span>
                <h3 className="mt-2 text-lg font-medium tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-14">
          <Link
            href="/process"
            className="inline-block border border-foreground px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-foreground hover:text-white transition-all duration-300"
          >
            View More
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ─── Why Golfline ─── */
function WhyGolfline() {
  const reasons = [
    {
      title: "35+ Years of Expertise",
      desc: "Trusted by brands across domestic and international markets, season after season.",
    },
    {
      title: "Uncompromising Quality",
      desc: "What leaves our facility matches exactly what was approved at sampling. No exceptions.",
    },
    {
      title: "Fast Turnaround",
      desc: "Fully in-house manufacturing enables quick movement from sampling to shipment.",
    },
    {
      title: "Cutting-edge Technology",
      desc: "State-of-the-art flat-knit machinery combining industrial precision with artisanal craftsmanship.",
    },
    {
      title: "No Subcontracting",
      desc: "One team. One accountability chain. Complete ownership from enquiry to final delivery.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Why Golfline
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
              Built on trust. Delivered with precision.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {reasons.map((r, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-medium tracking-wide">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Differentiator ─── */
function Differentiator() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="font-serif text-3xl lg:text-5xl leading-tight">
            Built to Eliminate Supply Chain Headaches.
          </h2>
          <p className="mt-8 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Every process, every hire, and every investment has been made with
            one objective: repeatable premium-grade quality, delivered on time,
            every time.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ─── Contact (Homepage) ─── */
function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
            Contact
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-12">
            Get in Touch
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealOnScroll delay={0}>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
                Location
              </h4>
              <p className="text-base">Ludhiana, Punjab, India</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
                Email
              </h4>
              <a
                href="mailto:enquiries@golfline.com"
                className="text-base hover:underline underline-offset-4 transition-colors"
              >
                enquiries@golfline.com
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
                Phone
              </h4>
              <p className="text-base">+91 (161) XXX-XXXX</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <BrandBar />
      <TrustMetrics />
      <Process />
      <WhyGolfline />
      <Differentiator />
      <ContactSection />
    </>
  );
}
