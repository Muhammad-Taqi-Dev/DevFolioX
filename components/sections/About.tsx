"use client";

import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";

const stats = [
  { label: "Years building production software", value: "2" },
  { label: "API endpoints in TrackWise", value: "56" },
  { label: "Accuracy sorting transactions (TrackWise ML)", value: "88%" },
  { label: "Faster map search (2.1s → 0.6s)", value: "71%" },
];

const traits = [
  {
    title: "I measure before I fix",
    body: "When something is slow, I profile it first, find the actual cause, and change one thing at a time.",
  },
  {
    title: "Plain, predictable code",
    body: "Clear layers and small services, so the next person can read it, test it and change it safely.",
  },
  {
    title: "I stay with what I ship",
    body: "Schema, API, deployment, and fixing it when it breaks in production.",
  },
];

const coreStack = [
  ".NET Core",
  "C#",
  "NestJS",
  "TypeScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Azure",
  "AWS",
  "Next.js",
];

const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="About"
        title="About me"
        intro="Backend engineer, two years in. Here's how I work and what I've done so far."
      />

      <div className="grid gap-12 lg:grid-cols-[18rem_1fr]">
        {/* Left: photo, education, stack */}
        <aside className="space-y-8">
          <div className="relative aspect-square w-full max-w-[18rem] overflow-hidden rounded-lg border border-line">
            <Image
              src="/profile.jpeg"
              alt="Muhammad Taqi Haider"
              fill
              sizes="(min-width: 640px) 18rem, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-mono text-sm text-ink-muted">Education</p>
            <p className="mt-2 font-medium text-ink">BS Computer Science</p>
            <p className="text-sm text-ink-muted">
              NED University of Engineering · CGPA 3.395/4.00
            </p>
            <p className="text-sm text-ink-muted">
              Graduated June 2026, while working full-time
            </p>
          </div>

          <div>
            <p className="font-mono text-sm text-ink-muted">Core stack</p>
            <p className="mt-2 font-mono text-sm leading-relaxed text-ink-muted">
              {coreStack.join(" · ")}
            </p>
          </div>
        </aside>

        {/* Right: story, traits, numbers, TrackWise */}
        <div className="space-y-12">
          <div className="space-y-6">
            <blockquote className="border-l-2 border-accent pl-5 font-serif text-2xl italic leading-snug text-ink">
              &ldquo;I get a weird kind of satisfaction when a slow API becomes
              fast.&rdquo;
            </blockquote>

            <div className="max-w-prose space-y-4 text-ink-soft">
              <p>
                At <span className="text-ink">QBS Co.</span>, a live monitoring
                screen took 1.6 seconds to load because every refresh called the
                same outside services again. I profiled it, cached those
                responses in Redis, and got it{" "}
                <span className="text-ink">under 600ms</span>.
              </p>
              <p>
                I started as a .NET intern in December 2024. Since then
                I&apos;ve worked in <span className="text-ink">.NET Core</span>,{" "}
                <span className="text-ink">NestJS</span> and now{" "}
                <span className="text-ink">Java Spring Boot</span>:
                microservices, background pipelines, map search, auth, and an ML
                service for my final-year project. Today I work on digital
                banking at Techlogix.
              </p>
            </div>
          </div>

          <ul className="grid gap-6 sm:grid-cols-3">
            {traits.map((t) => (
              <li key={t.title} className="border-t border-line pt-4">
                <p className="font-medium text-ink">{t.title}</p>
                <p className="mt-1 text-sm text-ink-muted">{t.body}</p>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-canvas p-5">
                <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-line-strong">
            <p className="font-mono text-sm text-ink-muted">Final-year project</p>
            <p className="mt-1 font-medium text-ink">
              TrackWise, a personal finance app with ML
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Team of three; I led the backend and ML. A 56-endpoint
              NestJS/PostgreSQL API, an Angular frontend, and a Flask ML service
              that sorts transactions with{" "}
              <span className="text-ink">88% accuracy</span> and flags unusual
              spending (AUC-ROC <span className="text-ink">0.87</span>). Live,
              with 10 beta users.
            </p>
            <a
              href="https://track-wise2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link mt-3 inline-block text-sm"
            >
              Try it live ↗
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
