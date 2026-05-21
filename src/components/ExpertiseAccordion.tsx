"use client";

import { useState } from "react";

const items = [
  {
    title: "35+ Years of Expertise",
    desc: "Three decades of hands-on flat-knit manufacturing have given us deep institutional knowledge across fibres, constructions, and finishing techniques. Trusted by brands across domestic and international markets, season after season — our experience translates directly into fewer revisions, faster sampling, and consistent production quality.",
  },
  {
    title: "Uncompromising Quality",
    desc: "What leaves our facility matches exactly what was approved at sampling. No exceptions. Every garment passes through multi-stage in-line quality checks — from yarn inspection to final pressing — ensuring zero surprises when your shipment arrives.",
  },
  {
    title: "Fast Turnaround",
    desc: "Fully in-house manufacturing — knitting, linking, washing, finishing, pressing — enables quick movement from sampling to shipment without the delays of outsourcing. We keep your timelines tight so you can hit your launch windows with confidence.",
  },
  {
    title: "Cutting-edge Technology",
    desc: "State-of-the-art Stoll and Shima Seiki flat-knit machinery combining industrial precision with artisanal craftsmanship. Our equipment handles everything from fine-gauge cashmere to heavy cable-knit constructions with equal finesse.",
  },
  {
    title: "No Subcontracting",
    desc: "One team. One accountability chain. Complete ownership from enquiry to final delivery. Every process happens under our roof, which means one point of contact, full traceability, and no quality dilution from third-party handoffs.",
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
