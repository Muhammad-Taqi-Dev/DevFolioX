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
    // Trigger when the section is meaningfully entering the viewport,
    // so sections reveal one-by-one during scroll.
    threshold: 0.15,
    rootMargin: '0px 0px -25% 0px',
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-12 sm:py-16 lg:py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
