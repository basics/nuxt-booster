<template>
  <div
    :class="{ready, playing, 'iframe-mode': iframeMode}"
  >
    <slot name="background" v-bind="{playing, videoData}" />
    <div class="player">
      <iframe
        ref="player"
        :key="src"
        :inert="inert"
        :title="playerTitle"
        :src="src"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        @load="onLoad"
      />
      <default-button aria-label="Play Video" @click="onInit">
        <component :is="pictureComponent" class="poster" v-bind="poster" />
        <slot v-if="loading" name="loading-spinner" />
        <slot v-if="!ready && !loading" name="play" />
      </default-button>
    </div>
    <slot v-bind="{playing, videoData}" />
  </div>
</template>

<script>
import { toHashHex } from 'nuxt-speedkit/utils/string';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import LoadingSpinner from 'nuxt-speedkit/components/SpeedkitImage/classes/LoadingSpinner';
import { isTouchSupported } from 'nuxt-speedkit/utils/browser';
import DefaultButton from '../Button';
import { load, ready } from './utils/loader';
import Vimeo from './classes/Vimeo';

const vimeo = new Vimeo();

export default {
  components: {
    SpeedkitPicture,
    DefaultButton
  },

  inheritAttrs: false,

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
      default () {
        return {};
      }
    },

    posterLoadingSpinner: {
      type: LoadingSpinner,
      default: undefined
    },

    posterSizes: {
      type: Object,
      default () {
        return { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' };
      }
    }
  },

  data () {
    return {
      inert: false,
      videoData: null,
      src: null,
      videoId: new URL(this.url).pathname.replace('/', ''),
      script: [],
      player: null,
      ready: false,
      loading: false,
      playing: false,
      iframeMode: false,
      isTouchDevice: isTouchSupported()
    };
  },

  fetchKey () {
    return `vimeo-${toHashHex(this.videoId)}`;
  },

  async fetch () {
    const { withQuery } = await import('ufo');
    const { fetch } = await import('native-fetch');
    try {
      const url = withQuery('https://vimeo.com/api/oembed.json', {
        url: this.url,
        width: 1920,
        height: 1080,
        ...this.playerOptions
      });
      const response = await fetch(url);
      this.videoData = await response.json();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      this.iframeMode = true;
      this.src = this.playerSrc;
    }
  },

  head () {
    return {
      script: this.script
    };
  },

  computed: {

    playerTitle () {
      return this.title || (this.videoData && this.videoData.title);
    },

    playerOptions () {
      return {
        dnt: true,
        autopause: false,
        ...this.options,
        playsinline: true,
        autoplay: this.autoplay,
        muted: this.isTouchDevice || this.mute
      };
    },

    playerSrc () {
      return this.videoData?.html.replace(/.*src="([^"]*)".*/, '$1').replace(/&amp;/g, '&') || `https://player.vimeo.com/video/${this.videoId}`;
    },

    pictureComponent () {
      return this.videoData ? SpeedkitPicture : 'picture';
    },

    poster () {
      if (!this.videoData) {
        return null;
      }
      return {
        formats: this.$speedkit.targetFormats,
        title: this.playerTitle,
        sources: [{
          format: 'jpg',
          src: this.videoData && this.videoData.thumbnail_url?.replace('https://i.vimeocdn.com', 'vimeo'),
          sizes: this.posterSizes,
          media: 'all'
        }],
        loadingSpinner: this.posterLoadingSpinner
      };
    }

  },

  watch: {
    videoData (videoData) {
      if (videoData && this.autoplay) {
        this.onInit();
      }
    },
    ready () {
      this.inert = false;
    }
  },

  mounted () {
    this.inert = true;
  },

  destroyed () {
    this.player && vimeo.remove(this.player);
  },

  methods: {

    onInit () {
      this.loading = true;
      this.src = this.playerSrc;
      this.script = [load()];
      if (this.iframeMode) {
        // force iframe reload for onload
        this.$refs.player.src = String(this.$refs.player.src);
      }
    },

    onPlayerStateChange (state) {
      if (state.playing) {
        this.playing = true;
      } else if (state.ended || state.pause) {
        this.playing = false;
      }
      this.$emit('playing', this.playing);
    },

    async onLoad (e) {
      if (!e.target.src || !this.script.length) {
        return;
      }

      await ready();

      this.player = await vimeo.createPlayer(this.$refs.player);
      this.player.on('playing', () => this.onPlayerStateChange({ playing: true }));
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

  @nest .ready & {
    & button {
      pointer-events: none;
      visibility: hidden;
    }
  }

  & iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
  }

  @nest .iframe-mode & {
    aspect-ratio: 16 / 9;
  }
}

/*! purgecss end ignore */
</style>
