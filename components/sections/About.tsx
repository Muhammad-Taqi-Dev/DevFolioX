"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiZap, FiCpu, FiGlobe, FiExternalLink } from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

const stats = [
  { label: "Yrs in Production", value: "1.5", suffix: "+", color: "from-cyan-400 to-blue-500" },
  { label: "API Endpoints Built", value: "56", suffix: "+", color: "from-indigo-400 to-purple-500" },
  { label: "ML Accuracy", value: "88", suffix: "%", color: "from-emerald-400 to-cyan-500" },
  { label: "Avg Perf Gain", value: "~50", suffix: "%", color: "from-orange-400 to-pink-500" },
];

const timeline = [
  {
    role: "Associate Software Engineer",
    company: "QBS Co.",
    period: "Current",
    icon: FiZap,
    accent: "cyan",
    bullets: [
      "Cut API response time from 1.6s → <600ms via Redis caching + profiling",
      "Designed distributed auth: OAuth2, JWT, 2FA, RBAC over gRPC & Docker",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Production Systems",
    period: "1.5 years",
    icon: FiCpu,
    accent: "indigo",
    bullets: [
      "Rebuilt Azure document pipeline sync→async — 70% processing time reduction",
      "PostGIS geospatial query restructuring + indexing — 25% faster under load",
    ],
  },
];

const traits = [
  {
    icon: "⚡",
    title: "Performance first",
    body: "I don't guess where the bottleneck is. I profile, measure, then fix.",
  },
  {
    icon: "🏗️",
    title: "Systems thinker",
    body: "Clean architecture isn't aesthetics — it's what makes AI integration actually work.",
  },
  {
    icon: "📐",
    title: "End-to-end owner",
    body: "From schema design to deployment, I care about every layer in between.",
  },
];

const coreStack = [
  "NestJS", ".NET Core", "TypeScript", "Python", "C#",
  "PostgreSQL", "Redis", "Docker", "AWS", "Azure", "Next.js", "Angular",
];

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-[#080d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 font-mono text-xs tracking-[0.35em] uppercase mb-3">
            // about.me
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Built on</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              fundamentals.
            </span>
          </h2>
          <p className="text-gray-500 font-body text-base max-w-lg mx-auto">
            Performance-first backend engineer. 1.5 years in production. Still obsessed with the craft.
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
                  src="/profile.jpg"
                  alt="Muhammad Taqi Haider"
                  className="w-full h-full object-cover"
                />
                {/* Overlay shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-gray-900 border border-white/10 rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm">
                <div className="text-xs text-gray-400 font-mono">status</div>
                <div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </div>
              </div>
            </div>

            {/* Hook quote */}
            <div className="relative">
              <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent rounded-full" />
              <p className="pl-5 text-lg md:text-xl font-display text-white font-semibold leading-snug italic tracking-[-0.01em]">
                &ldquo;I get a weird kind of satisfaction when a slow API becomes fast.&rdquo;
              </p>
            </div>

            {/* Bio text */}
            <div className="space-y-3 font-body text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                At{" "}
                <span className="text-cyan-400 font-semibold">QBS Co.</span>, I profiled a
                high-traffic monitoring endpoint, identified the exact bottleneck, introduced
                Redis caching — response time went from{" "}
                <span className="text-white font-semibold">1.6s → under 600ms</span>. Clean
                problem, clean solution.
              </p>
              <p>
                Over 1.5 years across{" "}
                <span className="text-white font-medium">NestJS</span> and{" "}
                <span className="text-white font-medium">.NET Core</span>, I've shipped
                distributed systems, async pipelines, geospatial backends, and ML inference
                microservices — always with measurable outcomes.
              </p>
            </div>

            {/* Trait cards */}
            <div className="space-y-3">
              {traits.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/6 bg-white/3 hover:bg-white/5 hover:border-white/12 transition-all duration-300 group"
                >
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{t.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{t.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{t.body}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Core stack */}
            <div className="rounded-xl p-5 border border-white/8 bg-white/3">
              <h4 className="text-gray-300 font-bold text-sm mb-3 flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-xs font-mono hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-200 cursor-default"
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
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="relative rounded-xl p-5 border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15 transition-all duration-300 group overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className={`text-3xl font-bold font-display tracking-[-0.02em] bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                    <span className="text-lg font-semibold">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-500 text-xs font-body font-medium mt-1">{stat.label}</div>
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
                    <div className={`absolute left-0 top-3 w-8 h-8 rounded-full border ${item.accent === "cyan" ? "border-cyan-500/40 bg-cyan-500/10" : "border-indigo-500/40 bg-indigo-500/10"} flex items-center justify-center`}>
                      <item.icon className={`text-sm ${item.accent === "cyan" ? "text-cyan-400" : "text-indigo-400"}`} />
                    </div>
                    <div className="rounded-xl border border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/5 transition-all duration-300 p-4">
                      <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                        <div>
                          <div className="text-white font-display font-bold text-sm tracking-[-0.01em]">{item.role}</div>
                          <div className={`text-xs font-mono ${item.accent === "cyan" ? "text-cyan-500" : "text-indigo-400"}`}>{item.company}</div>
                        </div>
                        <span className="text-xs text-gray-600 border border-white/8 rounded-full px-2 py-0.5 whitespace-nowrap">{item.period}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {item.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-xs text-gray-400">
                            <span className="text-cyan-500 mt-1 flex-shrink-0">▸</span>
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
            <div className="rounded-xl border border-white/8 bg-gradient-to-br from-white/3 to-indigo-500/5 hover:border-indigo-500/30 transition-all duration-300 p-5 group">
              <div className="flex items-center gap-2 mb-2">
                <FiGlobe className="text-indigo-400 text-lg" />
                <h4 className="text-white font-bold text-sm">Personal Project</h4>
                <span className="ml-auto text-[10px] border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 rounded-full px-2 py-0.5 font-mono">Live</span>
              </div>
              <p className="text-gray-300 font-display font-bold text-sm mb-1">TrackWise — AI Finance Platform</p>
              <p className="text-gray-500 font-body text-xs leading-relaxed mb-3">
                56-endpoint NestJS/PostgreSQL backend · Angular PWA · Flask ML microservice on Hugging Face —
                transaction categorisation <span className="text-white">88% accuracy</span>, anomaly detection
                AUC-ROC <span className="text-white">0.87</span>. Solo. End-to-end.
              </p>
              <a
                href="https://track-wise2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                id="about-trackwise-link"
                className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group-hover:underline"
              >
                View Project <FiExternalLink />
              </a>
            </div>

            {/* Education card */}
            <div className="rounded-xl border border-white/8 bg-white/3 hover:border-white/15 transition-all duration-300 p-5 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border border-cyan-500/20 flex-shrink-0">
                <FiBookOpen className="text-cyan-400 text-lg" />
              </div>
              <div>
                <div className="text-gray-500 text-xs font-mono mb-1 uppercase tracking-widest">Education</div>
                <div className="text-white font-bold text-sm">BS Computer Science</div>
                <div className="text-gray-400 text-xs mt-0.5">NED University of Engineering · GPA: 3.32/4.00</div>
                <div className="text-gray-600 text-xs mt-0.5 italic">Completed while working full-time</div>
              </div>
            </div>

            {/* CTA banner */}
            <div className="rounded-xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/8 to-blue-600/8 p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
              <p className="text-cyan-300 text-sm font-medium relative z-10">
                🎯{" "}
                <span className="text-white font-semibold">Open to Backend & Full Stack roles</span>
                {" "}— remote or Karachi-based. Looking for teams where the quality of architecture actually matters.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
