<template>
  <div
    :class="{ready, playing, 'iframe-mode': iframeMode}"
  >
    <div class="player">
      <iframe
        ref="player"
        :key="src"
        :title="playerTitle"
        :src="src"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        @load="onLoad"
      />
      <default-button @click="onInit">
        <component :is="pictureComponent" class="poster" v-bind="poster" />
        <slot v-if="loading" name="loading-spinner" />
        <slot v-if="!ready && !loading" name="play" />
      </default-button>
    </div>
    <slot :videoData="videoData" />
  </div>
</template>

<script>
import { toHashHex } from 'nuxt-speedkit/utils/string';
import SpeedkitPicture from 'nuxt-speedkit/components/SpeedkitPicture';
import LoadingSpinner from 'nuxt-speedkit/components/SpeedkitImage/classes/LoadingSpinner';
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

    url: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: false,
      default: null
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
      videoData: null,
      src: null,
      videoId: new URL(this.url).pathname.replace('/', ''),
      script: [],
      player: null,
      ready: false,
      loading: false,
      playing: false,
      isTouchDevice: false,
      iframeMode: false
    };
  },

  fetchKey () {
    return `vimeo-${toHashHex(this.videoId)}`;
  },

  async fetch () {
    const { get } = await import('axios');
    try {
      const result = await get(`https://vimeo.com/api/v2/video/${this.videoId}.json`);
      this.videoData = result.data[0];
    } catch (error) {
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

    pictureComponent () {
      return this.videoData ? SpeedkitPicture : 'picture';
    },

    poster () {
      if (!this.videoData) {
        return null;
      }
      return {
        title: this.playerTitle,
        sources: [{
          format: 'jpg',
          src: this.videoData && this.videoData.thumbnail_large.replace(/(.+)(\/video\/[\w-]+)_([\d]+)$/, `/vimeo$2_${this.videoData.width}`),
          sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' },
          media: 'all'
        }],
        loadingSpinner: this.loadingSpinner
      };
    },

    playerSrc () {
      return `https://player.vimeo.com/video/${this.videoId}?dnt=1&autoplay=0&autopause=0&muted=${Number(this.isTouchDevice)}`;
    }

  },

  destroyed () {
    this.player && vimeo.remove(this.player);
  },

  methods: {

    onInit (e) {
      this.isTouchDevice = e.pointerType === 'touch';
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
