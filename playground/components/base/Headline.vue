<template>
  <component :is="tag || 'h1'" v-font="preparedFont" class="element-headline">
    <slot>{{ content }}</slot>
  </component>
</template>

<script setup lang="ts">
import { useBoosterFonts } from '#imports';
import { computed } from 'vue';
import type { DirectiveGetFontResult } from '../../../src/module';

const { $getFont } = useBoosterFonts();

const $props = defineProps<{
  tag?: string;
  content?: string;
  font?: DirectiveGetFontResult | DirectiveGetFontResult[];
}>();

const preparedFont = computed(() => {
  let font: DirectiveGetFontResult[] = [$getFont('Quicksand', 700, 'normal')];
  if ($props.font) {
    if (!Array.isArray($props.font)) {
      font = [$props.font as DirectiveGetFontResult];
    } else {
      font = $props.font as DirectiveGetFontResult[];
    }
  }
  return font;
});
</script>
