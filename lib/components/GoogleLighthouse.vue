<template>
  <lighthouse-widget v-if="!!$route.query.lh" v-bind="$attrs" />
</template>

<script>
export default {
  components: {
    LighthouseWidget: () => import('./lighthouse/Widget.vue')
  },

  created () {
    this.$router.beforeEach((to, from, next) => {
      if (!to.query.lh && from.query.lh) {
        to.query.lh = from.query.lh
        next({ path: to.path, query: to.query })
      }
      next()
    })
  }
}
</script>
