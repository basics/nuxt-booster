<template>
  <component
    :is="tag"
    v-font="$getFont('Quicksand', 400, 'normal')"
    class="base-button"
    @click="$emit('click', e)">
    <slot>{{ label }}</slot>
  </component>
</template>

<script setup>
import { useFonts } from '#speedkit/composables/fonts';
const { $getFont } = useFonts();
</script>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    label: {
      type: String,
      default: 'Button Label'
    }
  },
  emits: ['click']
};
</script>

<style lang="postcss" scoped>
.base-button {
  padding: em(8px) em(16px);
  color: currentColor;
  cursor: pointer;
  background: transparent;
  border: solid currentColor em(1px);
  border-radius: em(5px);
  outline: none;
  transition: transform 0.1s ease-in;
  appearance: none;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
