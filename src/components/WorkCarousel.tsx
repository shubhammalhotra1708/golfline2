"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const works = [
  "/images/products/work-01.webp",
  "/images/products/work-02.webp",
  "/images/products/work-03.webp",
  "/images/products/work-04.webp",
  "/images/products/work-05.jpg",
  "/images/products/work-06.webp",
  "/images/products/work-07.webp",
  "/images/products/work-08.webp",
  "/images/products/work-09.webp",
  "/images/products/work-10.webp",
  "/images/products/work-11.webp",
  "/images/products/work-12.webp",
  "/images/products/work-13.jpeg",
  "/images/products/work-14.jpg",
  "/images/products/work-15.jpg",
  "/images/products/work-16.jpg",
  "/images/products/work-17.webp",
  "/images/products/work-18.png",
  "/images/products/work-19.png",
  "/images/products/work-20.png",
  "/images/products/work-21.png",
  "/images/products/work-22.png",
  "/images/products/work-23.jpeg",
  "/images/products/work-24.jpeg",
  "/images/products/work-25.jpeg",
  "/images/products/work-26.jpeg",
];

export default function WorkCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

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

  const onMouseDown = (e: React.MouseEvent) => {
    setPaused(true);
    setDragging(true);
    dragStart.current = {
      x: e.pageX,
      scrollLeft: scrollRef.current?.scrollLeft ?? 0,
    };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !scrollRef.current) return;
    const dx = e.pageX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onMouseUp = () => {
    setDragging(false);
    setTimeout(() => setPaused(false), 2000);
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setDragging(false); setPaused(false); }}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 3000)}
    >
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto scrollbar-hide ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {works.map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-72 sm:w-80 lg:w-96 aspect-[3/4] overflow-hidden select-none"
          >
            <Image
              src={src}
              alt="Flat-knit knitwear manufactured by Golfline, Ludhiana"
              fill
              className="object-cover pointer-events-none"
              sizes="384px"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
