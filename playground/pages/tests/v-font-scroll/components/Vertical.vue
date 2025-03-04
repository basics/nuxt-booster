<template>
  <preview-container>
    <template #default>
      <scroll-container id="verticalScroll" :items="items" />
    </template>
    <template #title>
      <p>Vertical Scroll - v-font</p>
    </template>
  </preview-container>
</template>

<script setup lang="ts">
import PreviewContainer from '@/components/PreviewContainer.vue';
import ScrollContainer from '@/components/fragments/ScrollContainer.vue';
import { ref, type Ref } from 'vue';
import type { Item } from '~/components/elements/ScrollItem.vue';

const items: Ref<Item[]> = ref([
  { font: { family: 'Montserrat Alternates', weight: 300, style: 'normal' } },
  { font: { family: 'Montserrat Alternates', weight: 300, style: 'italic' } },
  { font: { family: 'Montserrat Alternates', weight: 400, style: 'normal' } },
  { font: { family: 'Montserrat Alternates', weight: 400, style: 'italic' } },
  { font: { family: 'Montserrat Alternates', weight: 700, style: 'normal' } },
  { font: { family: 'Montserrat Alternates', weight: 700, style: 'italic' } }
]);
</script>
