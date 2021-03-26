const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
      //custom
      editorprimary: "#171E25",
      editorsecondary: "#1B252D",
      editorborder: "#131419",
      editorthird: "#4C5B67",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
