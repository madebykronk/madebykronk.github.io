import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          glow: "rgb(var(--accent-glow) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgb(var(--surface) / 0.92), rgb(var(--surface) / 1)), radial-gradient(circle at 1px 1px, rgb(var(--ink-muted) / 0.12) 1px, transparent 0)",
      },
      backgroundSize: {
        grid: "24px 24px",
      },
      boxShadow: {
        soft: "0 24px 80px -32px rgb(var(--accent) / 0.35)",
      },
    },
  },
  plugins: [],
} satisfies Config;
