<template>
  <figure class="nuxt-speedkit__speedkit-picture">
    <custom-no-script>
      <custom-picture :sources="resolvedSources" :alt="alt" :title="title" :crossorigin="crossorigin" />
    </custom-no-script>
    <custom-picture
      :sources="resolvedPlacholders"
      :preload="resolvedSources"
      :alt="alt"
      :title="title"
      :crossorigin="crossorigin"
      v-on="$listeners"
    />
    <figcaption v-if="hasSlot">
      <slot name="caption" />
    </figcaption>
  </figure>
</template>

<script>
import { getMimeTypeByFormat } from 'nuxt-speedkit/utils/mimeType';
import { getStyleDescription } from 'nuxt-speedkit/utils/description';
import CustomPicture from './customs/CustomPicture';
import CustomNoScript from './customs/CustomNoScript';

export default {
  components: {
    CustomPicture,
    CustomNoScript
  },

  props: {
    sources: {
      type: Array,
      default () {
        return [];
      }
    },

    placeholders: {
      type: Array,
      default () {
        return [];
      }
    },

    alt: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    crossorigin: {
      type: String,
      default () {
        return this.$crossorigin;
      }
    }
  },

  data () {
    return {
      resolvedPlacholders: this.getPlaceholders(),
      resolvedSources: this.getSources()
    };
  },

  head () {
    return {
      noscript: [
        getStyleDescription('.nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }', true)
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    };
  },

  computed: {
    hasSlot () {
      return this.$slots.caption;
    }
  },

  methods: {
    getPlaceholders () {
      return this.placeholders.map(({ media, url, format }) => {
        return {
          media,
          url,
          type: getMimeTypeByFormat(format)
        };
      });
    },
    getSources () {
      return this.sources.map(({ sizes, format, media }) => {
        const sortedSizes = sizes.sort((a, b) => a.width > b.width ? -1 : 1);
        return {
          media,
          srcset: sortedSizes.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
          sizes: sortedSizes.map(({ width, media: breakpoint }) => breakpoint ? `${breakpoint} ${width}px` : `${width}px`).join(', '),
          type: getMimeTypeByFormat(format)
        };
      });
    }
  }
};

</script>

<style scoped>
.nuxt-speedkit__speedkit-picture {
  width: 100%;
  height: inherit;
  margin: 0;
}
</style>
