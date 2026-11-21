import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProject, parseFeature, projects } from "@/lib/projects";
import { site } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = project.subtitle ? `${project.title}: ${project.subtitle}` : project.title;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      title,
      description: project.description,
      siteName: site.name,
    },
    twitter: { card: "summary_large_image", title, description: project.description },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const sections = project.features.map(parseFeature);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.subtitle ?? project.title,
    description: project.description,
    url: `${site.url}/work/${project.slug}`,
    keywords: project.technologies.join(", "),
    author: { "@type": "Person", name: site.name, url: site.url },
    ...(project.company && {
      sourceOrganization: { "@type": "Organization", name: project.company },
    }),
    ...(project.github && { codeRepository: project.github }),
  };

  const facts = [
    { term: "Where", value: project.company ?? "Personal project" },
    project.role && { term: "Role", value: project.role },
    project.period && { term: "When", value: project.period },
  ].filter(Boolean) as { term: string; value: string }[];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-page px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <FiArrowLeft aria-hidden="true" /> All work
        </Link>

        <article className="mt-10">
          <header className="max-w-prose">
            <p className="font-mono text-sm text-accent">Case study</p>
            <h1 className="mt-3 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-4 font-display text-xl text-ink-muted">{project.subtitle}</p>
            )}
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">{project.description}</p>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_18rem]">
            {/* Story */}
            <div className="max-w-prose space-y-10">
              {sections.map(({ label, body }, i) => (
                <section key={i}>
                  {label && (
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
                      {label}
                    </h2>
                  )}
                  <p className="mt-3 text-lg leading-relaxed text-ink-soft">{body}</p>
                </section>
              ))}
            </div>

            {/* Facts */}
            <aside className="h-fit space-y-6 rounded-lg border border-line bg-surface p-6 lg:sticky lg:top-24">
              <dl className="space-y-4">
                {facts.map((f) => (
                  <div key={f.term}>
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      {f.term}
                    </dt>
                    <dd className="mt-1 text-ink">{f.value}</dd>
                  </div>
                ))}
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    Stack
                  </dt>
                  <dd className="mt-2">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <li
                          key={`${tech}-${i}`}
                          className="rounded border border-line px-2 py-0.5 font-mono text-xs text-ink-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>

              {(project.live || project.github) && (
                <div className="flex flex-wrap gap-3 border-t border-line pt-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-accent-hover"
                    >
                      Live site <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-4 py-2 text-sm text-ink transition-colors hover:border-ink-muted"
                    >
                      Code <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
              {project.isCompanyProject && (
                <p className="text-sm text-ink-muted">
                  Internal codebase, so there&apos;s no public link. Happy to walk through it in
                  an interview.
                </p>
              )}
            </aside>
          </div>
        </article>

        {/* Prev / next */}
        <nav
          aria-label="More case studies"
          className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2"
        >
          <Link
            href={`/work/${prev.slug}`}
            className="group rounded-lg border border-line p-5 transition-colors hover:border-line-strong"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted">
              <FiArrowLeft aria-hidden="true" /> Previous
            </span>
            <span className="mt-2 block font-display text-lg text-ink group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group rounded-lg border border-line p-5 text-right transition-colors hover:border-line-strong"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted">
              Next <FiArrowRight aria-hidden="true" />
            </span>
            <span className="mt-2 block font-display text-lg text-ink group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        </nav>

        <p className="mt-12 text-ink-muted">
          Want to talk about this project?{" "}
          <a className="link" href={`mailto:${site.email}`}>
            Email me
          </a>{" "}
          or{" "}
          <Link className="link" href="/#contact">
            use the contact form
          </Link>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
