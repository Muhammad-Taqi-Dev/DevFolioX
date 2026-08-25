"use client";

import { motion } from "framer-motion";
import { FiAward, FiDownload, FiExternalLink } from "react-icons/fi";
import { SiCoursera, SiHackerrank, SiLeetcode } from "react-icons/si";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";

const Certifications = () => {
  const certifications = [
    {
      title: "Application Development using Microservices and Serverless",
      issuer: "Coursera, IBM",
      icon: SiCoursera,
      file: "/Application Development using Microservices and Serverless.pdf",
      category: "Cloud & Microservices",
      color: "cyan",
      date: "Aug, 2026",
    },
    {
      title: "Java Programming for Beginners",
      issuer: "Coursera, IBM",
      icon: SiCoursera,
      file: "/Java Programming for Beginners.pdf",
      category: "Programming",
      color: "purple",
      date: "Aug, 2026",
    },
    {
      title: "Software Design Patterns: Best Practices for Software Developers",
      issuer: "Educative",
      icon: FiAward,
      file: "/Software_Design_Patterns_Best_Practices_Certificate.pdf",
      category: "Software Architecture",
      color: "purple",
      date: "Feb 2026",
    },
    {
      title: ".NET Full Stack Foundation",
      issuer: "Coursera, Board Infinity",
      icon: SiCoursera,
      file: "/.NET Full Stack Foundation.pdf",
      category: "Backend Development",
      color: "blue",
      date: "2025",
    },
    {
      title: "Back-End Development with .NET",
      issuer: "Coursera, Microsoft",
      icon: SiCoursera,
      file: "/Back-End Development with .NET.pdf",
      category: "Backend Development",
      color: "blue",
      date: "2025",
    },
    {
      title: "Programming Fundamentals",
      issuer: "Coursera, Duke University",
      icon: SiCoursera,
      file: "/Programming Fundamentals.pdf",
      category: "Fundamentals",
      color: "cyan",
      date: "2023",
    },
    {
      title: "Python Basics",
      issuer: "Coursera, University of Michigan",
      icon: SiCoursera,
      file: "/Python Basics.pdf",
      category: "Programming",
      color: "green",
      date: "2023",
    },
    {
      title: "Python Basic Certificate",
      issuer: "HackerRank",
      icon: SiHackerrank,
      file: "/python_basic certificate.pdf",
      category: "Programming",
      color: "green",
      date: "2023",
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      icon: SiHackerrank,
      file: "/problem_solving_basic certificate.pdf",
      category: "DSA",
      color: "orange",
      date: "2023",
    },
    {
      title: "CSS Certificate",
      issuer: "HackerRank",
      icon: SiHackerrank,
      file: "/css certificate.pdf",
      category: "Frontend",
      color: "purple",
      date: "2024",
    },
    {
      title: "Intro to Web Development (HTML, CSS, JS)",
      issuer: "Coursera, IBM",
      icon: SiCoursera,
      file: "/Introduction to Web Development with HTML, CSS, JAVASCRIPT.pdf",
      category: "Frontend",
      color: "purple",
      date: "2024",
    },
    {
      title: "Software Engineer Intern Certificate",
      issuer: "HackerRank",
      icon: SiHackerrank,
      file: "/software_engineer_intern certificate.pdf",
      category: "Assessment",
      color: "green",
      date: "2024",
    },
  ];

  const workshops = [
    {
      title: "Angular Workshop",
      issuer: "Workshop, NED University",
      icon: FiAward,
      file: "/Angular Workshop.pdf",
      category: "Frontend Framework",
      color: "red",
      date: "2024",
    },
  ];

  const leetcodeBadges = [
    {
      title: "100 Days Badge 2024",
      description: "100 consecutive days of problem solving",
      image: "/LeetCode 100 Days Badge.png",
      link: "https://leetcode.com/medal/?showImg=0&id=4138988&isLevel=false",
      achievement: "100 Days",
    },
    {
      title: "50 Days Badge 2024",
      description: "50 consecutive days of problem solving",
      image: "/LeetCode 50 Days Badge.png",
      link: "https://leetcode.com/medal/?showImg=0&id=3862454&isLevel=false",
      achievement: "50 Days",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: "from-blue-500/30 to-blue-500/10",
        text: "text-blue-400",
        border: "hover:border-blue-400",
        shadow: "hover:shadow-blue-500/30",
        button:
          "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
        glow: "shadow-blue-500/20",
      },
      cyan: {
        gradient: "from-cyan-500/30 to-cyan-500/10",
        text: "text-cyan-400",
        border: "hover:border-cyan-400",
        shadow: "hover:shadow-cyan-500/30",
        button:
          "from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700",
        glow: "shadow-cyan-500/20",
      },
      green: {
        gradient: "from-green-500/30 to-green-500/10",
        text: "text-green-400",
        border: "hover:border-green-400",
        shadow: "hover:shadow-green-500/30",
        button:
          "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
        glow: "shadow-green-500/20",
      },
      orange: {
        gradient: "from-orange-500/30 to-orange-500/10",
        text: "text-orange-400",
        border: "hover:border-orange-400",
        shadow: "hover:shadow-orange-500/30",
        button:
          "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
        glow: "shadow-orange-500/20",
      },
      purple: {
        gradient: "from-purple-500/30 to-purple-500/10",
        text: "text-purple-400",
        border: "hover:border-purple-400",
        shadow: "hover:shadow-purple-500/30",
        button:
          "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
        glow: "shadow-purple-500/20",
      },
      red: {
        gradient: "from-red-500/30 to-red-500/10",
        text: "text-red-400",
        border: "hover:border-red-400",
        shadow: "hover:shadow-red-500/30",
        button: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
        glow: "shadow-red-500/20",
      },
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const CertificateCard = ({ cert, index }: { cert: any; index: number }) => {
    const colors = getColorClasses(cert.color);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className={`group relative rounded-2xl border border-white/[0.12] bg-white/[0.05] backdrop-blur-sm ${colors.border} hover:bg-white/[0.08] transition-all duration-300 hover:shadow-xl ${colors.shadow} p-6 overflow-hidden`}
      >
        {/* Subtle hover glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`p-2.5 rounded-xl bg-white/5 border border-white/8 group-hover:border-current/20 transition-colors duration-300`}
            >
              <cert.icon className={`${colors.text} text-xl`} />
            </div>
            <span
              className={`text-sm font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${colors.text} font-mono uppercase tracking-wider`}
            >
              {cert.category}
            </span>
          </div>

          {/* Title & meta */}
          <div className="space-y-2 mb-5">
            <h3 className="text-sm font-bold text-white line-clamp-2 min-h-[2.5rem] leading-snug">
              {cert.title}
            </h3>
            <div className="flex items-center justify-between gap-2">
              <span className="text-gray-400 text-sm line-clamp-1">
                {cert.issuer}
              </span>
              <span
                className={`${colors.text} text-sm font-mono border border-white/8 px-2 py-0.5 rounded-md whitespace-nowrap`}
              >
                {cert.date}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gradient-to-r ${colors.button} text-white font-semibold rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-lg`}
            >
              <FiExternalLink className="text-sm" />
              <span>View</span>
            </a>
            <a
              href={cert.file}
              download
              className="inline-flex items-center justify-center px-3 py-2.5 border border-white/8 bg-white/3 hover:bg-white/8 hover:border-white/20 text-gray-400 hover:text-white rounded-xl transition-all duration-300"
            >
              <FiDownload className="text-sm" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <SectionWrapper
      id="certifications"
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
      {/* Ambient glow orbs — boosted from /6 to /12 */}
      <div className="absolute -top-20 left-0 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Centered heading spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-cyan-500 font-mono text-sm tracking-[0.35em] uppercase mb-3">
            // certifications
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Proof of</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              learning.
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Professional certifications, workshops, and competitive programming
            achievements.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        {/* LeetCode Badges - Featured at Top */}
        {leetcodeBadges.length > 0 && (
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-2 border-orange-500/30 rounded-2xl px-6 py-3 mb-8">
                <SiLeetcode className="text-orange-400 text-3xl" />
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  LeetCode Streak Achievements
                </h3>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {leetcodeBadges.map((badge, index) => (
                <motion.a
                  key={index}
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm hover:border-orange-500/30 hover:bg-white/5 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/15 p-6 group overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Achievement badge */}
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm font-bold px-2.5 py-1 rounded-bl-xl rounded-tr-2xl">
                      {badge.achievement}
                    </div>

                    {/* Badge Image */}
                    <div className="relative w-full aspect-square mb-5 rounded-xl overflow-hidden bg-white/3 border border-white/6 p-5">
                      <Image
                        src={badge.image}
                        alt={badge.title}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5 mb-4">
                      <h4 className="text-sm font-bold text-white">
                        {badge.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {badge.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2 text-orange-400">
                        <SiLeetcode className="text-base" />
                        <span className="text-sm font-semibold">
                          240+ Problems Solved
                        </span>
                      </div>
                      <FiExternalLink className="text-sm text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Professional Certifications */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="p-2 rounded-lg bg-white/5 border border-white/8">
              <FiAward className="text-cyan-400 text-base" />
            </div>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
              Professional Certifications
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <CertificateCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {workshops.length > 0 && (
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/8">
                <FiAward className="text-red-400 text-base" />
              </div>
              <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                Workshops &amp; Training
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {workshops.map((cert, index) => (
                <CertificateCard key={index} cert={cert} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
