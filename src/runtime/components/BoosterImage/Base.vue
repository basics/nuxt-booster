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

<script setup>
import { crossorigin as validatorCrossorigin } from '../../utils/validators';
import { getImageStyleDescription } from '#booster/utils/description';
import { getCrossorigin } from '#booster/utils/browser';
import Source from '#booster/components/BoosterImage/classes/Source';
import {
  useBoosterCritical,
  useImage,
  useNuxtApp,
  useHead,
  useAttrs
} from '#imports';
import { ref, computed, markRaw } from 'vue';

defineOptions({
  inheritAttrs: false
});

const $attrs = useAttrs();

const $props = defineProps({
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
});

const $emit = defineEmits(['load']);

const $img = useImage();
const $booster = useNuxtApp().$booster;
const { isCritical } = useBoosterCritical();

const loading = ref(true);
const meta = ref(null);
const config = ref(null);
const resolvedSource = ref(null);
const srcset = ref(null);
const sizes = ref(null);

const resolvedCrossorigin = computed(() => {
  return getCrossorigin($props.crossorigin || $booster.crossorigin);
});

const classNames = computed(() => {
  return [{ loading: loading.value }].concat(resolvedSource.value?.className);
});

const width = computed(() => {
  return $attrs.width || meta.value?.width;
});

const height = computed(() => {
  return $attrs.height || meta.value?.height;
});

const loadingMode = computed(() => {
  if (isCritical.value) {
    return 'eager';
  }
  return 'lazy';
});

const decodingMode = computed(() => {
  if (!$props.source || new Source($props.source).format !== 'svg') {
    return 'async';
  }
  return 'sync';
});

const onLoad = e => {
  loading.value = false;
  $emit('load', e.target);
};

if ($props.source) {
  resolvedSource.value = markRaw(new Source($props.source));
  config.value = $img.getSizes(resolvedSource.value.src, {
    sizes: resolvedSource.value.sizes,
    modifiers: resolvedSource.value.getModifiers(),
    ...resolvedSource.value.getOptions($booster)
  });

  srcset.value = config.value.srcset || config.value.src;
  sizes.value = config.value.sizes;

  const headData = ref({});

  useHead(() => {
    return headData.value;
  });

  try {
    meta.value = markRaw(
      await resolvedSource.value.getMeta(config.value.src, $booster)
    );
  } catch (error) {
    console.error(error);
  }
  headData.value = {
    style: [
      meta.value && getImageStyleDescription(resolvedSource.value)
    ].filter(Boolean),
    link: [
      !(!config.value || !isCritical.value) &&
        (import.meta.server || process.env.prerender) &&
        resolvedSource.value.getPreload(
          config.value.srcset,
          config.value.sizes,
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
