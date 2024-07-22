/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10039B",
        secondary: "#78ACF1",
        primaryText: "#191717",
        secondaryText: "#7D7C7C",
        links: "#C0FCFD"
      }
    },
  },
  plugins: [],
}