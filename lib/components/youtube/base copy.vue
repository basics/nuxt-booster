<template>
  <component
    :is="design"
    :title="title"
    :class="{ready, playing, animate, 'animate--ready' : animateReady, 'animate--start' : animateStart}"
    :show="ready"
    class="youtube"
    :style="[
      initialPosition.toCSSVars('initial-position'),
      initialDimension.toCSSVars('initial-dimension'),
      targetDimension.toCSSVars('target-dimension')]"
    allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  >
    <span class="background" @transitionend="onTransitionEnd" />
    <div ref="player" class="player" />
    <default-button @click="onInit">
      <default-picture class="poster" :sources="posterSources" :loading-spinner="loadingSpinner" />
      <slot v-if="loading" name="loading-spinner" />
      <slot v-if="!ready && !loading" name="play" />
    </default-button>
    <div v-if="ready && muted" class="click-overlay" @click="onUnmute" />
  </component>
</template>

<script>
import { fromEvent } from 'rxjs';
import { ipoint } from '@js-basics/vector';
import DefaultPicture from '../picture';
import DefaultButton from '../button';
import ImageSourceList from '../picture/classes/ImageSourceList';
import ImageSource from '../image/classes/ImageSource';
import LoadingSpinner from '../image/classes/LoadingSpinner';
import { load, ready } from './utils/loader';

export default {
  components: {
    DefaultPicture,
    DefaultButton
  },

  inheritAttrs: false,

  props: {
    design: {
      type: [String, Function],
      default () {
        return 'div';
      }
    },

    url: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default () {
        return 'YouTube video player';
      }
    },

    loadingSpinner: {
      type: LoadingSpinner,
      default () {
        return null;
      }
    }
  },

  data () {
    return {
      videoId: new URL(this.url).searchParams.get('v'),
      script: [],
      player: null,
      loading: false,
      ready: false,
      src: null,
      muted: true,
      landscape: false,
      playing: false,
      initialPosition: ipoint(),
      initialDimension: ipoint(),
      targetPosition: ipoint(),
      targetDimension: ipoint(),
      animate: false,
      animateStart: false,
      animateReady: false
    };
  },

  head () {
    return {
      script: this.script
    };
  },

  computed: {
    posterSources () {
      return new ImageSourceList([
        new ImageSource({
          src: `/youtube/vi/${this.videoId}/maxresdefault.jpg`,
          sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' },
          media: 'all'
        })
      ], { retina: true });
    }
  },

  watch: {
    landscape (landscape) {
      if (!landscape && this.playing) {
        this.player.pauseVideo();
        this.animate = true;
        global.requestAnimationFrame(async () => {
          this.getDimensions();
          const iframe = this.$el.querySelector('iframe');
          iframe.style.width = `${this.initialDimension.x}px`;
          iframe.style.height = `${this.initialDimension.y}px`;
          iframe.classList.add('fixed');
          await scrollToElement(this.$el);
          global.requestAnimationFrame(() => {
            this.getDimensions();
            iframe.style.transform = `translate(0%, ${((((this.targetDimension.y - this.initialDimension.y) / 2) - this.initialPosition.y) / this.initialDimension.y) * 100}%)`;
            iframe.classList.remove('fixed');
            global.requestAnimationFrame(() => {
              this.animateReady = true;
              global.requestAnimationFrame(() => {
                this.animateStart = true;
                iframe.style = null;
              });
            });
          });
        });
      }
    }
  },

  mounted () {
    this.updateOrientation();
    fromEvent(global, 'orientationchange').subscribe(e => this.updateOrientation());
  },

  methods: {
    onInit (e) {
      this.loading = true;
      // eslint-disable-next-line no-secrets/no-secrets
      // this.src = `https://www.youtube-nocookie.com/embed/${this.videoId}?rel=0&enablejsapi=1&autoplay=1&mute=1&modestbranding=1&showinfo=0&iv_load_policy=3&playsinline=1`;

      this.script = [load()];

      this.createPlayer();
    },

    onUnmute () {
      this.player.unMute();
      this.muted = false;
    },

    getDimensions () {
      const clientRect = this.$el.getBoundingClientRect();
      this.initialPosition = ipoint(clientRect.left, clientRect.top);
      this.initialDimension = ipoint(clientRect.width, clientRect.height);
      this.targetDimension = ipoint(window.innerWidth, window.innerHeight);
    },

    onTransitionEnd (e) {
      this.animate = false;
      this.animateStart = false;
      this.animateReady = false;
    },

    async createPlayer () {
      const YT = await ready();
      this.player = new YT.Player(this.$refs.player, {
        videoId: this.videoId,
        host: 'https://www.youtube-nocookie.com',
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
            this.loading = false;
            this.ready = true;
            this.$emit('ready', e.target.getIframe());
          },
          onStateChange: e => this.onStateChange(YT, e.data)
        }
      });
    },

    onStateChange (YT, state) {
      if (state === YT.PlayerState.PLAYING) {
        this.playing = true;
      } else if (state === YT.PlayerState.ENDED || state === YT.PlayerState.PAUSED) {
        this.playing = false;
      }
    },

    updateOrientation () {
      const orientation = ('orientation' in global.screen && global.screen.orientation.angle) || global.orientation;
      const landscape = (orientation !== 0 && orientation !== 180);

      this.landscape = landscape;
    }
  }
};

const scrollToElement = (element) => {
  return new Promise((resolve) => {
    global.setTimeout(() => {
      const clientRect = element.getBoundingClientRect();
      const top = clientRect.top + global.scrollY - (((global.innerHeight - clientRect.height) / 2));
      global.scroll(0, top);
      resolve();
    }, 350);
  });
};

</script>

<style lang="postcss" scoped>
.youtube {
  position: relative;
  padding: 0;
  margin: 0;

  & .test {
    position: absolute;
    top: 0;
    left: 0;
    z-index:
      1000
      /* z-index: 100; */;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: red;
  }

  &.animate {
    & .background {
      position: fixed;
      top: 0;
      left: 0;

      /* z-index: 100; */
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: black;
    }

    & >>> iframe {
      &.fixed {
        position: fixed;
        top: 50%;
        margin: 0 auto;
        transform: translateY(-50%) !important;
      }
    }

    &.animate--ready {
      & .background {
        position: absolute;
        transform: scale(calc(var(--target-dimension-x) / var(--initial-dimension-x)), calc(var(--target-dimension-y) / var(--initial-dimension-y)));
        transform-origin: center calc(var(--initial-position-y) / (var(--target-dimension-y) - var(--initial-dimension-y)) * 100%);
      }
    }

    &.animate--start {
      & >>> iframe {
        transition: transform 0.2s;
        transform: translate(0, 0) !important;
      }

      & .background {
        transition: transform 0.2s 0.2s ease-in;
        transform: scale(1, 1);
      }
    }
  }

  & button {
    display: block;
    width: 100%;

    @nest .ready& {
      pointer-events: none;
      visibility: hidden;
    }
  }

  & >>> .player {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    background: black;
  }

  & .click-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
  }
}

@media (orientation: landscape) {
  .youtube.playing {
    & >>> iframe {
      position: fixed;
      top: 0;
      bottom: 0;
      z-index: 100;
      width: 100%;
      height: 100vh;
    }

    & .click-overlay {
      position: fixed;
      top: 0;
      z-index: 100;
    }
  }
}
</style>
