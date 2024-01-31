import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      yellow: {
        500: "#FFC107",
      },
      gray: {
        200: "#D0D0D0",
        400: "#8F8F8F",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      MontserratAlt: ["Montserrat Alternatives", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
