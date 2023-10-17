import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components-partner/**/*.{js,ts,jsx,tsx,mdx}",
    "./components-client/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A8375B",
        background: "#3F1E26",
        dark: "#171314",
        hover: "#B6345E",
        client: "#FF5675",
        partner: "#FF1B44",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
export default config;
