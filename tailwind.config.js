/** @type {import('tailwindcss').Config} */
module.exports = {
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
        background: "#f8fafc",
        card: "#ffffff",
        text: {
          DEFAULT: "#0f172a",
          muted: "#64748b",
          light: "#94a3b8",
        },
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 2px 10px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
