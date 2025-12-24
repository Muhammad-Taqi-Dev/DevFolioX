"use client";

import { motion } from 'framer-motion';
import { FiAward, FiDownload, FiExternalLink } from 'react-icons/fi';
import { SiCoursera, SiHackerrank, SiLeetcode } from 'react-icons/si';
import SectionWrapper from '../SectionWrapper';
import Image from 'next/image';

const Certifications = () => {
  const certifications = [
    {
      title: '.NET Full Stack Foundation',
      issuer: 'Coursera, Board Infinity',
      icon: SiCoursera,
      file: '/.NET Full Stack Foundation.pdf',
      category: 'Backend Development',
      color: 'blue',
      date: '2025',
    },
    {
      title: 'Back-End Development with .NET',
      issuer: 'Coursera, Microsoft',
      icon: SiCoursera,
      file: '/Back-End Development with .NET.pdf',
      category: 'Backend Development',
      color: 'blue',
      date: '2025',
    },
    {
      title: 'Programming Fundamentals',
      issuer: 'Coursera, Duke University',
      icon: SiCoursera,
      file: '/Programming Fundamentals.pdf',
      category: 'Fundamentals',
      color: 'cyan',
      date: '2023',
    },
    {
      title: 'Python Basics',
      issuer: 'Coursera, University of Michigan',
      icon: SiCoursera,
      file: '/Python Basics.pdf',
      category: 'Programming',
      color: 'green',
      date: '2023',
    },
    {
      title: 'Python Basic Certificate',
      issuer: 'HackerRank',
      icon: SiHackerrank,
      file: '/python_basic certificate.pdf',
      category: 'Programming',
      color: 'green',
      date: '2023',
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      icon: SiHackerrank,
      file: '/problem_solving_basic certificate.pdf',
      category: 'DSA',
      color: 'orange',
      date: '2023',
    },
    {
      title: 'CSS Certificate',
      issuer: 'HackerRank',
      icon: SiHackerrank,
      file: '/css certificate.pdf',
      category: 'Frontend',
      color: 'purple',
      date: '2024',
    },
    {
      title: 'Intro to Web Development (HTML, CSS, JS)',
      issuer: 'Coursera, IBM',
      icon: SiCoursera,
      file: '/Introduction to Web Development with HTML, CSS, JAVASCRIPT.pdf',
      category: 'Frontend',
      color: 'purple',
      date: '2024',
    },
    {
      title: 'Software Engineer Intern Certificate',
      issuer: 'HackerRank',
      icon: SiHackerrank,
      file: '/software_engineer_intern certificate.pdf',
      category: 'Assessment',
      color: 'green',
      date: '2024',
    },
  ];

  const workshops = [
    {
      title: 'Angular Workshop',
      issuer: 'Workshop, NED University',
      icon: FiAward,
      file: '/Angular Workshop.pdf',
      category: 'Frontend Framework',
      color: 'red',
      date: '2024',
    },
  ];

  const leetcodeBadges = [
    {
      title: '100 Days Badge 2024',
      description: '100 consecutive days of problem solving',
      image: '/LeetCode 100 Days Badge.png',
      link: 'https://leetcode.com/medal/?showImg=0&id=4138988&isLevel=false',
      achievement: '100 Days',
    },
    {
      title: '50 Days Badge 2024',
      description: '50 consecutive days of problem solving',
      image: '/LeetCode 50 Days Badge.png',
      link: 'https://leetcode.com/medal/?showImg=0&id=3862454&isLevel=false',
      achievement: '50 Days',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-500/30 to-blue-500/10',
        text: 'text-blue-400',
        border: 'hover:border-blue-400',
        shadow: 'hover:shadow-blue-500/30',
        button: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
        glow: 'shadow-blue-500/20',
      },
      cyan: {
        gradient: 'from-cyan-500/30 to-cyan-500/10',
        text: 'text-cyan-400',
        border: 'hover:border-cyan-400',
        shadow: 'hover:shadow-cyan-500/30',
        button: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
        glow: 'shadow-cyan-500/20',
      },
      green: {
        gradient: 'from-green-500/30 to-green-500/10',
        text: 'text-green-400',
        border: 'hover:border-green-400',
        shadow: 'hover:shadow-green-500/30',
        button: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
        glow: 'shadow-green-500/20',
      },
      orange: {
        gradient: 'from-orange-500/30 to-orange-500/10',
        text: 'text-orange-400',
        border: 'hover:border-orange-400',
        shadow: 'hover:shadow-orange-500/30',
        button: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
        glow: 'shadow-orange-500/20',
      },
      purple: {
        gradient: 'from-purple-500/30 to-purple-500/10',
        text: 'text-purple-400',
        border: 'hover:border-purple-400',
        shadow: 'hover:shadow-purple-500/30',
        button: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
        glow: 'shadow-purple-500/20',
      },
      red: {
        gradient: 'from-red-500/30 to-red-500/10',
        text: 'text-red-400',
        border: 'hover:border-red-400',
        shadow: 'hover:shadow-red-500/30',
        button: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
        glow: 'shadow-red-500/20',
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
        whileHover={{ y: -10, scale: 1.03 }}
        className={`relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 ${colors.border} transition-all duration-300 hover:shadow-2xl ${colors.shadow} shadow-lg ${colors.glow} group overflow-hidden`}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header with Icon and Category */}
          <div className="flex items-start justify-between mb-5">
            <div className={`p-3.5 rounded-xl bg-gradient-to-br ${colors.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <cert.icon className={`${colors.text} text-2xl`} />
            </div>
            <span className={`text-xs font-bold px-3.5 py-2 rounded-full bg-gradient-to-r ${colors.gradient} ${colors.text} border-2 border-current/30 shadow-md`}>
              {cert.category}
            </span>
          </div>

          {/* Content */}
          <div className="space-y-3 mb-6">
            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 min-h-[3.5rem]">
              {cert.title}
            </h3>
            <div className="flex items-center justify-between text-sm gap-2">
              <span className="text-gray-400 font-medium text-xs line-clamp-1">{cert.issuer}</span>
              <span className={`${colors.text} text-xs font-bold bg-gray-800/50 px-2.5 py-1 rounded-md`}>{cert.date}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${colors.button} text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm`}
            >
              <FiExternalLink className="text-base" />
              <span>View</span>
            </a>
            <a
              href={cert.file}
              download
              className="inline-flex items-center justify-center px-4 py-3 bg-gray-700/70 hover:bg-gray-600 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 border-2 border-gray-600 hover:border-gray-500 shadow-md"
            >
              <FiDownload className="text-lg" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <SectionWrapper id="certifications" className="bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Certifications & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full mb-6 shadow-lg shadow-cyan-500/50"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg px-4 leading-relaxed">
            A collection of professional certifications, workshops, and competitive programming achievements showcasing continuous learning and technical expertise
          </p>
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-gray-700/50 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 group overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Achievement badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {badge.achievement}
                    </div>

                    {/* Badge Image */}
                    <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-inner">
                      <Image
                        src={badge.image}
                        alt={badge.title}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-300">
                        {badge.title}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {badge.description}
                      </p>
                    </div>

                    {/* LeetCode Profile Link */}
                    <div className="mt-6 flex items-center justify-between gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300">
                      <div className="flex items-center gap-2 text-orange-400">
                        <SiLeetcode className="text-2xl" />
                        <span className="text-sm font-bold">240+ Problems Solved</span>
                      </div>
                      <FiExternalLink className="text-xl text-gray-400 group-hover:text-orange-400 transition-colors duration-300" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Professional Certifications */}
        <div className="mb-16 md:mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl shadow-lg shadow-cyan-500/20">
              <FiAward className="text-cyan-400 text-3xl" />
            </div>
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <CertificateCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Workshops & Training */}
        {workshops.length > 0 && (
          <div className="mb-16 md:mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4"
            >
              <div className="p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl shadow-lg shadow-red-500/20">
                <FiAward className="text-red-400 text-3xl" />
              </div>
              <span className="bg-gradient-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent">
                Workshops & Training
              </span>
            </motion.h3>

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
