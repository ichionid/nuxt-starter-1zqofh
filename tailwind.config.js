/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontSize: {
      p: '0.9375rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      flexBasis: {
        '1/8': '12.5%',
        '7/8': '87.5%',
      },
    },
    colors: {
      primary: '#14143c',
      white: '#FFF',
      lightgray: '#e9ecef',
      darkgray: '#72728a',
    },
  },
  plugins: [],
};
