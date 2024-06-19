/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          400: '#5694F2',
        },
        amber: {
          400: '#FEC347',
        },
        teal: {
          400: '#53C2C5',
        },
        rose: {
          400: '#F26E56',
        },
      },
    },
  },
  plugins: [],
}
