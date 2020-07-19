<template>
  <div data-shaka-player-container>
    <video data-shaka-player :autoplay="autoplay" :muted="isMuted" playsinline />
  </div>
</template>

<script>
// https://shaka-player-demo.appspot.com/docs/api/tutorial-ui.html
import { resizeObserver } from '../utils/viewport'

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
    const { player } = await loadPlayer(video)
    this.player = player
    this.subscriber = resizeObserver.subscribe((resolution) => {
      if (resolution.x > resolution.y) {
        loadManifest(this.landscape, player, resolution)
      } else {
        loadManifest(this.portrait, player, resolution)
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
  return new Promise((resolve) => {
    document.addEventListener('shaka-ui-loaded', () => {
      const ui = video.ui
      const controls = ui.getControls()
      resolve({ controls, player: controls.getPlayer() })
    })
  })
}

async function loadManifest (manifest, player, resolution) {
  try {
    await player.load(manifest.dash, player.getMediaElement().currentTime)
  } catch (e) {
    await player.load(manifest.hls, player.getMediaElement().currentTime)
  }
  setRestrictions(player, resolution)
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
