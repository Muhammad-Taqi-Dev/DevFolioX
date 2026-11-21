"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  title: string;
  subtitle?: string;
  role?: string;
  period?: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  isCompanyProject?: boolean;
}

// ─── Label colour map for case-study format ──────────────────────────────────
// features use "Label: body". Only these three labels get a coloured chip.
const LABEL_STYLES: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  Problem: {
    bg: "bg-red-500/15",
    text: "text-red-400",
    border: "border-red-500/40",
  },
  "What I did": {
    bg: "bg-blue-500/15",
    text: "text-blue-400",
    border: "border-blue-500/40",
  },
  Result: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-400",
    border: "border-emerald-500/40",
  },
};

// ─── Single project card ───────────────────────────────────────────────────────
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [techExpanded, setTechExpanded] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const MAX_TECHS = 5;
  const showMore = project.technologies.length > MAX_TECHS;
  const visibleTechs = techExpanded
    ? project.technologies
    : project.technologies.slice(0, MAX_TECHS);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className={`group relative flex flex-col rounded-2xl border backdrop-blur-sm hover:-translate-y-1 transition-all duration-500 overflow-hidden ${project.featured
        ? "border-white/[0.14] bg-gradient-to-br from-cyan-500/[0.04] via-white/[0.05] to-transparent hover:border-cyan-500/40 hover:from-cyan-500/[0.07] hover:shadow-xl hover:shadow-cyan-500/15"
        : "border-white/[0.10] bg-white/[0.03] hover:border-white/[0.20] hover:bg-white/[0.06] hover:shadow-lg hover:shadow-white/5"
        }`}
    >
      {/* Subtle top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="p-5 pb-4 border-b border-white/6 group-hover:border-cyan-500/15 transition-colors duration-500">
        {/* Badges row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/35">
              ⭐ Featured
            </span>
          )}
          {project.isCompanyProject && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-bold bg-yellow-500/15 text-yellow-400 border border-yellow-500/35">
              🏢 Built at work
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug break-words mb-1">
          {project.title}
        </h3>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-sm font-medium text-cyan-400/80 mb-2 break-words">
            {project.subtitle}
          </p>
        )}

        {/* Role + Period */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {project.role && (
            <span className="text-sm text-gray-300 font-medium">
              {project.role}
            </span>
          )}
          {project.period && (
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <FiCalendar className="flex-shrink-0 text-[14px]" />
              {project.period}
            </span>
          )}
        </div>
      </div>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-grow p-5 gap-4">
        {/* Description */}
        <div className="space-y-2">
          {project.isCompanyProject && project.role && (
            <div className="flex items-center gap-2">
              <span className="flex-shrink-0 px-2 py-0.5 rounded text-sm font-bold uppercase tracking-wide border bg-purple-500/15 text-purple-400 border-purple-500/40">
                Role
              </span>
              <span className="text-sm text-purple-300/90 font-medium">
                {project.role}
              </span>
            </div>
          )}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* View Details toggle */}
        <button
          onClick={() => setDetailsOpen((prev) => !prev)}
          className="flex items-center gap-1.5 text-sm font-semibold text-cyan-400/80 hover:text-cyan-300 transition-colors duration-200 w-fit"
        >
          {detailsOpen ? (
            <>
              <FiChevronUp className="text-sm" /> Hide Details
            </>
          ) : (
            <>
              <FiChevronDown className="text-sm" /> View Details
            </>
          )}
        </button>

        {/* PCAR Features — collapsible */}
        <AnimatePresence initial={false}>
          {detailsOpen && (
            <motion.div
              key="pcarl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-1">
                <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-2.5">
                  <span className="flex-shrink-0 w-1 h-3 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />
                  Case study
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => {
                    const colonIdx = feature.indexOf(": ");
                    const rawLabel =
                      colonIdx !== -1 ? feature.slice(0, colonIdx).trim() : null;
                    const body =
                      colonIdx !== -1 ? feature.slice(colonIdx + 2).trim() : feature;
                    const style = rawLabel ? LABEL_STYLES[rawLabel] : null;

                    return (
                      <li
                        key={i}
                        className="grid grid-cols-[116px_minmax(0,1fr)] sm:grid-cols-[128px_minmax(0,1fr)] items-start gap-x-2 text-sm text-gray-400 leading-relaxed"
                      >
                        {style && rawLabel ? (
                          <>
                            <span
                              className={`mt-0.5 w-full whitespace-nowrap text-center px-1.5 py-0.5 rounded text-[11px] sm:text-sm font-bold uppercase tracking-normal leading-tight border ${style.bg} ${style.text} ${style.border}`}
                            >
                              {rawLabel}
                            </span>
                            <span className="break-words">{body}</span>
                          </>
                        ) : (
                          <>
                            <span aria-hidden className="block" />
                            <span className="break-words">{feature}</span>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Stack */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-2">
            <span className="flex-shrink-0 w-1 h-3 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            <AnimatePresence initial={false}>
              {visibleTechs.map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="px-2.5 py-1 rounded-md text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </AnimatePresence>
            {showMore && (
              <button
                onClick={() => setTechExpanded(!techExpanded)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md text-sm font-semibold text-gray-400 hover:text-cyan-400 border border-dashed border-gray-700 hover:border-cyan-500/50 transition-all duration-200"
              >
                {techExpanded ? (
                  <>
                    <FiChevronUp className="text-sm" /> Less
                  </>
                ) : (
                  <>
                    <FiChevronDown className="text-sm" /> +
                    {project.technologies.length - MAX_TECHS} more
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* ── LINKS ──────────────────────────────────────────────────────── */}
        {(project.github || project.live) && (
          <div className="flex flex-wrap gap-4 pt-3 border-t border-white/5 group-hover:border-cyan-500/10 transition-colors duration-500 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <FiGithub className="text-base" />
                Source Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <FiExternalLink className="text-sm" />
                {project.isCompanyProject ? "View Platform" : "Live Demo"}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const Projects = () => {
  const projects: Project[] = [
    {
      title: "VersEye",
      subtitle: "Workforce monitoring platform for enterprise teams",
      role: "Full-stack engineer at QBS Co. (.NET + Next.js)",
      period: "Feb 2026 – Oct 2026",
      description:
        "Managers use VersEye to watch live activity, KPIs and logs across their organisation. I worked on the .NET backend and the Next.js dashboards: caching, auth, permissions and the live monitoring screens.",
      features: [
        "Problem: The live monitoring screens called the same external services on every refresh and took 1.6s to load. Admins also assigned permissions one at a time, by hand.",
        "What I did: Cached third-party responses and metadata in Redis and merged the duplicate API calls behind each screen, across 10+ services. Added JWT auth with refresh-token rotation and built an RBAC screen for assigning 278 permissions in bulk.",
        "Result: Screens load in under 600ms, onboarding a new team takes about 40% less time, and 21 KPIs update live at org, employee and product level.",
      ],
      technologies: [
        ".NET Core",
        "C#",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker",
        "JWT",
        "RBAC",
        "SSR",
        "Monorepo",
        "Micro-frontends",
      ],
      // live: internal platform URL removed for privacy/company policy
      featured: true,
      isCompanyProject: true,
    },
    {
      title: "Ajeek-KSA",
      subtitle: "Multi-tenant service marketplace in Saudi Arabia",
      role: ".NET intern at QBS Co.",
      period: "Dec 2024 – Mar 2025",
      description:
        "A platform where service companies take orders, run jobs and meet their SLAs, each with its own business rules. I built two of its .NET microservices.",
      features: [
        "Problem: Service workflows were run by hand and SLA tracking was spread across tools, so late jobs were spotted late and compliance was hard to prove.",
        "What I did: Built the Product service and an SLA orchestration service in .NET with Clean Architecture. SLA checks run in the background and flag breaches automatically. Added structured logging with Serilog and Application Insights.",
        "Result: Less manual follow-up for the operations team, and one place to see SLA status across every tenant.",
      ],
      technologies: [
        ".NET 6",
        "Microservices",
        "Clean Architecture",
        "Entity Framework",
        "PostgreSQL",
        "JWT",
        "Docker",
        "REST API",
        "Serilog",
        "Application Insights",
        "Azure Blob Storage",
        "FluentValidation",
        "Swagger",
      ],
      // live link removed for privacy/company policy
      featured: true,
      isCompanyProject: true,
    },
    {
      title: "TenXed",
      subtitle: "Learning platform for parents, children and instructors",
      role: ".NET developer at KoderLabs",
      period: "Apr 2025 – Oct 2025",
      description:
        "A .NET 8 platform where parents enrol their children, instructors run classes, and payments and notifications happen in the background. I worked on auth, notifications and payments.",
      features: [
        "Problem: Three kinds of users needed different sign-up flows and permissions, plus notifications and payments that wouldn't slow down the main API.",
        "What I did: Set up JWT and role-based access with OTP sign-up. Moved email and push notifications to queue-triggered Azure Functions. Integrated Stripe payments and Azure Blob Storage, and added Serilog and Application Insights for tracing.",
        "Result: Background work runs off the request path, each role sees only what it should, and production issues can be traced from the logs.",
      ],
      technologies: [
        ".NET 8",
        "ASP.NET Core Web API",
        "Azure Functions",
        "Entity Framework Core",
        "PostgreSQL",
        "JWT",
        "Stripe",
        "Azure Blob Storage",
        "SignalR",
        "Redis",
        "Serilog",
        "Application Insights",
        "FluentValidation",
        "MailKit / SendGrid",
        "NSwag / OpenAPI",
        "Clean Architecture",
      ],
      featured: true,
      isCompanyProject: true,
      // live/github omitted — internal/proprietary codebase
    },
    {
      title: "TrackWise",
      subtitle: "Personal finance app with ML categorisation and forecasting",
      role: "Backend & ML lead, final-year project (team of 3)",
      period: "May 2025 – Present",
      description:
        "TrackWise sorts your transactions into categories, forecasts next month's spending, and flags anything unusual. It's live on Azure and Vercel, with 10 beta users on real data.",
      features: [
        "Problem: Most expense apps make you categorise everything by hand, and they tell you nothing about what's coming next or what looks wrong.",
        "What I did: Designed a 56-endpoint NestJS + PostgreSQL backend (modular monolith) on Azure. Built a separate Flask ML service on Hugging Face Spaces with three models: SBERT + logistic regression for categories, Prophet for forecasts, and an anomaly detector, with caching and rate limiting to hide cold starts. Added Jest tests, GitHub Actions CI/CD and email 2FA.",
        "Result: 88% accuracy on transaction categories, 0.87 AUC-ROC on anomaly detection, and spending forecasts once a user has 3+ months of history.",
      ],
      technologies: [
        "NestJS",
        "Angular 19",
        "PostgreSQL",
        "Flask",
        "Redis",
        "SBERT",
        "scikit-learn",
        "Prophet",
        "Jest",
        "GitHub Actions",
        "Azure",
        "Vercel",
        "Hugging Face",
        "2FA",
        "REST API",
      ],
      github: "https://github.com/Muhammad-Taqi-Dev/TrackWise",
      live: "https://track-wise2.vercel.app/home",
      featured: true,
    },
    {
      title: "CourseFlow",
      subtitle: "University timetable generator",
      period: "Dec 2024 – Jan 2025",
      description:
        "Generates university timetables without clashes using Greedy and Backtracking algorithms, and gives admins a dashboard to compare the two and sort out anything left over. Flask + SQLite.",
      features: [
        "Problem: Building a timetable by hand keeps producing clashes, like the same teacher or room booked twice.",
        "What I did: Implemented Greedy and Backtracking schedulers, conflict detection, and an admin dashboard to review results and compare how each algorithm performs.",
        "Result: Clash-free schedules, plus a conflict report for anything that still needs a person to decide.",
      ],
      technologies: ["Flask", "Python", "Algorithms", "SQLite", "Jinja"],
      github: "https://github.com/Muhammad-Taqi-Dev/CourseFlow",
      featured: true,
    },
    {
      title: "Stock Management System",
      subtitle: "Inventory tracking for multiple stores",
      period: "Jan 2024 – Jul 2024",
      description:
        "Keeps stock levels in sync across several stores with live updates, and warns before an item runs out. Flask + MySQL.",
      features: [
        "Problem: Stores tracked stock by hand, which meant stockouts on some items and overstock on others.",
        "What I did: Built a Flask backend with WebSockets for live stock updates, and threshold-based alerts that fire before an item runs low.",
        "Result: About 80% fewer inventory errors and 65% fewer stockouts.",
      ],
      technologies: ["Flask", "Python", "SQLAlchemy", "MySQL", "Bootstrap"],
      github:
        "https://github.com/Muhammad-Taqi-Dev/Stock-Management-System-Website",
      featured: true,
    },
    {
      title: "Chatbot Interface",
      subtitle: "Customer-service bot for English and Roman Urdu",
      period: "Sep 2024 – Oct 2024",
      description:
        "A customer-service chatbot that understands both English and Roman Urdu. Used by 500+ people, with about 85% satisfaction.",
      features: [
        "Problem: Support bots usually handle English only, which leaves out people who type in Roman Urdu.",
        "What I did: Wrote NLTK pattern matching for both languages and a mobile-friendly Flask chat UI.",
        "Result: 500+ users, about 85% satisfaction, and faster first replies.",
      ],
      technologies: ["Flask", "Python", "NLTK", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Muhammad-Taqi-Dev/CHATBOT",
      featured: false,
    },
    {
      title: "Mini Compiler",
      subtitle: "Compiler for a small C-like language, in Python",
      period: "Mar 2026 – May 2026",
      description:
        "Written from scratch for my compiler design course: lexer, parser, semantic checks and intermediate code for a small C-like language.",
      features: [
        "Problem: I wanted to understand how a compiler works end to end, not just read about it.",
        "What I did: Built four stages: a lexer, a recursive-descent parser, a semantic checker with scoped symbol tables, and an emitter for stack-style IR (PUSH / STORE / LOAD / PRINT).",
        "Result: Turns source code into tokens, symbol tables and IR, with clear messages for semantic errors.",
      ],
      technologies: [
        "Python 3",
        "Lexical Analysis",
        "Recursive Descent Parsing",
        "Semantic Analysis",
        "Intermediate Code Generation",
        "Symbol Table",
        "Compiler Design",
      ],
      github: "https://github.com/Muhammad-Taqi-Dev/mini-compiler-python",
      featured: false,
    },
    {
      title: "LUDO Board Game",
      subtitle: "Ludo in C++ with a computer opponent",
      period: "Mar 2024 – May 2024",
      description:
        "A Ludo game in C++ where the board is a circular linked list, so moving a piece is O(1), plus a computer opponent that goes for captures.",
      features: [
        "Problem: Ludo's looping board and branching home paths are awkward to model with plain arrays.",
        "What I did: Modelled the board as circular linked lists and wrote an AI opponent that prioritises captures.",
        "Result: O(1) piece moves and a computer opponent that actually competes.",
      ],
      technologies: [
        "C++",
        "Data Structures",
        "Algorithms",
        "OOP",
        "Windows.h",
      ],
      github: "https://github.com/Muhammad-Taqi-Dev/DSA-Semproj",
      featured: false,
    },
    {
      title: "Flappy Bird Console Game",
      subtitle: "Console game in C++",
      period: "Jan 2024 – Feb 2024",
      description:
        "A console game in C++ built around OOP, with pixel-level collision detection and saved high scores. Runs at 60 FPS.",
      features: [
        "Problem: Getting smooth movement and accurate collisions inside a text console.",
        "What I did: Designed a class for each game object, a pixel-level hitbox system, and file I/O for high scores.",
        "Result: Smooth 60 FPS gameplay and high scores that persist between runs.",
      ],
      technologies: ["C++", "OOP", "olcConsoleGameEngine", "Game Dev"],
      github: "https://github.com/Muhammad-Taqi-Dev/Flappy-Bird-Game-Using-OOP",
      featured: false,
    },
    {
      title: "NLP Sentiment Analysis",
      subtitle: "Sentiment classifier for Amazon product reviews",
      period: "Nov 2023 – Dec 2023",
      description:
        "Classifies Amazon product reviews as positive or negative with about 91% accuracy, with a Streamlit app so non-technical people can try it.",
      features: [
        "Problem: Reading reviews by hand is slow, and the dataset had far more positive reviews than negative ones.",
        "What I did: Balanced the classes with SMOTE, trained SVM and other classifiers, and wrapped the best model in a Streamlit app.",
        "Result: About 91% accuracy and a 34% better F1 score on the minority class.",
      ],
      technologies: ["Python", "NLP", "Scikit-learn", "Streamlit", "ML", "SVM"],
      github: "https://github.com/Muhammad-Taqi-Dev/NLP-CCP",
      featured: false,
    },
    {
      title: "DSA Practice Repository",
      subtitle: "My LeetCode solutions, organised by pattern",
      period: "Ongoing",
      description:
        "240+ LeetCode problems across 25+ patterns in C++ and Python, organised by topic so I can revise quickly before interviews.",
      features: [
        "Problem: Random practice left gaps in the patterns that interviews actually test.",
        "What I did: Grouped solutions by pattern, with clean, versioned code in C++ and Python.",
        "Result: A reference I can revise from quickly, and a public record of steady practice.",
      ],
      technologies: [
        "C++",
        "Python",
        "Algorithms",
        "Data Structures",
        "LeetCode",
      ],
      github: "https://github.com/Muhammad-Taqi-Dev/DSA---LeetCode",
      featured: false,
    },
  ];

  return (
    <SectionWrapper
      id="projects"
      className="bg-[#0a0f1a] relative overflow-hidden"
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Heading ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-cyan-500 font-mono text-sm tracking-[0.35em] uppercase mb-3">
            // featured.projects
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Selected</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              work
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Products I built at work and on my own. Open a card to see the
            problem, what I did, and the result.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* ── Grid ─────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* ── GitHub CTA ───────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-14 md:mt-20"
        >
          <motion.a
            href="https://github.com/Muhammad-Taqi-Dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 rounded-xl" />
            <FiGithub className="text-xl relative z-10" />
            <span className="relative z-10">View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
