"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    // Trigger when the section is entering the viewport
    threshold: 0.05,
    rootMargin: '50px 0px 50px 0px',
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`py-12 sm:py-16 lg:py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
