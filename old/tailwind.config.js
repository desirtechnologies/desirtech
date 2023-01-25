/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        'mono': ['VT323', "monospace"]
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwindcss-textshadow')

  ],
}