"use client";

import { useState } from "react";

const items = [
  {
    title: "35 years of flat-knit expertise",
    desc: "Three decades focused on one product category. We know what breaks, what scales and what doesn’t.",
  },
  {
    title: "Uncompromising quality",
    desc: "What gets approved at sampling is exactly what ships. Multi-stage in-line checks from yarn inspection to final pressing. Zero surprises.",
  },
  {
    title: "Fast turnaround",
    desc: "Fully in-house knitting, linking, washing, finishing, and pressing means no outsourcing delays. Your timelines stay tight, your launch windows stay on track.",
  },
  {
    title: "Stoll & Shima Seiki machines",
    desc: "German and Japanese flat-knit machinery used by premium manufacturers worldwide. Intricate jacquards, all knit structures, every gauge, executed with precision.",
  },
  {
    title: "Zero subcontracting",
    desc: "One team, one accountability chain. Every process under our roof means one point of contact, full traceability and no quality dilution from third-party handoffs.",
  },
];

export default function ExpertiseAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b border-border">
          <button
            className="w-full flex items-center justify-between py-5 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-base font-medium tracking-wide group-hover:text-muted transition-colors">
              {item.title}
            </span>
            <svg
              className={`w-4 h-4 text-muted shrink-0 ml-4 transition-transform duration-300 ${
                open === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-60 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
