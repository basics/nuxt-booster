const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,

  // mode: 'spa',

  build: {
    postcss: {
      plugins: {
        'postcss-nesting': {},
        lost: {
          gutter: '15px',
          flexbox: 'flex',
          cycle: 'auto'
        }
      }
    }
  },

  render: {
    bundleRenderer: {
      directives: {
        font (el, binding) {
          if (el.context.$options.$critical) {
            el.data.staticClass = el.data.staticClass + ' font'
          }
          el.data.style = Object.assign(el.data.style || {}, binding.value)
        }
      }
    }
  },

  modules: [
    { handler: require('../') }
  ]
}
