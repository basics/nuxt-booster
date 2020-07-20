<template>
  <div data-shaka-player-container>
    <video data-shaka-player :autoplay="autoplay" :muted="isMuted" playsinline />
  </div>
</template>

<script>
// https://shaka-player-demo.appspot.com/docs/api/tutorial-ui.html
import { resizeObserver, getPhysicalResolution } from '../utils/viewport'

export default {
  props: {
    landscape: {
      type: Object,
      default () {
        return null
      }
    },
    portrait: {
      type: Object,
      default () {
        return null
      }
    },
    autoplay: {
      type: Boolean,
      default () {
        return false
      }
    }
  },

  data () {
    return {
      player: null
    }
  },

  computed: {
    isMuted () {
      return this.autoplay
    }
  },

  async mounted () {
    const video = this.$el.querySelector('video')
    const { player, support } = await loadPlayer(video)
    this.player = player
    console.log(player)
    const config = player.getConfiguration()
    const test = config.abrFactory()
    test.init(() => {
      console.log('AJAJAK')
    })
    test.enable()

    this.subscriber = resizeObserver.subscribe((resolution) => {
      if (resolution.x > resolution.y) {
        loadManifest(this.landscape, player, resolution, support)
      } else {
        loadManifest(this.portrait, player, resolution, support)
      }
    })
  },

  destroyed () {
    if (this.subscriber) {
      this.subscriber.unsubscribe()
    }
    if (this.player) {
      this.player.destroy()
    }
  }
}

async function loadPlayer (video) {
  const shaka = await import('shaka-player/dist/shaka-player.ui')
  import('shaka-player/dist/controls.css')
  shaka.polyfill.installAll()
  const support = shaka.Player.probeSupport()
  return new Promise((resolve) => {
    document.addEventListener('shaka-ui-loaded', async () => {
      const ui = video.ui
      const controls = ui.getControls()
      const player = controls.getPlayer()

      // const test = new shaka.abr.SimpleAbrManager()
      // test.init(() => {
      //   console.log('JUPP')
      // })
      // test.enable()
      // // player.configure({ abr: test })
      // console.log(test)
      resolve({ controls, player, support: await support })
    })
  })
}

async function loadManifest (manifest, player, resolution, support) {
  const currentTime = player.getMediaElement().currentTime
  await player.unload()
  setRestrictions(player, resolution)
  if (support.manifest.mpd) {
    await player.load(manifest.dash, currentTime)
  } else {
    await player.load(manifest.hls, currentTime)
  }
}

function setRestrictions (player, resolution) {
  const restrictions = { maxWidth: resolution.x }
  player.configure({ abr: { restrictions }, restrictions })
}
</script>

<style>
.shaka-video-container {
  height: 100vh;

  /* height: stretch; */
}

video {
  display: block;
  width: 100%;
  object-fit: contain;
  background-color: black;
}
</style>
