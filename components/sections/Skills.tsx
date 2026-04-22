"use client";

import { motion } from 'framer-motion';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiSharp,
  SiDotnet,
  SiNestjs,
  SiFlask,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiNeo4J,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiGit,
  SiPostman,
  SiSwagger,
  SiJest,
} from 'react-icons/si';
import { FiServer, FiDatabase, FiTool, FiCode, FiCloud } from 'react-icons/fi';
import SectionWrapper from '../SectionWrapper';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Engineering',
      icon: FiServer,
      color: 'cyan',
      skills: [
        { name: 'NestJS', icon: SiNestjs },
        { name: '.NET Core', icon: SiDotnet },
        { name: 'Flask', icon: SiFlask },
        { name: 'RESTful APIs', icon: FiServer },
        { name: 'gRPC', icon: FiServer },
        { name: 'GraphQL', icon: FiServer },
        { name: 'Microservices', icon: FiServer },
        { name: 'CQRS', icon: FiServer },
        { name: 'Clean Architecture', icon: FiServer },
        { name: 'JWT/OAuth2', icon: FiServer },
      ],
    },
    {
      title: 'Languages & Frontend',
      icon: FiTool,
      color: 'blue',
      skills: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Python', icon: SiPython },
        { name: 'C#', icon: SiSharp },
      ],
    },
    {
      title: 'Data Platforms & Cloud',
      icon: FiDatabase,
      color: 'purple',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'PostGIS', icon: FiDatabase },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Neo4j', icon: SiNeo4J },
        { name: 'Redis', icon: SiRedis },
        { name: 'Docker', icon: SiDocker },
        { name: 'AWS S3', icon: SiAmazon },
        { name: 'Azure Functions', icon: FiCloud },
        { name: 'Azure SignalR', icon: FiCloud },
        { name: 'Azure PostgreSQL', icon: FiCloud },
        { name: 'CI/CD', icon: FiCloud },
      ],
    },
    {
      title: 'Engineering Tools & Practices',
      icon: FiTool,
      color: 'green',
      skills: [
        { name: 'NLP', icon: FiTool },
        { name: 'ML Integration', icon: FiTool },
        { name: 'Jest', icon: SiJest },
        { name: 'Unit & Integration Testing', icon: FiTool },
        { name: 'System Design', icon: FiTool },
        { name: 'Agile/Scrum', icon: FiTool },
        { name: 'Git', icon: SiGit },
        { name: 'Postman', icon: SiPostman },
        { name: 'Swagger', icon: SiSwagger },
      ],
    },
  ];

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: 'from-cyan-500 to-cyan-400',
      blue: 'from-blue-500 to-blue-400',
      purple: 'from-purple-500 to-purple-400',
      green: 'from-green-500 to-green-400',
    };
    return colors[color] || 'from-cyan-500 to-cyan-400';
  };

  return (
    <SectionWrapper id="skills" className="bg-gray-800">
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
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className={`p-2 md:p-3 bg-gradient-to-br ${getColorClass(category.color)} rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                  <category.icon className="text-white text-xl md:text-2xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 hover:border-cyan-400/70 transition-all duration-300 cursor-default group hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    {skill.icon && <skill.icon className="text-cyan-400 text-lg md:text-xl group-hover:scale-110 transition-transform" />}
                    <span className="text-gray-300 font-semibold text-base md:text-lg">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
