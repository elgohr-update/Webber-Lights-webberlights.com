/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Roboto Slab', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide')

  ],
}
