/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        darkgreen: '#275025',
        lightgreen: '#779035',
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
