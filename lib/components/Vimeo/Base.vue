<template>
  <div
    class="nuxt-speedkit__vimeo"
    :title="title"
    :src="src"
    :class="{ready}"
    @load="onLoad"
  >
    <iframe :src="src" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" :title="title" @load="onLoad" />
    <default-button @click="onClick">
      <default-picture class="poster" v-bind="poster" />
      <slot v-if="loading" name="loading-spinner" />
      <slot v-if="!ready && !loading" name="play" />
    </default-button>
  </div>
</template>

<script>
import DefaultPicture from '../Picture';
import DefaultButton from '../Button';
import ImageSourceList from '../Picture/classes/ImageSourceList';
import ImageSource from '../Image/classes/ImageSource';
import LoadingSpinner from '../Image/classes/LoadingSpinner';
import Picture from '../Picture/classes/Picture';

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
      videoId: new URL(this.url).pathname.replace('/', ''),
      posterUrl: null,
      loading: false,
      ready: false,
      src: null
    };
  },

  fetchKey: 'vimeo',
  async fetch () {
    const { get } = await import('axios');
    const result = await get(`https://vimeo.com/api/v2/video/${this.videoId}.json`);
    this.posterUrl = result.data[0].thumbnail_large.replace(/(.+)(\/video\/[\w]+)_([\d]+)$/, `/vimeo$2_${result.data[0].width}`);
  },

  computed: {

    poster () {
      return (new Picture({
        title: this.title,
        sources: this.posterSources,
        loadingSpinner: this.loadingSpinner
      })).toJSON();
    },
    posterSources () {
      return new ImageSourceList({
        list: [
          new ImageSource({
            src: this.posterUrl,
            sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' },
            media: 'all'
          })
        ],
        options: { retina: true }
      });
    }
  },

  methods: {
    onClick (e) {
      this.loading = true;
      this.src = `https://player.vimeo.com/video/${this.videoId}?dnt=1&autoplay=1&autopause=0&muted=${Number(e.pointerType === 'touch')}`;
    },

    onLoad () {
      this.loading = false;
      this.ready = true;
    }
  }
};
</script>

<style lang="postcss" scoped>
.nuxt-speedkit__vimeo {
  position: relative;
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
