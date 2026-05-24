import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          50: "#EDEFF5",
          100: "#D1D7E4",
          200: "#A2AFC9",
          300: "#7387AE",
          400: "#445F93",
          500: "#1B2A4A",
          600: "#16223C",
          700: "#11192D",
          800: "#0B111E",
          900: "#06080F",
        },
        cream: {
          DEFAULT: "#F5EBD8",
          light: "#FBF6EC",
          dark: "#E9DCC2",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#D4B05A",
          dark: "#B8923D",
          50: "#FAF4E5",
          100: "#F2E4BD",
          200: "#E5C97A",
          300: "#D4B05A",
          400: "#C9A24B",
          500: "#B8923D",
          600: "#967530",
          700: "#735923",
        },
        charcoal: "#13203B",
        muted: "#8A8F9C",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.2em" }],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #D4B05A 0%, #C9A24B 45%, #B8923D 100%)",
        "gold-shine":
          "linear-gradient(135deg, #E5C97A 0%, #D4B05A 25%, #C9A24B 50%, #B8923D 75%, #967530 100%)",
        "navy-fade":
          "linear-gradient(180deg, rgba(27,42,74,0) 0%, rgba(27,42,74,0.85) 60%, rgba(27,42,74,0.95) 100%)",
        "cream-fade":
          "linear-gradient(180deg, #FBF6EC 0%, #F5EBD8 100%)",
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(201,162,75,0.45)",
        editorial: "0 30px 60px -20px rgba(19,32,59,0.25)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
