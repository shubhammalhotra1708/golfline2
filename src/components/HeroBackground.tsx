"use client";

export type HeroVariant = "blue" | "dark" | "plain";

export default function HeroBackground({
  variant = "blue",
}: {
  variant?: HeroVariant;
}) {
  const overlayClass =
    variant === "blue"
      ? "bg-accent/80"
      : variant === "dark"
        ? "bg-black/70"
        : "";

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} />}
    </>
  );
}
