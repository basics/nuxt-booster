<template>
  <div>
    <critical critical />
    <lazy />
  </div>
</template>
<script>

import speedkitLoader from 'nuxt-speedkit/loader';

export default {
  components: {
    Critical: speedkitLoader(() => import('./components/Critical')),
    Lazy: speedkitLoader(() => import('./components/Lazy'))
  },
  layout: 'blank'

};

</script>
