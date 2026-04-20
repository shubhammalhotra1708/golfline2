import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GOLFLINE | Premium Flat-Knit Knitwear Manufacturing",
    template: "%s | GOLFLINE",
  },
  description:
    "With 35+ years of expertise, Golfline is your full-cycle partner for premium flat-knit manufacturing. We transform your design vision into market-ready reality with precision, consistency, and speed.",
  keywords: [
    "knitwear manufacturer",
    "flat knit manufacturing",
    "sweater manufacturer India",
    "premium knitwear",
    "private label knitwear",
    "Ludhiana knitwear",
    "wool sweater manufacturer",
    "cashmere manufacturer",
    "knitwear production",
    "garment manufacturing India",
  ],
  authors: [{ name: "Golfline" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "GOLFLINE",
    title: "GOLFLINE | Premium Flat-Knit Knitwear Manufacturing",
    description:
      "With 35+ years of expertise, Golfline is your full-cycle partner for premium flat-knit manufacturing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
