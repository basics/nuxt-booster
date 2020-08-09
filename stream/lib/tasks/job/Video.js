const path = require('path')
const BaseFfmpeg = require('./BaseFfmpeg')

module.exports = class Video extends BaseFfmpeg {
  constructor (config, basePath) {
    super(config.source, mapConfig(config, path.join(basePath, 'video')), `${config.source} : ${config.width}x${config.height}`)
  }

  run () {
    return super.run(batchPreset, preset)
  }
}

function mapConfig (item, dir) {
  return item.bitrates.map((bitrate) => {
    const size = `${item.width}x${item.height}`
    return {
      type: 'video',
      size,
      filePath: path.join(dir, `${size}_${bitrate}k.mp4`),
      bitrate: `${bitrate}k`,
      maxrate: `${Math.round(bitrate * 1.25)}k`,
      bufsize: `${Math.round(bitrate * 1.75)}k`
    }
  })
}
// https://videoblerg.wordpress.com/2017/11/10/ffmpeg-and-how-to-use-it-wrong/
function preset (command) {
  command
    .format('mp4')
    .videoCodec('libx264')
    .fps(24)
    .outputOption('-preset veryfast')
    .outputOption('-profile:v baseline')
    .outputOption('-pix_fmt yuv420p')
    .outputOption('-keyint_min 100')
    .outputOption('-g 100')
    .outputOption('-sc_threshold 0')
}

function batchPreset (command, config) {
  command
    .output(config.filePath)
    .size(config.size)
    .videoBitrate(config.bitrate)
    .outputOption(`-maxrate ${config.maxrate}`)
    .outputOption(`-bufsize ${config.bufsize}`)
  return config
}
