/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
      },
      screens: {
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
