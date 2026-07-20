"use client";

import { motion } from "framer-motion";
import {
  FiCloud,
  FiCode,
  FiDatabase,
  FiServer,
  FiShield,
  FiTool,
} from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

const skillCategories = [
  {
    title: "Languages",
    icon: FiCode,
    color: "blue",
    skills: ["TypeScript", "JavaScript", "Python", "C#"],
  },
  {
    title: "Frameworks",
    icon: FiTool,
    color: "cyan",
    skills: [
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
    icon: FiDatabase,
    color: "green",
    skills: ["PostgreSQL", "PostGIS", "MySQL", "Redis"],
  },
  {
    title: "Architecture",
    icon: FiServer,
    color: "purple",
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
    icon: FiCloud,
    color: "cyan",
    skills: [
      "AWS S3",
      "Azure Functions",
      "Azure Queue Storage",
      "SignalR",
      "Docker",
      "CI/CD",
      "Git",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "Security & Testing",
    icon: FiShield,
    color: "yellow",
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
    icon: FiCloud,
    color: "purple",
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

const accentMap: Record<string, string> = {
  cyan: "text-cyan-400",
  blue: "text-blue-400",
  purple: "text-purple-400",
  green: "text-emerald-400",
  yellow: "text-yellow-400",
};

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      className="bg-[#0a0f1a] relative overflow-hidden"
    >
      {/* Grid overlay — matches Hero */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow orbs — boosted to Hero-level */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-indigo-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-3xl pointer-events-none" />
      {/* Centered heading spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 font-mono text-sm tracking-[0.35em] uppercase mb-3">
            // tech.stack
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Tools I</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              trust.
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            The stack I reach for when shipping production systems that have to
            perform.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.07 }}
              className="rounded-xl border border-white/[0.12] bg-white/[0.05] backdrop-blur-sm hover:border-cyan-500/35 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 p-5 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/8 group-hover:border-cyan-500/20 transition-colors duration-300">
                  <category.icon
                    className={`text-lg ${accentMap[category.color] ?? "text-cyan-400"}`}
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>

              {/* Skill pills — text-only, matches About coreStack style */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-sm font-mono hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
