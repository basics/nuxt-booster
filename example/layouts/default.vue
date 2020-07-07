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
body {
  margin: 0;
}

html,
body,
#__nuxt,
#__layout,
#__layout > div,
#__layout > div > div {
  height: 100%;
}

</style>
