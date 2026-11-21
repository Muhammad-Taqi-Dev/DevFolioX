"use client";

import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiZap,
  FiCpu,
  FiGlobe,
  FiExternalLink,
} from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

const stats = [
  {
    label: "Years building production software",
    value: "2",
    suffix: "",
    color: "from-cyan-400 to-blue-500",
    hoverShadow: "hover:shadow-cyan-500/25",
  },
  {
    label: "API endpoints in TrackWise",
    value: "56",
    suffix: "",
    color: "from-indigo-400 to-purple-500",
    hoverShadow: "hover:shadow-indigo-500/25",
  },
  {
    label: "Accuracy sorting transactions (TrackWise ML)",
    value: "88",
    suffix: "%",
    color: "from-emerald-400 to-cyan-500",
    hoverShadow: "hover:shadow-emerald-500/25",
  },
  {
    label: "Faster map search (2.1s → 0.6s)",
    value: "71",
    suffix: "%",
    color: "from-orange-400 to-pink-500",
    hoverShadow: "hover:shadow-orange-500/25",
  },
];

const timeline = [
  {
    role: "Software Engineer",
    company: "Techlogix",
    period: "Sept 2026 – now",
    icon: FiZap,
    accent: "cyan" as const,
    bullets: [
      "Customising Oracle Banking Digital Experience (OBDX) for a major Pakistani bank",
      "Java Spring Boot APIs connecting OBDX to core banking systems",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "QBS Co.",
    period: "Nov 2025 – Oct 2026",
    icon: FiCpu,
    accent: "indigo" as const,
    bullets: [
      "Live monitoring screens from 1.6s to under 600ms with Redis caching",
      "JWT auth across 5+ services and an RBAC screen for 278 permissions",
    ],
  },
];

// ⚠ All Tailwind classes must be complete static strings — no template literals with variable segments
const traits = [
  {
    icon: "⚡",
    title: "I measure before I fix",
    body: "When something is slow, I profile it first, find the actual cause, and change one thing at a time.",
    cardClass:
      "border-white/[0.10] bg-white/[0.04] hover:border-cyan-500/30 hover:bg-cyan-500/[0.05] hover:shadow-lg hover:shadow-cyan-500/15",
    glowClass: "bg-cyan-500/[0.07]",
  },
  {
    icon: "🏗️",
    title: "Plain, predictable code",
    body: "Clear layers and small services, so the next person can read it, test it and change it safely.",
    cardClass:
      "border-white/[0.10] bg-white/[0.04] hover:border-blue-500/30 hover:bg-blue-500/[0.05] hover:shadow-lg hover:shadow-blue-500/15",
    glowClass: "bg-blue-500/[0.07]",
  },
  {
    icon: "📐",
    title: "I stay with what I ship",
    body: "Schema, API, deployment, and fixing it when it breaks in production.",
    cardClass:
      "border-white/[0.10] bg-white/[0.04] hover:border-indigo-500/30 hover:bg-indigo-500/[0.05] hover:shadow-lg hover:shadow-indigo-500/15",
    glowClass: "bg-indigo-500/[0.07]",
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
    <SectionWrapper
      id="about"
      className="bg-[#080d18] relative overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow orbs — far corners, soft, not washing cards */}
      <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-cyan-500/[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[550px] h-[550px] bg-indigo-600/[0.07] rounded-full blur-[100px] pointer-events-none" />

      {/* Heading spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-52 bg-cyan-400/[0.08] rounded-full blur-3xl pointer-events-none" />

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
            // about.me
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">About</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              me
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Backend engineer, two years in. Here&apos;s how I work and what
            I&apos;ve done so far.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* Main 2-col grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile image */}
            <div className="relative w-52 h-52 md:w-64 md:h-64 mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 rotate-3 opacity-40 blur-sm" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 rotate-[-2deg]" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  // src="/profile.jpg"
                  src="/profile.jpeg"
                  alt="Muhammad Taqi Haider"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Hook quote */}
            <div className="relative">
              <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent rounded-full" />
              <p className="pl-5 text-lg md:text-xl font-display text-white font-semibold leading-snug italic tracking-[-0.01em]">
                &ldquo;I get a weird kind of satisfaction when a slow API
                becomes fast.&rdquo;
              </p>
            </div>

            {/* Bio text */}
            <div className="space-y-3 font-body text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                At <span className="text-cyan-400 font-semibold">QBS Co.</span>,
                a live monitoring screen took 1.6 seconds to load because every
                refresh called the same outside services again. I profiled it,
                cached those responses in Redis, and got it{" "}
                <span className="text-white font-semibold">
                  under 600ms
                </span>
                .
              </p>
              <p>
                I started as a .NET intern in December 2024. Since then
                I&apos;ve worked in{" "}
                <span className="text-white font-medium">.NET Core</span>,{" "}
                <span className="text-white font-medium">NestJS</span> and now{" "}
                <span className="text-white font-medium">Java Spring Boot</span>
                : microservices, background pipelines, map search, auth, and an
                ML service for my final-year project. Today I work on digital
                banking at Techlogix.
              </p>
            </div>

            {/* Trait cards — static classes per card, no dynamic Tailwind */}
            <div className="space-y-3">
              {traits.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className={`relative flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 group overflow-hidden cursor-default ${t.cardClass}`}
                >
                  {/* Radial corner glow that appears on hover */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${t.glowClass}`}
                  />
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 relative z-10">
                    {t.icon}
                  </span>
                  <div className="relative z-10">
                    <div className="text-white font-semibold text-sm mb-1">
                      {t.title}
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed">
                      {t.body}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Core stack */}
            <div className="rounded-xl p-5 border border-white/[0.10] bg-white/[0.04] hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/8 transition-all duration-300">
              <h4 className="text-gray-300 font-bold text-sm mb-3 flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-cyan-500/[0.08] border border-cyan-500/[0.18] text-cyan-400 rounded-lg text-sm font-mono hover:bg-cyan-500/[0.18] hover:border-cyan-400/40 hover:shadow-sm hover:shadow-cyan-500/20 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Stats grid — each with its own accent shadow */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className={`relative rounded-xl p-5 border border-white/[0.10] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/[0.18] hover:shadow-xl ${stat.hoverShadow} transition-all duration-300 group overflow-hidden cursor-default`}
                >
                  {/* Gradient wash on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-300`}
                  />
                  {/* Top-edge accent line */}
                  <div
                    className={`absolute top-0 left-4 right-4 h-px bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                  <div
                    className={`text-3xl font-bold font-display tracking-[-0.02em] bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}
                  >
                    {stat.value}
                    <span className="text-lg font-semibold">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 text-sm font-body font-medium mt-1 relative z-10">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Work timeline */}
            <div>
              <h4 className="text-gray-300 font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full" />
                Work Highlights
              </h4>
              <div className="space-y-4 relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-indigo-500/30 to-transparent" />
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    className="relative pl-10"
                  >
                    <div
                      className={`absolute left-0 top-3 w-8 h-8 rounded-full border flex items-center justify-center ${
                        item.accent === "cyan"
                          ? "border-cyan-500/40 bg-cyan-500/10"
                          : "border-indigo-500/40 bg-indigo-500/10"
                      }`}
                    >
                      <item.icon
                        className={`text-sm ${item.accent === "cyan" ? "text-cyan-400" : "text-indigo-400"}`}
                      />
                    </div>
                    <div
                      className={`relative rounded-xl border bg-white/[0.04] transition-all duration-300 p-4 group overflow-hidden ${
                        item.accent === "cyan"
                          ? "border-white/[0.10] hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/15"
                          : "border-white/[0.10] hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/15"
                      }`}
                    >
                      {/* Radial corner accent on hover */}
                      <div
                        className={`absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          item.accent === "cyan"
                            ? "bg-cyan-500/[0.10]"
                            : "bg-indigo-500/[0.10]"
                        }`}
                      />
                      <div className="flex items-start justify-between gap-2 mb-2 flex-wrap relative z-10">
                        <div>
                          <div className="text-white font-display font-bold text-sm tracking-[-0.01em]">
                            {item.role}
                          </div>
                          <div
                            className={`text-sm font-mono ${item.accent === "cyan" ? "text-cyan-400" : "text-indigo-400"}`}
                          >
                            {item.company}
                          </div>
                        </div>
                        <span className="text-sm text-gray-400 border border-white/[0.10] rounded-full px-2 py-0.5 whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5 relative z-10">
                        {item.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <span className="text-cyan-500 mt-1 flex-shrink-0">
                              ▸
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* TrackWise project card */}
            <div className="rounded-xl border border-indigo-500/[0.20] bg-gradient-to-br from-indigo-500/[0.06] to-blue-600/[0.04] hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 p-5 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/[0.07] rounded-full blur-3xl group-hover:bg-indigo-500/[0.14] transition-all duration-500 pointer-events-none" />
              <div className="flex items-center gap-2 mb-2 relative z-10">
                <FiGlobe className="text-indigo-400 text-lg" />
                <h4 className="text-white font-bold text-sm">
                  Final-year project
                </h4>
                <span className="ml-auto text-sm border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 rounded-full px-2.5 py-0.5 font-mono">
                  Live
                </span>
              </div>
              <p className="text-gray-300 font-display font-bold text-sm mb-1 relative z-10">
                TrackWise, a personal finance app with ML
              </p>
              <p className="text-gray-400 font-body text-sm leading-relaxed mb-3 relative z-10">
                Team of three; I led the backend and ML. A 56-endpoint
                NestJS/PostgreSQL API, an Angular frontend, and a Flask ML
                service that sorts transactions with{" "}
                <span className="text-white font-medium">88% accuracy</span>{" "}
                and flags unusual spending (AUC-ROC{" "}
                <span className="text-white font-medium">0.87</span>). Live,
                with 10 beta users.
              </p>
              <a
                href="https://track-wise2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                id="about-trackwise-link"
                className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group-hover:underline relative z-10"
              >
                Try it live <FiExternalLink />
              </a>
            </div>

            {/* Education card */}
            <div className="rounded-xl border border-white/[0.10] bg-white/[0.04] hover:border-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/12 transition-all duration-300 p-5 flex items-start gap-4 group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/20 flex-shrink-0 group-hover:border-cyan-500/40 group-hover:shadow-md group-hover:shadow-cyan-500/15 transition-all duration-300">
                <FiBookOpen className="text-cyan-400 text-lg" />
              </div>
              <div>
                <div className="text-gray-400 text-sm font-mono mb-1 uppercase tracking-widest">
                  Education
                </div>
                <div className="text-white font-bold text-sm">
                  BS Computer Science
                </div>
                <div className="text-gray-400 text-sm mt-0.5">
                  NED University of Engineering · CGPA: 3.395/4.00
                </div>
                <div className="text-gray-400 text-sm mt-0.5 italic">
                  Graduated June 2026, while working full-time
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
