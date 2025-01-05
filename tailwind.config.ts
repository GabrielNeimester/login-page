import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fadeInDown: 'fadeInDown 1s ease-in forwards',
        fadeInUp: 'fadeInUp 1s ease-in forwards',
      },
      keyframes: {
        fadeInDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#7A5656",
            foreground: "#F9F9F9",
          },
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#7A5656",
            foreground: "#060606",
          },
          background: "#060606"
        },
      },
    },
  }),]
} satisfies Config;
