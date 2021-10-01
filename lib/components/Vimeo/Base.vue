<template>
  <div
    class="nuxt-speedkit__vimeo"
    :title="title"
    :src="src"
    :class="{ready, playing}"
    @load="onLoad"
  >
    <iframe
      v-if="src"
      ref="player"
      :src="src"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      :title="title"
      @load="onLoad"
    />
    <default-button @click="onInit">
      <component :is="pictureComponent" class="poster" v-bind="poster" />
      <slot v-if="loading" name="loading-spinner" />
      <slot v-if="!ready && !loading" name="play" />
    </default-button>
  </div>
</template>

<script>
import { toHashHex } from 'nuxt-speedkit/utils/string';
import DefaultPicture from '../Picture';
import DefaultButton from '../Button';
import LoadingSpinner from '../Image/classes/LoadingSpinner';
import Picture from '../Picture/classes/Picture';
import { load } from './utils/loader';
import Vimeo from './classes/Vimeo';

const vimeo = new Vimeo();

export default {
  components: {
    DefaultPicture,
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
      required: true
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
      src: null,
      videoId: new URL(this.url).pathname.replace('/', ''),
      script: [],
      player: null,
      posterUrl: null,
      ready: false,
      loading: false,
      playing: false,
      isTouchDevice: false
    };
  },

  fetchKey () {
    return `vimeo-${toHashHex(this.videoId)}`;
  },

  async fetch () {
    const { get } = await import('axios');
    const result = await get(`https://vimeo.com/api/v2/video/${this.videoId}.json`);
    this.posterUrl = result.data[0].thumbnail_large.replace(/(.+)(\/video\/[\w-]+)_([\d]+)$/, `/vimeo$2_${result.data[0].width}`);
  },

  head () {
    return {
      script: this.script
    };
  },

  computed: {

    pictureComponent () {
      return this.posterUrl ? DefaultPicture : 'picture';
    },

    poster () {
      return Picture.create({
        title: this.title,
        sources: [{
          format: 'jpg',
          src: this.posterUrl,
          sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' },
          media: 'all'
        }],
        loadingSpinner: this.loadingSpinner
      }).toJSON();
    }
  },

  destroyed () {
    this.player && vimeo.remove(this.player);
  },

  methods: {

    onInit (e) {
      this.isTouchDevice = e.pointerType === 'touch';
      this.loading = true;
      this.src = `https://player.vimeo.com/video/${this.videoId}?dnt=1&autoplay=0&autopause=0&muted=${Number(this.isTouchDevice)}`;
      this.script = [load()];
    },

    onPlayerStateChange (state) {
      if (state.playing) {
        this.playing = true;
      } else if (state.ended || state.pause) {
        this.playing = false;
      }
      this.$emit('playing', this.playing);
    },

    async onLoad () {
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
.nuxt-speedkit__vimeo {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;

  & button {
    display: block;
    width: 100%;
    cursor: pointer;

    @nest .ready& {
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
}
</style>
