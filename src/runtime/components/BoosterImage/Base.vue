<template>
  <img
    v-bind="$attrs"
    :srcset="srcset"
    :sizes="sizes"
    :width="width"
    :height="height"
    class="nuxt-booster-image"
    :class="classNames"
    :title="title"
    :alt="alt || title"
    :loading="loadingMode"
    :decoding="decodingMode"
    :crossorigin="resolvedCrossorigin"
    @load="onLoad"
  />
</template>

<script>
import { crossorigin as validatorCrossorigin } from '../../utils/validators';
import { getImageStyleDescription } from '#booster/utils/description';
import { getCrossorigin } from '#booster/utils/browser';
import Source from '#booster/components/BoosterImage/classes/Source';
import {
  useBoosterCritical,
  ref,
  useImage,
  useNuxtApp,
  useHead,
  computed
} from '#imports';

export default {
  inheritAttrs: false,

  props: {
    source: {
      type: [Source, Object],
      default: null
    },

    title: {
      type: String,
      required: true
    },

    alt: {
      type: String,
      default: null
    },

    crossorigin: {
      type: [Boolean, String],
      default() {
        return null;
      },
      validator: validatorCrossorigin
    }
  },

  emits: ['load'],

  async setup(props) {
    const $img = useImage();
    const $booster = useNuxtApp().$booster;
    const { isCritical } = useBoosterCritical();

    const resolvedCrossorigin = computed(() => {
      return getCrossorigin(props.crossorigin || $booster.crossorigin);
    });

    if (props.source) {
      const source = new Source(props.source);
      const config = $img.getSizes(source.src, {
        sizes: source.sizes,
        modifiers: source.getModifiers(),
        ...source.getOptions($booster)
      });

      const meta = ref(null);

      useHead(() => {
        if (meta.value) {
          return {
            style: [
              meta.value && getImageStyleDescription(meta, meta.value.className)
            ].filter(Boolean),
            link: [
              !(!config || !isCritical.value) &&
                (import.meta.server || process.env.prerender) &&
                new Source(source).getPreload(
                  config.srcset,
                  config.sizes,
                  resolvedCrossorigin.value
                )
            ].filter(Boolean),
            noscript: [
              (import.meta.server || process.env.prerender) && {
                key: 'img-nojs',
                children: `<style>img { content-visibility: unset !important; }</style>`
              }
            ].filter(Boolean)
          };
        }
      });

      try {
        meta.value = await source.getMeta(config.src, $booster);
      } catch (error) {
        console.error(error);
      }

      return {
        isCritical,
        config,
        meta,
        className: meta.value.className,
        resolvedCrossorigin
      };
    }
    return {
      isCritical,
      resolvedCrossorigin
    };
  },

  data() {
    return {
      className: null,
      loading: true,
      config: null,
      meta: null
    };
  },

  computed: {
    classNames() {
      return [{ loading: this.loading }].concat(this.className);
    },

    srcset() {
      return this.config?.srcset || this.config?.src;
    },

    sizes() {
      return this.config?.sizes;
    },

    width() {
      return this.$attrs.width || this.meta?.width;
    },

    height() {
      return this.$attrs.height || this.meta?.height;
    },

    loadingMode() {
      if (this.isCritical) {
        return 'eager';
      }
      return 'lazy';
    },

    decodingMode() {
      if (!this.source || new Source(this.source).format !== 'svg') {
        return 'async';
      }
      return 'sync';
    }
  },

  mounted() {
    this.loading = !this.$el.complete;
    if (!this.loading) {
      this.onLoad({ target: this.$el });
    }
  },

  methods: {
    onLoad(e) {
      this.loading = false;
      this.$emit('load', e.target);
    }
  }
};
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

.nuxt-booster-image {
  content-visibility: auto;
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/*! purgecss end ignore */
</style>
