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
        bg: {
          DEFAULT: "#0F0E0C",
          2: "#161513",
          3: "#1C1A17",
        },
        surface: "#1C1A17",
        card: "#141311",
        accent: {
          DEFAULT: "#C4553D",
          2: "#5E6B52",
          3: "#2C3E50",
        },
        muted: "#7D7872",
        ink: "#E8E4DD",
        border: "rgba(232, 228, 221, 0.1)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        serif: ["var(--font-instrument-serif)", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "slide-up": "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "load-bar": "loadBar 2.5s cubic-bezier(0.4,0,0.2,1) forwards",
        "scroll-pulse": "scrollPulse 2.5s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" },
        },
        loadBar: {
          "0%": { width: "0%" },
          "60%": { width: "75%" },
          "100%": { width: "100%" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
