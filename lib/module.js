const { resolve, join } = require('path')
const pkg = require('../package.json')
const templates = require('./module/templates.json')
const { addBundleRendererDirective } = require('./module/bundleRenderer')
const { registerSpeedkit, autoImportComponents, injectFontHTML, injectNormalizeStyle } = require('./module/hookFunctions')
const { default: ImageList } = require('./classes/ImageList')

function getDefaultOptions () {
  return {
    fonts: [],
    images: new ImageList(), // override from context
    componentAutoImport: false,
    componentPrefix: null
  }
}

module.exports = function (moduleOptions) {
  const options = Object.assign(getDefaultOptions(), {
    ...this.options[pkg.name],
    ...moduleOptions
  })

  this.nuxt.options.alias[pkg.name] = __dirname

  this.nuxt.hook('webpack:config', registerSpeedkit(resolve(this.nuxt.options.buildDir, pkg.name, 'speedkit.js')))
  this.nuxt.hook('vue-renderer:ssr:templateParams', injectNormalizeStyle())
  this.nuxt.hook('vue-renderer:ssr:templateParams', injectFontHTML(options))

  // @nuxt/components
  options.componentAutoImport && this.nuxt.hook('components:dirs', autoImportComponents(join(__dirname, 'components'), options.componentPrefix))

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
    options: { fonts: getFontConfig(options.fonts, this.nuxt.options.alias) }
  })
}

module.exports.meta = pkg

function getFontConfig (fonts, aliasObj) {
  return JSON.stringify(fonts.map((font) => {
    font.variance = font.variances.map((variance) => {
      if (Object.keys(aliasObj).find(alias => variance.src.startsWith(alias))) {
        variance.src = `require("${variance.src}")`
      }
      return variance
    })
    return font
  })).replace(/"require\(\\"([^)]+)\\"\)"/g, 'require("$1")')
}

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
