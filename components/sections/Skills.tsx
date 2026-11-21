"use client";

import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "C#"],
  },
  {
    title: "Frameworks",
    skills: [
      "Spring Boot",
      "NestJS",
      "Angular 19",
      ".NET Core / ASP.NET",
      "Flask",
      "FastAPI",
      "Next.js / React",
    ],
  },
  {
    title: "Databases & Caching",
    skills: ["Oracle", "PostgreSQL", "PostGIS", "MySQL", "Redis"],
  },
  {
    title: "Architecture",
    skills: [
      "REST APIs",
      "gRPC",
      "Microservices",
      "CQRS",
      "Clean Architecture",
      "Event-Driven Architecture",
      "Modular Architecture",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS S3",
      "Azure Functions",
      "Azure Queue Storage",
      "SignalR",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Git",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "Security & Testing",
    skills: [
      "JWT",
      "OAuth2",
      "RBAC",
      "2FA",
      "Jest",
      "Swagger / OpenAPI",
      "Postman",
    ],
  },
  {
    title: "Integrations & Observability",
    skills: [
      "Hugging Face Inference API",
      "Sentence-BERT",
      "Facebook Prophet",
      "scikit-learn",
      "Stripe (Payments)",
      "Entity Framework / EF Core",
      "Serilog",
      "Application Insights",
      "FluentValidation",
      "MailKit / SendGrid",
      "NSwag / OpenAPI",
    ],
  },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        label="Skills"
        title="Skills & tools"
        intro="What I use day to day, grouped by where it sits in the stack."
      />
      <dl>
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="grid gap-2 border-t border-line py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
          >
            <dt className="font-medium text-ink">{category.title}</dt>
            <dd className="text-ink-soft">{category.skills.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </SectionWrapper>
  );
};

export default Skills;
