import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1220",
          light: "#141B2E",
          lighter: "#1C2438",
          950: "#05080F",
        },
        teal: {
          DEFAULT: "var(--brand)",
          dark: "var(--brand-dark)",
          light: "var(--brand-light)",
        },
        emerald: {
          DEFAULT: "var(--brand)",
          dark: "var(--brand-dark)",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px -8px rgba(0,0,0,0.25)",
        "card-dark": "0 8px 30px -8px rgba(0,0,0,0.55)",
        glow: "0 0 40px -8px var(--brand-glow)",
      },
      backgroundImage: {
        "dawi-gradient": "linear-gradient(135deg, var(--brand-dark) 0%, var(--brand) 100%)",
        "dawi-gradient-soft": "linear-gradient(135deg, var(--brand-soft1) 0%, var(--brand-soft2) 100%)",
        "navy-gradient": "linear-gradient(180deg, #0B1220 0%, #05080F 100%)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "toast-in": {
          "0%": { opacity: "0", transform: "translateY(-8px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.3)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "toast-in": "toast-in 0.25s ease-out both",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
