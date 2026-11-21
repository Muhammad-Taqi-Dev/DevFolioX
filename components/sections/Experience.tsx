"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiTrendingUp } from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

const Experience = () => {
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

  return (
    <SectionWrapper
      id="experience"
      className="bg-[#080d18] relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow orbs — boosted */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Centered heading spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading — matches About pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 font-mono text-sm tracking-[0.35em] uppercase mb-3">
            // work.experience
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Work</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              experience
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Two years of production work, from a .NET internship to banking
            systems at Techlogix.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical centre line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative mb-8 md:mb-10 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-10" : "md:pl-10 md:ml-auto"
              }`}
            >
              {/* Timeline dot — fixed: was inside a plain string, now a proper JSX className */}
              <div
                className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-[3px] border-[#080d18] z-10 shadow-md shadow-cyan-500/40 ${
                  index % 2 === 0 ? "right-[-9px]" : "left-[-9px]"
                }`}
              />

              {/* Glassmorphism card */}
              <div
                className={`rounded-2xl border backdrop-blur-sm transition-all duration-300 p-6 group hover:shadow-lg ${
                  index === 0
                    ? "border-cyan-500/30 bg-cyan-500/[0.04] border-l-2 border-l-cyan-500/60 hover:border-cyan-500/50 hover:bg-cyan-500/[0.07] hover:shadow-cyan-500/15"
                    : "border-white/[0.12] bg-white/[0.05] hover:border-cyan-500/30 hover:bg-white/[0.08] hover:shadow-cyan-500/10"
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                      <h3 className="text-base font-bold font-display text-white tracking-[-0.01em]">
                        {exp.position}
                      </h3>
                      {exp.promotedFrom && (
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono whitespace-nowrap"
                          title={`Promoted from ${exp.promotedFrom}`}
                        >
                          <FiTrendingUp className="text-xs" aria-hidden="true" />
                          Promoted from {exp.promotedFrom}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-400 border border-white/[0.08] rounded-full px-2.5 py-0.5 whitespace-nowrap font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <FiBriefcase className="text-sm" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <FiMapPin className="text-sm" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed"
                    >
                      <span className="text-cyan-500 mt-1 flex-shrink-0 text-sm">
                        ▸
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-sm font-mono hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
