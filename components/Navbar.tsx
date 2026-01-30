"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
      
      // Detect active section
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'achievements', 'contact'];
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
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string, event?: React.MouseEvent) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      
      // Create ripple effect
      if (event) {
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const id = Date.now();
        setRipples(prev => [...prev, { x, y, id }]);
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== id));
        }, 600);
      }
    }
  };

  // Magnetic effect for nav items
  const MagneticNavItem = ({ children, onClick, isActive }: { children: React.ReactNode; onClick: (e: React.MouseEvent) => void; isActive: boolean }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.2);
      y.set((e.clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        ref={ref}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`relative text-base font-semibold whitespace-nowrap transition-all duration-300 group ${
          isActive 
            ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' 
            : 'text-gray-300 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]'
        }`}
      >
        {children}
      </motion.button>
    );
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
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 origin-left z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      >
        <div className="absolute right-0 top-0 w-2 h-2 bg-cyan-400 rounded-full -translate-y-1/4 shadow-lg shadow-cyan-400/50 animate-pulse"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            <motion.a 
              href="#home" 
              className="relative group block"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home', e);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x relative"
                whileHover={{
                  filter: "drop-shadow(0 0 12px rgba(34,211,238,0.8))",
                }}
              >
                Muhammad Taqi
                {/* Sparkle effect on hover */}
                <motion.span
                  className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              </motion.span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full shadow-lg shadow-cyan-400/50"></span>
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, type: "spring" }}
                  className="relative"
                >
                  <MagneticNavItem
                    onClick={(e) => scrollToSection(item.href, e)}
                    isActive={isActive}
                  >
                    {item.name}
                    <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 shadow-lg shadow-cyan-400/50 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute -inset-2 bg-cyan-400/10 rounded-lg -z-10 border border-cyan-400/30"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {/* Ripple effects */}
                    {ripples.map(ripple => (
                      <motion.span
                        key={ripple.id}
                        className="absolute rounded-full bg-cyan-400/30 pointer-events-none"
                        style={{
                          left: ripple.x,
                          top: ripple.y,
                          width: 0,
                          height: 0,
                        }}
                        animate={{
                          width: 100,
                          height: 100,
                          opacity: [0.5, 0],
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    ))}
                  </MagneticNavItem>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="lg:hidden"
            whileTap={{ scale: 0.85, rotate: 90 }}
          >
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-cyan-400/10 border-2 border-transparent hover:border-cyan-400/50 overflow-hidden"
              whileHover={{ 
                boxShadow: "0 0 20px rgba(34,211,238,0.4)",
                borderColor: "rgba(34,211,238,0.5)"
              }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </motion.div>
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:hidden bg-gradient-to-b from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border-b-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20 overflow-hidden"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -50, rotateY: -45 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  onClick={(e) => scrollToSection(item.href, e)}
                  whileHover={{ 
                    x: 10,
                    scale: 1.02,
                    boxShadow: "0 8px 30px rgba(34,211,238,0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative block w-full text-left px-5 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-400/20 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/70 border-2 border-transparent hover:border-gray-700'
                  }`}
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative flex items-center gap-3">
                    {isActive && (
                      <motion.span 
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      />
                    )}
                    {item.name}
                    <motion.span
                      className="ml-auto text-cyan-400 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
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
