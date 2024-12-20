/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      "noto": ["Noto Sans KR", "system-ui", "serif"]
    },
    extend: {},
  },
  plugins: [],
}