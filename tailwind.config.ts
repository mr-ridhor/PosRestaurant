import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-50": "#828487",
        "secondary": "#FF5C00",
        "dark":"#19191C",
        "gray":"#E4E4E4",
        "light-gray":"#F8F9FD",
        "light-sec":"#FFF5EE",
        "green":"#35C335",
        "light-green":"#EEFFEE"
      },
    },
  },
  plugins: [],
};
export default config;
