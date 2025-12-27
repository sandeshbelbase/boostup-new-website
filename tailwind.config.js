/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/app/**/*.{js,ts,jsx,tsx}",       // pages & layout
    "./src/components/**/*.{js,ts,jsx,tsx}" // all components
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1f7e51"
      }
    },
  },
  plugins: [],
}

