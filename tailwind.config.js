/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        n1: '#222224',
        n2: '#111111',
        p1: '#34FF82',
      },
      fontFamily: {
        poppinsRegular: 'poppinsregular, sans-serif',
        poppinsSemibold: 'poppinssemibold, sans-serif',
        poppinsBold: 'poppinsbold,sans-serif',
      },
    },
  },
  plugins: [],
};
