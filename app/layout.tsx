import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Inter,
  Fira_Code,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Serif for the name and large headings
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

// Display / heading font — premium, modern, strong personality
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body font — the industry standard for readability
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Monospace — for code/terminal elements
const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    firstName: "Muhammad Taqi",
    lastName: "Haider",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Structured data so search engines can connect this site with the
// GitHub / LinkedIn profiles and show a richer result for name searches.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/profile.jpeg`,
  jobTitle: site.jobTitle,
  worksFor: { "@type": "Organization", name: site.employer },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressCountry: site.location.country,
  },
  knowsAbout: site.skills,
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-canvas">
      <body
        className={`${instrumentSerif.variable} ${plusJakarta.variable} ${inter.variable} ${firaCode.variable} antialiased bg-canvas text-ink-soft`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
