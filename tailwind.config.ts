import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        skyPrimary: "#38BDF8",
        midBlue: "#3B82F6",
        mint: "#34D399"
      },
      boxShadow: {
        soft: "0 12px 40px -18px rgba(59, 130, 246, 0.45)"
      },
      borderRadius: {
        glass: "20px"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(140deg, rgba(56,189,248,0.16), rgba(59,130,246,0.18), rgba(52,211,153,0.16))",
        "page-gradient":
          "linear-gradient(180deg, rgba(240,249,255,1) 0%, rgba(224,242,254,1) 42%, rgba(239,246,255,1) 100%)",
        "page-gradient-dark":
          "linear-gradient(180deg, rgb(7, 18, 44) 0%, rgb(14, 26, 59) 45%, rgb(9, 20, 49) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
