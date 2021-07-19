module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-inline-svg': { paths: ['./images'] },
    'postcss-svgo': {},
    'tailwindcss/nesting': {},
    'tailwindcss/jit': {},
    'tailwindcss': {},
    'autoprefixer': {}
  }
}
