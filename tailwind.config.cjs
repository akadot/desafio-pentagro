/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        main: '#009A9B',
        darker: '#075A5A',
        light: '#fff',
      },
      backgroundImage: {
        'grass-img':
          "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('./src/assets/grass-bg.jpg')",
        'grass-mobile':
          "linear-gradient(180deg, rgba(0, 154, 155, 0.5) 0%, rgba(7, 90, 90, 0.5) 100%), url('./src/assets/grass-bg.jpg');",
      },
      boxShadow: {
        custom: '0px 0px 24px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
