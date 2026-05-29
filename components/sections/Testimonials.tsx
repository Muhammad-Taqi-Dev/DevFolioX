"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import {
  FiLinkedin,
  FiAward,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

type FilterType = "All" | "Mentor" | "Colleague";

/* ── Initials avatar ─────────────────────────────────────────────────── */
function Avatar({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const sizeClass = {
    sm: "w-9 h-9 text-sm",
    md: "w-11 h-11 text-base",
    lg: "w-16 h-16 text-lg",
  }[size];

  return (
    <div
      className={`${sizeClass} rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

/* ── Testimonial card ─────────────────────────────────────────────────── */
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const CHARACTER_LIMIT = 220;
  const shouldTruncate = testimonial.text.length > CHARACTER_LIMIT;
  const displayText =
    isExpanded || !shouldTruncate
      ? testimonial.text
      : testimonial.text.slice(0, CHARACTER_LIMIT) + "…";

  const isRecent = () => {
    const d = new Date(testimonial.date);
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
    return d >= twoMonthsAgo;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex flex-col rounded-2xl border border-white/[0.12] bg-white/[0.05] backdrop-blur-sm hover:border-cyan-500/35 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 p-5 relative overflow-hidden"
    >
      {/* Subtle top glow on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Trust badges */}
      <div className="flex items-center gap-2 mb-3">
        <span className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
          <FiCheckCircle className="text-sm" /> Verified
        </span>
        {isRecent() && (
          <span className="text-sm text-cyan-400 font-medium border border-cyan-500/25 rounded-full px-2 py-0.5">
            Recent
          </span>
        )}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <Avatar name={testimonial.name} size="sm" />
          <div>
            <p className="text-white font-semibold text-sm leading-tight">
              {testimonial.name}
            </p>
            <p className="text-gray-400 text-sm">{testimonial.title}</p>
          </div>
        </div>
        {/* Large quote mark */}
        <span className="text-4xl leading-none text-cyan-500/20 font-serif select-none flex-shrink-0">
          "
        </span>
      </div>

      {/* Quote text */}
      <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-3">
        {displayText}
      </p>

      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-cyan-500 hover:text-cyan-400 text-sm font-medium mb-3 transition-colors"
        >
          {isExpanded ? (
            <>
              <FiChevronUp /> Read less
            </>
          ) : (
            <>
              <FiChevronDown /> Read more
            </>
          )}
        </button>
      )}

      {/* Skills */}
      {testimonial.skills && testimonial.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {testimonial.skills.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md text-sm font-mono"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
        <div>
          <p className="text-gray-400 text-sm">{testimonial.company}</p>
          <p className="text-gray-400 text-sm font-mono mt-0.5">
            {testimonial.relationship} · {testimonial.date}
          </p>
        </div>
        {testimonial.linkedinUrl && (
          <a
            href={testimonial.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${testimonial.name} on LinkedIn`}
            className="p-2 rounded-lg border border-white/8 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
          >
            <FiLinkedin className="text-sm" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ── Featured testimonial ─────────────────────────────────────────────── */
function FeaturedTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 backdrop-blur-sm p-7 md:p-8 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center gap-2 mb-5">
        <FiAward className="text-yellow-400 text-sm" />
        <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest font-mono">
          Featured Recommendation
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start relative">
        <Avatar name={testimonial.name} size="lg" />

        <div className="flex-grow">
          <span className="text-6xl leading-none text-cyan-500/15 font-serif select-none">
            "
          </span>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed italic mb-5 -mt-3">
            {testimonial.text}
          </p>

          {testimonial.skills && testimonial.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {testimonial.skills.map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-sm font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h4 className="text-white font-bold text-base">
                {testimonial.name}
              </h4>
              <p className="text-gray-400 text-sm">{testimonial.title}</p>
              <p className="text-gray-400 text-sm mt-0.5">
                {testimonial.company}
              </p>
            </div>
            {testimonial.linkedinUrl && (
              <a
                href={testimonial.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 text-cyan-400 text-sm font-semibold rounded-xl transition-all duration-300"
              >
                <FiLinkedin />
                View Profile
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ─────────────────────────────────────────────────────── */
export default function Testimonials() {
  const [filter, setFilter] = useState<FilterType>("All");

  const mentorCount = testimonials.filter(
    (t: Testimonial) => t.relationship === "Mentor",
  ).length;
  const colleagueCount = testimonials.filter(
    (t: Testimonial) => t.relationship === "Colleague",
  ).length;

  const featuredTestimonial = testimonials.find((t: Testimonial) => t.featured);
  const regularTestimonials = testimonials.filter(
    (t: Testimonial) => !t.featured,
  );
  const filteredTestimonials = regularTestimonials.filter((t: Testimonial) =>
    filter === "All" ? true : t.relationship === filter,
  );

  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: "All", label: "All", count: testimonials.length },
    { key: "Mentor", label: "Mentors", count: mentorCount },
    { key: "Colleague", label: "Colleagues", count: colleagueCount },
  ];

  return (
    <SectionWrapper
      id="testimonials"
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />
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
            // testimonials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">What they</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              say.
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Colleagues and mentors on what it's like working with me.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* Count badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-sm font-medium">
            <FiCheckCircle className="text-emerald-400" />
            {testimonials.length}+ verified LinkedIn recommendations
          </div>
        </motion.div>

        {/* Featured */}
        {featuredTestimonial && (
          <FeaturedTestimonial testimonial={featuredTestimonial} />
        )}

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {filters.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === key
                  ? "bg-cyan-500/20 border border-cyan-500/50 text-cyan-400"
                  : "border border-white/8 text-gray-400 hover:border-white/20 hover:text-gray-300"
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredTestimonials.map(
              (testimonial: Testimonial, idx: number) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={idx}
                />
              ),
            )}
          </motion.div>
        </AnimatePresence>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-14 text-center space-y-4"
        >
          <p className="text-gray-400 text-sm font-mono">
            // want to see more?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.linkedin.com/in/taqih1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <FiLinkedin />
              View LinkedIn Profile
            </a>
            <a
              href="https://www.linkedin.com/in/taqih1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/3 hover:bg-white/8 hover:border-white/20 text-gray-300 hover:text-white font-semibold text-sm rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
