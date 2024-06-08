/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        seymour:["SeymourOne", 'Seymour One'],
        secular:["SecularOne", 'Secular One'],
        haken:["HankenGrotesk", 'HankenGrotesk']
      }
    },
  },
  plugins: [],
}