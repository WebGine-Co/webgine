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
      },
      animation: {
        contactAppear: '1s contactAppear ease-in-out',
        heroAppear: '1.5s appearTranslate ease-in-out',
        backgroundAppear: '1.5s appearOpacity ease-in-out',
      },
      keyframes: {
        contactAppear: {
          "0%": {
            transform: "translateY(10%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        appearTranslate: {
          "0%": {
            transform: "translateY(25%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        appearOpacity: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cupcake", "dark", "night"],
  },
};
export default config;
