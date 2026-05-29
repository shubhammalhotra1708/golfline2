import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://golfline.in"),
  title: {
    default: "GOLFLINE | Flat-Knit Knitwear Manufacturer, Ludhiana",
    template: "%s | GOLFLINE, Ludhiana",
  },
  description:
    "Flat-knit knitwear manufacturer in Ludhiana, Punjab. Sweaters, pullovers, jacquard knits. Stoll & Shima Seiki machines, 10-day sampling, zero subcontracting. Full-cycle production since 1990.",
  authors: [{ name: "Golfline" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "GOLFLINE",
    title: "GOLFLINE | Flat-Knit Knitwear Manufacturer, Ludhiana",
    description:
      "Flat-knit knitwear manufacturer in Ludhiana, Punjab. Sweaters, pullovers, jacquard knits since 1990.",
    images: [
      {
        url: "/images/hero/yarn-spools.jpeg",
        width: 1282,
        height: 1920,
        alt: "Golfline knitwear manufacturing — premium yarn spools",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "@id": "https://golfline.in/#business",
    name: "Golfline",
    alternateName: ["GL International", "Golfline Knitwear"],
    legalName: "GL International",
    url: "https://golfline.in",
    description:
      "Leading flat-knit knitwear manufacturer in Ludhiana, Punjab, India. 35+ years of expertise in premium sweater and pullover manufacturing. Full-cycle production — design, sampling, knitting, finishing, and dispatch — all under one roof with zero subcontracting.",
    foundingDate: "1990",
    image: "https://golfline.in/images/hero/yarn-spools.jpeg",
    telephone: "+91-9872858280",
    email: "team@golfline.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ludhiana",
      addressRegion: "Punjab",
      postalCode: "141001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.9,
      longitude: 75.85,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Punjab" },
      { "@type": "City", name: "Ludhiana" },
      { "@type": "Place", name: "International" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9872858280",
      email: "team@golfline.in",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Punjabi"],
    },
    knowsAbout: [
      "Flat-knit knitwear manufacturing",
      "Sweater manufacturing",
      "Pullover manufacturing",
      "Jacquard knit manufacturing",
      "Cable knit sweaters",
      "Rib knit garments",
      "Private label knitwear",
      "B2B knitwear manufacturing",
      "Lambswool knitwear",
      "Cotton knitwear",
      "Mohair blend knitwear",
      "Acrylic knitwear",
      "Stoll flat-knit machines",
      "Shima Seiki flat-knit machines",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Knitwear Manufacturing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Private Label Knitwear Manufacturing",
            description:
              "Full-cycle private label sweater and pullover manufacturing with 10-day sample development.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Knitwear Design & Development",
            description:
              "From tech pack to finished garment — design interpretation, sampling, and prototyping for flat-knit knitwear.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Knitwear Sampling & Prototyping",
            description:
              "10-day flat-knit sample development with revision rounds until approved. Production-ready samples.",
          },
        },
      ],
    },
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://golfline.in/#website",
    url: "https://golfline.in",
    name: "GOLFLINE",
    publisher: { "@id": "https://golfline.in/#business" },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
