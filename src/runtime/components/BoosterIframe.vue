<template>
  <iframe
    ref="iframe"
    :src="lazySrc"
    class="nuxt-booster-iframe"
    v-bind="$attrs"
    :title="title"
    @load="onLoad"
  />
</template>

<script lang="ts" setup>
import { useBoosterComponentObserver } from '#imports';
import { ref, watch } from 'vue';

const $props = defineProps({
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
    default: () => ({
      trackVisibility: true,
      delay: 350
    })
  }
});

const $emit = defineEmits(['load', 'enter']);

const { el: iframe, inView } = useBoosterComponentObserver();

const lazySrc = ref<string | undefined>(undefined);

function onLoad(e: HTMLElementEventMap['load']) {
  const target = e.target as HTMLIFrameElement;
  if (target?.src) {
    $emit('load', e);
  }
}

watch(inView, () => {
  lazySrc.value = $props.src;
  $emit('enter');
});
</script>

<style lang="postcss" scoped>
iframe {
  border: none;
}
</style>
