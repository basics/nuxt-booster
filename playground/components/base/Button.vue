<template>
  <component
    :is="resolveTag"
    v-font="$getFont('Quicksand', 400, 'normal')"
    class="base-button"
    @click="$emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </component>
</template>

<script setup lang="ts">
import { useBoosterFonts } from '#imports';
import { computed, useAttrs } from 'vue';

const { $getFont } = useBoosterFonts();
defineEmits(['click']);

defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  label: {
    type: String,
    default: 'Button Label'
  }
});

const $attrs = useAttrs();

const resolveTag = computed(() => {
  if ($attrs.for) {
    return 'label';
  } else if ($attrs.to) {
    return 'NuxtLink';
  }

  return 'button';
});
</script>

<style lang="postcss" scoped>
.base-button {
  --font-size: 16;

  padding: em(8px, var(--font-size)) em(16px, var(--font-size));
  font-size: em(var(--font-size));
  color: currentColor;
  appearance: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  border: solid currentColor em(1px, var(--font-size));
  border-radius: em(5px, var(--font-size));
  transition: transform 0.1s ease-in;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
