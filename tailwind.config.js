/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif']

      },
      grayscale: {
        50: '50%',
      },
      keyframes: {
        wave: {
          '0%': { left: '-20px' },
          '10%': { left: '-10px' },
          '20%': { left: '0px' },
          '40%': { left: '10px' },
          '80%': { left: '20px' },
          '100%': { transform: '30px' },
        },
      },
      animation: {
        'waving': 'wave 2s linear 2s',
      },

    },
  },
  plugins: [],
}
