const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: [
   './index.html',
   './scripts/**/*.js',
   './styles/**/*.css'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      teal: colors.teal
    },
    extend: {
      colors: {
        line: {
          light: '#f7f6f0',
          dark: '#032326',
        },
        fill: {
          light: '#EDECE8',
          dark: '#202529'
        },
        footer: {
          light: '#88898A',
          dark: '#383a37'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
