<template>
  <component
    :is="tag"
    v-font="$getFont('Quicksand', 700, 'normal')"
    class="element-headline"
  >
    <slot>{{ content }}</slot>
  </component>
</template>

<script setup>
import { useBoosterFonts } from '#imports';
const { $getFont } = useBoosterFonts();
</script>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1'
    },
    content: {
      type: String,
      default: 'Headline'
    }
  }
};
</script>
