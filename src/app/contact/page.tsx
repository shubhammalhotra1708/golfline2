import type { Metadata } from "next";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to start your next collection? Share your concept or tech pack with Golfline.",
  openGraph: {
    title: "Contact | GOLFLINE",
    description:
      "Share your concept or tech pack with our development team.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <Image
          src="/images/products/yarn-knit-bw.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-accent/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4 animate-fade-in-up">
            Contact
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white animate-fade-in-up animation-delay-100">
            Ready to Start Your Next Collection?
          </h1>
          <p className="mt-8 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
            Share your concept or tech pack with our development team.
            We&apos;ll respond with a formal feasibility study and costing -
            fast.
          </p>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl animate-fade-in-up animation-delay-300">
            Whether you&apos;re a growing D2C brand seeking your first
            manufacturing partner or an established label looking for a more
            reliable alternative - we&apos;re ready to talk.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <RevealOnScroll delay={0}>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                  Location
                </p>
                <p className="text-lg">Ludhiana, Punjab, India</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                  Email
                </p>
                <a
                  href="mailto:team@golfline.in"
                  className="text-lg hover:underline underline-offset-4 transition-colors"
                >
                  team@golfline.in
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                  Phone
                </p>
                <a
                  href="tel:+919872858280"
                  className="text-lg hover:underline underline-offset-4 transition-colors"
                >
                  9872858280
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
