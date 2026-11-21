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
| react-type-animation | 3 | Hero typing effect |
| react-intersection-observer | 10 | only used by `SectionWrapper` (framer's `useInView` could replace it) |
| next-themes, lucide-react | — | **unused** (only referenced by dead `ThemeProvider`/`ThemeToggle`) |

## Layout

```
app/
  layout.tsx            fonts (Plus Jakarta Sans / Inter / Fira Code via next/font) + metadata
  page.tsx              composes Navbar → sections → Footer
  globals.css           base styles, scrollbar, focus ring, font utility classes
  api/contact/route.ts  POST → sends email through Brevo
components/
  Navbar.tsx            fixed nav, scroll-spy, scroll progress bar, mobile menu
  Footer.tsx
  SectionWrapper.tsx    <motion.section> with id + fade-in on view + standard vertical padding
  ThemeProvider.tsx     UNUSED (site is dark-only)
  ThemeToggle.tsx       UNUSED
  sections/             Hero, About, Experience, Projects, Skills, Certifications,
                        Achievements, Testimonials, Contact
lib/
  testimonials.ts       the only data that lives outside a component
public/                 profile photo, certificate PDFs, resume PDF, badge images (~35 MB)
design_review.md        earlier design audit (file links point to an old d:/ path)
re_enhancement_status.md  log of the "glow re-enhancement" pass
```

### Where content lives

Most content is hard-coded **inside** the section components (arrays declared in the component body or at module top). To edit:

| Content | File |
|---|---|
| Hero metrics, typing lines, CTA | `components/sections/Hero.tsx` |
| About stats, timeline, traits, core stack, education | `components/sections/About.tsx` |
| Job history | `components/sections/Experience.tsx` (`experiences`) |
| Projects (PCAR format) | `components/sections/Projects.tsx` (`projects`) |
| Skills | `components/sections/Skills.tsx` (`skillCategories`) |
| Certificates / workshops / LeetCode badges | `components/sections/Certifications.tsx` — PDF goes in `public/`, `file` is its `/`-rooted path |
| Competitions + coding-platform stats | `components/sections/Achievements.tsx` |
| Recommendations | `lib/testimonials.ts` |
| Email / phone / GitHub / LinkedIn | **duplicated** in Hero, Contact, Footer and `api/contact/route.ts` — update all four |
| "240+ problems solved" | duplicated in Achievements and Certifications |

Project `features` strings use a `Label: body` convention. Labels `Problem`, `Challenges`, `Actions`, `Result`, `Learnings` get coloured chips via `LABEL_STYLES` in Projects.tsx; any other prefix renders as plain text.

## Design system (follow it for any new UI)

- **Backgrounds:** sections alternate `bg-[#0a0f1a]` and `bg-[#080d18]`. Site is dark-only — do not add `dark:` variants or light-mode colours.
- **Accent:** cyan (`cyan-400/500`) primary, with blue / indigo secondary.
- **Section header pattern** (copy from any section):
  1. mono label — `<p className="text-cyan-500 font-mono text-sm tracking-[0.35em] uppercase">// name</p>`
  2. `h2.font-display` — white phrase + gradient phrase (`from-cyan-400 to-blue-500 bg-clip-text text-transparent`)
  3. gray subtitle
  4. divider: line · dot · line
- **Section background decoration:** cyan grid overlay (60px, `opacity-[0.025]`), two 500px blurred glow orbs in corners, a centred heading spotlight.
- **Cards (glassmorphism):** `rounded-xl|2xl border border-white/[0.12] bg-white/[0.05] backdrop-blur-sm`, hover → `hover:border-cyan-500/35 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-cyan-500/10`.
- **Pills:** `px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-sm font-mono`.
- **Fonts:** `font-display` (headings), `font-body` (copy), `font-mono` (labels/tags). Root font-size is 18px, so every rem is 1.125× Tailwind's default.
- **Animation:** framer-motion `initial` / `whileInView` / `viewport={{ once: true }}`, durations 0.3–0.6s, stagger with `delay: index * 0.05–0.12`. New sections should be wrapped in `SectionWrapper` with a unique `id`, and the id added to `navItems` and the `sections` scroll-spy array in `Navbar.tsx`.

### Tailwind rules (important — this has already bitten the codebase)

1. **Opacity modifiers must be on the v3 scale (multiples of 5: `/5`, `/10`, `/15` … `/95`) or use brackets.** `bg-white/3`, `border-white/8`, `bg-cyan-500/12`, `/8`, `/6`, `/98` generate **no CSS at all** in Tailwind 3.4 — they fail silently. Use `bg-white/[0.03]`, `border-white/[0.08]`, `bg-cyan-500/[0.12]`, etc.
2. Class names must be complete static strings. No `` `bg-${color}-500` `` — use a lookup map of full class strings (see `getColorClasses` in Certifications.tsx, `accentMap` in Skills.tsx).
3. `@theme inline` in `globals.css` is Tailwind **v4** syntax and does nothing here. Custom tokens go in `tailwind.config.js`.
4. Custom animations (e.g. `animate-gradient-x`) must be defined in `tailwind.config.js` → `theme.extend.keyframes/animation` before use.

## Contact API (`app/api/contact/route.ts`)

- Env var: `BREVO_API_KEY` (in `.env.local`, gitignored via `.env*`). Missing key → 500 "Server misconfiguration".
- Body: `{ name, email, subject, message }`, all required.
- Sends a styled HTML email from/to the owner's address with `replyTo` set to the visitor.
- See Known Issues #1 before touching it.

## Conventions

- Every interactive component starts with `"use client"`.
- Imports: `@/` alias = repo root (used in `app/page.tsx`); sections use relative `../SectionWrapper`.
- Don't define components inside other components' bodies (see Known Issues #4).
- React keys: when mapping string arrays that can repeat, don't key by the string alone.
- External links: `target="_blank" rel="noopener noreferrer"`. Don't add `target="_blank"` to `mailto:`/`tel:` links.
- Icon-only buttons/links need an `aria-label`.

## Known issues (from full code review, 2026-11-21)

Ordered by severity. Remove items from this list once fixed.

1. **Contact route — HTML injection & abuse.** `name`, `email`, `subject`, `message` are interpolated unescaped into the email HTML (and into `href="mailto:${email}"`), so anyone can inject arbitrary HTML/links into mail delivered to the owner. Also: no email-format or length validation, no rate limiting (anyone can burn the Brevo quota), invalid JSON returns 500 instead of 400, `error.message` is leaked to the client, the full Brevo result is `console.log`ged, and the sender address is hard-coded rather than an env var.
2. **ESLint is broken.** `eslint.config.mjs` imports `eslint-config-next` as a flat config (Next 16 style), but v15 ships a legacy config that needs `FlatCompat` (`compat.extends("next/core-web-vitals", "next/typescript")`). Result: `npm run lint` crashes and `next build` skips linting.
3. **~47 Tailwind classes generate no CSS** (non-scale opacity modifiers, see rule 1). This means the "boosted /12 glow orbs" and "/8 heading spotlights" logged in `re_enhancement_status.md` are not actually rendered in Achievements, Certifications, Contact, Experience, Projects, Skills, Testimonials; plus `border-white/8`, `bg-white/3`, `border-white/6` across cards, `bg-purple-500/08` in Hero, `via-gray-800/98` in the Navbar mobile menu, and `border-current/20` in Certifications. `animate-gradient-x` (Navbar logo) is also undefined.
4. **Navbar re-mounts its items on every scroll event.** `MagneticNavItem` is declared inside `Navbar`, so each render creates a new component type; the scroll handler calls `setState` on every scroll event (no rAF throttling, not `passive`), so all 8 nav items unmount/remount continuously, resetting spring state. Also in Navbar: ripples are rendered inside *every* nav item (clicking one ripples all), the mobile menu `exit` animation never plays (no `<AnimatePresence>`), the mobile toggle has no `aria-label`/`aria-expanded`, `scrollProgress` can be `NaN` if the page isn't scrollable, and `testimonials` is missing from both nav and scroll-spy.
5. **Global `transition: all 0.3s` on `button, a, input, textarea`** (globals.css) fights framer-motion on every `motion.a` / `motion.button` (CSS tweens the transforms framer sets each frame), making hover/magnetic effects laggy. The comment below it says this was removed, but only the `*` version was.
6. **Duplicate React key** — `"Clean Architecture"` appears twice in Ajeek-KSA `technologies` (Projects.tsx), and tech pills are keyed by name.
7. **Testimonials logic.** Filter tab "All (6)" but only 5 cards show (the featured one is excluded from the grid). `isRecent()` parses `"December 2025"` with `new Date()` (non-standard; Safari returns Invalid Date) and depends on the current date, so the static build and client can disagree → hydration mismatch risk. "Verified" badge is hard-coded on every card. Header reads "6+ verified LinkedIn recommendations". `companyLogo`/`image` fields are unused; company names are inconsistent (`QBSCo` / `QBS Co` / `Koderlabs` / `KoderLabs`). Two adjacent CTAs link to the same URL.
8. **Dead code / unused deps.** `ThemeProvider.tsx`, `ThemeToggle.tsx`, `next-themes`, `lucide-react`, `.animate-fadeInUp`, `@theme inline` block, `// @ts-ignore` on the CSS import in layout.tsx, `transpilePackages: ["framer-motion"]` in next.config.ts, unused `public/` files (`profile.jpg`, `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`, `Problem Solving (Basic).PNG` ~1 MB). README is the create-next-app boilerplate (mentions Geist, which isn't used).
9. **Smaller code issues.** `CertificateCard` is defined inside `Certifications` and typed `cert: any`; certificate download buttons have no `aria-label`; `AnimatedCounter` only cancels its first rAF on unmount; Footer `mailto:`/`tel:` links open a blank tab (`target="_blank"`) and the footer still uses `bg-gray-900`/`gray-800` instead of the design-system navy; Hero "scroll" indicator is a clickable `div` (not keyboard-accessible); profile photo uses `<img>` instead of `next/image`; layout metadata has no `metadataBase` / OG image; certificate PDFs are 7–8 MB each.
10. **Content inconsistencies a recruiter may notice.** "1.5 years" is repeated everywhere, but Experience dates (Dec 2024 → present) now add up to ~2 years. About's timeline lists a "Backend Engineer @ Production Systems" role that doesn't match any Experience entry. PostGIS improvement is "25% faster" in About but "2.1s → 600ms" (~71%) in Experience. VersEye role says ".NET + Next.js" but its stack lists NestJS and no .NET. Achievements heading "Competed & won." vs entries "Advanced to Round 2" / "Participated". Certificate date formats vary (`Sept, 2026`, `Feb 2026`, `2025`).

## Working notes for Claude

- Run `npx tsc --noEmit` and `npm run build` after changes; until #2 is fixed, lint will not catch anything.
- To check whether a Tailwind class really generates CSS:
  `echo '<div class="bg-white/3"></div>' > t.html && echo '@tailwind utilities;' > in.css && npx tailwindcss -c tailwind.config.js --content t.html -i in.css`
- When editing visuals, keep `design_review.md` / `re_enhancement_status.md` in mind but trust the code over those docs — they describe intent, and some of the classes they list don't render (#3).
