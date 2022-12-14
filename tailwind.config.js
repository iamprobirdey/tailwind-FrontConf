/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['Fira Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
