const path = require('path')
const { program } = require('commander')
const docker = require('./lib/service/docker')
const dockerFfmpeg = require('./lib/service/docker/ffmpeg')
const dockerShaka = require('./lib/service/docker/shaka')
const { readJSONFile } = require('./lib/utils/file')
const log = require('./lib/utils/log')
program
  .option('-o, --outputDir <directory>', 'output directory', './dist')

process.on('SIGINT', function () {
  log('\n\nAborting ...')
  docker.destroy()
});

(async () => {
  const options = program.parse(process.argv).opts()
  const lockFile = path.join(options.outputDir, 'renditions-lock.json')

  await createRenditions(lockFile, options)
  await createSubtitles(options)
  await createThumbnails(options)
  await createStream(lockFile, options)
})()

async function createRenditions (file, options) {
  log('generate renditions ...')
  await dockerFfmpeg(options, 'lib/tasks/renditions.js')
  // await writeFile(file, data)
  log('... renditions finished')
}

async function createSubtitles (options) {
  log('generate subtitles ...')
  await dockerFfmpeg(options, 'lib/tasks/subtitles.js')
  log('... renditions finished')
}

async function createThumbnails (options) {
  log('generate preview thumbnails ...')
  await dockerFfmpeg(options, 'lib/tasks/thumbnails.js')
  log('... preview thumbnails finished')
}

async function createStream (file, options) {
  log('generate stream ...')
  const data = await readJSONFile(file)
  await dockerShaka(data, options)
  log('... stream finished')
}
