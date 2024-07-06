/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      screens: {
        'md': '741px',
      },
      colors: {
        'primary': '#f2ff33',
        'background': '#282828',
        'accent': '#f3ff34',
      },
      fontFamily: {
        'sans': ['Zurich', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

