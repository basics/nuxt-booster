<template>
  <component :is="tag" v-font="preparedFont" class="element-headline">
    <slot>{{ content }}</slot>
  </component>
</template>

<script setup>
import { useBoosterFonts } from '#imports';
import { computed } from 'vue';

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
  let font = $props.font;
  if (font) {
    if (!(Array.isArray(font) && Array.isArray(font[0]))) {
      font = [font];
    }
    return [].concat(font).map(font => {
      if (!Array.isArray(font) && typeof font === 'object') {
        font = [font.name, font.weight, font.style, font.selector];
      }
      return $getFont(...font);
    });
  }
  return $getFont('Quicksand', 700, 'normal');
});
</script>
