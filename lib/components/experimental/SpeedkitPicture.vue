<template>
  <figure class="nuxt-speedkit__experimental__speedkit-picture">
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
import { createPlaceholder, createURLPlaceholder } from 'nuxt-speedkit/utils/placeholder';

import { getMimeTypeByFormat } from 'nuxt-speedkit/utils/mimeType';
import { getStyleDescription } from 'nuxt-speedkit/utils/description';
import CustomPicture from '../customs/CustomPicture';
import CustomNoScript from '../customs/CustomNoScript';

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
        getStyleDescription('.nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }', true)
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    };
  },

  computed: {
    hasSlot () {
      return this.$slots.caption;
    }
  },

  watch: {
    async sources () {
      this.placeholders = await this.fetchMeta();
    }
  },

  methods: {
    async fetchMeta () {
      if (process.server) {
        return await createPlaceholder(this.sources, ({ src, sizes }) => {
          return Promise.all([
            this.$img(src, { width: 30 }),
            this.$img.sizes(src, sizes),
            this.$img.getMeta(src)
          ]);
        }, this.isCritical);
      } else {
        return createURLPlaceholder(this.sources, ({ src, sizes }) => {
          return Promise.all([
            this.$img(src, { width: 30 }),
            this.$img.sizes(src, sizes)
          ]);
        });
      }
    },

    getSources () {
      return getFormats(this.sources).map((format) => {
        return this.sources.map(source => [source]).map(([{ src, sizes }], index) => {
          const sources = this.$img.sizes(src, sizes, { format });
          const sortedSources = sources.sort((a, b) => a.width > b.width ? -1 : 1);
          return {
            media: index < (this.sources.length - 1) && `(min-width: ${sources[sources.length - 1].width}px)`,
            srcset: sortedSources.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
            sizes: sortedSources.map(({ width, media }) => media ? `${media} ${width}px` : `${width}px`).join(', '),
            type: getMimeTypeByFormat(sources[0].format)
          };
        });
      }).flat();
    }
  }
};

function extname (value) {
  // eslint-disable-next-line security/detect-unsafe-regex
  const matches = value.match(/\.(?<ext>png|jpe?g)/i);
  return matches && matches.groups.ext;
}

function getFormats (sources) {
  return Array.from(new Set(
    ['webp']
      .concat(sources.map(source => extname(source.src) || 'jpg'))
      .map((format) => {
        if (format === 'jpeg') {
          return 'jpg';
        }
        return format;
      })
  ));
}
</script>

<style scoped>
.nuxt-speedkit__experimental__speedkit-picture {
  width: 100%;
  height: inherit;
  margin: 0;
}
</style>
