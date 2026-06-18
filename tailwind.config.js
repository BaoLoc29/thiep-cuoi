/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amsterdam: ["SVN-Amstirdam", "sans-serif"],
      },
    },
  },
  plugins: [],
}