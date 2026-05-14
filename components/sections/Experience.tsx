"use client";

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import SectionWrapper from '../SectionWrapper';

const Experience = () => {
  const experiences = [
    {
      company: 'QBS Co.',
      position: 'Associate Software Engineer',
      period: 'Feb 2026 – Present',
      location: 'Karachi, Pakistan',
      achievements: [
        'Cut API response latency from 1.6s to under 600ms by implementing Redis caching for third-party responses, eliminating redundant external calls on high-traffic monitoring screens. Improved user experience for 500+ daily active users on real-time dashboards.',
        'Built production-grade SSR dashboards in Next.js/TypeScript surfacing real-time KPIs, employee activity feeds, and live camera monitoring across interactive graph and tabular views with sub-100ms interactive response times.',
        'Architected end-to-end JWT-based authentication for backend services covering token issuance, refresh token rotation, session lifecycle management, and protected route enforcement across 15+ microservices.',
      ],
      technologies: ['Next.js', 'TypeScript', 'Redis', 'JWT/OAuth2', 'SSR', 'Microservices', 'Monorepo'],
      color: 'cyan',
    },
    {
      company: 'QBS Co.',
      position: 'Trainee Software Engineer',
      period: 'Nov 2025 – Jan 2026',
      location: 'Karachi, Pakistan',
      achievements: [
        'Replaced manual admin workflows by engineering an RBAC/IAM interface in Next.js managing 160+ granular permissions across workspace-level feature gates with bulk assignment support, reducing admin overhead by 80% and enabling 10x faster permission updates.',
        'Delivered two production-ready backend services: a feature-rich inventory management API (10K+ SKUs) and an SLA workflow orchestration service using gRPC and Docker for distributed inter-service communication with <50ms latency SLAs.',
        'Implemented OAuth2 and 2FA security across distributed microservices with secure token/refresh handling and role-based access control; seamlessly integrated WhatsApp Business API for automated real-time ticket delivery to 200+ concurrent support agents.',
      ],
      technologies: ['.NET Core', 'NestJS', 'Next.js', 'gRPC', 'Docker', 'OAuth2', '2FA', 'WhatsApp API', 'RBAC'],
      color: 'cyan',
    },
    {
      company: 'KoderLabs',
      position: 'Associate Software Engineer',
      period: 'Mar 2025 – Oct 2025',
      location: 'Karachi, Pakistan',
      achievements: [
        'Slashed per-request database hits from 6–8 queries down to 2–3 by strategically refactoring service-layer logic to consolidate redundant database calls across 25+ endpoints, reducing query latency by 65% while maintaining 100% backward API compatibility.',
        'Architected and deployed an async PDF document generation pipeline using Azure Queue Storage and SignalR, cutting average processing time from ∼1.6s to 400–500ms per document and enabling 10x higher concurrent throughput for 5K+ monthly document requests.',
        'Boosted geospatial query performance by 25% through strategic PostGIS spatial extensions, advanced spatial indexing on 2M+ location records, and Google Maps API integration across a multi-tenant SaaS platform serving enterprise clients.',
        'Engineered scalable backend modules and event-driven microservice integrations on NestJS/.NET Core platforms, leveraging Azure Functions for asynchronous order processing, payment reconciliation, and batch analytics at 10K+ requests/day.',
      ],
      technologies: ['NestJS', '.NET Core', 'PostgreSQL', 'PostGIS', 'Azure Functions', 'Azure Queue Storage', 'SignalR', 'Google Maps API'],
      color: 'blue',
    },
    {
      company: 'QBS Co.',
      position: '.NET Intern',
      period: 'Dec 2024 – Mar 2025',
      location: 'Karachi, Pakistan',
      achievements: [
        'Built distributed microservices using Docker, gRPC, and CQRS, delivering Workspace Management, Live Monitoring, and Employee Tracking modules with 25% improved inter-service performance',
        'Independently developed Product and SLA services for Ajeeks; implemented OAuth2 authentication with 2FA and a Neo4j-based recommendation engine with WhatsApp automation using multi-hop graph traversal',
      ],
      technologies: ['.NET Core', 'Docker', 'gRPC', 'Neo4j', 'CQRS', 'Microservices', 'OAuth2', '2FA'],
      color: 'cyan',
    },
  ];

  return (
    <SectionWrapper id="experience" className="bg-gray-800">
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
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 rounded-full opacity-30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-8 md:mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-8 left-1/2 md:left-auto ${index % 2 === 0 ? 'md:-right-3' : 'md:-left-3'} transform md:transform-none w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-4 border-gray-800 z-10 shadow-lg shadow-cyan-500/50 animate-pulse"></div>

              {/* Content Card */}
              <div
                className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border-l-[6px] ${
                  exp.color === 'cyan' ? 'border-cyan-400' : 'border-blue-400'
                } hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] group border-2 border-gray-700 hover:border-cyan-400/50`}
              >
                {/* Company & Position */}
                <div className="mb-4 md:mb-5">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">{exp.position}</h3>
                  <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-base md:text-lg">
                    <FiBriefcase className="text-lg md:text-xl" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Period & Location */}
                <div className="flex flex-wrap gap-3 md:gap-5 mb-4 md:mb-5 text-gray-400 text-base md:text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-base md:text-lg" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="hidden sm:inline text-cyan-400">•</span>
                  <span>{exp.location}</span>
                </div>

                {/* Achievements */}
                <div className="mb-4 md:mb-5">
                  <h4 className="text-white font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2.5 md:space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-base md:text-lg flex items-start leading-relaxed">
                        <span className="text-cyan-400 text-lg font-bold mr-2 md:mr-2.5 mt-0.5">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 md:py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-cyan-400 text-sm md:text-base font-semibold rounded-lg border-2 border-gray-700 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
