module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        headerAnim: "headerAnim",
      },
      keyframes: {
        headerAnim: {
          "0%": { backgroundColor: "transparent" },
          "10%": { backgroundColor: "white" },
          "100%": { backgroundColor: "white" },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
