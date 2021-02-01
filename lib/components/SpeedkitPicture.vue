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
import CustomPicture from 'nuxt-speedkit/components/customs/CustomPicture';
import CustomNoScript from 'nuxt-speedkit/components/customs/CustomNoScript';
import { getMimeTypeByFormat } from 'nuxt-speedkit/utils/mimeType';
import { getStyleDescription } from 'nuxt-speedkit/utils/description';

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
      default () {
        return '';
      }
    },
    title: {
      type: String,
      default () {
        return '';
      }
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
        return {
          media,
          srcset: sizes.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
          sizes: sizes.map(({ width, media }) => media ? `${media} ${width}px` : `${width}px`).reverse().join(', '),
          type: getMimeTypeByFormat(format)
        };
      });
    }
  }
};

</script>

<style lang="postcss" scoped>
.nuxt-speedkit__speedkit-picture {
  width: 100%;
  height: inherit;
  margin: 0;
}
</style>
