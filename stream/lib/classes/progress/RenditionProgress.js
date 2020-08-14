const JSONStream = require('JSONStream')
const Progress = require('../Progress')

module.exports = class RenditionProgress {
  constructor () {
    this.progress = new Progress()
    this.stdout = JSONStream.parse()
    this.stderr = JSONStream.parse()
    this.stdout.on('data', data => onData(data, this.progress, this.finished))
    this.stderr.on('data', onError)
  }

  getStreams () {
    return [this.stdout, this.stderr]
  }

  destroy () {
    this.progress.destroy()
  }
}

function onData (data, progress, finished) {
  switch (data.status) {
    case 'init': {
      progress.init(data.key)
      break
    }
    case 'progress': {
      progress.update(data.key, data.data)
      break
    }
    case 'finish': {
      progress.update(data.key, { percent: 100 })
      break
    }
    default: {
      onError(data)
      break
    }
  }
}

function onError (e) {
  console.error(e)
}
