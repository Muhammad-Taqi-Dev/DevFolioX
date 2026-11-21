/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Warm-dark "engineering notebook" palette. One accent, used sparingly.
      colors: {
        canvas: "#0F0F0E", // page background (not "base": clashes with text-base)
        surface: {
          DEFAULT: "#161614", // cards
          raised: "#1C1C19", // hover / inputs
        },
        line: {
          DEFAULT: "#2A2925", // 1px borders, dividers
          strong: "#3D3B35", // hover borders
        },
        ink: {
          DEFAULT: "#ECEAE3", // headings, primary text
          soft: "#C9C6BC", // body copy
          muted: "#97948A", // metadata, captions
          faint: "#6E6B63", // decorative only (fails AA for body text)
        },
        accent: {
          DEFAULT: "#E2A85A", // links, markers, primary button
          hover: "#EDBB76",
        },
      },
      fontFamily: {
        // Name / large headings: serif for a hand-picked, editorial feel
        serif: ["var(--font-serif)", "Georgia", "serif"],
        // Section headings: Plus Jakarta Sans
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        // Body copy: Inter
        body: ["var(--font-body)", "Inter", "sans-serif"],
        // Metadata, dates, stack: Fira Code
        mono: ["var(--font-mono)", "Fira Code", "ui-monospace", "monospace"],
      },
      // CSS-only entrance (runs before JS; reduced-motion override in globals.css)
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.5s ease-out both",
      },
      maxWidth: {
        page: "68rem", // ~1224px at 18px root
        prose: "40rem", // ~720px reading width
      },
    },
  },
  plugins: [],
};
