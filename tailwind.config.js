/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "992px",
      xl: "1000px",
      "2xl":"1400px"
    },
    extend: {
      backgroundColor: {
        inputBox: "#E8E8E8",
        primaryBackground: "#f8f8f8",
      },
      colors: {
        primaryOrangeAccent: "#FC0F0F"
      },
      textColor: {
        secondaryColor: "#D9D9D9"
      }
    },
  },
  plugins: [],
}