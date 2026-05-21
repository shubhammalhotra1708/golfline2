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
  metadataBase: new URL("https://golfline.in"),
  title: {
    default: "GOLFLINE | Premium Flat-Knit Knitwear Manufacturing",
    template: "%s | GOLFLINE",
  },
  description:
    "With 35+ years of expertise, Golfline is your full-cycle partner for premium flat-knit manufacturing. We transform your design vision into market-ready reality with precision, consistency, and speed.",
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
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Golfline",
  url: "https://golfline.in",
  description:
    "Premium flat-knit knitwear manufacturer with 35+ years of expertise. Full-cycle manufacturing from sampling to dispatch.",
  foundingDate: "1990",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ludhiana",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9872858280",
    email: "team@golfline.in",
    contactType: "sales",
    availableLanguage: ["English", "Hindi"],
  },
  knowsAbout: [
    "Flat-knit knitwear manufacturing",
    "Cashmere knitwear",
    "Merino wool sweaters",
    "Private label knitwear",
    "Sweater manufacturing",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
