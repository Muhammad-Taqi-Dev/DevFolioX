"use client";

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiMapPin } from 'react-icons/fi';
import SectionWrapper from '../SectionWrapper';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '1+', icon: FiAward },
    { label: 'Projects Completed', value: '15+', icon: FiBookOpen },
    { label: 'LeetCode Problems', value: '240+', icon: FiAward },
  ];

  return (
    <SectionWrapper id="about" className="bg-gray-900">
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
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Profile Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full transform rotate-6 blur-sm opacity-50"></div>
              <div className="relative bg-gray-800 rounded-full overflow-hidden shadow-2xl border-4 border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <img 
                  src="/profile.jpg" 
                  alt="Muhammad Taqi Haider" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4 md:mb-5">
              Hi, I'm Taqi 👋
            </h3>
            
            <div className="space-y-3 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
                <span className="text-cyan-400 font-semibold">Final-year CS student</span> at NED University with <span className="text-cyan-400 font-semibold">1 year</span> as Associate Software Engineer, specializing in <span className="text-cyan-400">NestJS</span>, <span className="text-cyan-400">.NET</span>, and <span className="text-cyan-400">microservices</span>.
              </p>
              
              <p>
                Building <span className="text-cyan-400 font-semibold"><a href="https://track-wise2.vercel.app/home" target="_blank" rel="noopener noreferrer">TrackWise</a></span> – AI-powered finance platform (FYP). Exploring <span className="text-cyan-400">Agentic AI</span> and transitioning to <span className="text-cyan-400 font-semibold">Full Stack</span> with React.
              </p>
              
              <p>
                💪 Solved <span className="text-cyan-400 font-semibold">240+ LeetCode</span> problems. Passionate about <span className="text-cyan-400">clean code</span>, <span className="text-cyan-400">scalable systems</span>, and <span className="text-cyan-400">products that matter</span>.
              </p>
              
              <p className="text-cyan-400 font-semibold text-base md:text-lg pt-2">
                🎯 Goal: Full Stack Engineer + Product Development + AI Integration
              </p>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 md:p-7 border-2 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                  <FiBookOpen className="text-cyan-400 text-xl md:text-2xl flex-shrink-0" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    Education
                  </h4>
                  <p className="text-gray-300 font-semibold text-sm md:text-base mb-1">
                    BS Computer Science & IT
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">
                    NED University of Engineering & Technology • CGPA: 3.31/4.00
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border-2 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
