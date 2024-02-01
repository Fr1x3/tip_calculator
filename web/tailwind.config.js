/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cian: {
          100:'hsl(189, 41%, 97%)',
          200:'hsl(185, 41%, 84%)',
          300:'hsl(172, 67%, 45%)',
          400:'hsl(184, 14%, 56%)',
          500:'hsl(186, 14%, 43%)',
          600:'hsl(183, 100%, 15%)'
        }
      }
    },
  },
  plugins: [],
}

