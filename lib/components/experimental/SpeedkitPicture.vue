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
      const formats = getFormats(this.sources)
        .map(format => this.sources.map(({ src, sizes }) => this.$img.sizes(src, sizes, { format })).flat());

      return formats.map((sources) => {
        return {
          srcset: sources.map(({ width, url }) => width ? `${url} ${width}w` : url).join(', '),
          sizes: sources.map(({ width, media }) => media ? `${media} ${width}px` : `${width}px`).reverse().join(', '),
          type: getMimeTypeByFormat(sources[0].format)
        };
      });
    }
  }
};

function getFormats (sources) {
  return [...new Set(
    ['webp']
      // eslint-disable-next-line security/detect-unsafe-regex
      .concat(sources.map(source => source.src.match(/\.(?<ext>png|jpe?g)/i).groups.ext))
      .map((format) => {
        if (format === 'jpeg') {
          return 'jpg';
        }
        return format;
      })
  )];
}
</script>

<style lang="postcss" scoped>
.nuxt-speedkit__experimental__speedkit-picture {
  width: 100%;
  height: inherit;
  margin: 0;
}
</style>
