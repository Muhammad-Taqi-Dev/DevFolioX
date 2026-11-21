import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { site } from "@/lib/site";

// Each metric is a real before/after from Experience — keep them in sync.
const metrics = [
  { value: "1.6s → 0.6s", label: "Live dashboard load time, VersEye" },
  { value: "6–8 → 2–3", label: "Database queries per request, KoderLabs" },
  { value: "278", label: "Permissions now assigned in bulk, not by hand" },
];

const Hero = () => {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-page px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <p
          style={{ animationDelay: "0ms" }}
          className="animate-rise inline-flex items-center gap-2 font-mono text-sm text-ink-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Software Engineer at Techlogix
        </p>

        <h1
          style={{ animationDelay: "80ms" }}
          className="animate-rise mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.01em] text-ink sm:text-6xl md:text-7xl"
        >
          Muhammad Taqi Haider
        </h1>

        <p
          style={{ animationDelay: "160ms" }}
          className="animate-rise mt-4 font-display text-lg text-ink-muted sm:text-xl"
        >
          Backend &amp; Full-Stack Engineer · Karachi
        </p>

        <p
          style={{ animationDelay: "240ms" }}
          className="animate-rise mt-8 max-w-prose text-lg leading-relaxed text-ink-soft"
        >
          I build the backend of business software: APIs, auth, background
          jobs, and the dashboards people use every day. Right now I&apos;m at{" "}
          <span className="text-ink">Techlogix</span>, working on digital
          banking for one of Pakistan&apos;s largest banks.
        </p>

        <div
          style={{ animationDelay: "320ms" }}
          className="animate-rise mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-medium text-canvas transition-colors hover:bg-accent-hover"
          >
            See my work
            <FiArrowDown aria-hidden="true" />
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-2.5 text-ink transition-colors hover:border-ink-muted"
          >
            Resume (PDF)
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="flex items-center gap-5 px-2 text-sm">
            <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="link" href={`mailto:${site.email}`}>
              Email
            </a>
          </div>
        </div>

        <div
          style={{ animationDelay: "400ms" }}
          className="animate-rise mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3"
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-canvas px-5 py-5">
              <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
