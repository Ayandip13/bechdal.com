/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d4ed8", // Blue 700
          light: "#3b82f6",
          dark: "#1e40af",
        },
        secondary: {
          DEFAULT: "#eab308", // Yellow 500
          light: "#fde047",
          dark: "#ca8a04",
        },
        background: "var(--bg-main, #f8fafc)",
        card: {
          DEFAULT: "var(--bg-card, #ffffff)",
          hover: "var(--bg-card-hover, #f1f5f9)",
        },
        header: "var(--bg-header, #ffffff)",
        section: "var(--bg-section, #ffffff)",
        input: "var(--bg-input, #ffffff)",
        text: {
          DEFAULT: "var(--text-main, #0f172a)",
          muted: "var(--text-muted, #64748b)",
          light: "var(--text-light, #94a3b8)",
        },
        border: "var(--border-color, #e2e8f0)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        subtle: "var(--shadow-subtle, 0 4px 20px -2px rgba(0, 0, 0, 0.05))",
        card: "var(--shadow-card, 0 2px 10px -2px rgba(0, 0, 0, 0.05))",
      },
    },
  },
  plugins: [],
};

