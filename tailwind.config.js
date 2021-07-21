module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: [
   './index.html',
   './scripts/**/*.js',
   './styles/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        line: {
          light: '#f7f6f0',
          dark: '#032326',
        },
        fill: {
          light: '#deeae7',
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
