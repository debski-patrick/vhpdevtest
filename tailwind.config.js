/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F08100',
        secondary: '#1FB7BA',
      },
    },
    screens: {
      xs: '0px',
      // => @media (min-width: 0px) { ... }

      sm: '600px',
      // => @media (min-width: 600px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1264px',
      // => @media (min-width: 1264px) { ... }

      xl: '1904px',
      // => @media (min-width: 1904px) { ... }
    },
  },
  prefix: 'tw-',
};
