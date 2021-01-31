<template>
  <figure class="nuxt-speedkit__speedkit-picture">
    <custom-no-script>
      <custom-picture :sources="resolvedSources" :alt="alt" :title="title" :crossorigin="crossorigin" />
    </custom-no-script>
    <custom-picture
      :sources="placeholders"
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
import { createURLPlaceholderSync } from 'nuxt-speedkit/utils/placeholder';
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
      placeholders: this.fetchMeta(),
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
    fetchMeta () {
      return createURLPlaceholderSync(this.sources, ({ sizes, placeholder }) => {
        return [
          { url: placeholder.url },
          sizes
        ];
      });
    },
    getSources () {
      return this.sources.reduce((result, { media, sizes }) => {
        const formats = getFormats(sizes);
        result.push(...formats.map((format) => {
          const filteredSizes = sizes.filter(size => size.format === format);
          return {
            media,
            srcset: filteredSizes.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
            sizes: filteredSizes.map(({ width, media }) => media ? `${media} ${width}px` : `${width}px`).reverse().join(', '),
            type: getMimeTypeByFormat(format)
          };
        }));
        return result;
      }, []);
    }
  }
};

function getFormats (sizes) {
  return Array.from(new Set(sizes.map(size => size.format.replace('jpeg', 'jpg'))))
    .sort((a, b) => a === 'webp' && !b !== 'webp' ? -1 : 1);
}

</script>

<style lang="postcss" scoped>
.nuxt-speedkit__speedkit-picture {
  width: 100%;
  height: inherit;
  margin: 0;
}
</style>
