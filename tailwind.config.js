/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('../src/assets/hulu.png')",
      },
      screens:{
        'big':'2560px',
        'kobus': '2012px',
        'pc' : '1740px'
      }
    },
  },
  plugins: [],
}