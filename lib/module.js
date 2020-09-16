import fs from 'fs-extra'
import { getPreloadTags } from './utils/preload'
const { resolve, join } = require('path')
const pkg = require('../package.json')

const normalizeStylesheet = fs.readFileSync(resolve(__dirname, './normalize.css'), 'utf-8')

const templates = [
  // Components
  'components/LazyIframe.vue',
  'components/LazyImage.vue',
  'components/GoogleLighthouse.vue',

  // Plugins
  'plugins/Collector.js',

  // Classes
  'classes/Critical.js',
  'classes/Font.js',
  'classes/FontFamily.js',
  'classes/FontList.js',

  // Utils
  'utils/client.js',
  'utils/cssSelector.js',
  'utils/string.js',
  'utils/base64.js',
  'utils/lighthouse.js'
]

function getDefaultOptions () {
  return {
    fonts: [],
    componentAutoImport: false,
    componentPrefix: null
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
    if (fonts) {
      page.HEAD += getStyleString(fonts)
      page.HEAD += getPreloadString(fonts)
      fonts.reset()
    }
    page.HEAD += getNoscriptStyleString()
  })

  let dir = this.options.buildDir

  if (this.options.dev) {
    dir = this.options.srcDir
  }

  addPlugin.bind(this)(options.fonts, this.options.alias, dir, this.options.build._publicPath, this.options.generate.dir, this.options.dev)
}

function addPlugin (fonts, alias, dir, publicPath, generateDir, dev) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: pkg.name + '/plugin.js',
    options: { fonts: prepareFontConfig.bind(this)(fonts) }
  })
}

function registerHooks (options) {
  if (options.componentAutoImport) {
    this.nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
        prefix: options.componentPrefix
      })
    })
  }
}

function addTemplates (templates) {
  return templates.map((template) => {
    return this.addTemplate({
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
    font.variance = font.variances.map((variance) => {
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

  // Server directive
  bundleRenderer.directives.font = function (vnode, binding) {
    [].concat(binding.value).forEach((font) => {
      font.critical = vnode.context.isCritical || font.critical
      // TODO: check dynamic class added to template domNode (:class) where the directive is defined
      vnode.data.staticClass = ([...(vnode.data.staticClass || '').split(' '), ...((font.critical && (font.getClassNames())) || [''])].join(' ')).trim()
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

function getPreloadString (fonts) {
  return getPreloadTags(fonts.getDefinitions()).join('\n')
}

function getStyleString (fonts) {
  const style = [
    normalizeStylesheet,
    ...fonts.getFontFamilies().map(fontFamily => fontFamily.getCSSFontFaces()).flat(),
    ...fonts.getDefinitions().map(font => font.getMediaWithClasses())
  ]
  return `<style>${style.join(' ')}</style>`
}

function getNoscriptStyleString () {
  return '<noscript><style>.noscript-hide {display: none;}</style></noscript>'
}
module.exports.meta = pkg
