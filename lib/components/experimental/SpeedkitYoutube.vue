<template>
  <intersection-observer :threshold="[1]" track-visibility :delay="350" @enter="onEnter">
    <div class="nuxt-speedkit__speedkit-youtube" :class="{'js--playing': playing,'js--loading': loading}">
      <div
        ref="youtube"
        loading="lazy"
      />
      <button aria-label="Play" class="poster" @click="onClick">
        <speedkit-picture :sources="sources" @load="onLoad" />
        <span v-if="!loading && !playing" class="icon">
          <svg version="1.1" viewBox="0 0 68 48"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" /><path d="M 45,24 27,14 27,34" fill="#fff" /></svg>
        </span>
        <div v-if="loading" class="spinner">
          <div class="spinner-container">
            <div class="spinner-rotator">
              <div class="spinner-left">
                <div class="spinner-circle" />
              </div>
              <div class="spinner-right">
                <div class="spinner-circle" />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  </intersection-observer>
</template>

<script>
import YoutubePlayer from 'youtube-player';
import Deferred from 'nuxt-speedkit/classes/Deferred';
import IntersectionObserver from '../abstracts/IntersectionObserver';
import SpeedkitPicture from './SpeedkitPicture';

export default {
  components: {
    IntersectionObserver,
    SpeedkitPicture
  },

  props: {
    id: {
      type: String,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    sizes: {
      type: String,
      default: null
    },
    host: {
      type: String,
      default: 'https://www.youtube-nocookie.com'
    },
    config: {
      type: Object,
      default () {
        return { playsinline: 1, modestbranding: 1 };
      }
    }
  },
  data () {
    return {
      playing: false,
      loading: false,
      player: null,
      playerReady: new Deferred(),
      deferred: new Deferred()
    };
  },

  computed: {
    sources () {
      return [{
        src: `https://img.youtube.com/vi/${this.id}/maxresdefault.jpg`, sizes: this.sizes
      }];
    }
  },

  mounted () {
    this.playerReady.promise.then(() => {
      this.$emit('ready');
    });
  },

  methods: {

    async onClick () {
      this.deferred.resolve();
      await this.play();
    },

    async onEnter () {
      this.$emit('enter');
      this.deferred.resolve();
      if (this.autoplay) {
        await this.play();
      }
    },

    async play () {
      this.loading = true;
      this.$emit('loading');
      await this.playerReady.promise;
      this.player.playVideo();
    },

    async onLoad () {
      await this.deferred.promise;
      this.loadPlayer();
    },

    loadPlayer () {
      this.player = YoutubePlayer(this.$refs.youtube, {
        host: this.host,
        videoId: this.id,
        playerVars: this.config
      });
      this.player.on('ready', () => { this.playerReady.resolve(); });
      this.player.on('stateChange', (e) => {
        if (e.data === 1) {
          this.loading = false;
          this.playing = true;
          this.$emit('playing');
        }
      });
    }
  }
};

</script>

<style scoped>
.nuxt-speedkit__speedkit-youtube {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.nuxt-speedkit__speedkit-youtube >>> iframe {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.nuxt-speedkit__speedkit-youtube .poster {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 0;
  outline: none;
  transition: opacity 0.2s ease-in;
  appearance: none;
}

.nuxt-speedkit__speedkit-youtube .poster .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 68px;
  transform: translate(-50%, -50%);
}

.nuxt-speedkit__speedkit-youtube .poster .icon path:first-child {
  fill: #212121;
  fill-opacity: 0.8;
  transition: fill 0.1s cubic-bezier(0.4, 0, 1, 1), fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
}

.nuxt-speedkit__speedkit-youtube .poster:hover path:first-child {
  fill: #f00;
  fill-opacity: 1;
  transition: fill 0.1s cubic-bezier(0, 0, 0.2, 1), fill-opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
}

.nuxt-speedkit__speedkit-youtube svg {
  transition: opacity 0.2s linear, transform 0.2s linear;
}

.nuxt-speedkit__speedkit-youtube.js--playing .poster {
  pointer-events: none;
  opacity: 0;
}

.nuxt-speedkit__speedkit-youtube .spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 18;
  width: 48px;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.nuxt-speedkit__speedkit-youtube .spinner::before {
  display: block;
  padding-top: 100%;
  content: "";
}

.nuxt-speedkit__speedkit-youtube .spinner .spinner-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding-bottom: 100%;
  margin-top: -50%;
  margin-left: -50%;
  pointer-events: none;
  -webkit-animation: spinner-linspin 1568.23529647ms linear infinite;
  animation: spinner-linspin 1568.23529647ms linear infinite;
}

.nuxt-speedkit__speedkit-youtube .spinner .spinner-rotator {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-animation: spinner-easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: spinner-easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.nuxt-speedkit__speedkit-youtube .spinner .spinner-left {
  position: absolute;
  top: 0;
  right: 49%;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.nuxt-speedkit__speedkit-youtube .spinner .spinner-right {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 49%;
  overflow: hidden;
}

.nuxt-speedkit__speedkit-youtube .spinner .spinner-circle {
  position: absolute;
  box-sizing: border-box;
  width: 200%;
  height: 100%;
  border-color: #b81c22 #b81c22 transparent;
  border-style: solid;
  border-width: 4px;
  border-radius: 50%;
}

.nuxt-speedkit__speedkit-youtube .spinner .spinner-left .spinner-circle {
  border-right-color: transparent;
  -webkit-animation: spinner-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: spinner-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.nuxt-speedkit__speedkit-youtube .spinner .spinner-right .spinner-circle {
  left: -100%;
  border-left-color: transparent;
  -webkit-animation: spinner-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: spinner-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

/* spinner-linspin */
@keyframes spinner-linspin {
  to { transform: rotate(360deg); }
}

/* spinner-easespin */
@keyframes spinner-easespin {
  12.5% { transform: rotate(135deg); }
  25% { transform: rotate(270deg); }
  37.5% { transform: rotate(405deg); }
  50% { transform: rotate(540deg); }
  62.5% { transform: rotate(675deg); }
  75% { transform: rotate(810deg); }
  87.5% { transform: rotate(945deg); }
  to { transform: rotate(1080deg); }
}

/* spinner-left-spin */
@keyframes spinner-left-spin {
  0% { transform: rotate(130deg); }
  50% { transform: rotate(-5deg); }
  to { transform: rotate(130deg); }
}

/* right-spin */
@keyframes spinner-right-spin {
  0% { transform: rotate(-130deg); }
  50% { transform: rotate(5deg); }
  to { transform: rotate(-130deg); }
}
</style>
