<template>
  <lighthouse-widget v-if="'lh' in $route.query" v-bind="$attrs" />
</template>

<script>
export default {
  components: {
    LighthouseWidget: () => import('nuxt-speedkit/components/GoogleLighthouse/Widget.vue')
  },

  created () {
    this.$router.beforeEach((to, from, next) => {
      if (!('lh' in to.query) && 'lh' in from.query) {
        to.query.lh = from.query.lh;
        next({ path: to.path, query: to.query });
      }
      next();
    });
  }
};
</script>
