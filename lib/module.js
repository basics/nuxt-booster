const { resolve, join } = require('path')
const glob = require('glob')
const consola = require('consola')
const Alias = require('require-alias')
let pkg
try {
  pkg = require('./package.json')
} catch (error) {
  pkg = require('../package.json')
}
const { addBundleRendererDirective } = require('./module/bundleRenderer')
const { registerAppEntry, autoImportComponents, injectNormalizeStyle, preloadOptimization } = require('./module/hookFunctions')
const ContentProxy = require('./webpack/ContentProxy')
const { default: FontList } = require('./classes/FontList')

function getDefaultOptions () {
  return {
    ignorePerformance: false,
    performance: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      // TODO: check right numbers
      timing: {
        fcp: 800,
        dcl: 1200 // fallback if fcp is not available (safari)
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
    }
  }
}

function setEnvironments (nuxt, options) {
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT = options.lazyOffset.component
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_ASSET = options.lazyOffset.asset
}

module.exports = async function (moduleOptions) {
  const options = Object.assign(getDefaultOptions(), {
    ...this.options[pkg.name],
    ...moduleOptions
  })

  global.alias = new Alias({
    root: '/',
    aliases: this.nuxt.options.alias
  })

  // Add package to build transpile
  this.nuxt.options.build.transpile.push(pkg.name)
  this.nuxt.options.build.plugins.push(new ContentProxy())

  setEnvironments(this.nuxt, options)

  if (!options.ignorePerformance && (this.nuxt.options.ssr || this.nuxt.options.ssr === undefined)) {
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
  //   console.log(context)
  //   const test = context.meta.inject
  //   context.meta.inject = function () { Object.assign(this, test()) }
  // //   console.log(context._registeredComponents)
  // //   ['clientManifest', 'modernManifest'].filter(value => this.nuxt.renderer.resources[value]).forEach((key) => {
  // //     const assetsMapping = this.nuxt.renderer.resources[key].assetsMapping
  // //     if (assetsMapping) {
  // //       for (const key in assetsMapping) {
  // //         if (assetsMapping[key].length > 1) {
  // //           delete assetsMapping[key]
  // //         }
  // //       }
  // //     }
  // //   })
  // })

  // TODO: remove those 2 lines
  this.nuxt.hook('vue-renderer:ssr:templateParams', injectNormalizeStyle())

  addBundleRendererDirective(this.options.render.bundleRenderer, options)

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: pkg.name + '/plugin.js',
    options: { fonts: getFontConfig(options.fonts, this.nuxt.options.alias) }
  })
  this.addTemplate({
    src: resolve(__dirname, 'entry.js'),
    fileName: pkg.name + '/entry.js',
    options: { ignorePerformance: options.ignorePerformance, performance: JSON.stringify(options.performance || {}) }
  })
  this.addTemplate({
    src: resolve(__dirname, 'css/fonts.css'),
    fileName: pkg.name + '/fonts.css',
    options: { content: (new FontList(options.fonts)).getFontCSS() }
  })

  // create alias for component import "nuxt-speedkit-components"
  const componentsDir = join(this.nuxt.options.buildDir, pkg.name, 'components')
  this.nuxt.options.alias[`${pkg.name}-components`] = componentsDir

  // @nuxt/components
  options.componentAutoImport && this.nuxt.hook('components:dirs', autoImportComponents(componentsDir, options.componentPrefix))

  const libComponentsDir = join(__dirname, 'components')
  const components = await getComponentFiles(libComponentsDir)
  components.forEach((file) => {
    this.addTemplate({
      src: join(libComponentsDir, file),
      fileName: `${pkg.name}/components/${file}`,
      options: {
        ignorePerformance: options.ignorePerformance
      }
    })
  })
}

function getComponentFiles (cwd) {
  return new Promise(resolve => glob('**/*.vue', {
    cwd
  }, (err, files) => {
    if (err) {
      throw err
    }
    resolve(files)
  }))
}

module.exports.meta = pkg

function getFontConfig (fonts, aliasObj) {
  return JSON.stringify(fonts.map((font) => {
    font = Object.assign({}, font)
    font.variances = font.variances.map((variance) => {
      variance = Object.assign({}, variance)
      if (Object.keys(aliasObj).find(alias => variance.src.startsWith(alias))) {
        variance.src = `require("${variance.src}")`
      }
      return variance
    })
    return font
  })).replace(/"require\(\\"([^)]+)\\"\)"/g, 'require("$1")')
}
