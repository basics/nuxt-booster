const path = require('path')
const { program } = require('commander')
const webvtt = require('node-webvtt')
const { writeFile } = require('../utils/file')
const Sprite = require('./job/Sprite')

program
  .option('-c, --config <configPath>', 'config file path', 'thumbs')
  .option('-o, --outputDir <directory>', 'output directory', './output');

(async function () {
  const options = program.parse(process.argv).opts()
  const config = await getConfig(options.config)
  const job = new Sprite(config, options.outputDir)
  await job.run()

  createWebVTT(job.config, options)
})()

function getConfig (configName) {
  return require(`../../config/${configName}.json`)
}

function createWebVTT (config) {
  const size = config.tiles.size.match(/[-+]?[0-9]*\.?[0-9]+/g)
  const cues = createEntries(config.tiles.num, size, config.tiles.numPerAxis, config.meta.duration)

  return writeFile(
    path.join(path.dirname(config.filePath), 'thumbs.vtt'),
    webvtt.compile({ meta: {}, cues, valid: true })
  )
}

function createEntries (num, size, perAxis, duration) {
  return Array(Number(num)).fill(null).map((value, i) => {
    return {
      identifier: i,
      start: (duration / Number(num)) * i,
      end: (duration / Number(num)) * (i + 1),
      text: `thumbs.jpg#xywh=${getSpriteCoords(i, perAxis, size).join(',')}`,
      styles: ''
    }
  })
}

function getSpriteCoords (i, tilesPerAxis, [x, y]) {
  const posX = i % tilesPerAxis
  const posY = Math.floor(i / tilesPerAxis)
  return [posX * x, posY * y, x, y]
}
