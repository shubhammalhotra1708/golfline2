"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const works = [
  "/images/products/work-03.webp",
  "/images/products/work-11.webp",
  "/images/products/work-17.webp",
  "/images/products/work-15.jpg",
  "/images/products/work-23.jpeg",
  "/images/products/work-04.webp",
  "/images/products/work-07.webp",
  "/images/products/work-08.webp",
];

export default function WorkCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !scrollRef.current) return;
    const el = scrollRef.current;
    const id = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 1;
      }
    }, 20);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setPaused(false), 3000);
      }}
    >
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {[...works, ...works].map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-72 sm:w-80 lg:w-96 aspect-[3/4] overflow-hidden"
          >
            <Image
              src={src}
              alt="Flat-knit knitwear manufactured by Golfline, Ludhiana"
              fill
              className="object-cover"
              sizes="384px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
