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
        font (vnode, binding) {
          vnode.data.staticClass = (vnode.data.staticClass + ' ' + binding.value.class).trim()
          if (vnode.context.$options.$critical) {
            vnode.data.staticClass = (vnode.data.staticClass + ' font').trim()
          }
          vnode.data.style = Object.assign(vnode.data.style || {}, binding.value.style)
        }
      }
    }
  },

  modules: [
    { handler: require('../') }
  ]
}
