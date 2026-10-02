import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          blue: "#1E4FFF",
          "blue-hover": "#173ecc",
          "blue-dark": "#0B1D4F",
          "blue-light": "#EFF4FF",
          lime: "#D2F829",
          "lime-hover": "#C0E61A",
          "lime-light": "#F7FEE7",
          dark: "#0F172A",
          navy: "#0A1128",
          slate: "#334155",
          muted: "#64748B",
          card: "#FFFFFF",
          surface: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 20px 40px -10px rgba(0, 0, 0, 0.12)",
        glow: "0 0 25px rgba(210, 248, 41, 0.4)",
        "blue-glow": "0 10px 35px -5px rgba(30, 79, 255, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
