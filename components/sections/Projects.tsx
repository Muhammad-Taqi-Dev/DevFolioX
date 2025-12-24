"use client";

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi';
import SectionWrapper from '../SectionWrapper';

const Projects = () => {
  const projects = [
    {
      title: 'Ajeek-KSA',
      subtitle: 'Service Technology Platform',
      period: 'Aug 2024 – Present',
      description:
        'Problem: Manual service operations causing inefficiencies. Built microservices architecture to streamline marketplace and SLA management.',
      features: [
        'Challenge: Complex business workflows. Solution: Developed Product microservice with .NET for scalable marketplace operations',
        'Challenge: Service tracking inefficiency. Solution: Built SLA management system with automated compliance monitoring',
      ],
      technologies: ['.NET Core', 'Microservices', 'C#', 'SQL Server', 'REST APIs'],
      live: 'http://ajeek.qbscocloud.net:31180/crm/login',
      featured: true,
      isCompanyProject: true,
    },
    {
      title: 'TrackWise',
      subtitle: 'Smart Personal Finance Management System',
      period: 'May 2025 – Present',
      description:
        'Problem: Manual expense tracking wastes time and lacks insights. Built AI-powered platform delivering real-time financial intelligence.',
      features: [
        'Challenge: Manual categorization errors. Solution: Implemented HuggingFace AI model achieving 92% accuracy in expense classification',
        'Challenge: Scalability needs. Solution: Architected NestJS backend with PostgreSQL handling 10K+ transactions efficiently',
      ],
      technologies: ['NestJS', 'Angular 19', 'PostgreSQL', 'JWT', 'AI/ML', 'Azure', 'Vercel', 'Render'],
      github: 'https://github.com/Muhammad-Taqi-Dev/TrackWise',
      live: 'https://track-wise2.vercel.app/home',
      featured: true,
    },
    {
      title: 'CourseFlow',
      subtitle: 'Smart Course Scheduler',
      period: 'Dec 2024 – Jan 2025',
      description:
        'Problem: Manual timetabling creates conflicts and wastes hours. Built algorithmic scheduler eliminating 95% of scheduling conflicts.',
      features: [
        'Challenge: NP-complete scheduling problem. Solution: Applied Greedy + Backtracking algorithms achieving optimal allocation',
        'Challenge: Real-time conflict detection. Solution: Developed admin dashboard with instant validation and automated resolution',
      ],
      technologies: ['Flask', 'Python', 'Algorithms', 'SQLite'],
      github: 'https://github.com/Muhammad-Taqi-Dev/CourseFlow',
      featured: true,
    },
    {
      title: 'Stock Management System',
      subtitle: 'Inventory Management Platform',
      period: 'June 2024 – July 2024',
      description:
        'Problem: Manual inventory tracking causes stockouts and overstocking. Built automated system reducing inventory errors by 80%.',
      features: [
        'Challenge: Real-time tracking needs. Solution: Developed Flask backend with WebSocket integration for instant stock updates',
        'Challenge: Proactive management. Solution: Implemented smart alerts reducing stockouts by 65% through predictive thresholds',
      ],
      technologies: ['Flask', 'Python', 'SQLAlchemy', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/Muhammad-Taqi-Dev/Stock-Management-System-Website',
      featured: true,
    },
    {
      title: 'Chatbot Interface',
      subtitle: 'AI-Powered Conversational Bot',
      period: 'Sep 2024 – Oct 2024',
      description:
        'Problem: Language barriers in customer support (English/Urdu). Built bilingual chatbot serving 500+ users with 85% satisfaction.',
      features: [
        'Challenge: Multilingual NLP processing. Solution: Implemented nltk pattern matching supporting English and Roman Urdu seamlessly',
        'Challenge: Mobile accessibility. Solution: Designed responsive Flask UI achieving 100% mobile compatibility',
      ],
      technologies: ['Flask', 'Python', 'nltk', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/Muhammad-Taqi-Dev/CHATBOT',
      featured: false,
    },
    {
      title: 'LUDO Board Game',
      subtitle: 'Classic Board Game with DSAA',
      period: 'Mar 2024 – May 2024',
      description:
        'Problem: Complex game logic with circular board movement. Applied circular linked lists achieving O(1) piece traversal efficiency.',
      features: [
        'Challenge: Board state management. Solution: Implemented singly circular linked lists with fork handling for optimized tracking',
        'Challenge: AI opponents. Solution: Developed intelligent move selection algorithm with capture prioritization logic',
      ],
      technologies: ['C++', 'Data Structures', 'Algorithms', 'OOP', 'Windows.h'],
      github: 'https://github.com/Muhammad-Taqi-Dev/DSA-Semproj',
      featured: false,
    },
    {
      title: 'Flappy Bird Console Game',
      subtitle: 'OOP-Based Console Game',
      period: 'Jan 2024 – Feb 2024',
      description:
        'Problem: Console limitations for game development. Leveraged OOP principles creating smooth gameplay with 60 FPS performance.',
      features: [
        'Challenge: Collision detection accuracy. Solution: Implemented pixel-perfect hitbox system with 99.8% precision',
        'Challenge: Game state persistence. Solution: Designed file I/O system for high score tracking across sessions',
      ],
      technologies: ['C++', 'OOP', 'olcConsoleGameEngine', 'Game Dev'],
      github: 'https://github.com/Muhammad-Taqi-Dev/Flappy-Bird-Game-Using-OOP',
      featured: false,
    },
    {
      title: 'NLP Sentiment Analysis',
      subtitle: 'Amazon Product Review Analysis',
      period: 'Nov 2023 – Dec 2023',
      description:
        'Problem: Manual review analysis overwhelms businesses. Built ML models achieving 91% accuracy in sentiment classification.',
      features: [
        'Challenge: Class imbalance in dataset. Solution: Applied SMOTE technique improving minority class F1-score by 34%',
        'Challenge: Model deployment. Solution: Created Streamlit app with pre-trained models enabling instant predictions',
      ],
      technologies: ['Python', 'NLP', 'Scikit-learn', 'Streamlit', 'ML', 'SVM'],
      github: 'https://github.com/Muhammad-Taqi-Dev/NLP-CCP',
      featured: false,
    },
    {
      title: 'DSA Practice Repository',
      subtitle: 'LeetCode Problem Solutions',
      period: 'Ongoing',
      description:
        'Problem: Interview preparation needs structured practice. Built comprehensive repository mastering 25+ algorithm patterns.',
      features: [
        'Challenge: Code quality consistency. Solution: Maintained clean implementations across 200+ problems in C++ and Python3',
        'Challenge: Pattern recognition. Solution: Organized by 25+ topics (DP, Graphs, Trees) enabling systematic learning',
      ],
      technologies: ['C++', 'Python', 'Algorithms', 'Data Structures', 'LeetCode'],
      github: 'https://github.com/Muhammad-Taqi-Dev/DSA---LeetCode',
      featured: false,
    },
  ];

  return (
    <SectionWrapper id="projects" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 overflow-x-hidden w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
              className="bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-2xl border-2 border-gray-700 hover:border-cyan-400 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-2 flex flex-col group h-full relative overflow-hidden w-full max-w-full"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>
              
              {/* Project Header */}
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-b-2 border-gray-700 group-hover:border-cyan-400/50 transition-all duration-500 relative z-10 backdrop-blur-sm">
                <div className="flex flex-wrap items-start gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent flex-1 min-w-0 group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-purple-400 transition-all duration-500">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2.5 py-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 text-xs font-bold rounded-full border-2 border-cyan-400/60 whitespace-nowrap animate-pulse shadow-lg shadow-cyan-500/50 backdrop-blur-sm">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col relative z-10">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-3 flex items-center gap-2">
                    <span className="w-1 sm:w-1.5 h-4 sm:h-5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="text-gray-400 text-xs sm:text-sm md:text-base flex items-start gap-2 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-cyan-400 text-base sm:text-lg font-bold mt-0.5 flex-shrink-0 group-hover:text-cyan-300 transition-colors">▹</span>
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex-grow mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-gray-900/80 to-gray-800/80 text-cyan-400 text-xs sm:text-sm md:text-base font-semibold rounded-lg border-2 border-gray-700 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 sm:pt-4 border-t-2 border-gray-700 group-hover:border-cyan-400/30 transition-colors duration-500">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold hover:gap-3"
                    >
                      <FiGithub className="text-lg sm:text-xl md:text-2xl" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold hover:gap-3"
                    >
                      <FiExternalLink className="text-lg sm:text-xl md:text-2xl" /> {project.isCompanyProject ? 'View Platform' : 'Live Demo'}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mt-12 md:mt-16">
            <motion.a
              href="https://github.com/Muhammad-Taqi-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
              <FiGithub className="text-xl sm:text-2xl md:text-3xl relative z-10" />
              <span className="relative z-10">View More on GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
