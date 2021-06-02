const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 3s linear infinite",
      },
      width: {
        112: "30rem",
      },
      borderWidth: {
        3: "3px",
      },
    },
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
      black: "#121212",
      dark_mode_white: "#eee",
      transparent: "transparent",
      tree: {
        hard: "#171E25",
        soft: "#1B252D",
        low: "#2D353B",
        border: "#4c5b67",
        // hard: "#161717",
        // soft: "#242626",
        // border: "#474A4D",
      },
    },
    fontFamily: {
      fredericka: ['"Fredericka the Great"', "cursive", "sans-serif"],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
