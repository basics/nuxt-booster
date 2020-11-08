const { resolve, join } = require('path')
const consola = require('consola')
let pkg
try {
  pkg = require('./package.json')
} catch (error) {
  pkg = require('../package.json')
}
const { addBundleRendererDirective } = require('./module/bundleRenderer')
const { registerAppEntry, autoImportComponents, injectFontHTML, injectNormalizeStyle, preloadOptimization } = require('./module/hookFunctions')
const { default: ImageList } = require('./classes/ImageList')

function getDefaultOptions () {
  return {
    performance: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 500,
        dcl: 800 // fallback if fcp is not available (safari)
      },
      lighthouseDetectionByUserAgent: false
    },
    fonts: [],

    componentAutoImport: false,
    componentPrefix: null,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    },

    images: new ImageList() // don't set, is override from context
  }
}

function setEnvironments (nuxt, options) {
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT = options.lazyOffset.component
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_ASSET = options.lazyOffset.asset
}

module.exports = function (moduleOptions) {
  const options = Object.assign(getDefaultOptions(), {
    ...this.options[pkg.name],
    ...moduleOptions
  })

  // Add package to build transpile
  this.nuxt.options.build.transpile.push(pkg.name)

  setEnvironments(this.nuxt, options)

  if (this.nuxt.options.ssr) {
    this.nuxt.hook('webpack:config', registerAppEntry(resolve(this.nuxt.options.buildDir, pkg.name, 'entry.js')))
  } else {
    consola.warn(pkg.name, 'module functionality is limited without ssr')
  }

  // register hook for preload optimization.
  if (!this.nuxt.options.render.http2.push) {
    this.nuxt.hook('render:resourcesLoaded', preloadOptimization())
  } else {
    consola.warn(pkg.name, 'preload cleaning is disabled by render.http2.push')
  }

  // this.nuxt.hook('vue-renderer:ssr:context', (context) => {
  //   console.log(context._registeredComponents)
  //   ['clientManifest', 'modernManifest'].filter(value => this.nuxt.renderer.resources[value]).forEach((key) => {
  //     const assetsMapping = this.nuxt.renderer.resources[key].assetsMapping
  //     if (assetsMapping) {
  //       for (const key in assetsMapping) {
  //         if (assetsMapping[key].length > 1) {
  //           delete assetsMapping[key]
  //         }
  //       }
  //     }
  //   })
  // })

  this.nuxt.hook('vue-renderer:ssr:templateParams', injectNormalizeStyle())
  this.nuxt.hook('vue-renderer:ssr:templateParams', injectFontHTML(options))

  // @nuxt/components
  options.componentAutoImport && this.nuxt.hook('components:dirs', autoImportComponents(join(__dirname, 'components'), options.componentPrefix))

  addBundleRendererDirective(this.options.render.bundleRenderer, options)

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: pkg.name + '/plugin.js',
    options: { fonts: getFontConfig(options.fonts, this.nuxt.options.alias) }
  })
  this.addTemplate({
    src: resolve(__dirname, 'entry.js'),
    fileName: pkg.name + '/entry.js',
    options: { performance: JSON.stringify(options.performance || {}) }
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
