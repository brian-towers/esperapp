/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: colors.orange,
      gray: colors.gray,
      'white': '#ffffff',
      'sage': '#C9CBA3',
      'peach': '#FFE1A8',
      'bitter': '#E26D5C',
      'wine': '#723D46',
      'dyke': '#472D30'
    },
  },
  plugins: ['@tailwindcss/forms'],
}