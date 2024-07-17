/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7F7F7",
        primaryText: "#323643",
        secondaryText: "#606470",
        links: "#93DEFF"
      }
    },
  },
  plugins: [],
}