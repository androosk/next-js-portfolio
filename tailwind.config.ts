import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ribbon: "/public/images/redblueribbon.png",
      },
      fontFamily: {
        sans: ["Verdana", "Geneva", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
