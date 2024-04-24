<template>
  <component :is="tag" v-font="preparedFont" class="element-headline">
    <slot>{{ content }}</slot>
  </component>
</template>

<script setup>
import { useBoosterFonts } from '#imports';
const { $getFont } = useBoosterFonts();

const $props = defineProps({
  tag: {
    type: String,
    default: 'h1'
  },
  content: {
    type: String,
    default: 'Headline'
  },
  font: {
    type: Object,
    default: undefined
  }
});
const preparedFont = computed(() => {
  if ($props.font) {
    return $props.font;
  }
  return $getFont('Quicksand', 700, 'normal');
});
</script>
