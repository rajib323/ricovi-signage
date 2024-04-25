/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        inputBox:"#E8E8E8",
        primaryOrangeAccent:"#FC0F0F"
      },
      textColor:{
        secondaryColor:"#D9D9D9"
      }
    },
  },
  plugins: [],
}