<template>
  <div>
    <default
      v-for="(item, index) in items"
      :id="`youtube-${index}`"
      v-bind="item"
      :key="item.youtubeUrl"
      :critical="index < 1"
    />
  </div>
</template>

<script setup lang="ts">
import { useBoosterHydrate } from '#imports';

const hydrate = useBoosterHydrate();

const Default = hydrate(() => import('./components/Default.vue'));
const items = [
  {
    youtubeUrl: 'https://www.youtube.com/watch?v=cLKvbhfVBUU',
    title: 'Youtube 1'
  },
  {
    youtubeUrl: 'https://www.youtube.com/watch?v=YE7VzlLtp-4',
    title: 'Youtube 2',
    autoplay: true
  }
];
</script>
