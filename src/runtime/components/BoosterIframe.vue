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

<script setup lang="ts">
import { useBoosterComponentObserver } from '#imports';
import { ref, watch } from 'vue';

const $props = defineProps<{
  src: string;
  title?: string;
  componentObserver: {
    trackVisibility: boolean;
    delay: number;
  };
}>();

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
