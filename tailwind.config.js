const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
