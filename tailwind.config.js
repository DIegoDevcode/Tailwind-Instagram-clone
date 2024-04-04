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
        'lightBlue-700': '#0095F6',
      'Facebook-backgroundColor': '#0898F6'
      },
      textColor:{
        'lightBlue-700': '#0095F6',
        'graytext': '#737384',
      },
      screens:{
        'xs': '360px',
        'xxs': '320px',
      }
    },
  },
  plugins: [],
}

