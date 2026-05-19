/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f0',
          100: '#ccefe1',
          200: '#99dfc3',
          300: '#66cfa5',
          400: '#33bf87',
          500: '#00af69',
          600: '#008c54',
          700: '#00693f',
          800: '#00462a',
          900: '#002315',
        },
        secondary: {
          50: '#e8f0fe',
          100: '#d1e2fd',
          200: '#a3c5fb',
          300: '#75a8f9',
          400: '#478bf7',
          500: '#196ef5',
          600: '#1458c4',
          700: '#0f4293',
          800: '#0a2c62',
          900: '#051631',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}