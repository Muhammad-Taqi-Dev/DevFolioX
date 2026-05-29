import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google";
// @ts-ignore: Allow side-effect CSS import without type declarations
import "./globals.css";

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
  title: "Muhammad Taqi Haider | Backend & Full Stack Engineer",
  description:
    "Associate Software Engineer specializing in backend development with NestJS & .NET Core. Building production systems that perform — 1.6s → 600ms APIs, async pipelines, distributed auth, AI integration.",
  keywords: [
    "Muhammad Taqi Haider",
    "Software Engineer",
    "Backend Developer",
    "NestJS",
    ".NET Core",
    "Full Stack Developer",
    "Portfolio",
    "Redis",
    "PostgreSQL",
    "Docker",
  ],
  authors: [{ name: "Muhammad Taqi Haider" }],
  openGraph: {
    title: "Muhammad Taqi Haider | Backend & Full Stack Engineer",
    description:
      "Associate Software Engineer specializing in backend development with NestJS & .NET Core.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
