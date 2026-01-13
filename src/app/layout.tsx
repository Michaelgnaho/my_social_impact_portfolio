import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.michaelgnaho.com"), // Replace with your actual domain
  title: {
    default:
      "Michael Adeyemi Gnaho (MAG) | Global Youth Ambassador & Spoken Word Poet",
    template: "%s | Michael Adeyemi Gnaho",
  },
  description:
    "Michael Adeyemi Gnaho (MAG) is a two-time Poet Laureate, Global Youth Ambassador at Theirworld, and award-winning spoken word artist. Book performances for conferences, ceremonies, and events across Nigeria and beyond.",
  keywords: [
    "Michael Adeyemi Gnaho",
    "MAG poet",
    "spoken word artist Nigeria",
    "Global Youth Ambassador",
    "Theirworld ambassador",
    "Lagos poet laureate",
    "youth leadership speaker",
    "climate action advocate",
    "education advocacy",
    "Quramo Word Slam winner",
    "TEDx speaker",
    "Nigerian spoken word",
    "poetry performances",
    "keynote speaker Nigeria",
    "social impact advocate",
    "book poet Nigeria",
    "spoken word performances Lagos",
    "youth empowerment speaker",
    "climate justice advocate",
    "World Bank Youth Summit",
  ],
  authors: [{ name: "Michael Adeyemi Gnaho" }],
  creator: "Michael Adeyemi Gnaho",
  publisher: "Michael Adeyemi Gnaho",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.michaelgnaho.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.michaelgnaho.com",
    siteName: "Michael Adeyemi Gnaho - Global Youth Ambassador & Poet",
    title:
      "Michael Adeyemi Gnaho (MAG) | Global Youth Ambassador & Spoken Word Poet",
    description:
      "Award-winning spoken word poet, Global Youth Ambassador at Theirworld, and two-time Poet Laureate. Book performances for your next event.",
    images: [
      {
        url: "/images/og-image.jpg", // Create a 1200x630px image for social sharing
        width: 1200,
        height: 630,
        alt: "Michael Adeyemi Gnaho - Global Youth Ambassador and Spoken Word Poet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@simplymag_",
    creator: "@simplymag_",
    title:
      "Michael Adeyemi Gnaho (MAG) | Global Youth Ambassador & Spoken Word Poet",
    description:
      "Award-winning spoken word poet, Global Youth Ambassador at Theirworld, and two-time Poet Laureate. Book performances for your next event.",
    images: ["/images/twitter-card.jpg"], // Create a 1200x600px image
  },
  verification: {
    google: "your-google-site-verification-code", // Add from Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Poetry & Spoken Word",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.michaelgnaho.com/#person",
    name: "Michael Adeyemi Gnaho",
    alternateName: "MAG",
    description:
      "Global Youth Ambassador, Spoken Word Poet, and Youth Leadership Advocate",
    url: "https://www.michaelgnaho.com",
    image: {
      "@type": "ImageObject",
      url: "https://www.michaelgnaho.com/images/portrait1.jpg",
      width: 1200,
      height: 1200,
    },
    sameAs: [
      "https://www.instagram.com/simplymag_",
      "https://www.linkedin.com/in/michael-adeyemi-gnaho-7b487020b",
      "https://x.com/simplymag_",
      "https://www.facebook.com/micheal.adeyemi.963",
    ],
    jobTitle: "Global Youth Ambassador & Spoken Word Poet",
    worksFor: {
      "@type": "Organization",
      name: "Theirworld",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "Nigeria",
    },
    email: "helloglobalmichael@gmail.com",
    telephone: "+234-814-504-6894",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Award",
        name: "Two-time Poet Laureate - Lagos State Government",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Award",
        name: "Two-time Poet Laureate - Lagos State University",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Award",
        name: "Winner - Quramo Word Slam 2025",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Award",
        name: "Winner - Sage Hassan World Poetry Day Slam",
      },
    ],
    knowsAbout: [
      "Spoken Word Poetry",
      "Youth Leadership",
      "Climate Action",
      "Education Advocacy",
      "Social Justice",
      "Community Development",
    ],
    performerIn: [
      {
        "@type": "Event",
        name: "TEDx LASU",
        location: "Lagos State University",
      },
    ],
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.michaelgnaho.com/#organization",
    name: "Michael Adeyemi Gnaho - Spoken Word & Performance Services",
    description:
      "Professional spoken word poetry performances, keynote speaking, and advocacy partnerships",
    url: "https://www.michaelgnaho.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.michaelgnaho.com/logo.png",
    },
    image: "https://www.michaelgnaho.com/images/portrait1.jpg",
    telephone: "+234-814-504-6894",
    email: "helloglobalmichael@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "Nigeria",
    },
    sameAs: [
      "https://www.instagram.com/simplymag_",
      "https://www.linkedin.com/in/michael-adeyemi-gnaho-7b487020b",
      "https://x.com/simplymag_",
      "https://www.facebook.com/micheal.adeyemi.963",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: [
      "Spoken Word Poetry Performances",
      "Keynote Speaking",
      "Workshop Facilitation",
      "Advocacy Partnerships",
      "Media Appearances",
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.michaelgnaho.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.michaelgnaho.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Performances",
        item: "https://www.michaelgnaho.com/performances",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Social Impact",
        item: "https://www.michaelgnaho.com/impact",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://www.michaelgnaho.com/contact",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <Script
          id="structured-data-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <Script
          id="structured-data-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />

        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#f97316" />
        <link rel="canonical" href="https://www.michaelgnaho.com" />

        {/* Geo Tags */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
