<template>
  <document-section tag="main">
    <critical critical />
    <lazy />
  </document-section>
</template>

<script>
import speedkitHydrate from '#speedkit/hydrate';

export default {
  components: {
    Critical: speedkitHydrate(() => import('./components/Critical')),
    Lazy: speedkitHydrate(() => import('./components/Lazy'))
  },
  layout: 'blank'
};
</script>
