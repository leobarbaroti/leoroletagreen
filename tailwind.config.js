/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roulette-green': '#00FF00', // Cor verde brilhante da roleta
      }
    },
  },
  plugins: [],
}
