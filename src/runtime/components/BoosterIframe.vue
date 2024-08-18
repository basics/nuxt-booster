<template>
  <iframe
    ref="iframe"
    :src="lazySrc"
    class="nuxt-booster-iframe"
    v-bind="$attrs"
    :title="title"
    @load="loaded = $event"
  />
</template>

<script setup>
import { useBoosterComponentObserver } from '#imports';
import { ref, watch } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: null
  },

  title: {
    type: String,
    default: null
  },

  componentObserver: {
    type: Object,
    default() {
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

watch(loaded, e => {
  if (e.target.src) {
    emit('load', e);
  }
});

const { el: iframe, inView } = useBoosterComponentObserver();

watch(inView, () => {
  lazySrc.value = props.src;
  emit('enter');
});
</script>

<style lang="postcss" scoped>
iframe {
  border: none;
}
</style>
