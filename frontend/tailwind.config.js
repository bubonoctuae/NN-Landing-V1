/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0B0D",
          900: "#141416",
          800: "#2B2925",
        },
        gold: {
          DEFAULT: "#C8A66A",
          light: "#E6D7A6",
          dark: "#8a7048",
        },
      },
      fontFamily: {
        display: ["'UnifrakturCook'", "serif"],
        body: ["'Cinzel'", "serif"],
      },
    },
  },
  plugins: [],
};
