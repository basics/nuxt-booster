const path = require('path')
const { program } = require('commander')
const { readJSONFile, writeJSONFile } = require('../utils/file')
const Video = require('./job/Video')
const Audio = require('./job/Audio')

program
  .option('-c, --config <configPath>', 'config file path', 'default')
  .option('-o, --outputDir <directory>', 'output directory', './renditions');

(async function () {
  const options = program.parse(process.argv).opts()
  const jobs = []
  const config = await getConfig(options.config)
  const outputDir = path.join(options.outputDir, 'renditions')
  const lockFile = path.join(options.outputDir, 'renditions-lock.json')
  const lockJSON = await getLockFile(lockFile)
  jobs.push(...createJobs(Video, config.video, outputDir))
  jobs.push(...createJobs(Audio, config.audio, outputDir))

  while (jobs.length) {
    const data = await jobs.shift().run(lockJSON)
    await updateLock(lockFile, data)
  }
})()

function getConfig (configName) {
  return require(`../../config/${configName}.json`)
}

function getLockFile (lockFile) {
  return readJSONFile(lockFile)
}

async function updateLock (lockFile, data) {
  const content = await getLockFile(lockFile)
  content.push(...data)
  return writeJSONFile(lockFile, content)
}

function createJobs (Constructor, list, outputDir) {
  return list.map((item) => {
    return new Constructor(item, outputDir)
  })
}
