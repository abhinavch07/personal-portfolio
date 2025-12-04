/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",  // This looks for files in the main folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
