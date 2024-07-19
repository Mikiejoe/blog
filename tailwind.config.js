/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EEEEEE",
        primaryText: "#201E43",
        secondaryText: "#134B70",
        links: "#99ddcf"
      }
    },
  },
  plugins: [],
}