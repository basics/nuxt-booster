const path = require('path')
const docker = require('../docker')
const streams = [process.stdout, process.stderr]

const templates = {
  video: (item, dir) => `in=${item.filePath},stream=video,init_segment=${dir}/init.mp4,segment_template=${dir}/$Number$.m4s,playlist_name=${dir}/main.m3u8,iframe_playlist_name=${dir}/iframe.m3u8`,
  audio: (item, dir) => `in=${item.filePath},stream=audio,language=${item.lang.code},init_segment=${dir}/init.mp4,segment_template=${dir}/$Number$.m4s,playlist_name=${dir}/main.m3u8,hls_group_id=audio,hls_name=${item.lang.title}`,
  subtitle: (item, dir) => `in=${item.filePath},stream=text,language=${item.lang.code},init_segment=${dir}/init.mp4,segment_template=${dir}/$Number$.m4s,playlist_name=${dir}/main.m3u8,hls_group_id=text,hls_name=${item.lang.title}`
}

module.exports = (data, options) => {
  const outputDir = path.join(options.outputDir, 'stream/')
  const streamName = 'h264'
  const config = data
  const streamPath = `${path.join(outputDir, streamName)}`
  const result = config.map(item => getParams(item, outputDir)).concat([
    '--hls_master_playlist_output', `${streamPath}.m3u8`,
    '--generate_static_live_mpd',
    '--mpd_output', `${streamPath}.mpd`
  ])

  return docker.run('google/shaka-packager', ['packager'].concat(result), streams)
}

function getParams (item, outputDir) {
  const dir = getDir(item, outputDir)
  return templates[item.type](item, dir)
}

function getDir (item, outputDir) {
  switch (item.type) {
    case 'video':
      return path.join(outputDir, item.type, `${item.size}-${item.bitrate}`)
    case 'audio':
      return path.join(outputDir, item.type, item.lang.code, item.bitrate)
    case 'subtitle':
      return path.join(outputDir, item.type, item.lang.code)
    default:
      return ''
  }
}
