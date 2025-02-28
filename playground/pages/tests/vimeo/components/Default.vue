<template>
  <preview-container>
    <template #default>
      <div>
        <default-vimeo v-bind="vimeo" />
      </div>
    </template>
    <template #title>
      <p v-html="title" />
    </template>
  </preview-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBoosterCritical } from '#imports';

import DefaultVimeo from '#booster/components/BoosterVimeo.vue';
import PreviewContainer from '@/components/PreviewContainer.vue';

useBoosterCritical();

const props = defineProps({
  vimeoUrl: {
    type: String,
    default: 'https://vimeo.com/288344114'
  },

  title: {
    type: String,
    default: 'Vimeo'
  },

  autoplay: {
    type: Boolean,
    default: false
  }
});

const vimeo = computed(() => {
  return {
    url: props.vimeoUrl,
    autoplay: props.autoplay
  };
});
</script>
