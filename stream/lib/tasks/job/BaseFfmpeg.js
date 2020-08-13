const EventEmitter = require('events')
const ffmpeg = require('fluent-ffmpeg')
const log = require('../../utils/log')
const { createDir } = require('../../utils/dir')

module.exports = class BaseFfmpeg extends EventEmitter {
  constructor (source, config, key = source) {
    super()

    this.key = `...${key.replace(/^\./, '').slice(-50).padEnd(50, '.')}`
    this.source = source
    this.config = config
    this.ffprobe = ffmpeg.ffprobe
    this.task = ffmpeg()
      .input(this.source)
      .on('progress', progress => this.onProgress(progress))
      .on('stderr', onDebug)
      .on('error', onError)

    log({ key: this.key, status: 'init' })
  }

  async getMetadata () {
    return await new Promise((resolve) => {
      this.ffprobe(this.source, ['-select_streams', 'v:0', '-show_entries', 'stream=nb_frames,duration'], (err, metadata) => {
        if (err) {
          throw err
        }
        resolve(metadata.streams[0])
      })
    })
  }

  onProgress (progress) {
    log({ key: this.key, status: 'progress', data: progress })
  }

  run (lockJSON, batchPreset, preset = () => {}) {
    this.task.preset(preset)
    const result = processBatchPreset(this.task, this.config, batchPreset, lockJSON).filter(Boolean)
    return new Promise((resolve) => {
      if (result.length) {
        this.task
          .on('end', () => {
            log({ key: this.key, status: 'finish', data: result })
            resolve(result)
          })
          .run()
      } else {
        log({ key: this.key, status: 'finish', data: result })
        resolve(result)
      }
    })
  }
}

function processBatchPreset (command, config, batchPreset, lockJSON) {
  if (Array.isArray(config)) {
    return config.map((item) => {
      return processPreset(command, item, batchPreset, lockJSON)
    })
  } else {
    return [processPreset(command, config, batchPreset, lockJSON)]
  }
}

function processPreset (command, config, batchPreset, lockJSON) {
  if (!isAlreadyGenerated(config, lockJSON)) {
    const result = batchPreset(command, config)
    createDir(result.filePath)
    return result
  }
  return null
}

function isAlreadyGenerated (config, lockJSON) {
  const configString = JSON.stringify(config)
  return lockJSON.find(item => JSON.stringify(item) === configString)
}

function onError (err, stdout, stderr) {
  console.error(err)
  // process.stderr.write(JSON.stringify(err));
}

function onDebug () {

}
