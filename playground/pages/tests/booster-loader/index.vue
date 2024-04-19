<template>
  <document-section tag="main">
    <critical critical />
    <lazy />
  </document-section>
</template>

<script>
import boosterHydrate from '#booster/hydrate';

export default {
  components: {
    Critical: boosterHydrate(() => import('./components/Critical')),
    Lazy: boosterHydrate(() => import('./components/Lazy'))
  },
  layout: 'blank'
};
</script>
