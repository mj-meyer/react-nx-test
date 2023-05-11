module.exports = {
  // since we already have our own resets for both app and view, we don't use the tailwind preflight reset
  corePlugins: {
    preflight: false,
  },

  // we also enable !important, because we often need to override materials base css, and without it, we will have to add ! to every statement anyways
  important: true,
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
