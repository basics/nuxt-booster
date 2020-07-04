const { resolve, join } = require('path')
const pkg = require('../package.json')
const { isCritical } = require('./utils/vnode')
const { registerFont } = require('./utils/font')

const templates = [
  // Components
  'components/LazyIframe.vue',
  'components/LazyImage.vue',

  // Plugins
  'plugins/Collector.js',

  // Classes
  'classes/Font.js',
  'classes/FontFamily.js',
  'classes/FontList.js',

  // Utils
  'utils/font.js',
  'utils/image.js',
  'utils/timeoutFetch.js',
  'utils/vnode.js'

]

function getDefaultOptions () {
  return {
    componentPrefix: null,
    fonts: []
  }
}

module.exports = function (moduleOptions) {
  const options = Object.assign(getDefaultOptions(), {
    ...this.options[pkg.name],
    ...moduleOptions
  })

  registerHooks.bind(this)(options)

  addTemplates.bind(this)(templates)

  addBundleRendererDirective(this.options.render.bundleRenderer)

  this.options.render.resourceHints = true
  this.options.router.prefetchLinks = true

  this.nuxt.hook('vue-renderer:ssr:templateParams', (page) => {
    page.HEAD += `<style>${process.fontFaces.join(' ')}</style>`
    page.HEAD += `<style>${process.fontClasses.join('').replace(/\s+/g, ' ')}</style>`
    page.HEAD += process.criticalFontPreloads.map((font) => {
      const attr = Object.keys(font).map(key => key + '=' + font[key]).join(' ')
      return `<link ${attr}/>`
    }).join()
    // page.HEAD += '<link rel="preload" as="image" imagesrcset="/img/critical-480.webp 480w, /img/critical-960.webp 960w">'
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: pkg.name + '/plugin.js',
    options: { fonts: prepareFontConfig.bind(this)(options.fonts) }
  })
}
function registerHooks (options) {
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: join(__dirname, 'components'),
      prefix: options.componentPrefix
    })
  })
}

function addTemplates (templates) {
  templates.forEach((template) => {
    this.addTemplate({
      src: resolve(__dirname, template),
      fileName: join(pkg.name, template),
      options: { }
    })
  })
}

function isAliasPath (path, aliases) {
  return Object.keys(aliases).find(alias => path.startsWith(alias))
}

function prepareFontConfig (fonts) {
  return JSON.stringify(fonts.map((font) => {
    font.variance = font.variance.map((variance) => {
      // static or non-static asset
      if (isAliasPath(variance.src, this.nuxt.options.alias)) {
        variance.src = `require("${variance.src}")`
      }
      return variance
    })
    return font
  }))
    .replace(/"require\(\\"([^)]+)\\"\)"/g, 'require("$1")')
}

function addBundleRendererDirective (bundleRenderer) {
  bundleRenderer.directives = bundleRenderer.directives || {}
  if ('font' in bundleRenderer.directives) {
    throw new Error('font bundleRenderer directive exists…')
  }
  //   bundleRenderer.template = (result, context) => {
  //     console.log(result, context)
  //     return `
  //   <head>
  //     <!-- use triple mustache for non-HTML-escaped interpolation -->
  //     ${context.renderResourceHints()}
  //     ${context.renderStyles()}
  //     {{{ renderStyles() }}}
  //   </head>
  //   <body>
  //     <!--vue-ssr-outlet-->
  //     ${result}
  //     ${context.renderState()}
  //     ${context.renderScripts()}
  //   </body>
  // `
  //   }

  bundleRenderer.directives.font = function (vnode, binding) {
    const critical = isCritical(vnode)
    registerFont(vnode, binding.value, critical)

    vnode.data.staticClass = ((vnode.data.staticClass || '') + ' ' + binding.value.getFamilyAsClassName()).trim()
    if (critical) {
      vnode.data.staticClass = (vnode.data.staticClass + ' font').trim()
    }
    vnode.data.style = Object.assign(vnode.data.style || {}, binding.value.toCSSVars())
  }

  // bundleRenderer.shouldPreload = (file, type) => {
  //   if (type === 'font') {
  //     const result = process.criticalFontPreloads.find((font) => {
  //       return font.href.includes(file)
  //     })
  //     return result
  //   }

  //   return true
  // }

  // bundleRenderer.shouldPrefetch = (file, type) => {
  //   console.log(file, type)
  // }
}

module.exports.meta = pkg
