module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {
      colors:{
        main: "#1098F7",
        orange: "#FA7921",
        deepblue: "#202C59",
        wine: "#581F18"
      }
     },
   },
   plugins: [],
 }