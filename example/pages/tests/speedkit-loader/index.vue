<template>
  <div>
    <critical critical />
    <lazy />
  </div>
</template>
<script>

import speedkitHydrate from 'nuxt-speedkit/hydrate';

export default {
  components: {
    Critical: speedkitHydrate(() => import('./components/Critical')),
    Lazy: speedkitHydrate(() => import('./components/Lazy'))
  },
  layout: 'blank'

};

</script>
