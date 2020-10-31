const { resolve, join } = require('path')
let pkg
try {
  pkg = require('./package.json')
} catch (error) {
  pkg = require('../package.json')
}
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

  // Add package to build transpile
  this.nuxt.options.build.transpile.push(pkg.name)

  this.nuxt.hook('webpack:config', registerSpeedkit(resolve(this.nuxt.options.buildDir, pkg.name, 'speedkit.js')))
  this.nuxt.hook('render:resourcesLoaded', (resources) => {
    ['clientManifest', 'modernManifest'].filter(value => resources[value]).forEach((key) => {
      const assetsMapping = resources[key].assetsMapping
      for (const key in assetsMapping) {
        if (assetsMapping[key].length > 1) {
          delete assetsMapping[key]
        }
      }
    })
  })
  this.nuxt.hook('vue-renderer:ssr:context', (context) => {
    // console.log(context._registeredComponents)
    // ['clientManifest', 'modernManifest'].filter(value => this.nuxt.renderer.resources[value]).forEach((key) => {
    //   const assetsMapping = this.nuxt.renderer.resources[key].assetsMapping
    //   if (assetsMapping) {
    //     for (const key in assetsMapping) {
    //       if (assetsMapping[key].length > 1) {
    //         delete assetsMapping[key]
    //       }
    //     }
    //   }
    // })
  })
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
