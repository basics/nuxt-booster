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
import { createURLPlaceholder } from 'nuxt-speedkit/utils/placeholder';

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
      placeholders: [],
      resolvedSources: this.getSources()
    };
  },

  async fetch () {
    this.placeholders = await this.fetchMeta();
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
      return createURLPlaceholder(this.sources, ({ sizes, placeholder }) => {
        return [
          { url: placeholder.url },
          sizes
        ];
      });
    },
    getSources () {
      return this.sources.map(({ media, sizes }) => {
        return {
          media,
          srcset: sizes.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
          sizes: sizes.map(({ width, media }) => media ? `${media} ${width}px` : `${width}px`).reverse().join(', '),
          type: getMimeTypeByFormat(sizes[0].format)
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
