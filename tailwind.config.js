module.exports = {
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
    "node_modules/preline/dist/*.js",
  ],
  plugins: [require("preline/plugin")],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
  },
};
