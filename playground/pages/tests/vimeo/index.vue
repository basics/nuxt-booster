<template>
  <div>
    <default
      v-for="(item, index) in items"
      :id="`vimeo-${index}`"
      v-bind="item"
      :key="item.vimeoUrl"
      :critical="index < 1"
    />
  </div>
</template>

<script setup>
import boosterHydrate from '#booster/hydrate';
const Default = boosterHydrate(() => import('./components/Default'));
const items = [
  {
    vimeoUrl: 'https://vimeo.com/288344114',
    title: 'Vimeo 1'
  },
  {
    vimeoUrl: 'https://vimeo.com/288344114',
    title: 'Vimeo 2',
    autoplay: true
  }
];
</script>
