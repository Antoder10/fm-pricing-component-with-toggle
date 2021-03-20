module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'very-light-grayish-blue': '#F6F6FE',
        'light-grayish-blue': '#B3B5C6',
        'grayish-blue': '#6D708D',
        'dark-grayish-blue': '#494C5F'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
