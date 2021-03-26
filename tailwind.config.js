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
      //custom
      editorprimary: "#1e2028",
      editorsecondary: "#161a22",
      editorborder: "#131419",
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
