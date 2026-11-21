import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "Case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgCard({
    eyebrow: `Case study · ${project?.company ?? "Personal project"}`,
    title: project?.title ?? site.name,
    accentLine: project?.subtitle,
    body: project?.technologies.slice(0, 5).join(" · "),
    footer: `${site.name} · ${site.role}`,
  });
}
