"use client";

import { motion } from 'framer-motion';
import { FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import SectionWrapper from '../SectionWrapper';

const Achievements = () => {
  const competitions = [
    {
      title: 'KODERZ COMBAT',
      achievement: 'Advanced to Round 2',
      description:
        'Competed against developers solving real-time algorithmic challenges under competitive conditions.',
      icon: FiCode,
      color: 'cyan',
    },
    {
      title: 'Game of Codes V',
      achievement: 'Participated & Competed',
      description: 'Solved complex programming problems in Python and C++ during the competitive event.',
      icon: FiAward,
      color: 'blue',
    },
  ];

  const codingStats = [
    {
      platform: 'LeetCode',
      icon: SiLeetcode,
      stats: [
        { label: 'Problems Solved', value: '240+' },
        { label: 'Contest Rating', value: 'Active' },
      ],
      link: 'https://leetcode.com/u/taqi_haider1/',
      color: 'orange',
    },
    {
      platform: 'HackerRank',
      icon: SiHackerrank,
      stats: [
        { label: 'Problems Solved', value: '50+' },
        { label: 'Focus Areas', value: 'DSA & Python' },
      ],
      link: 'https://www.hackerrank.com/profile/taqihaider591',
      color: 'green',
    },
  ];

  return (
    <SectionWrapper id="achievements" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Achievements & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Competitions</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            Competitive programming achievements and continuous learning journey
          </p>
        </motion.div>

        {/* Competitive Programming */}
        <div className="mb-12 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 flex items-center gap-3 md:gap-4"
          >
            <div className="p-3 md:p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
              <FiTrendingUp className="text-cyan-400 text-2xl md:text-3xl" />
            </div>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technical Competitions
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 group"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div
                    className={`p-4 md:p-5 rounded-xl group-hover:scale-110 transition-transform duration-300 ${
                      comp.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500/30 to-cyan-500/10' : 'bg-gradient-to-br from-blue-500/30 to-blue-500/10'
                    }`}
                  >
                    <comp.icon
                      className={`text-3xl md:text-4xl ${
                        comp.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">{comp.title}</h4>
                    <p className="text-cyan-400 font-bold mb-3 md:mb-4 text-base md:text-lg">{comp.achievement}</p>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{comp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coding Platforms */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 flex items-center gap-3 md:gap-4"
          >
            <div className="p-3 md:p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl">
              <FiCode className="text-cyan-400 text-2xl md:text-3xl" />
            </div>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Competitive Coding Platforms
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {codingStats.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer group"
              >
                <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                  <platform.icon className="text-5xl md:text-6xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{platform.platform}</h4>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-5">
                  {platform.stats.map((stat, i) => (
                    <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 md:p-5 border-2 border-gray-700 group-hover:border-cyan-400/50 transition-all duration-300">
                      <p className="text-gray-400 text-sm md:text-base mb-2 font-medium">{stat.label}</p>
                      <p className="text-cyan-400 font-bold text-xl md:text-2xl lg:text-3xl">{stat.value}</p>
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
