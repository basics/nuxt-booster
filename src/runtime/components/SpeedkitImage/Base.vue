<template>
  <img
    v-bind="$attrs"
    :srcset="srcset"
    :sizes="sizes"
    :width="width"
    :height="height"
    class="nuxt-speedkit-image"
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
import { getImageStyleDescription } from '#speedkit/utils/description';
import { getCrossorigin } from '#speedkit/utils';
import Source from '#speedkit/components/SpeedkitImage/classes/Source';
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
    const $speedkit = useNuxtApp().$speedkit;
    const { isCritical } = useBoosterCritical();

    const resolvedCrossorigin = computed(() => {
      return getCrossorigin(props.crossorigin || $speedkit.crossorigin);
    });

    if (props.source) {
      const source = new Source(props.source);
      const config = $img.getSizes(source.src, {
        sizes: source.sizes,
        modifiers: source.getModifiers(),
        ...source.getOptions($speedkit)
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
                new Source(source).getPreload(
                  config.srcset,
                  config.sizes,
                  resolvedCrossorigin.value
                )
            ].filter(Boolean),
            noscript: [
              {
                key: 'img-nojs',
                children:
                  '<style>img { content-visibility: unset !important; }</style>'
              }
            ]
          };
        }
      });

      meta.value = await source.getMeta(config.src, $speedkit);

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
  },

  methods: {
    onLoad(e) {
      this.loading = false;
      this.$emit('load', e.target.currentSrc);
    }
  }
};
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */

.nuxt-speedkit-image {
  content-visibility: auto;
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

/*! purgecss end ignore */
</style>
