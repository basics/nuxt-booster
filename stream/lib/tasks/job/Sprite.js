const path = require('path')
const log = require('../../utils/log')
const BaseFfmpeg = require('./BaseFfmpeg')

module.exports = class Sprite extends BaseFfmpeg {
  constructor (config, basePath) {
    super(config.source, mapConfig(config, path.join(basePath, 'preview')))
    this.count = 0
  }

  onProgress (progress) {
    log({
      key: this.key,
      status: 'progress',
      data: {
        percent: this.count++ / this.config.tiles.num * 100
      }
    })
  }

  async run () {
    this.config.meta = await super.getMetadata()
    return super.run(batchPreset, preset)
  }
}

function mapConfig (config, dir) {
  config = Object.assign({
    type: 'thumbnails',
    filePath: path.join(dir, 'thumbs.jpg')
  }, config)
  config.tiles.numPerAxis = Math.ceil(Math.sqrt(Number(config.tiles.num)))
  return config
}

function preset (command) {
  command
    .withNoAudio()
    .frames(1)
}

function batchPreset (command, config) {
  command
    .output(config.filePath)
    .inputOptions([
      '-filter_complex', `select='not(mod(n,${Math.round(config.meta.nb_frames / Number(config.tiles.num))}))',scale=${config.tiles.size},tile=${config.tiles.numPerAxis}x${config.tiles.numPerAxis}`
    ])
  return config
}
