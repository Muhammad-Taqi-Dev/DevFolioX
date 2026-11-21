# CLAUDE.md — DevFolioX

Personal portfolio site for Muhammad Taqi Haider. Single-page Next.js app; every section is a client component rendered from `app/page.tsx`. The only server code is the contact-form email route.

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # production build (also runs type-check; ESLint step currently errors but does not fail the build)
npx tsc --noEmit # type-check only — passes clean
npm run lint     # BROKEN — see Known Issues #2
```

No test suite exists.

## Stack (installed versions)

| Package | Version | Notes |
|---|---|---|
| next | 15.5 | App Router |
| react / react-dom | 18.3 | |
| tailwindcss | **3.4** | v3, NOT v4 — see Tailwind rules below |
| framer-motion | 12 | all animation |
| react-icons | 5 | `fi` (Feather) + `si` (Simple Icons) |
| @getbrevo/brevo | 3 | transactional email for contact form |

## Layout

```
app/
  layout.tsx            fonts (Instrument Serif / Plus Jakarta Sans / Inter / Fira Code via
                        next/font), metadata, JSON-LD Person schema
  page.tsx              Navbar → Hero, Projects, Experience, About, Skills, Testimonials,
                        Certifications, Achievements, Contact → Footer (inside MotionProvider)
  globals.css           base styles, scrollbar, focus ring, `.link` underline style,
                        reduced-motion override
  sitemap.ts, robots.ts generated /sitemap.xml and /robots.txt
  opengraph-image.tsx   1200×630 social preview card (next/og)
  api/contact/route.ts  POST → sends email through Brevo
components/
  Navbar.tsx            fixed nav, rAF-throttled scroll-spy, accessible mobile menu, Resume link
  Footer.tsx            one-line footer: ©, last updated, links (update LAST_UPDATED by hand)
  SectionWrapper.tsx    <section> with id, top border, padding, page container, fade-in
  SectionHeader.tsx     label / title / intro / optional aside — every section uses it
  MotionProvider.tsx    MotionConfig reducedMotion="user"
  sections/             Hero, About, Experience, Projects, Skills, Certifications,
                        Achievements, Testimonials, Contact
lib/
  site.ts               site identity: URL, name, role, description, email, phone, socials,
                        resume path, skills — feeds metadata, JSON-LD, sitemap, OG image,
                        Navbar, Hero, Footer, Contact
  testimonials.ts       recommendations data
public/                 profile photo, certificate PDFs, resume PDF, badge images (~35 MB)
design_review.md        earlier design audit (OUTDATED: describes the old cyan/glass design)
re_enhancement_status.md  log of the old "glow re-enhancement" pass (OUTDATED)
```

### Where content lives

Most content is hard-coded **inside** the section components (arrays declared in the component body or at module top). To edit:

| Content | File |
|---|---|
| Hero intro, metrics, CTAs | `components/sections/Hero.tsx` |
| About bio, quote, traits, stats, core stack, education, TrackWise card | `components/sections/About.tsx` |
| Job history | `components/sections/Experience.tsx` (`experiences`) |
| Projects (case-study format) | `components/sections/Projects.tsx` (`projects`) |
| Skills | `components/sections/Skills.tsx` (`skillCategories`) |
| Certificates / workshops / LeetCode badges | `components/sections/Certifications.tsx` — PDF goes in `public/`, `file` is its `/`-rooted path |
| Competitions + coding-platform stats | `components/sections/Achievements.tsx` |
| Recommendations | `lib/testimonials.ts` |
| Email / phone / GitHub / LinkedIn / resume | `lib/site.ts` (also hard-coded in `api/contact/route.ts`) |
| "240+ problems solved" | duplicated in Achievements and Certifications |

Project `features` strings use a `Label: body` case-study convention: exactly three entries, `Problem`, `What I did`, `Result`. Projects.tsx renders the label as a small mono accent heading above each paragraph; any other prefix renders as a plain paragraph. Projects with `featured: true` show by default; the rest sit behind "Show N more projects".

### Copy guidelines

Write like an engineer explaining their work, not a landing page. Plain sentences, first person, one idea per sentence. Every number needs context (`1.6s → under 600ms on the live monitoring screen`, not `63% faster`). Avoid: passionate/obsessed, leverage, robust, seamless, "not just X, it's Y", slogan headings. Hero metrics, About stats/timeline and Experience bullets repeat the same facts, so keep them in sync.

## Design system (follow it for any new UI)

Direction: calm, typographic, "engineering notebook". Warm dark, one accent, no decoration. If a choice would make the page look like a SaaS template (gradients, glows, glass, emoji, count-up numbers, typing effects), don't.

- **Colour tokens** (`tailwind.config.js`) — use these, never raw Tailwind palette colours (`cyan-*`, `gray-*`, …):
  | Token | Hex | Use |
  |---|---|---|
  | `canvas` | `#0F0F0E` | page background (one colour for the whole page). Named `canvas` because `base` would clash with `text-base` |
  | `surface` / `surface-raised` | `#161614` / `#1C1C19` | cards / inputs, hover |
  | `line` / `line-strong` | `#2A2925` / `#3D3B35` | 1px borders and dividers / hover borders |
  | `ink` | `#ECEAE3` | headings, primary text |
  | `ink-soft` | `#C9C6BC` | body copy (default body colour) |
  | `ink-muted` | `#97948A` | metadata, dates, captions |
  | `ink-faint` | `#6E6B63` | decorative only — fails contrast for real text |
  | `accent` / `accent-hover` | `#E2A85A` / `#EDBB76` | links, small markers, primary button (text on it: `text-canvas`) |
- **Dark only.** No `dark:` variants.
- **Fonts:** `font-serif` (Instrument Serif) for the name and the occasional quote; `font-display` for section/card headings; `font-body` default; `font-mono` for labels, dates, tech. Root font-size is 18px, so every rem is 1.125× Tailwind's default.
- **Layout:** left-aligned. Content width `max-w-page` (provided by `SectionWrapper`); reading text `max-w-prose`. Sections are separated by `border-t border-line`, not by background colour.
- **Section pattern:** `<SectionWrapper id="…">` + `<SectionHeader label="Work" title="Selected work" intro="…" aside={…} />`. New sections: add the id to `navItems` in `Navbar.tsx` if it should appear in the nav.
- **Card:** `rounded-lg border border-line bg-surface`, hover only `hover:border-line-strong`. No shadows, blur or transforms.
- **Pill:** `rounded border border-line px-2 py-0.5 font-mono text-xs text-ink-muted`.
- **Metric grid** (Hero, About, Achievements): `grid gap-px overflow-hidden rounded-lg border border-line bg-line`, cells `bg-canvas p-5`, value `font-display text-2xl font-semibold text-ink`, label `text-sm text-ink-muted`.
- **Links:** inline text links use the `.link` class (accent underline grows on hover). Buttons: primary `rounded-md bg-accent text-canvas hover:bg-accent-hover`, secondary `rounded-md border border-line-strong text-ink`.
- **Motion:** `SectionWrapper` fades each section in once. Anything else must be subtle (≤0.4s opacity/small y), triggered once. `MotionProvider` + the CSS override honour `prefers-reduced-motion`.

### Tailwind rules (important — this has already bitten the codebase)

1. **Opacity modifiers must be on the v3 scale (multiples of 5: `/5`, `/10`, `/15` … `/95`) or use brackets.** `bg-white/3`, `border-white/8`, `bg-cyan-500/12`, `/8`, `/6`, `/98` generate **no CSS at all** in Tailwind 3.4 — they fail silently. Use `bg-white/[0.03]`, `border-white/[0.08]`, `bg-cyan-500/[0.12]`, etc.
2. Class names must be complete static strings. No `` `bg-${color}-500` `` — use a lookup map of full class strings (see `getColorClasses` in Certifications.tsx, `accentMap` in Skills.tsx).
3. `@theme inline` in `globals.css` is Tailwind **v4** syntax and does nothing here. Custom tokens go in `tailwind.config.js`.
4. Custom animations must be defined in `tailwind.config.js` → `theme.extend.keyframes/animation` before use.

## Contact API (`app/api/contact/route.ts`)

- Env var: `BREVO_API_KEY` (in `.env.local`, gitignored via `.env*`). Missing key → 500 "Server misconfiguration".
- Body: `{ name, email, subject, message }`, all required.
- Sends a styled HTML email from/to the owner's address with `replyTo` set to the visitor.
- See Known Issues #1 before touching it.

## Conventions

- Every interactive component starts with `"use client"`.
- Imports: `@/` alias = repo root; sections use relative `../SectionWrapper` / `../SectionHeader`.
- Never hide content until JS runs or a scroll trigger fires (`initial={{ opacity: 0 }}` + `whileInView` on whole sections). The server HTML must show everything; it's what crawlers, link previews and slow phones see. Entrance effects use the CSS `animate-rise` utility (Hero) instead.
- Don't define components inside other components' bodies (each render would create a new component type and remount it).
- React keys: when mapping string arrays that can repeat, don't key by the string alone.
- External links: `target="_blank" rel="noopener noreferrer"`. Don't add `target="_blank"` to `mailto:`/`tel:` links.
- Icon-only buttons/links need an `aria-label`.

## Known issues (updated 2026-11-21 after the redesign)

Ordered by severity. Remove items from this list once fixed.

1. **Contact route — HTML injection & abuse.** `name`, `email`, `subject`, `message` are interpolated unescaped into the email HTML (and into `href="mailto:${email}"`), so anyone can inject arbitrary HTML/links into mail delivered to the owner. Also: no email-format or length validation, no rate limiting (anyone can burn the Brevo quota), invalid JSON returns 500 instead of 400, `error.message` is leaked to the client, the full Brevo result is `console.log`ged, and the sender address is hard-coded rather than an env var.
2. **ESLint is broken.** `eslint.config.mjs` imports `eslint-config-next` as a flat config (Next 16 style), but v15 ships a legacy config that needs `FlatCompat` (`compat.extends("next/core-web-vitals", "next/typescript")`). Result: `npm run lint` crashes and `next build` skips linting.
3. **Missing certificate file.** The ".NET Full Stack Foundation" entry in Certifications.tsx points to `/.NET Full Stack Foundation.pdf`, which isn't in `public/` → "View PDF" 404s.
4. **Heavy `public/`.** Certificate PDFs are 7–8 MB each (~35 MB total). Unused files: `profile.jpg`, `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`, `Problem Solving (Basic).PNG` (~1 MB).
5. **Leftovers.** `transpilePackages: ["framer-motion"]` in next.config.ts is unnecessary. README is the create-next-app boilerplate. `lib/testimonials.ts` carries unused fields (`companyLogo`, `image`, `skills`, `featured`, `relationship`, `date`). `design_review.md` / `re_enhancement_status.md` describe the old design.

## Working notes for Claude

- Run `npx tsc --noEmit` and `npm run build` after changes; until #2 is fixed, lint will not catch anything.
- To check whether a Tailwind class really generates CSS:
  `echo '<div class="bg-white/3"></div>' > t.html && echo '@tailwind utilities;' > in.css && npx tailwindcss -c tailwind.config.js --content t.html -i in.css`
- Ignore `design_review.md` / `re_enhancement_status.md` for visual decisions; they describe the replaced cyan/glass design. Follow the Design system section above.
- To eyeball the page without a browser: `npm run build && npx next start -p 3124`, then headless Edge: `msedge --headless=new --hide-scrollbars --window-size=1440,9000 --virtual-time-budget=5000 --screenshot=out.png http://localhost:3124/` (headless can't go narrower than ~500px).
