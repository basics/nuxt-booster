<template>
  <div class="nuxt-speedkit_speedkit-youtube" :class="{ready: ready}">
    <div
      ref="youtube"
      loading="lazy"
      width="640"
      height="320"
    />

    <experimental-picture :sources="sources" class="poster" :class="{playing: playing}" @load="onLoad" />
  </div>
</template>

<script>
import ExperimentalPicture from 'nuxt-speedkit/components/experimental/ExperimentalPicture'
import YoutubePlayer from 'youtube-player'

export default {
  components: {
    ExperimentalPicture
  },

  props: {
    id: {
      type: String,
      default: ''
    },

    sizes: {
      type: String,
      default: '1280'
    }
  },

  data () {
    return {
      ready: false,
      playing: false
    }
  },

  computed: {
    sources () {
      return [{
        src: `https://img.youtube.com/vi/${this.id}/maxresdefault.jpg`, sizes: this.sizes
      }]
    }
  },

  methods: {
    async onLoad (e) {
      await registerIntersectionObserver(this.$el)
      this.loadPlayer()
    },

    loadPlayer (el, id) {
      const player = YoutubePlayer(this.$refs.youtube, {
        host: 'https://www.youtube-nocookie.com',
        videoId: this.id,
        playerVars: { playsinline: 1, modestbranding: 1 }
      })

      player.on('ready', (e) => { this.ready = true })
      player.on('stateChange', (e) => {
        if (e.data === 1) {
          this.playing = true
        }
      })
    }
  }
}

function registerIntersectionObserver (el) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((changes) => {
      changes.forEach((change) => {
        if (typeof change.isVisible === 'undefined') {
          change.isVisible = true
        }
        if (change.isVisible) {
          observer.disconnect()
          resolve()
        }
      })
      // https://developers.google.com/web/updates/2019/02/intersectionobserver-v2
    }, { threshold: [1], trackVisibility: true, delay: 350 })
    observer.observe(el)
  })
}
</script>

<style lang="postcss" scoped>
div {
  position: relative;
  overflow: hidden;
}

.nuxt-speedkit_speedkit-youtube {
  & >>> iframe {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  & .poster {
    position: relative;
    pointer-events: none;

    @nest .ready& {
      mask-image: radial-gradient(50px at center, transparent 75%, black 100%);
    }

    &.playing {
      transform: scale(20);

      /* visibility: hidden; */
      transform-origin: center;
    }
  }
}
</style>
