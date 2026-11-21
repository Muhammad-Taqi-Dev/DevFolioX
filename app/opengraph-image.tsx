import { site } from "@/lib/site";
import { ogSize, renderOgCard } from "@/lib/og";

// Preview card shown when the homepage link is shared.
export const alt = `${site.name}, ${site.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgCard({
    eyebrow: "dev-folio-x.vercel.app",
    title: site.name,
    accentLine: site.role,
    body: "APIs, auth and dashboards with NestJS, .NET and Next.js.",
    footer: `${site.jobTitle} at ${site.employer} · ${site.location.city}`,
  });
}
