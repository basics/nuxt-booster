<template>
  <iframe
    ref="iframe"
    :src="lazySrc"
    class="nuxt-speedkit-iframe"
    v-bind="$attrs"
    frameborder="0"
    @load="loaded = $event"
  />
</template>

<script setup>
import { ref, watch } from 'vue';
import useComponentObserver from '#speedkit/composables/componentObserver';

const props = defineProps({
  src: {
    type: String,
    default: null
  },

  componentObserver: {
    type: Object,
    default () {
      return {
        trackVisibility: true,
        delay: 350
      };
    }
  }
});

const emit = defineEmits(['load', 'enter']);

const lazySrc = ref(null);
const loaded = ref(false);

watch(loaded, (e) => {
  if (e.target.src) {
    emit('load', e);
  }
});

const { el: iframe, inView } = useComponentObserver();

watch(inView, () => {
  lazySrc.value = props.src;
  emit('enter');
});
</script>

<style lang="postcss" scoped>
/* empty */
</style>
