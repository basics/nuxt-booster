const { resolve, join } = require('path')
const pkg = require('../package.json')

const templates = [
  // Components
  'components/LazyIframe.vue',
  'components/LazyImage.vue',

  // Plugins
  'plugins/Collector.js',

  // Classes
  'classes/Critical.js',
  'classes/Font.js',
  'classes/FontFamily.js',
  'classes/FontList.js',

  // Utils
  'utils/cssSelector.js',
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

let fonts = null

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
    // page.HEAD = '<link rel="preload" as="image" imagesrcset="/img/critical-480.webp 480w, /img/critical-768.webp 768w">' + page.HEAD
    page.HEAD += getStyleString()
    page.HEAD += getPreloadsString()
    fonts.reset()
  })

  addPlugin.bind(this)(options)
}

function addPlugin ({ fonts }) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin/both.js'),
    fileName: pkg.name + '/plugin/both.js',
    options: { fonts: prepareFontConfig.bind(this)(fonts) }
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin/client.js'),
    fileName: pkg.name + '/plugin/client.js',
    mode: 'client'
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin/server.js'),
    fileName: pkg.name + '/plugin/server.js',
    mode: 'server'
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
    [].concat(binding.value).forEach((font) => {
      font.critical.set(vnode.context.isCritical)
      // TODO: check dynamic class added to template domNode (:class) where the directive is defined
      vnode.data.staticClass = ([...(vnode.data.staticClass || '').split(' '), ((font.critical.get() && (font.getClassNames())) || '')].join(' ')).trim()
    })
    fonts = vnode.context.$fonts
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

function getStyleString () {
  const style = [
    ...fonts.getFonts().map(font => font.getCSSFontFace()),
    ...fonts.getFonts().map(font => font.getCSSClasses())
  ]
  return `<style>${style.join(' ')}</style>`
}

function getPreloadsString () {
  const preloads = fonts.getCriticalFonts().map(font => font.toJSON())
  return preloads.map((font) => {
    const attr = Object.keys(font).map(key => key + '=' + font[key]).join(' ')
    return `<link ${attr}/>`
  }).join('')
}

module.exports.meta = pkg
