module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        random:
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('https://api.dogeow.com/random')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
