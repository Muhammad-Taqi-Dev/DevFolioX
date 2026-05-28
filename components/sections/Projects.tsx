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

// ─── Label colour map for PCAR format ─────────────────────────────────────────
const LABEL_STYLES: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  Problem: {
    bg: "bg-red-500/15",
    text: "text-red-400",
    border: "border-red-500/40",
  },
  Challenges: {
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-500/40",
  },
  Actions: {
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
  const [expanded, setExpanded] = useState(false);
  const MAX_TECHS = 5;
  const showMore = project.technologies.length > MAX_TECHS;
  const visibleTechs = expanded
    ? project.technologies
    : project.technologies.slice(0, MAX_TECHS);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-gray-700/80 bg-gradient-to-br from-gray-800/90 via-gray-850 to-gray-900/90 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
    >
      {/* Subtle top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="p-5 pb-4 border-b border-gray-700/60 group-hover:border-cyan-500/20 transition-colors duration-500">
        {/* Badges row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/35">
              ⭐ Featured
            </span>
          )}
          {project.isCompanyProject && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-yellow-500/15 text-yellow-400 border border-yellow-500/35">
              🏢 Employee Project
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug break-words mb-1">
          {project.title}
        </h3>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-md font-medium text-cyan-400/80 mb-2 break-words">
            {project.subtitle}
          </p>
        )}

        {/* Role + Period */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {project.role && (
            <span className="text-xs text-gray-300 font-medium">
              {project.role}
            </span>
          )}
          {project.period && (
            <span className="flex items-center gap-1 text-xs text-gray-500">
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
              <span className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border bg-purple-500/15 text-purple-400 border-purple-500/40">
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

        {/* PCAR Features */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-2.5">
            <span className="flex-shrink-0 w-1 h-3 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500" />
            Key Features
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
                  className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                >
                  {style && rawLabel ? (
                    <>
                      <span
                        className={`flex-shrink-0 mt-0.5 min-w-[76px] text-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${style.bg} ${style.text} ${style.border}`}
                      >
                        {rawLabel}
                      </span>
                      <span className="break-words">{body}</span>
                    </>
                  ) : (
                    <>
                      <span className="flex-shrink-0 text-cyan-400 font-bold mt-0.5">
                        ▹
                      </span>
                      <span className="break-words">{feature}</span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

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
                  className="px-2.5 py-1 rounded-md text-xs sm:text-sm font-semibold bg-gray-900/80 text-cyan-400 border border-gray-700 hover:border-cyan-500/60 hover:shadow-sm hover:shadow-cyan-500/20 transition-all duration-200 hover:scale-105"
                >
                  {tech}
                </motion.span>
              ))}
            </AnimatePresence>
            {showMore && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs sm:text-sm font-semibold text-gray-500 hover:text-cyan-400 border border-dashed border-gray-700 hover:border-cyan-500/50 transition-all duration-200"
              >
                {expanded ? (
                  <>
                    <FiChevronUp className="text-[10px]" /> Less
                  </>
                ) : (
                  <>
                    <FiChevronDown className="text-[10px]" /> +
                    {project.technologies.length - MAX_TECHS} more
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* ── LINKS ──────────────────────────────────────────────────────── */}
        {(project.github || project.live) && (
          <div className="flex flex-wrap gap-4 pt-3 border-t border-gray-700/60 group-hover:border-cyan-500/20 transition-colors duration-500 mt-auto">
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
      subtitle: "Enterprise AI-Powered Workforce Intelligence Platform",
      role: "Full Stack Software Engineer (.NET + Next.js)",
      period: "Feb 2026 – Present",
      // Public-facing description (sanitized for portfolio)
      description:
        "Built frontend and backend integrations for a workforce monitoring platform — implemented SSR dashboards, metadata APIs, and secure role-based access controls with a focus on low-latency UX and reliability.",
      features: [
        "Problem: Monolithic monitoring caused repeated DB calls and slow, unresponsive dashboards.",
        "Challenges: Integrating 10+ distributed services, enforcing RBAC across roles, and delivering sub-second UX for live video feeds.",
        "Actions: Implemented Redis caching for metadata, refactored API aggregation to eliminate redundant calls, and implemented RBAC/JWT auth with refresh rotation.",
        "Result: Cut API latency and DB hits significantly; reduced onboarding time by ~40% and improved monitoring responsiveness in production.",
        "Learnings: Gained experience in caching strategies for streaming metadata, distributed auth design, and systems-level performance debugging.",
      ],
      technologies: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Monorepo",
        "Micro-Frontend",
        "REST API",
        "RBAC",
        "JWT",
        "Redis",
        "SSR/SEO",
      ],
      // live: internal platform URL removed for privacy/company policy
      featured: true,
      isCompanyProject: true,
    },
    {
      title: "Ajeek-KSA",
      subtitle: "Service Technology Platform",
      role: ".NET Developer",
      period: "Dec 2024 – Mar 2025",
      // Public-facing description (sanitized for portfolio)
      description:
        "Contributed to a multi-tenant service platform for marketplace operations and SLA enforcement — focused on reliability, observability, and automation of compliance workflows.",
      features: [
        "Problem: Manual service workflows and fragmented SLA tracking caused delays and compliance risks.",
        "Challenges: Modeling complex tenant-specific business rules and ensuring reliable SLA enforcement at scale.",
        "Actions: Built a .NET microservice for product operations and an SLA orchestration service with automated compliance monitoring and async processing.",
        "Result: Streamlined operations, reduced manual effort, and improved SLA compliance and visibility across tenants.",
        "Learnings: Improved multi-tenant design patterns, async pipeline reliability, and production observability.",
      ],
      technologies: [
        ".NET 6",
        ".NET Core",
        "Microservices",
        "Clean Architecture",
        "JWT",
        "Docker",
        "REST API",
        "Serilog",
        "Application Insights",
        "Azure Blob Storage",
        "PostgreSQL",
        "FluentValidation",
        "Swagger",
        "Entity Framework",
        "Clean Architecture",
      ],
      // live link removed for privacy/company policy
      featured: true,
      isCompanyProject: true,
    },
    {
      title: "TenXed",
      subtitle: "Multi-Role Education & Engagement Platform",
      role: ".NET Developer",
      period: "April 2025 – Oct 2025",
      description:
        "Contributed to a production-ready .NET 8 platform serving parents, children, and instructors — focused on secure authentication, modular service architecture, notification pipelines, and payment integrations.",
      features: [
        "Problem: Support multi-role workflows with secure onboarding, real-time notifications, and payments.",
        "Challenges: Role-specific UX, reliable async notifications, and third-party integrations (Stripe, Azure Blob, FCM, SendGrid) without tight coupling.",
        "Actions: Applied Clean Architecture; implemented JWT/RBAC with OTP flows; added queue-triggered Azure Functions for multi-channel notifications; integrated Stripe payments; enabled Serilog and App Insights.",
        "Result: Delivered a scalable, auditable platform with reliable background processing and secure multi-role access.",
        "Learnings: Strengthened expertise in enterprise .NET patterns, Azure Functions, notification pipelines, and payment integrations.",
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
      subtitle: "Smart Personal Finance Management System",
      period: "May 2025 – May 2026",
      description:
        "Final Year Project — full-stack AI-powered personal finance platform delivering real-time transaction categorization, forecasting, and anomaly detection. Modular NestJS/Postgres backend with containerized Flask ML microservices for production inference.",
      features: [
        "Problem: Manual expense tracking and noisy multilingual transaction data reduced accuracy and delayed alerts.",
        "Challenges: Achieve low-latency inference, handle multilingual/ambiguous text, and integrate ML reliably.",
        "Actions: Built a modular NestJS API and containerized Flask ML services (SBERT classifier, Prophet, anomaly detector); integrated via async queues with retries, monitoring, and scaling.",
        "Result: Near-real-time transaction categorization (~88% accuracy), forecasting, and anomaly alerts from a resilient inference pipeline.",
        "Learnings: Productionized ML microservices, feature engineering for noisy text, and fault-tolerant async inference patterns.",
      ],
      technologies: [
        "NestJS",
        "Angular 19",
        "REST API",
        "PostgreSQL",
        "Flask",
        "Docker",
        "Redis",
        "Sentence-BERT",
        "scikit-learn",
        "Logistic Regression",
        "Facebook Prophet",
        "Anomaly Detection",
        "Message queue",
        "Microservices",
        "OAuth2",
        "Email workflows",
        "Unit testing (Jest)",
        "Modular architecture",
        "Render",
        "Vercel",
        "Azure",
      ],
      github: "https://github.com/Muhammad-Taqi-Dev/TrackWise",
      live: "https://track-wise2.vercel.app/home",
      featured: true,
    },
    {
      title: "CourseFlow",
      subtitle: "University Course Scheduler",
      period: "Dec 2024 – Jan 2025",
      description:
        "Web-based University Course Scheduling System built with Flask and SQLite. Implements Greedy and Backtracking algorithms to automate timetabling, detect and resolve conflicts, and provide an admin interface for schedule management and algorithm performance comparison.",
      features: [
        "Problem: Manual university scheduling caused frequent conflicts and administrative overhead.",
        "Challenges: Designing algorithms that resolve teacher/room conflicts while scaling to realistic course loads.",
        "Actions: Implemented Greedy and Backtracking timetabling algorithms with an admin dashboard for validation and conflict resolution.",
        "Result: Automated conflict-free scheduling with performance comparisons and actionable conflict reports for admins.",
        "Learnings: Gained experience with constraint-solving and timetabling tools.",
      ],
      technologies: ["Flask", "Python", "Algorithms", "SQLite", "Jinja"],
      github: "https://github.com/Muhammad-Taqi-Dev/CourseFlow",
      featured: true,
    },
    {
      title: "Stock Management System",
      subtitle: "Inventory Management Platform",
      period: "Jan 2024 – July 2024",
      description:
        "Automated inventory management system that eliminates manual stock tracking. Reduces inventory errors by 80% with real-time updates and predictive threshold-based alerts across multiple stores.",
      features: [
        "Problem: Manual inventory tracking led to stockouts and overstocking across stores.",
        "Challenges: Delivering real-time stock updates and predictive alerts on constrained infrastructure.",
        "Actions: Built a Flask backend with WebSocket support for instant updates and implemented predictive threshold-based alerting.",
        "Result: Reduced inventory errors by ~80% and lowered stockouts by ~65%.",
        "Learnings: Learned real-time WebSocket patterns and predictive alerting for inventory systems.",
      ],
      technologies: ["Flask", "Python", "SQLAlchemy", "MySQL", "Bootstrap"],
      github:
        "https://github.com/Muhammad-Taqi-Dev/Stock-Management-System-Website",
      featured: true,
    },
    {
      title: "Chatbot Interface",
      subtitle: "AI-Powered Conversational Bot",
      period: "Sep 2024 – Oct 2024",
      description:
        "Bilingual AI chatbot supporting English and Roman Urdu for customer service automation. Served 500+ users achieving 85% satisfaction with faster first-response handling.",
      features: [
        "Problem: Language barriers in customer support limited automation for English and Urdu users.",
        "Challenges: Building robust bilingual NLP and delivering a mobile-friendly chat UI within time constraints.",
        "Actions: Implemented NLTK-based pattern matching for English and Roman Urdu and built a responsive Flask frontend for mobile compatibility.",
        "Result: Served 500+ users with ~85% satisfaction and faster first-response handling.",
        "Learnings: Improved bilingual NLP heuristics and mobile-friendly chat UI design.",
      ],
      technologies: ["Flask", "Python", "nltk", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Muhammad-Taqi-Dev/CHATBOT",
      featured: false,
    },
    {
      title: "Mini Compiler",
      subtitle: "Educational C-like Language Compiler in Python",
      period: "Mar 2026 - May 2026",
      description:
        "A university compiler design project implementing a full pipeline for a tiny C-like language — from lexical analysis through intermediate code generation — built from scratch in Python to demonstrate core compiler construction concepts.",
      features: [
        "Problem: Needed hands-on exposure to compiler internals (lexer → codegen).",
        "Challenges: Implement clean scoping, expression parsing, and control-flow in one script.",
        "Actions: Built a 4-stage Python compiler — lexer, recursive-descent parser, semantic checker, and stack-style IR emitter (PUSH/STORE/LOAD/PRINT).",
        "Result: End-to-end compiler producing tokens, symbol tables, IR, and clear semantic errors.",
        "Learnings: Practical experience with lexing, parsing, symbol tables, and IR generation.",
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
      subtitle: "Classic Board Game with DSAA",
      period: "Mar 2024 – May 2024",
      description:
        "Classic LUDO board game with a built-in AI opponent, implemented using circular linked lists for O(1) piece traversal and capture-prioritization heuristics for competitive gameplay.",
      features: [
        "Problem: Implementing complex circular board movement and efficient state tracking for LUDO.",
        "Challenges: Maintaining O(1) traversal and handling forks while keeping AI competitive.",
        "Actions: Used singly circular linked lists for board state and implemented an AI with capture-prioritization heuristics.",
        "Result: Achieved O(1) piece traversal and a responsive AI opponent experience.",
        "Learnings: Applied circular linked lists and AI heuristics for efficient game state management.",
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
      subtitle: "OOP-Based Console Game",
      period: "Jan 2024 – Feb 2024",
      description:
        "Console-based Flappy Bird clone built with OOP design principles, a pixel-perfect hitbox system, and persistent high score tracking — delivering smooth 60 FPS gameplay.",
      features: [
        "Problem: Delivering smooth console-game performance with accurate collision detection.",
        "Challenges: Achieving pixel-precise collision in a console environment and persisting high scores reliably.",
        "Actions: Employed OOP design with a pixel-perfect hitbox system and file I/O for persistent high scores.",
        "Result: Smooth 60 FPS gameplay with reliable high score persistence.",
        "Learnings: Built a reliable game loop, collision system, and persistent high-score storage.",
      ],
      technologies: ["C++", "OOP", "olcConsoleGameEngine", "Game Dev"],
      github: "https://github.com/Muhammad-Taqi-Dev/Flappy-Bird-Game-Using-OOP",
      featured: false,
    },
    {
      title: "NLP Sentiment Analysis",
      subtitle: "Amazon Product Review Analysis",
      period: "Nov 2023 – Dec 2023",
      description:
        "ML-powered sentiment analysis pipeline for Amazon product reviews, achieving 91% accuracy. Applied SMOTE for class balancing and wrapped models in a Streamlit app for instant business insights.",
      features: [
        "Problem: Manual product review analysis delayed insights and missed negative feedback trends.",
        "Challenges: Severe class imbalance and the need for an easy deployment for non-technical users.",
        "Actions: Applied SMOTE to rebalance data, trained classifiers, and wrapped models in a Streamlit app for instant predictions.",
        "Result: Achieved ~91% accuracy and improved minority-class F1 by ~34%, enabling fast business insights.",
        "Learnings: Applied SMOTE and packaged models for quick business insights with Streamlit.",
      ],
      technologies: ["Python", "NLP", "Scikit-learn", "Streamlit", "ML", "SVM"],
      github: "https://github.com/Muhammad-Taqi-Dev/NLP-CCP",
      featured: false,
    },
    {
      title: "DSA Practice Repository",
      subtitle: "LeetCode Problem Solutions",
      period: "Ongoing",
      description:
        "Structured LeetCode practice repository with 200+ problems across 25+ algorithmic patterns in C++ and Python, designed to accelerate interview readiness and reinforce pattern recognition.",
      features: [
        "Problem: Unstructured interview practice and inconsistent problem coverage.",
        "Challenges: Maintaining code quality and covering a broad set of algorithmic patterns consistently.",
        "Actions: Curated and implemented 200+ problems across 25+ topics with clean, versioned solutions in C++ and Python.",
        "Result: A systematic practice repository that accelerates interview readiness and pattern recognition.",
        "Learnings: Improved problem categorization and reproducible solution practices for interview prep.",
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
    <SectionWrapper id="projects" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Heading ──────────────────────────────────────────────── */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* ── Grid ─────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
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
