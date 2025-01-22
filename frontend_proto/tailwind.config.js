/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'timetable': 'auto repeat(8, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}