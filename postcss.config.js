const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['*.html'],
  safelist: [/(from|via|to|border|bg|text)-(.*)-(\\d{1}0{1,2})/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss, require('cssnano')]
      : []
  ]
}
