/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryHijau': '#3dd909',
        'secondaryKuning': '#b5d714',
        'krem': '#f5d44f',
        'hijauGelap': '#44852f'
      },
    },
  },
  plugins: [],
}