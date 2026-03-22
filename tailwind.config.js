/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        surface: "var(--surface)",
        accent: "var(--accent)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        unbounded: ["Unbounded", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
      }
    },
  },
  plugins: [],
}
