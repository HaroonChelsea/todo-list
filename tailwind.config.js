module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ["responsive", "hover", "focus"],
      outline: ["responsive", "focus"],
    },
  },
  plugins: [],
};
