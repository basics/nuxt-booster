<template>
  <component
    :is="design"
    :title="title"
    :src="src"
    :class="{ready, playing}"
    :show="ready"
    class="youtube"
    allow="accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    @load="onLoad"
  >
    <template #placeholder>
      <default-button @click="onInit">
        <default-picture class="poster" :sources="posterSources" :loading-spinner="loadingSpinner" />
        <slot v-if="loading" name="loading-spinner" />
        <slot v-if="!ready && !loading" name="play" />
      </default-button>
      <div v-if="ready && muted" class="click-overlay" @click="onUnmute" />
    </template>
  </component>
</template>

<script>
import { fromEvent } from 'rxjs';
import { debounceTime, filter, first, mapTo } from 'rxjs/operators';
import DefaultPicture from '../../../picture';
import DefaultIframe from '../../';
import DefaultButton from '../../../button';
import ImageSourceList from '../../../picture/classes/ImageSourceList';
import ImageSource from '../../../image/classes/ImageSource';
import LoadingSpinner from '../../../image/classes/LoadingSpinner';
import { load, ready } from './utils/loader';

export default {
  components: {
    DefaultPicture,
    DefaultIframe,
    DefaultButton
  },

  inheritAttrs: false,

  props: {
    design: {
      type: Function,
      default () {
        return import('../../');
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
      playing: false
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

  mounted () {
    this.updateOrientation();
    fromEvent(global, 'orientationchange').subscribe((e) => {
      this.updateOrientation();
      if (!this.landscape && this.playing) {
        global.setTimeout(async () => {
          await scrollToElement(this.$el, { behavior: 'smooth', block: 'center' }, true);
        }, 500);
      }
    });
    fromEvent(global, 'scroll')
      .pipe(
        filter(() => this.landscape && this.playing),
        debounceTime(100)
      ).subscribe(() => {
        this.$el.scrollIntoView();
      });
  },

  methods: {
    onInit (e) {
      this.loading = true;
      // eslint-disable-next-line no-secrets/no-secrets
      this.src = `https://www.youtube-nocookie.com/embed/${this.videoId}?rel=0&enablejsapi=1&autoplay=1&mute=1&modestbranding=1&showinfo=0&iv_load_policy=3&playsinline=1`;
      this.script = [load()];
    },

    onUnmute () {
      this.player.unMute();
      this.muted = false;
    },

    async onLoad () {
      this.loading = false;
      this.ready = true;

      const YT = await ready();
      this.player = new YT.Player(this.$el.querySelector('iframe'), {
        videoId: this.videoId,
        host: 'https://www.youtube-nocookie.com',
        events: {
          onReady: e => e.target.playVideo(),
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
      this.landscape = (orientation !== 0 && orientation !== 180);
    }
  }
};

const scrollToElement = (element, options, emitFinish = false) => {
  element.scrollIntoView(options);
  if (emitFinish) {
    return fromEvent(global, 'scroll')
      .pipe(debounceTime(100), first(), mapTo(true)).toPromise();
  }
};
</script>

<style lang="postcss" scoped>
.youtube {
  position: relative;
  padding: 0;
  margin: 0;

  & button {
    display: block;
    width: 100%;

    @nest .ready& {
      pointer-events: none;
      visibility: hidden;
    }
  }

  & >>> iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
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
