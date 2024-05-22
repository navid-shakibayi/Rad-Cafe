/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          color1: '#171717',
          color11: '#1a1c1e',
          color2: '#F9004E',
        }
      },

      fontFamily: {
        vazir: ["vazir", "sans-serif"],
      },
    },
  },
  plugins: [],
}

