import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-page px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-ink-soft">
          The link may be old, or it has a typo. Here are a few places worth going instead.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-md bg-accent px-5 py-2.5 font-medium text-canvas transition-colors hover:bg-accent-hover"
          >
            Back to the homepage
          </Link>
          <Link
            href="/#contact"
            className="rounded-md border border-line-strong px-5 py-2.5 text-ink transition-colors hover:border-ink-muted"
          >
            Get in touch
          </Link>
        </div>

        <h2 className="mt-16 font-mono text-sm text-ink-muted">Case studies</h2>
        <ul className="mt-3 border-b border-line">
          {featured.map((p) => (
            <li key={p.slug} className="border-t border-line">
              <Link
                href={`/work/${p.slug}`}
                className="flex items-baseline justify-between gap-4 py-4 text-ink transition-colors hover:text-accent"
              >
                <span>{p.title}</span>
                <span className="text-sm text-ink-muted">{p.subtitle}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
