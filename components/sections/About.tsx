import Link from "next/link";
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";

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

// Practice and contests (was the separate Competitions section).
const practice = [
  { value: "240+", label: "LeetCode problems", href: "https://leetcode.com/u/taqi_haider1/" },
  {
    value: "50+",
    label: "HackerRank problems",
    href: "https://www.hackerrank.com/profile/taqihaider591",
  },
];
const contests = [
  { name: "KODERZ COMBAT", result: "Advanced to Round 2" },
  { name: "Game of Codes V", result: "Participated" },
];

const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="About"
        title="About me"
        intro="Backend engineer, two years in. Here's how I work and what I've done so far."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
        {/* Story and how I work */}
        <div className="space-y-12">
          <blockquote className="border-l-2 border-accent pl-5 font-serif text-2xl italic leading-snug text-ink">
            &ldquo;I get a weird kind of satisfaction when a slow API becomes fast.&rdquo;
          </blockquote>

          <div className="max-w-prose space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              At <span className="text-ink">QBS Co.</span>, a live monitoring screen took 1.6
              seconds to load because every refresh called the same outside services again. I
              profiled it, cached those responses in Redis, and got it{" "}
              <span className="text-ink">under 600ms</span>.
            </p>
            <p>
              I started as a .NET intern in December 2024. Since then I&apos;ve worked in{" "}
              <span className="text-ink">.NET Core</span>, <span className="text-ink">NestJS</span>{" "}
              and now <span className="text-ink">Java Spring Boot</span>: microservices, background
              pipelines, map search, auth, and an ML service for my final-year project,{" "}
              <Link href="/work/trackwise" className="link">
                TrackWise
              </Link>
              . Today I work on digital banking at Techlogix.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-sm text-ink-muted">How I work</h3>
            <ul className="mt-4 grid gap-6 sm:grid-cols-3">
              {traits.map((t) => (
                <li key={t.title} className="border-t border-line pt-4">
                  <p className="font-medium text-ink">{t.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">{t.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Facts */}
        <aside className="space-y-8">
          <div>
            <h3 className="font-mono text-sm text-ink-muted">Education</h3>
            <p className="mt-2 font-medium text-ink">BS Computer Science</p>
            <p className="text-sm text-ink-muted">NED University of Engineering · CGPA 3.395/4.00</p>
            <p className="text-sm text-ink-muted">Graduated June 2026, while working full-time</p>
          </div>

          <div>
            <h3 className="font-mono text-sm text-ink-muted">Core stack</h3>
            <p className="mt-2 font-mono text-sm leading-relaxed text-ink-soft">
              {coreStack.join(" · ")}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-sm text-ink-muted">Problem solving</h3>
            <ul className="mt-2 space-y-1.5">
              {practice.map((p) => (
                <li key={p.label} className="text-sm">
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="link">
                    <span className="font-medium">{p.value}</span> {p.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-1.5 text-sm">
              {contests.map((c) => (
                <li key={c.name}>
                  <span className="text-ink">{c.name}</span>
                  <span className="text-ink-muted"> · {c.result}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
};

export default About;
