"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

const metrics = [
  { value: "63%", label: "Faster APIs", color: "from-cyan-400 to-blue-500" },
  {
    value: "70%",
    label: "Pipeline Speed↑",
    color: "from-purple-400 to-pink-500",
  },
  { value: "88%", label: "ML Accuracy", color: "from-emerald-400 to-cyan-500" },
];

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(6,182,212,0.13) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 100% 80%, rgba(99,102,241,0.10) 0%, transparent 70%), #0a0f1a",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse" />
      <div
        className="absolute w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute w-[300px] h-[300px] bg-purple-500/08 rounded-full blur-3xl top-1/3 right-1/4 animate-pulse"
        style={{ animationDelay: "0.6s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            BSCS Graduate · Open to Backend & Full Stack roles
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display mb-5 px-4"
            style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Muhammad Taqi
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Haider
            </span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-7 min-h-[2.25rem] flex items-center justify-center gap-2.5"
          >
            <span className="font-mono text-gray-600 text-lg select-none">
              //{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Backend-Focused Full Stack Engineer",
                2200,
                "Performance Obsessed Builder",
                2200,
                "NestJS · .NET Core · AI Systems",
                2200,
                "I measure what I ship.",
                2200,
              ]}
              wrapper="span"
              speed={52}
              repeat={Infinity}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 font-display tracking-[-0.01em]"
            />
          </motion.div>

          {/* Hook line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed px-4 font-body"
          >
            1.5 years shipping production backend systems that{" "}
            <span className="text-white font-semibold">don't just work</span>
            {" — they "}
            <span className="text-cyan-400 font-semibold">perform</span>.
          </motion.p>

          {/* Metric cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 px-4"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="group relative px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300 cursor-default"
              >
                <div
                  className={`text-2xl font-bold font-display bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}
                >
                  {m.value}
                </div>
                <div className="text-sm text-gray-500 font-medium mt-0.5">
                  {m.label}
                </div>
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${m.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-12 px-4"
          >
            <button
              id="hero-view-projects-btn"
              onClick={() => scrollToSection("#projects")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 text-base"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <a
              id="hero-resume-btn"
              href="/Software_Engineer_Taqi_Haider_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 text-gray-200 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm text-base"
            >
              <FiDownload />
              Download Resume
            </a>

            <button
              id="hero-contact-btn"
              onClick={() => scrollToSection("#contact")}
              className="px-7 py-3.5 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-base"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex justify-center gap-3 pb-20 md:pb-24"
          >
            {[
              {
                icon: FiGithub,
                href: "https://github.com/Muhammad-Taqi-Dev",
                label: "GitHub",
              },
              {
                icon: FiLinkedin,
                href: "https://linkedin.com/in/taqih1",
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: "mailto:taqihaider591@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                id={`hero-social-${social.label.toLowerCase()}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.92 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                className="text-gray-500 hover:text-cyan-400 transition-all duration-300 text-xl p-3 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — anchored to section, never overlaps social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="hidden md:flex flex-col items-center gap-1 absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group z-20"
        onClick={() => scrollToSection("#about")}
      >
        <span className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors font-mono tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-gray-700 group-hover:border-cyan-500/50 transition-colors flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
