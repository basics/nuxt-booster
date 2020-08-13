const path = require('path')
const BaseFfmpeg = require('./BaseFfmpeg')

module.exports = class Audio extends BaseFfmpeg {
  constructor (config, basePath) {
    super(config.source, mapConfig(config, path.join(basePath, 'audio', config.lang.code)))
  }

  run (lockJSON) {
    return super.run(lockJSON, batchPreset, preset)
  }
}

function mapConfig (config, dir) {
  return [].concat(...config.bitrates.map((bitrate) => {
    return {
      type: 'audio',
      lang: config.lang,
      bitrate: `${bitrate}k`,
      filePath: path.join(dir, `${bitrate}.mp4`)
    }
  }))
}

function preset (command) {
  command
    .format('mp4')
    .audioCodec('aac')
}

function batchPreset (command, config) {
  command
    .output(config.filePath)
    .audioBitrate(config.bitrate)
  return config
}
