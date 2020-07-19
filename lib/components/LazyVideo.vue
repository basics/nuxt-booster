<template>
  <div data-shaka-player-container>
    <video data-shaka-player :autoplay="autoplay" :muted="isMuted" playsinline>
      <source v-if="dash" :src="dash">
      <source v-if="hls" :src="hls">
    </video>
  </div>
</template>

<script>
// https://shaka-player-demo.appspot.com/docs/api/tutorial-ui.html
import { getPhysicalResolution, resizeObserver } from '../utils/viewport'

export default {
  props: {
    dash: {
      type: String,
      default () {
        return null
      }
    },
    hls: {
      type: String,
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

  computed: {
    isMuted () {
      return this.autoplay
    }
  },

  mounted () {
    const shaka = require('shaka-player/dist/shaka-player.ui')
    require('shaka-player/dist/controls.css')
    shaka.polyfill.installAll()
    const video = this.$el.querySelector('video')

    document.addEventListener('shaka-ui-loaded', () => {
      const ui = video.ui
      const controls = ui.getControls()
      const player = controls.getPlayer()
      console.log(player.getConfiguration().abrFactory())
      setRestrictions(player, getPhysicalResolution())

      this.subscriber = resizeObserver.subscribe((resolution) => {
        setRestrictions(player, resolution)
      })
    })
  },

  destroyed () {
    if (this.subscriber) {
      this.subscriber.unsubscribe()
    }
  }
}

function setRestrictions (player, resolution) {
  // const minHeight = getMinValue(resolution.y, resolution.x)
  // const minWidth = getMinValue(resolution.x, resolution.y)

  const restrictions = {
    maxWidth: resolution.x,
    minWidth: resolution.x / 2,
    // maxHeight: getMaxValue(resolution.y, resolution.x)
    // minWidth,
    maxHeight: resolution.y,
    minHeight: resolution.y / 2
  }

  player.configure({
    abr: {
      restrictions
    },
    restrictions
  })
}

function getMinValue (a, b) {
  if (a > b) {
    return b
  }
}

function getMaxValue (a, b) {
  if (a > b) {
    return a
  }
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
