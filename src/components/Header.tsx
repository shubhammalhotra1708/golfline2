"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl lg:text-2xl tracking-[0.15em] font-semibold"
        >
          GOLFLINE
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <li>
            <Link
              href="/about"
              className="text-muted hover:text-foreground transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/process"
              className="text-muted hover:text-foreground transition-colors duration-200"
            >
              Process / How We Work
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-muted hover:text-foreground transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-foreground transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          mobileOpen ? "max-h-60 border-b border-border" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-6 space-y-4 text-sm tracking-wide">
          <li>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-muted hover:text-foreground transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/process"
              onClick={() => setMobileOpen(false)}
              className="text-muted hover:text-foreground transition-colors"
            >
              Process / How We Work
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-muted hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
