<template>
  <div class="page-full-example-with-components">
    <component-experimental-stage :sources="sources" :critical="true" />
  </div>
</template>

<script>
import { hydrateWhenVisible } from 'vue-lazy-hydration'

export default {
  components: {
    ComponentExperimentalStage: hydrateWhenVisible(() => import('@/components/organisms/ExperimentalStage'))
  },

  asyncData () {
    return {
      sources: [
        { src: '/img/critical-2400.jpg', sizes: ['299', '300:599', '600:899', '900:1199'] },
        { src: '/img/lazy-2400.jpg', sizes: ['1200:1599', '1600:1899', '1900:1920'] }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.page-full-example-with-components {
  font-size: calc(20 / 16 * 1em);

  & > * {
    margin: 25px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

</style>
