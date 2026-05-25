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
  const doubled = [...works, ...works];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll-slow w-max gap-4">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-72 sm:w-80 lg:w-96 aspect-[3/4] overflow-hidden"
          >
            <Image
              src={src}
              alt="Golfline knitwear"
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
