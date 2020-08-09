const path = require('path')
const fs = require('fs')
const { program } = require('commander')
const docker = require('./lib/service/docker')
const dockerFfmpeg = require('./lib/service/docker/ffmpeg')
const dockerShaka = require('./lib/service/docker/shaka')
const { readJSONFile, writeFile } = require('./lib/utils/file')
program
  .option('-o, --outputDir <directory>', 'output directory', './dist')

process.on('SIGINT', function () {
  console.log('\n\nAborting ...')
  docker.destroy()
});

(async () => {
  const options = program.parse(process.argv).opts()
  const lockFile = path.join(options.outputDir, 'renditions-lock.json')
  if (!fs.existsSync(lockFile)) {
    await createRenditions(lockFile, options)
  }
  await createThumbnails(options)
  await createStream(lockFile, options)
})()

async function createStream (file, options) {
  console.log('generate stream ...')
  const data = await readJSONFile(file)
  await dockerShaka(data, options)
  console.log('... stream finished')
}

async function createRenditions (file, options) {
  console.log('generate renditions ...')
  const data = await dockerFfmpeg(options, 'lib/tasks/renditions.js')
  await writeFile(file, data)
  console.log('... renditions finished')
}

async function createThumbnails (options) {
  console.log('generate preview thumbnails ...')
  await dockerFfmpeg(options, 'lib/tasks/thumbnails.js')
  console.log('... preview thumbnails finished')
}
