/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'Roboto': ['Roboto', 'sans-serif',],
      },
      backgroundColor:{
        'lightBlue-700': '#4BB4F8'
      },
      textColor:{
        'lightBlue-700': '#4BB4F8',
        'graytext': '#737384',
      },
      screens:{
        'xs': '360px',
      }
    },
  },
  plugins: [],
}

