import fs from 'fs-extra'
import { getPreloadTags } from './utils/preload'
const { resolve, join } = require('path')
// const cheerio = require('cheerio')
const pkg = require('../package.json')

const normalizeStylesheet = fs.readFileSync(resolve(__dirname, './normalize.css'), 'utf-8')

const templates = [
  // Components
  'components/SpeedkitLayer.vue',
  'components/LazyIframe.vue',
  'components/LazyImage.vue',
  'components/GoogleLighthouse.vue',
  'abstracts/OnlySsr.vue',

  // Plugins
  'plugins/vFont.js',

  // Classes
  'classes/Critical.js',
  'classes/Font.js',
  'classes/FontFamily.js',
  'classes/FontList.js',

  // Utils
  'utils/performance.js',
  'utils/cssSelector.js',
  'utils/string.js',
  'utils/base64.js',
  'utils/lighthouse.js',

  'speedkitComponent.js',

  'speedkit.js'
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

  // this.options.render.resourceHints = true
  // this.options.router.prefetchLinks = true
  // this.options.build.filenames.chunk = ({ isDev }) => isDev ? '[name].js' : '[name].[contenthash].js'

  if (!this.nuxt.options.dev) {
    this.nuxt.hook('webpack:config', (webpackConfigs) => {
      webpackConfigs
        .filter(({ name }) => ['client', 'modern'].includes(name))
        .forEach((config) => {
          // config.entry.app.dependOn = 'speedkit'
          config.entry.speedkit = resolve(this.nuxt.options.buildDir, pkg.name, 'speedkit.js')
          config.optimization.runtimeChunk = {
            name: 'speedkit'
          }
        })
    })
  }

  this.nuxt.hook('vue-renderer:ssr:templateParams', (page) => {
    // page.HEAD = '<link rel="preload" as="image" imagesrcset="/img/critical-480.webp 480w, /img/critical-768.webp 768w">' + page.HEAD
    if (fonts) {
      page.HEAD += getStyleString(fonts)
      page.HEAD += getPreloadString(fonts)
      fonts.reset()
    }
    page.HEAD += getNoscriptStyleString()
  })

  // this.nuxt.hook('generate:page', (page) => {
  //   const $ = cheerio.load(page.html)
  //   $('head').append($('style'))
  //   $('head').prepend($('link'))
  //   page.html = $.html()
  // })

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
      font.critical.set(vnode.context.isCritical || font.critical.get())

      const classes = []

      // Fallback
      classes.push(...font.getClassNames())

      // Critical
      classes.push(...((font.critical.get() && (font.getClassNames(true))) || ['']))

      // TODO: check dynamic class added to template domNode (:class) where the directive is defined
      vnode.data.staticClass = ([...(vnode.data.staticClass || '').split(' '), ...classes].join(' ')).trim()
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
