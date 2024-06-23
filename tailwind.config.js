/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
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
