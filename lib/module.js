const { resolve } = require('path')
const pkg = require('../package.json')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options[pkg.name],
    ...moduleOptions
  }

  this.addTemplate({
    src: resolve(__dirname, 'utils/store.js'),
    fileName: pkg.name + '/utils/store.js',
    options: { }
  })
  this.addTemplate({
    src: resolve(__dirname, 'plugins/Collector.js'),
    fileName: pkg.name + '/plugins/Collector.js',
    options: { }
  })
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: pkg.name + `/${pkg.name}.js`,
    options
  })
}

module.exports.meta = require('../package.json')
