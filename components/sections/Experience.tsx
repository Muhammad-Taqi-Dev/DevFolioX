"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

const Experience = () => {
  const experiences = [
    {
      company: "QBS Co.",
      position: "Associate Software Engineer",
      period: "Feb 2026 – Present",
      location: "Karachi, Pakistan",
      achievements: [
        "Cut API response latency from 1.6s to under 600ms by introducing Redis caching for third-party responses, eliminating redundant external calls on high-traffic monitoring screens.",
        "Engineered SEO-optimized SSR dashboards (Next.js/TypeScript) surfacing 21 real-time KPIs across org, individual, and product-level monitoring, with live-stream log playback via AWS S3.",
        "Implemented authentication and RBAC across 5+ microservices — including JWT authentication, refresh token handling, Redis-backed session management, and role-based authorization.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Redis",
        "JWT",
        "AWS S3",
        "SSR",
        "RBAC",
        "Microservices",
      ],
    },
    {
      company: "QBS Co.",
      position: "Trainee Software Engineer",
      period: "Nov 2025 – Jan 2026",
      location: "Karachi, Pakistan",
      achievements: [
        "Replaced a manual admin workflow by building an RBAC/IAM interface in Next.js managing 278 permissions across workspace-level feature gates with bulk assignment support.",
        "Built two production backend services — inventory management and SLA workflow orchestration — using gRPC for real-time inter-service communication across Dockerized microservices.",
        "Integrated the WhatsApp Business API to automate live ticket delivery and customer notifications at scale.",
      ],
      technologies: [
        "Next.js",
        "gRPC",
        "Docker",
        "RBAC",
        "IAM",
        "WhatsApp Business API",
      ],
    },
    {
      company: "KoderLabs",
      position: "Associate Software Engineer",
      period: "Mar 2025 – Oct 2025",
      location: "Karachi, Pakistan",
      achievements: [
        "Reduced per-request DB hits from 6–8 queries to 2–3 by refactoring .NET Core service logic under Clean Architecture, preserving full API backward compatibility.",
        "Eliminated a document generation bottleneck by architecting an event-driven async PDF pipeline (Azure Functions + Azure Queue Storage), cutting processing time from ~1.6s to 400–500ms per document; implemented SignalR for real-time chat notifications platform-wide.",
        "Implemented polygon-based geospatial filtering for real estate listings using PostGIS and Google Maps API, reducing spatial query execution time from 2.1s to 600ms on a multi-tenant SaaS platform.",
      ],
      technologies: [
        ".NET Core",
        "Clean Architecture",
        "PostGIS",
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
        "Built distributed microservices using Docker, gRPC, and CQRS, delivering Workspace Management, Live Monitoring, and Employee Tracking modules with 25% improved inter-service performance.",
        "Independently developed Product and SLA services; implemented OAuth2 authentication with 2FA and a Neo4j-based recommendation engine with WhatsApp automation using multi-hop graph traversal.",
      ],
      technologies: [
        ".NET Core",
        "Docker",
        "gRPC",
        "Neo4j",
        "CQRS",
        "Microservices",
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
            <span className="text-white">Where I've</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              shipped.
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Production systems, distributed backends, and measurable outcomes
            across 1.5 years.
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
                    <h3 className="text-base font-bold font-display text-white tracking-[-0.01em]">
                      {exp.position}
                    </h3>
                    <span className="text-sm text-gray-400 border border-white/8 rounded-full px-2.5 py-0.5 whitespace-nowrap font-mono">
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
