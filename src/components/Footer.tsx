import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl tracking-[0.15em] font-semibold"
            >
              GOLFLINE
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Premium flat-knit manufacturing with 35+ years of expertise.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="hover:text-foreground transition-colors"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-medium">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>Ludhiana, Punjab, India</li>
              <li>
                <a
                  href="mailto:team@golfline.in"
                  className="hover:text-foreground transition-colors"
                >
                  team@golfline.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919872858280"
                  className="hover:text-foreground transition-colors"
                >
                  9872858280
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; 2025 Golfline. All rights reserved.</p>
          <p className="italic">Designed to last longer than trends.</p>
        </div>
      </div>
    </footer>
  );
}
