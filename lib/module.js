const { resolve, join } = require('path')
const pkg = require('../package.json')

const templates = [
  // Components
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
  'utils/timeoutFetch.js'

]

module.exports = function (moduleOptions) {
  const options = {
    ...this.options[pkg.name],
    ...moduleOptions
  }

  addTemplates.bind(this)(templates)

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: pkg.name + `/${pkg.name}.js`,
    options: { fonts: prepareFontConfig(options.fonts) }
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

function prepareFontConfig (fonts) {
  return JSON.stringify(fonts.map((font) => {
    font.variance = font.variance.map((variance) => {
      variance.src = `require("${variance.src}")`
      return variance
    })
    return font
  }))
    .replace(/"require\(\\"([^)]+)\\"\)"/g, 'require("$1")')
}

module.exports.meta = pkg
