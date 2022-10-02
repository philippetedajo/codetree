module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "active"],
      scale: ["active"],
    },
  },
  plugins: [],
};
