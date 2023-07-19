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
import useFonts from '#speedkit/composables/fonts';
const { $getFont } = useFonts();
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
