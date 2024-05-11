/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.green,
      secondary: colors.blue,
      textColor: "#ADB7BE",
      borderColor: "#33353F",
      projectOverlayColor: "#181818",
      inputFieldColor: "#18191E",
      placeHolderColor: "#9CA2A9",
      navBarColor: "#121212",

      light: {
        textColor: colors.gray[800],
        borderColor: colors.gray[300],
        projectOverlayColor: colors.white,
        inputFieldColor: colors.white,
        placeHolderColor: colors.gray[500],
        navBarColor: colors.white,
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
