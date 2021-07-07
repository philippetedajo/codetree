const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
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
      transparent: "transparent",
      tree: {
        hard: "#171E25",
        soft: "#1B252D",
        low: "#2D353B",
        border: "#4c5b67",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "active"],
      scale: ["active"],
    },
  },
  plugins: [],
};
