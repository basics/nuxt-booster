import { adapt } from '../utils/m3u8'
import { resizeObserver, getPhysicalResolution } from '../utils/viewport'

export default class Player {
  constructor (el) {
    this.el = el
    this.subscriber = null
  }

  async setup (dash, hls) {
    const { player, support } = await loadPlayer(this.el)
    const resolution = getPhysicalResolution()

    this.instance = player
    this.instance.configure(getPlayerConfig(resolution))
    await loadManifest(player, support, dash, hls, resolution)

    this.subscriber = resizeObserver.subscribe(async (resolution) => {
      player.configure(getPlayerConfig(resolution))
      if (!hasMediaSourceSupport()) {
        await loadManifest(player, support, dash, hls, resolution)
      }
    })
  }

  destroy () {
    if (this.subscriber) {
      this.subscriber.unsubscribe()
    }
    if (this.instance) {
      this.instance.destroy()
    }
  }
}

async function loadPlayer (video) {
  const shaka = await loadLibrary()
  const support = shaka.Player.probeSupport()
  return new Promise((resolve) => {
    document.addEventListener('shaka-ui-loaded', async () => {
      const ui = video.ui
      ui.configure({ clearBufferOnQualityChange: true })
      const controls = ui.getControls()
      const player = controls.getPlayer()
      resolve({ controls, player, support: await support })
    })
  })
}

async function loadLibrary () {
  const shaka = await import('shaka-player/dist/shaka-player.ui.debug')
  import('shaka-player/dist/controls.css')
  shaka.polyfill.installAll()
  return shaka
}

async function loadManifest (player, support, dash, hls, resolution) {
  const currentTime = player.getMediaElement().currentTime || 0
  if (support.manifest.mpd) {
    await player.load(dash, currentTime)
  } else {
    const url = await getHLS(getOrientation(resolution), hls)
    await player.load(url, currentTime)
  }
}

async function getHLS (orientation, url) {
  if (!hasMediaSourceSupport()) {
    return await adapt(url, orientation)
  }
  return url
}

function hasMediaSourceSupport () {
  return ('MediaSource' in global)
}

function getPlayerConfig (resolution) {
  const restrictions = { maxWidth: resolution.x, orientation: getOrientation(resolution) }
  return {
    abr: { restrictions },
    restrictions,
    streaming: {
      useNativeHlsOnSafari: false,
      bufferingGoal: 1,
      rebufferingGoal: 1,
      bufferBehind: 1
    }
  }
}

function getOrientation (resolution) {
  const videoRatio = resolution.x / resolution.y
  return (videoRatio - 1) / Math.abs(videoRatio - 1)
}
