const path = require('path')
const BaseFfmpeg = require('./BaseFfmpeg')

module.exports = class Subtitle extends BaseFfmpeg {
  constructor (config, basePath) {
    super(config.source, mapConfig(config, basePath))
  }

  run () {
    return super.run(batchPreset)
  }
}

function mapConfig (config, dir) {
  return {
    type: 'subtitle',
    lang: config.lang,
    filePath: path.join(dir, `${config.lang.code}.vtt`)
  }
}

function batchPreset (command, config) {
  command.output(config.filePath)
  return config
}
