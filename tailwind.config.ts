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
        // primary: "#A8375B",
        primary: "#948369",
        // background: "#3F1E26",
        background: "#948369",
        // dark: "#171314",
        dark: "#6E3927",
        // hover: "#B6345E",
        hover: "#6E3927",
        // client: "#FF5675",
        client: "#605C3F",
        // partner: "#FF1B44",
        partner: "#35321D",
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
