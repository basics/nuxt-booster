<template>
  <div data-shaka-player-container>
    <video data-shaka-player :autoplay="autoplay" :muted="isMuted" playsinline />
  </div>
</template>

<script>
// https://shaka-player-demo.appspot.com/docs/api/tutorial-ui.html
import StreamPlayer from '../classes/StreamPlayer'

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

  mounted () {
    const video = this.$el.querySelector('video')
    this.streamPlayer = new StreamPlayer(video)
    this.streamPlayer.setup(this.dash, this.hls)
  },

  destroyed () {
    this.streamPlayer.destroy()
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
