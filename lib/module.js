const { resolve, join } = require('path')
const pkg = require('../package.json')
const templates = require('./module/templates.json')
const { addBundleRendererDirective } = require('./module/bundleRenderer')
const { registerSpeedkit, autoImportComponents, injectFontHTML } = require('./module/hookFunctions')
const { prepareFontConfig } = require('./utils/fontTools')

function getDefaultOptions () {
  return {
    fonts: [],
    componentAutoImport: false,
    componentPrefix: null
  }
}

module.exports = function (moduleOptions) {
  const options = Object.assign(getDefaultOptions(), {
    ...this.options[pkg.name],
    ...moduleOptions
  })

  this.nuxt.hook('webpack:config', registerSpeedkit(resolve(this.nuxt.options.buildDir, pkg.name, 'speedkit.js')))
  this.nuxt.hook('components:dirs', autoImportComponents(join(__dirname, 'components'), options))
  this.nuxt.hook('vue-renderer:ssr:templateParams', injectFontHTML(options))

  templates.map((template) => {
    return this.addTemplate({
      src: resolve(__dirname, template),
      fileName: join(pkg.name, template),
      options: { }
    })
  })

  addBundleRendererDirective(this.options.render.bundleRenderer, options)

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: pkg.name + '/plugin.js',
    options: { fonts: prepareFontConfig(options.fonts, this.nuxt.options.alias) }
  })
}

module.exports.meta = pkg

/*

Nuxt Speedkit takes over the Lighthouse performance optimization of your generated website.
All used components and resources are loaded on demand based on the viewport.

Features:
- automatic preloading critical font resources
- dynamic viewport based loading of font resources (subselectors, media queries)
- dynamic loading of images based on bandwidth

Result:
- delivery of the minimum required resources based on the current viewport

*/
