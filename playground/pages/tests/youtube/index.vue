<template>
  <div>
    <default
      v-for="(item, index) in items"
      :id="`youtube-${index}`"
      v-bind="item"
      :key="item.youtubeUrl"
      :critical="index < 1" />
  </div>
</template>

<script setup>
import speedkitHydrate from '#speedkit/hydrate';
const Default = speedkitHydrate(() => import('./components/Default'));
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
