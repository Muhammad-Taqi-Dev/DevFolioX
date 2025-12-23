"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 border-b-2 border-cyan-400/30' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            <a 
              href="#home" 
              className="relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
            >
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, type: "spring" }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-base font-semibold whitespace-nowrap transition-all duration-300 group ${
                    isActive 
                      ? 'text-cyan-400 scale-110' 
                      : 'text-gray-300 hover:text-cyan-400 hover:scale-105'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -inset-2 bg-cyan-400/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="lg:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-cyan-400/10 border-2 border-transparent hover:border-cyan-400/50"
            >
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-gradient-to-b from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border-b-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-400/20 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/70 border-2 border-transparent hover:border-gray-700'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {isActive && <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>}
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
