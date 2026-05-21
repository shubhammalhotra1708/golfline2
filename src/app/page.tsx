import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import BrandBar from "@/components/BrandBar";
import ExpertiseAccordion from "@/components/ExpertiseAccordion";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero/yarn-spools.jpeg"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAKAAcDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AE9s1Bpxlhq5wYrr84IC3UOpCW0eySfZNS7prO+3R1TjdwlMJP1p5SUj+ClVRLf/9k="
      />
      <div className="absolute inset-0 bg-accent/85" />
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 pt-20 lg:max-w-[85%] lg:mr-auto lg:ml-[8%]">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-white animate-fade-in-up">
          STITCHING DREAMS,
          <br />
          ONE KNIT AT A TIME
        </h1>
        <p className="mt-8 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
          With 35+ years of expertise, Golfline is your full-cycle partner for
          premium flat-knit manufacturing. We transform your design vision into
          market-ready reality with precision, consistency, and speed.
        </p>
        <div className="mt-10 animate-fade-in-up animation-delay-400">
          <Link
            href="/about"
            className="inline-block border border-white text-white px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-accent transition-all duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Expertise (accordion) ─── */
function Expertise() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <RevealOnScroll>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
                Our expertise inspires creative solutions.
              </h2>
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-3">
            <ExpertiseAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Metrics ─── */
function TrustMetrics() {
  const metrics = [
    { value: "35+", label: "Years of Expertise" },
    { value: "100%", label: "In-line Quality Control" },
    { value: "5", label: "Full-cycle Production Phases" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 lg:gap-12">
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
    { num: "01", title: "Enquiry & Brief" },
    { num: "02", title: "Sample Development" },
    { num: "03", title: "Order Confirmation" },
    { num: "04", title: "Production & Quality Control" },
    { num: "05", title: "Packing & Dispatch" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <RevealOnScroll>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/products/yarn-neutral.jpeg"
                alt="Premium yarn spools"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </RevealOnScroll>

          {/* Steps — headers only */}
          <div>
            <RevealOnScroll>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-12">
                A clear, structured production journey.
              </h2>
            </RevealOnScroll>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="flex items-baseline gap-4 py-4 border-b border-border">
                    <span className="font-serif text-lg text-muted/30">
                      {step.num}
                    </span>
                    <h3 className="text-base font-medium tracking-wide">
                      {step.title}
                    </h3>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll className="mt-10">
              <Link
                href="/process"
                className="inline-block border border-foreground px-8 py-3.5 text-sm tracking-[0.15em] uppercase hover:bg-foreground hover:text-white transition-all duration-300"
              >
                View More
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Product Range ─── */
function ProductRange() {
  const categories = [
    { name: "Flat Knit Collar", image: "/images/products/yarn-knit-bw.jpeg" },
    { name: "Sweaters & Pullovers", image: "/images/products/yarn-pink-green.jpeg" },
    { name: "Jacquard Knits", image: "/images/products/sewing-machine.jpeg" },
    { name: "Rib Knits", image: "/images/products/yarn-neutral.jpeg" },
    { name: "Cotton Knits", image: null },
    { name: "Cable Knits", image: null },
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-14">
            Our Range
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <RevealOnScroll key={i} delay={i * 80}>
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-border/30 mb-3">
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 640px) 33vw, 50vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-xs text-muted/50 tracking-wide">
                        Photo
                      </p>
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium tracking-wide">{cat.name}</p>
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
    <section className="py-20 lg:py-28 bg-accent text-white">
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
    <section className="py-20 lg:py-28 bg-white">
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
                href="mailto:team@golfline.in"
                className="text-base hover:underline underline-offset-4 transition-colors"
              >
                team@golfline.in
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
                Phone
              </h4>
              <a
                href="tel:+919872858280"
                className="text-base hover:underline underline-offset-4 transition-colors"
              >
                9872858280
              </a>
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
      <Expertise />
      <TrustMetrics />
      <Process />
      <ProductRange />
      <Differentiator />
      <ContactSection />
    </>
  );
}
