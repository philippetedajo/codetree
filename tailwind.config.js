const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // default
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      white: colors.white,
      black: "black",
      tree: {
        hard: "#171E25",
        soft: "#1B252D",
        border: "#4c5b67",
        // hard: "#161717",
        // soft: "#242626",
        // border: "#474A4D",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
