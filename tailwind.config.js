/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        din: ["D-DIN-PRO", "sans-serif"],
      },
    },
  },
  plugins: [],
};
