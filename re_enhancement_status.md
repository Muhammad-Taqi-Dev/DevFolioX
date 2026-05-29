# DevFolioX — Re-Enhancement Status Doc
> **For agent handoff** — tracks every change made in the re-enhancement pass.
> Original design review: see `design_review.md` in project root.

---

## Context / Why This Pass Exists

After the design review consistency fixes (see `design_review.md`), all sections became
visually uniform — same dark backgrounds, same headings, same glassmorphism cards.
**BUT the glow/energy disappeared** because:

| Root Cause | Hero (reference) | Post-review sections |
|---|---|---|
| Glow orb size | `w-[500px]` (500px) | `w-80` (320px) — 40% smaller |
| Glow opacity | `bg-cyan-500/10` | `bg-cyan-500/6` — 40% weaker |
| Card bg | `bg-white/5` | `bg-white/3` — barely visible |
| Card border | `border-white/10` | `border-white/8` |
| Grid overlay | ✅ at opacity 4% | ❌ None |
| Heading spotlight | ✅ Radial gradient | ❌ None |

---

## Re-Enhancement Recipe (applied to every section)

1. **Glow orbs** → `w-[500px] h-[500px]`, `/6` → `/12` opacity, positioned at `-20px` offset corners
2. **Heading spotlight** → `w-[700px] h-64` centered radial at section top
3. **Grid overlay** → same cyan grid as Hero at `opacity-[0.025]`
4. **Card bg** → `bg-white/3` → `bg-white/[0.05]`
5. **Card border** → `border-white/8` → `border-white/[0.12]`
6. **Card hover** → add `hover:shadow-lg hover:shadow-cyan-500/10`
7. **SectionWrapper padding** → `py-12 sm:py-16 lg:py-20` → `py-16 sm:py-24 lg:py-28`

---

## File-by-File Status

### `components/SectionWrapper.tsx`
- [x] **DONE** — padding increased to `py-16 sm:py-24 lg:py-28`

---

### `components/sections/Skills.tsx`
- [x] **DONE**
  - Glow orbs: 500px, `/12` opacity
  - Added centered heading spotlight (`w-[700px] h-64 bg-cyan-500/8`)
  - Added grid overlay at `opacity-[0.025]`
  - Cards: `bg-white/[0.05] border-white/[0.12]`
  - Card hover: `hover:shadow-lg hover:shadow-cyan-500/10`

---

### `components/sections/Experience.tsx`
- [x] **DONE**
  - Glow orbs: 500px, `/12` opacity, indigo spotlight
  - Added centered heading spotlight (`w-[700px] h-64 bg-indigo-500/8`)
  - Added grid overlay at `opacity-[0.025]`
  - Cards: `bg-white/[0.05] border-white/[0.12]`
  - **Current role (index === 0)** gets special treatment:
    `border-cyan-500/30 bg-cyan-500/[0.04] border-l-2 border-l-cyan-500/60`
    with stronger hover: `hover:border-cyan-500/50 hover:bg-cyan-500/[0.07] hover:shadow-cyan-500/15`

---

### `components/sections/Achievements.tsx`
- [x] **DONE**
  - Glow orbs: 500px, `/12` opacity
  - Added centered heading spotlight
  - Added grid overlay
  - Competition cards: `bg-white/[0.05] border-white/[0.12]` + hover shadow
  - Platform cards (LeetCode/HackerRank): same treatment — platform-colored hover glow preserved

---

### `components/sections/Testimonials.tsx`
- [x] **DONE**
  - Glow orbs: 500px, `/12` opacity, indigo spotlight
  - Added centered heading spotlight
  - Added grid overlay
  - Testimonial cards: `bg-white/[0.05] border-white/[0.12]` + `hover:shadow-cyan-500/10`

---

### `components/sections/Projects.tsx`
- [x] **DONE**
  - Glow orbs: 500px, `/12` opacity, cyan spotlight
  - Added centered heading spotlight (`w-[700px] h-64 bg-cyan-500/8`)
  - Added grid overlay at `opacity-[0.025]`
  - Project cards: `bg-white/[0.05] border-white/[0.12]`
  - Hover: `hover:shadow-xl hover:shadow-cyan-500/15` (bumped from /10)

---

### `components/sections/Contact.tsx`
- [x] **DONE**
  - Glow orbs: 500px, `/12` opacity, cyan spotlight
  - Added centered heading spotlight
  - Added grid overlay
  - Form card: `bg-white/[0.05] border-white/[0.12]`
  - Contact info icon boxes: already at `bg-cyan-500/10 border-cyan-500/20` — preserved

---

### `components/sections/About.tsx`
- [x] **DONE — Pass 1** (re-enhancement recipe applied)
- [x] **DONE — Pass 2** (Card-First Glow Design Pass · 2026-05-29)

#### What changed in Pass 2:
**Problem:** Ambient orbs were too close and too large — they created a flat cyan haze washing over
all cards, making borders and card surfaces invisible.

**Fix — Card-First Glow Philosophy:**
- Ambient orbs pushed far to corners: `w-[550px] blur-[100px]` at `-top/bottom-32 -left/right-32`
- Grid overlay quieted: `opacity-[0.02]` (was `/0.025`)
- Spotlight tightened: `w-[480px] h-52 /[0.08]`

**Card upgrades:**
- Trait cards: each has a **static per-accent class** with `hover:border-${accent}-500/30 hover:shadow-lg hover:shadow-${accent}-500/15` + radial top-right corner glow (`bg-cyan/blue/indigo-500/[0.07]`) that fades in on hover
- Stats cards: per-stat color shadow (e.g. `hover:shadow-indigo-500/25`) + top-edge accent gradient line on hover
- Timeline cards: `hover:shadow-cyan/indigo-500/15` + radial inner glow on hover
- TrackWise card: `border-indigo-500/[0.20]`, `hover:shadow-indigo-500/20`, expanding inner glow
- Education card: `hover:shadow-cyan-500/12` + icon border brightens on hover
- CTA banner: expanding corner glow on hover
- Profile badge: `border-emerald-500/30 shadow-emerald-500/15` — stronger

**Bug Fixed:**
- Dynamic Tailwind class bug: `hover:border-${t.accent}-500/35` → fully static class strings per card
  (Tailwind purges dynamic/interpolated class names — they never compiled)

**Text contrast upgrades:**
- `text-gray-500` body labels → `text-gray-400` (contrast ratio: ~3.3:1 → ~5.5:1 ✅)
- `text-gray-600` in education italic → `text-gray-500`

---

### `components/sections/Certifications.tsx`
- [x] **DONE**
  - Glow orbs: boosted from `/6` → `/12`, sized from `w-96` → `w-[500px]`
  - Added centered heading spotlight
  - Added grid overlay
  - CertificateCard base: `bg-white/[0.05] border-white/[0.12]`
  - LeetCode badge cards: orange hover glow preserved (`hover:shadow-orange-500/15`)

---

## ✅ ALL SECTIONS COMPLETE

---

## What Was Fixed in Previous Session (design_review.md)

| Fix | Status |
|---|---|
| Testimonials full restyle — was light mode | ✅ Fixed |
| All `bg-gray-800` → `bg-[#0a0f1a]` / `bg-[#080d18]` | ✅ Fixed |
| Section heading pattern standardized | ✅ Fixed |
| Experience template literal bug (dot positioning) | ✅ Fixed |
| Skills pill style aligned with About coreStack | ✅ Fixed |
| Contact icon sizes reduced | ✅ Fixed |
| Ambient glow orbs added to all sections | ✅ Added (but at 6% — boosted to 12% in this pass) |

---

## Design System Reference

```
Dark backgrounds:  #0a0f1a (primary), #080d18 (alternate)
Accent colors:     cyan-400 (#22d3ee), blue-500 (#3b82f6), indigo-500 (#6366f1)

Card bg:           bg-white/[0.04]  (was /0.05 — kept subtle)
Card border:       border-white/[0.10]
Card hover:        hover:border-${accent}/30 hover:bg-${accent}/[0.05] hover:shadow-lg hover:shadow-${accent}/15
                   ⚠ All Tailwind hover classes must be FULLY STATIC strings (no template interpolation)

Inner card glow:   absolute top-0 right-0, w-20-28 h-20-28, blur-2xl, opacity-0 group-hover:opacity-100
Top-edge line:     absolute top-0 left-4 right-4 h-px bg-gradient (shows on hover)

Glow orbs:         w-[550px] h-[550px], bg-cyan-500/[0.08] or bg-indigo-600/[0.07], blur-[100px]
                   Positioned at -top-32 -left/right-32 (far corners — do NOT overlap cards)
Grid overlay:      opacity-[0.02], 60px grid, rgba(6,182,212) cyan lines
Spotlight:         w-[480px] h-52, bg-cyan-400/[0.08], blur-3xl, absolute top-0 centered

Section padding:   py-16 sm:py-24 lg:py-28 (via SectionWrapper)
Font families:     font-display (Plus Jakarta Sans), font-body (Inter), font-mono (Fira Code)

Text contrast (WCAG AA requires 4.5:1 for normal text):
  text-white       → ~18:1 ✅
  text-gray-300    → ~9:1  ✅
  text-gray-400    → ~5.5:1 ✅  ← minimum for body copy
  text-gray-500    → ~3.3:1 ❌  ← use ONLY for decorative/secondary labels
  text-gray-600    → ~2.2:1 ❌  ← avoid entirely on dark bg
```

---

## Remaining Opportunities (fully completed & verified! 🎉)

- [x] **About**: floating profile image badge glow — **DONE** (emerald shadow added)
- [x] **Projects**: "featured" cards have a subtle, premium `from-cyan-500/[0.04]` gradient bg — **DONE**
- [x] **Achievements**: LeetCode "240+" and HackerRank "50+" counters animate dynamically as scroll-triggered count-up counters — **DONE**
- [x] **globals.css**: global `* { transition }` rule removed to eliminate Framer Motion conflicts & scroll animation lag — **DONE**
- [x] **globals.css**: duplicate `::-webkit-scrollbar-thumb:hover` rule cleaned up — **DONE**
- [x] **Accessibility Contrast Pass**: Upgraded low-contrast body subtitles, timeline period tags, metadata fields, and interactive links across all sections from `text-gray-500` / `text-gray-600` / `text-gray-700` to high-contrast, WCAG AA compliant `text-gray-400` / `text-gray-300` (>4.5:1 ratio) — **DONE**
- [x] **Hero**: already perfect — preserved untouched
- [x] **Font Size Standardization Pass**: Eliminated all vague/squished custom micro-fonts (e.g. `text-[10px]` and `text-[11px]`) across timeline period tags, metadata fields, verified indicators, and certificates, upgrading them to highly legible and standard utility classes (`text-xs` / `text-sm`) — **DONE**


