<template>
  <main>
    <critical critical />
    <lazy />
  </main>
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
