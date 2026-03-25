/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fe-orange': '#fc9401',
        'fe-green': '#0a7c03',
        'fe-blue': '#00b0f0',
      }
    },
  },
  plugins: [],
}
