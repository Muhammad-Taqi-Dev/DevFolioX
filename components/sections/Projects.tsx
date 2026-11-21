"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import { projects, type Project } from "@/lib/projects";

const MAX_TECHS = 5;

// ─── Card ────────────────────────────────────────────────────────────────────
const ProjectCard = ({ project }: { project: Project }) => {
  const hiddenTechs = project.technologies.length - MAX_TECHS;
  const href = `/work/${project.slug}`;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-surface p-6 transition-colors duration-200 hover:border-line-strong">
      <p className="mb-3 font-mono text-xs text-ink-muted">
        {project.company ?? "Personal project"}
        {project.period && (
          <>
            <span className="mx-1.5 text-ink-faint">·</span>
            {project.period}
          </>
        )}
      </p>

      <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">
        <Link href={href} className="transition-colors hover:text-accent">
          {project.title}
        </Link>
      </h3>
      {project.subtitle && <p className="mt-1 text-ink-muted">{project.subtitle}</p>}

      <p className="mt-4 leading-relaxed text-ink-soft">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.technologies.slice(0, MAX_TECHS).map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            className="rounded border border-line px-2 py-0.5 font-mono text-xs text-ink-muted"
          >
            {tech}
          </li>
        ))}
        {hiddenTechs > 0 && (
          <li className="px-1 py-0.5 font-mono text-xs text-ink-faint">+{hiddenTechs}</li>
        )}
      </ul>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 text-sm">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Read the case study
            <FiArrowRight
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1"
            >
              Live site <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-1"
            >
              Code <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const featuredProjects = projects.filter((p) => p.featured);
const moreProjects = projects.filter((p) => !p.featured);

// ─── Section ──────────────────────────────────────────────────────────────────
const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const visible = showMore ? projects : featuredProjects;

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="Work"
        title="Selected work"
        intro="Products I built at work and on my own. Each one has a short case study: the problem, what I did, and the result."
        aside={
          <a
            href="https://github.com/Muhammad-Taqi-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="link text-sm"
          >
            More on GitHub ↗
          </a>
        }
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {moreProjects.length > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            className="rounded-md border border-line-strong px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink-muted"
          >
            {showMore ? "Show fewer" : `Show ${moreProjects.length} more projects`}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
