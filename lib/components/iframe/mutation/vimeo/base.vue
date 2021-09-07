<template>
  <component
    :is="design"
    :title="title"
    :src="src"
    :class="{ready}"
    :show="ready"
    class="youtube"
    allow="autoplay; fullscreen; picture-in-picture"
    @load="onLoad"
  >
    <template #placeholder>
      <default-button @click="onClick">
        <default-picture class="poster" :sources="posterSources" :loading-spinner="loadingSpinner" />
        <slot v-if="loading" name="loading-spinner" />
        <slot v-if="!ready && !loading" name="play" />
      </default-button>
    </template>
  </component>
</template>

<script>
import DefaultPicture from '../../../picture';
import DefaultIframe from '../../';
import DefaultButton from '../../../button';
import ImageSourceList from '../../../picture/classes/ImageSourceList';
import ImageSource from '../../../image/classes/ImageSource';
import LoadingSpinner from '../../../image/classes/LoadingSpinner';

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
    posterSources () {
      return new ImageSourceList([
        new ImageSource({
          src: this.posterUrl,
          sizes: { default: '100vw', xxs: '100vw', xs: '100vw', sm: '100vw', md: '100vw', lg: '100vw', xl: '100vw', xxl: '100vw' },
          media: 'all'
        })
      ], { retina: true });
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
}
</style>
