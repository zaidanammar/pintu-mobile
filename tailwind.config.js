/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './navigations/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#979797',
        neutral: '#f1f1f1',
        softBlue: '#DBE9FE',
        hardBlue: '#0A50E2',
      },
    },
    plugins: [],
  },
}
