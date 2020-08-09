const docker = require('../docker')
const RenditionProgress = require('../../classes/progress/RenditionProgress')

module.exports = (options, script) => {
  const renditionProgress = new RenditionProgress()

  process.on('SIGINT', function () {
    renditionProgress.destroy()
  })
  const streams = renditionProgress.getStreams()
  // const streams = [process.stdout, process.stderr];
  return docker.run('dkarchmervue/fluent-ffmpeg', [
    'node', script,
    '--outputDir', options.outputDir
  ], streams)
    .then(() => JSON.stringify(renditionProgress.finished))
}
