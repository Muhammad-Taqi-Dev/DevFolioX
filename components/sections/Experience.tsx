"use client";

import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";

const experiences = [
  {
    company: "Techlogix",
    position: "Software Engineer",
    period: "Sept 2026 – Present",
    location: "Karachi, Pakistan",
    achievements: [
      "Customise and extend Oracle Banking Digital Experience (OBDX) modules for one of Pakistan's leading banks, so the product fits the bank's own business rules.",
      "Write REST APIs and backend services in Java Spring Boot on Oracle Database that connect OBDX to core banking and third-party systems.",
      "Debug and fix production issues on live banking systems, and ship releases through Jenkins CI/CD in Agile sprints with QA, product and the bank's team.",
    ],
    technologies: [
      "OBDX",
      "Java",
      "Spring Boot",
      "Oracle Database",
      "REST APIs",
      "Redis",
      "Knockout.js",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    company: "QBS Co.",
    position: "Associate Software Engineer",
    promotedFrom: "Trainee Software Engineer",
    period: "Nov 2025 – Oct 2026",
    location: "Karachi, Pakistan",
    achievements: [
      "Took VersEye's live monitoring screens from 1.6s to under 600ms by caching third-party responses in Redis, so a refresh no longer called the same external services again.",
      "Added JWT auth with refresh tokens and Redis-backed sessions across 5+ microservices, and built an RBAC admin screen that assigns 278 permissions in bulk instead of by hand.",
      "Built server-rendered Next.js dashboards with 21 live KPIs at org, employee and product level, plus session log playback from AWS S3.",
      "Built inventory and SLA workflow services that talk over gRPC, and a NestJS service on the WhatsApp Business API that delivers tickets and customer notifications as they happen.",
    ],
    technologies: [
      ".NET Core",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Redis",
      "gRPC",
      "Docker",
      "JWT",
      "RBAC",
      "AWS S3",
      "WhatsApp Business API",
    ],
  },
  {
    company: "KoderLabs",
    position: "Associate Software Engineer",
    period: "Mar 2025 – Oct 2025",
    location: "Karachi, Pakistan",
    achievements: [
      "Cut database queries per request from 6–8 to 2–3 by restructuring .NET Core service logic (Clean Architecture), without breaking any existing API clients.",
      "Moved PDF generation off the request path into an event-driven pipeline (Azure Functions + Queue Storage), taking each document from about 1.6s to 400–500ms. Added SignalR for real-time chat notifications.",
      "Built polygon-based map search for real-estate listings with PostGIS and the Google Maps API, bringing spatial queries from 2.1s to 600ms on a multi-tenant SaaS platform.",
    ],
    technologies: [
      ".NET Core",
      "Clean Architecture",
      "PostgreSQL / PostGIS",
      "Azure Functions",
      "Azure Queue Storage",
      "SignalR",
      "Google Maps API",
    ],
  },
  {
    company: "QBS Co.",
    position: ".NET Intern",
    period: "Dec 2024 – Mar 2025",
    location: "Karachi, Pakistan",
    achievements: [
      "Worked on .NET microservices (Docker, gRPC, CQRS) for the Workspace Management, Live Monitoring and Employee Tracking modules, improving inter-service performance by about 25%.",
      "Built the Product and SLA services for Ajeek-KSA, with OAuth2 login and 2FA, and a Neo4j recommendation engine that drives WhatsApp automation.",
    ],
    technologies: [
      ".NET Core",
      "Docker",
      "gRPC",
      "CQRS",
      "Microservices",
      "Neo4j",
      "OAuth2",
      "2FA",
    ],
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label="Experience"
        title="Work experience"
        intro="Two years of production work, from a .NET internship to banking systems at Techlogix."
      />

      <ol>
        {experiences.map((exp, index) => (
          <li
            key={`${exp.company}-${exp.period}`}
            className={`grid gap-4 py-8 md:grid-cols-[13rem_1fr] ${
              index === 0 ? "pt-0" : "border-t border-line"
            }`}
          >
            <div>
              <p className="font-mono text-sm text-ink-muted">
                {exp.period}
                {index === 0 && (
                  <span className="block text-accent">Current</span>
                )}
              </p>
              <p className="mt-1 text-sm text-ink-faint">{exp.location}</p>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">
                {exp.position}
              </h3>
              <p className="text-ink-soft">{exp.company}</p>
              {exp.promotedFrom && (
                <p className="mt-1 text-sm text-ink-muted">
                  Promoted from {exp.promotedFrom}
                </p>
              )}

              <ul className="mt-4 space-y-2.5">
                {exp.achievements.map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-5 leading-relaxed text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.8em] h-px w-2.5 bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-mono text-sm text-ink-muted">
                {exp.technologies.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
};

export default Experience;
