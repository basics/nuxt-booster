const path = require('path')
const { program } = require('commander')
const Subtitle = require('./job/Subtitle')

program
  .option('-c, --config <configPath>', 'config file path', 'default')
  .option('-o, --outputDir <directory>', 'output directory', './renditions');

(async function () {
  const options = program.parse(process.argv)
  const jobs = []
  const config = await getConfig(options.config)
  const outputDir = path.join(options.outputDir, 'subtitles')
  jobs.push(...createJobs(Subtitle, config.subtitle, outputDir))

  while (jobs.length) {
    await jobs.shift().run()
  }
})()

function getConfig (configName) {
  return require(`../../config/${configName}.json`)
}

function createJobs (Constructor, list, outputDir) {
  return list.map((item) => {
    return new Constructor(item, outputDir)
  })
}
