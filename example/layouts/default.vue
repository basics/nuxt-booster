<template>
  <div>
    <organism-page-header :critical="Boolean(true)" />
    <Nuxt />
  </div>
</template>

<script>
import OrganismPageHeader from '@/components/organisms/PageHeader'

export default {
  components: {
    OrganismPageHeader
  }
}
</script>

<style lang="postcss">
html {
  height: stretch;
}

body {
  min-height: 100vh;
  min-height: stretch;
  margin: 0;
}
</style>
