<template>
  <preview-container>
    <template #default>
      <scroll-container
        id="horizontalScroll"
        direction-horizontal
        :items="items"
      />
    </template>
    <template #title>
      <p>Horizontal Scroll - v-font</p>
    </template>
  </preview-container>
</template>

<script setup lang="ts">
import PreviewContainer from '@/components/PreviewContainer.vue';
import ScrollContainer from '@/components/fragments/ScrollContainer.vue';
import { ref, type Ref } from 'vue';
import type { Item } from '~/components/elements/ScrollItem.vue';

const items: Ref<Item[]> = ref([
  { font: { family: 'Merriweather', weight: 300, style: 'normal' } },
  { font: { family: 'Merriweather', weight: 300, style: 'italic' } },
  { font: { family: 'Merriweather', weight: 400, style: 'normal' } },
  { font: { family: 'Merriweather', weight: 400, style: 'italic' } },
  { font: { family: 'Merriweather', weight: 700, style: 'normal' } },
  { font: { family: 'Merriweather', weight: 700, style: 'italic' } }
]);
</script>
