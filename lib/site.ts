// Single source of truth for site-wide identity used by metadata, JSON-LD,
// sitemap, robots and the generated Open Graph image.

export const site = {
  url: "https://dev-folio-x.vercel.app",
  name: "Muhammad Taqi Haider",
  role: "Backend & Full-Stack Engineer",
  jobTitle: "Software Engineer",
  employer: "Techlogix",
  location: { city: "Karachi", country: "PK" },
  title: "Muhammad Taqi Haider · Backend & Full-Stack Engineer",
  description:
    "Software engineer in Karachi building APIs, auth and dashboards with NestJS, .NET and Next.js. Case studies, experience and resume.",
  github: "https://github.com/Muhammad-Taqi-Dev",
  linkedin: "https://linkedin.com/in/taqih1",
  resume: "/Software_Engineer_Muhammad_Taqi_Resume.pdf",
  skills: [
    "NestJS",
    ".NET Core",
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Microservices",
    "REST APIs",
    "gRPC",
  ],
} as const;
