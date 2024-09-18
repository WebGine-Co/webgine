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
      keyframes: {
        appear: {
          "0%": {
            transform: "translateY(25%)",
            opacity: "0",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(0%)",
            opacity: "1",
            animationTimingFunction: "linear",
          },
        },
        appear2: {
          "0%": {
            opacity: "0",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            opacity: "1",
            animationTimingFunction: "linear",
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
