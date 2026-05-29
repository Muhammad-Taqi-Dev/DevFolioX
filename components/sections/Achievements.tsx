"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiAward, FiCode, FiTrendingUp, FiExternalLink } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import SectionWrapper from "../SectionWrapper";

// ── Animated number counter — triggers once on scroll into view ──────────────
const AnimatedCounter = ({
  target,
  suffix = "",
  duration = 1400,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const competitions = [
  {
    title: "KODERZ COMBAT",
    achievement: "Advanced to Round 2",
    description:
      "Competed against developers solving real-time algorithmic challenges under competitive conditions.",
    icon: FiCode,
    accent: "cyan",
  },
  {
    title: "Game of Codes V",
    achievement: "Participated & Competed",
    description:
      "Solved complex programming problems in Python and C++ during the competitive event.",
    icon: FiAward,
    accent: "indigo",
  },
];

const codingStats = [
  {
    platform: "LeetCode",
    icon: SiLeetcode,
    iconColor: "text-orange-400",
    borderHover: "hover:border-orange-500/40",
    glowHover: "hover:shadow-orange-500/15",
    stats: [
      { label: "Problems Solved", value: "240+", animateTo: 240, suffix: "+" },
      { label: "Contest Rating", value: "Active", animateTo: null, suffix: "" },
    ],
    link: "https://leetcode.com/u/taqi_haider1/",
  },
  {
    platform: "HackerRank",
    icon: SiHackerrank,
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
    glowHover: "hover:shadow-emerald-500/15",
    stats: [
      { label: "Problems Solved", value: "50+", animateTo: 50, suffix: "+" },
      {
        label: "Focus Areas",
        value: "DSA & Python",
        animateTo: null,
        suffix: "",
      },
    ],
    link: "https://www.hackerrank.com/profile/taqihaider591",
  },
];

const Achievements = () => {
  return (
    <SectionWrapper
      id="achievements"
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
            // achievements
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Competed &</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              won.
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Competitive programming and continuous problem-solving practice.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* ── Technical Competitions ───────────────────────────────── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="p-2 rounded-lg bg-white/5 border border-white/8">
              <FiTrendingUp className="text-cyan-400 text-base" />
            </div>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Technical Competitions
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.12] bg-white/[0.05] hover:border-cyan-500/40 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
              >
                <div
                  className={`p-3 rounded-xl flex-shrink-0 border transition-all duration-300 ${
                    comp.accent === "cyan"
                      ? "bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/15"
                      : "bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/15"
                  }`}
                >
                  <comp.icon
                    className={`text-xl ${comp.accent === "cyan" ? "text-cyan-400" : "text-indigo-400"}`}
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-0.5">
                    {comp.title}
                  </h4>
                  <p
                    className={`text-sm font-semibold mb-2 ${comp.accent === "cyan" ? "text-cyan-400" : "text-indigo-400"}`}
                  >
                    {comp.achievement}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Coding Platforms ─────────────────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="p-2 rounded-lg bg-white/5 border border-white/8">
              <FiCode className="text-cyan-400 text-base" />
            </div>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Competitive Coding Platforms
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {codingStats.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`block p-5 rounded-xl border border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.08] ${platform.borderHover} hover:shadow-xl ${platform.glowHover} transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <platform.icon
                      className={`text-3xl ${platform.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h4 className="text-white font-bold text-sm">
                      {platform.platform}
                    </h4>
                  </div>
                  <FiExternalLink className="text-gray-400 group-hover:text-gray-200 transition-colors" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {platform.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-white/[0.10] bg-white/[0.05] p-3"
                    >
                      <p className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-1">
                        {stat.label}
                      </p>
                      <p
                        className={`font-bold text-lg font-display ${platform.iconColor}`}
                      >
                        {stat.animateTo !== null ? (
                          <AnimatedCounter
                            target={stat.animateTo}
                            suffix={stat.suffix}
                          />
                        ) : (
                          stat.value
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
