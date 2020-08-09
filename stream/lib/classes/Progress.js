const cliProgress = require('cli-progress')
const defaultFormatter = require('cli-progress/lib/formatter')
const colors = require('colors')
const options = {
  noTTYOutput: true,
  clearOnComplete: false,
  stopOnComplete: true,
  hideCursor: true,
  etaBuffer: 20,
  autopadding: true,
  format: (options, params, payload) => {
    if (params.progress > 0 && params.progress < 1) {
      const format = '{name} |{bar}| {percentage}% || Dur: {duration_formatted} || ETA: {eta_formatted}'
      options.format = format.brightCyan.inverse
    } else if (params.progress === 1) {
      const format = `{name} |${colors.brightGreen('{bar}')}| {percentage}% || Dur: {duration_formatted} || ETA: {eta_formatted}`
      options.format = format.reset
    } else {
      const format = '{name} |{bar}| {percentage}% || Dur: {duration_formatted} || ETA: {eta_formatted}'
      options.format = format.reset
    }
    return defaultFormatter(options, params, payload)
  }
}

class ProgressBar {
  constructor () {
    this.multiBar = new cliProgress.MultiBar(options, cliProgress.Presets.shades_grey)
    this.progressBars = new Map()
  }

  init (key) {
    this.progressBars.set(key, this.multiBar.create(100, 0, { name: key, status: 'init' }))
  }

  update (key, progress) {
    const progressBar = this.progressBars.get(key)
    progressBar.update(progress.percent, { status: 'progress' })
  }

  destroy () {
    this.multiBar.on('stop', () => console.log(''.reset))
    this.multiBar.stop()
  }
}

module.exports = ProgressBar
