/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Display / heading — Plus Jakarta Sans (loaded via next/font)
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        // Body copy — Inter
        body: ["var(--font-body)", "Inter", "sans-serif"],
        // Monospace — Fira Code
        mono: ["var(--font-mono)", "Fira Code", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.04em",
        tight: "-0.025em",
      },
    },
  },
  plugins: [],
};
