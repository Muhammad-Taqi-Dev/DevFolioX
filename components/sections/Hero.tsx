"use client";

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl -top-32 -left-32 md:-top-48 md:-left-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-32 -right-32 md:-bottom-48 md:-right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-purple-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-6"
          >
          <span className="text-cyan-400 text-lg md:text-2xl font-medium tracking-wide">
            Hello, I'm
          </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent mb-4 md:mb-6 px-4"
          >
            Muhammad Taqi Haider
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-300 mb-6 md:mb-8 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'Backend Developer',
                2000,
                'Full Stack Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 px-4 leading-relaxed"
          >
            Building scalable backend systems with NestJS & .NET. Focused on clean architecture and solving complex problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 text-base md:text-lg"
            >
              View Projects
            </button>
            <a
              href="/Software_Engineer_Taqi_Haider_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3.5 md:py-4 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 text-base md:text-lg"
            >
              <FiDownload className="text-xl" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 md:px-8 py-3.5 md:py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-base md:text-lg"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center gap-4 md:gap-6"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/Muhammad-Taqi-Dev', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/taqih1', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:taqihaider591@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-xl md:text-2xl p-3 rounded-full hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/50"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-cyan-400 text-3xl cursor-pointer"
              onClick={() => scrollToSection('#about')}
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
