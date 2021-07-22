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
          light: '#e4d7bb',
          dark: '#02232a'
        },
        footer: {
          light: '#4c8785',
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
