<template>
  <preview-container>
    <template #default>
      <div>
        <default-youtube v-bind="youtube" />
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

import DefaultYoutube from '#booster/components/BoosterYoutube.vue';
import PreviewContainer from '@/components/PreviewContainer.vue';

useBoosterCritical();

const props = defineProps({
  youtubeUrl: {
    type: String,
    default: 'https://www.youtube.com/watch?v=cLKvbhfVBUU'
  },

  title: {
    type: String,
    default: 'Youtube'
  },

  autoplay: {
    type: Boolean,
    default: false
  }
});

const youtube = computed(() => {
  return {
    url: props.youtubeUrl,
    title: props.title,
    autoplay: props.autoplay
  };
});
</script>
