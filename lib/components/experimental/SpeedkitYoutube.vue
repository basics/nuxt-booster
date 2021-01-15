<template>
  <div class="nuxt-speedkit_speedkit-youtube" :class="{ready: ready}">
    <div
      ref="youtube"
      loading="lazy"
      :width="poster.width"
      :height="poster.height"
    />
    <button v-if="poster" :class="{playing: playing}">
      <speedkit-picture v-bind="poster" @load="onLoad" />
    </button>
  </div>
</template>

<script>
import YoutubePlayer from 'youtube-player';
import SpeedkitPicture from '../SpeedkitPicture';

export default {
  components: {
    SpeedkitPicture
  },

  props: {
    id: {
      type: String,
      default () {
        return '';
      }
    },

    poster: {
      type: Object,
      default () {
        return {};
      }
    }
  },

  data () {
    return {
      ready: false,
      playing: false
    };
  },

  methods: {
    async onLoad (e) {
      await registerIntersectionObserver(this.$el);
      this.loadPlayer();
      // player.loadVideoById(this.id)
    },

    loadPlayer (el, id) {
      const player = YoutubePlayer(this.$refs.youtube, {
        host: 'https://www.youtube-nocookie.com',
        videoId: this.id,
        playerVars: { playsinline: 1, modestbranding: 1 }
      });

      player.on('ready', (e) => { this.ready = true; });
      player.on('stateChange', (e) => {
        if (e.data === 1) {
          this.playing = true;
        }
      });
    }
  }
};

function registerIntersectionObserver (el) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((changes) => {
      changes.forEach((change) => {
        if (typeof change.isVisible === 'undefined') {
          change.isVisible = true;
        }
        if (change.isVisible) {
          observer.disconnect();
          resolve();
        }
      });
      // https://developers.google.com/web/updates/2019/02/intersectionobserver-v2
    }, { threshold: [1], trackVisibility: true, delay: 350 });
    observer.observe(el);
  });
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

  & button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    text-transform: none;
    pointer-events: none;
    border: none;
    transition-duration: 350ms;
    transition-property: transform;
    appearance: button;

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
