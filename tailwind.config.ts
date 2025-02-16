
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F5DEB3",
          foreground: "#1E293B",
          gold: "#F5DEB3",
          "gold-light": "#FFF8DC",
          "gold-dark": "#DAA520",
        },
        secondary: {
          DEFAULT: "#FFF8DC",
          foreground: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollReveal: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollHide: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        }
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        scrollReveal: "scrollReveal 0.6s ease-out forwards",
        scrollHide: "scrollHide 0.6s ease-out forwards"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
