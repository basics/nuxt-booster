<template>
  <div :class="{ ready, playing, 'iframe-mode': iframeMode }">
    <slot name="background" v-bind="{ playing, videoData }" />
    <div class="player">
      <slot name="beforePlayer" />
      <iframe
        ref="player"
        :key="src"
        :inert="inert"
        :title="playerTitle"
        :src="src"
        allow="autoplay; fullscreen; picture-in-picture"
        @load="onLoad"
      />
      <default-button aria-label="Play Video" @click="onInit">
        <component :is="pictureComponent" class="poster" v-bind="poster" />
        <slot v-if="loading" name="loading-spinner" />
        <slot v-if="!ready && !loading" name="play" />
      </default-button>
      <slot name="afterPlayer" />
    </div>
    <slot v-bind="{ playing, videoData }" />
  </div>
</template>

<script>
import { useHead, markRaw, computed, ref } from '#imports';

import DefaultButton from '../Button';
import { load, ready } from './utils/loader';
import Vimeo from './classes/Vimeo';
import { isTouchSupported } from '#booster/utils/browser';
import BoosterPicture from '#booster/components/BoosterPicture';

const vimeo = new Vimeo();

export default {
  components: {
    BoosterPicture,
    DefaultButton
  },

  props: {
    autoplay: {
      type: Boolean,
      default: false
    },

    mute: {
      type: Boolean,
      default: undefined
    },

    url: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: false,
      default: null
    },

    options: {
      type: Object,
      default() {
        return {};
      }
    },

    posterSizes: {
      type: Object,
      default() {
        return {
          default: '100vw',
          xxs: '100vw',
          xs: '100vw',
          sm: '100vw',
          md: '100vw',
          lg: '100vw',
          xl: '100vw',
          xxl: '100vw'
        };
      }
    },

    posterDensities: {
      type: [String, Number],
      default: undefined
    },

    posterOverride: {
      type: Object,
      default: undefined
    },

    posterSrc: {
      type: String,
      default: undefined
    }
  },
  emits: ['playing', 'ready'],

  async setup(props) {
    const script = ref([]);

    if (!(import.meta.server || process.env.prerender)) {
      useHead({
        script: computed(() => {
          return script.value;
        })
      });
    }

    const { withQuery } = await import('ufo');
    const videoData = ref(null);
    const iframeMode = ref(false);
    const src = ref(null);

    const playerSrc = computed(
      () =>
        videoData.value?.html
          .replace(/.*src="([^"]*)".*/, '$1')
          .replace(/&amp;/g, '&') ||
        `https://player.vimeo.com/video/${props.videoId}`
    );

    try {
      const url = withQuery('https://vimeo.com/api/oembed.json', {
        url: props.url,
        width: 1920,
        height: 1080,
        ...props.playerOptions
      });
      const response = await fetch(url);
      videoData.value = await response.json();
    } catch (error) {
      console.error(error);
      iframeMode.value = true;
      src.value = playerSrc.value;
    }
    return {
      playerSrc,
      videoId: new URL(props.url).pathname.replace('/', ''),
      iframeMode,
      src,
      script,
      videoData
    };
  },

  data() {
    return {
      inert: false,
      player: null,
      ready: false,
      loading: false,
      playing: false,
      isTouchDevice: isTouchSupported()
    };
  },

  computed: {
    playerTitle() {
      return this.title || (this.videoData && this.videoData.title);
    },

    playerOptions() {
      return {
        dnt: true,
        autopause: false,
        ...this.options,
        playsinline: true,
        autoplay: this.autoplay,
        muted: this.isTouchDevice || this.mute
      };
    },

    pictureComponent() {
      return this.videoData ? BoosterPicture : 'picture';
    },

    poster() {
      if (!this.videoData) {
        return null;
      }
      if (this.posterSrc) {
        return {
          formats: this.$booster.targetFormats,
          title: this.title,
          sources: [
            {
              src: this.posterSrc,
              sizes: this.posterSizes,
              media: 'all',
              densities: this.posterDensities
            }
          ]
        };
      } else {
        return {
          formats: this.$booster.targetFormats,
          title: this.playerTitle,
          sources: [
            {
              format: 'jpg',
              src:
                this.videoData &&
                this.videoData.thumbnail_url?.replace(
                  'https://i.vimeocdn.com',
                  'vimeo'
                ),
              sizes: this.posterSizes,
              media: 'all',
              densities: this.posterDensities
            }
          ]
        };
      }
    }
  },

  watch: {
    videoData(videoData) {
      if (videoData && this.autoplay) {
        this.onInit();
      }
    },
    ready() {
      this.inert = false;
    }
  },

  mounted() {
    this.inert = true;
  },

  unmounted() {
    this.player && vimeo.remove(this.player);
  },

  methods: {
    onInit() {
      this.loading = true;
      this.src = this.playerSrc;
      this.script = [load()];
      if (this.iframeMode) {
        // force iframe reload for onload
        this.$refs.player.src = String(this.$refs.player.src);
      }
    },

    onPlayerStateChange(state) {
      if (state.playing) {
        this.playing = true;
      } else if (state.ended || state.pause) {
        this.playing = false;
      }
      this.$emit('playing', this.playing);
    },

    async onLoad(e) {
      if (!e.target.src || !this.script.length) {
        return;
      }

      await ready();

      this.player = markRaw(await vimeo.createPlayer(this.$refs.player));

      this.player.on('playing', () =>
        this.onPlayerStateChange({ playing: true })
      );
      this.player.on('pause', () => this.onPlayerStateChange({ pause: true }));
      this.player.on('ended', () => this.onPlayerStateChange({ ended: true }));

      await this.player.ready();
      vimeo.play(this.player);

      this.loading = false;
      this.ready = true;

      this.$emit('ready', {
        iframe: this.player.element,
        player: this.player
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

.player {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;

  & button {
    display: block;
    width: 100%;
    cursor: pointer;
  }

  .ready & {
    & button {
      pointer-events: none;
      visibility: hidden;
    }
  }

  & iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: none;
  }

  .iframe-mode & {
    aspect-ratio: 16 / 9;
  }
}

/*! purgecss end ignore */
</style>
