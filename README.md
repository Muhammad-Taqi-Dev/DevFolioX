# DevFolioX

The source for my portfolio: **[dev-folio-x.vercel.app](https://dev-folio-x.vercel.app)**

I'm Muhammad Taqi Haider, a software engineer in Karachi. I build backend systems: APIs, auth, background jobs, and the dashboards on top of them. This site shows my work as short case studies, with the problem, what I did, and what changed.

## What's in it

- **Homepage**: intro, selected work, experience, about, skills, recommendations, certifications and contact.
- **Case studies** at `/work/<project>`: one statically generated page per project, each with its own metadata, canonical URL, structured data and share image.
- **Contact form** that emails me through Brevo. The API route validates and escapes input, rate-limits by IP and uses a honeypot field for bots.
- **SEO basics**: sitemap, robots.txt, JSON-LD (`Person` and `CreativeWork`) and generated Open Graph images.

## Stack

Next.js 15 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · Framer Motion · Brevo · Vercel

## Run it locally

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

The contact form needs a Brevo API key. Create `.env.local`:

```bash
BREVO_API_KEY=your-key
# optional, default to the site owner's address
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=verified-sender@example.com
```

Everything else works without it.

```bash
npm run build      # production build + type-check
npx tsc --noEmit   # type-check only
```

## Project layout

```
app/
  page.tsx               homepage
  work/[slug]/           case-study pages and their share images
  api/contact/route.ts   contact form → Brevo
  sitemap.ts, robots.ts, opengraph-image.tsx, icon.tsx, not-found.tsx
components/
  sections/              one component per homepage section
  Navbar, Footer, SectionWrapper, SectionHeader
lib/
  site.ts                name, links, email, resume path
  projects.ts            project and case-study content
  testimonials.ts        recommendations
```

Most content lives in `lib/` or at the top of each section component, so updating the site is usually a text edit. `CLAUDE.md` has the full guide: design tokens, copy guidelines and known issues.

## License

The code is [MIT licensed](LICENSE). Use it as a starting point for your own portfolio if it helps.

The personal content is not covered by that license: written text, case studies, recommendations, photos, resume and certificates stay mine. If you reuse the code, please swap in your own content. Details in [CONTENT-NOTICE.md](CONTENT-NOTICE.md).
