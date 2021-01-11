<template>
  <div class="page-full-example-with-components">
    <component-experimental-stage :src="src" :critical="true" />
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
      src: '/img/critical-2400.jpg'
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
