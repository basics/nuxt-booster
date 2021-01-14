<template>
  <lighthouse-widget v-if="'lh' in $route.query" v-bind="$attrs" />
</template>

<script>
export default {
  components: {
    LighthouseWidget: () => import('./lighthouse/Widget.vue')
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

<style scoped>

.nuxt-speedkit__lighthouse {
  --pi: 3.14159265358979;
  --score: 0;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  display: block;
  width: 60px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  pointer-events: none;
  background-color: white;
}

.nuxt-speedkit__lighthouse.ready {
  pointer-events: all;
}

.nuxt-speedkit__lighthouse > svg {
  display: block;
  width: 50px;
  height: 50px;
  margin: 5px;
}

.nuxt-speedkit__lighthouse > svg circle {
  fill: transparent;
  stroke: var(--color-status);
  stroke-width: 10;
  transform: rotate(-90deg);
  transform-origin: 50%;
}

.nuxt-speedkit__lighthouse > svg circle.pending {
  stroke-dasharray: calc(1.35 * var(--pi) * 45);
  stroke-dashoffset: calc(2 * var(--pi) * 45);
  animation: nuxt-speedkit-lighthouse-rotating 1s linear infinite;
}

.nuxt-speedkit__lighthouse > svg circle.ready {
  fill: var(--color-status);
  fill-opacity: 0.1;
  stroke-dasharray: calc(2 * var(--pi) * 45);
  stroke-dashoffset: calc(2 * var(--pi) * 45);
  animation: nuxt-speedkit-lighthouse-stroke var(--duration) ease-out forwards;
}

.nuxt-speedkit__lighthouse > svg line {
  stroke: var(--color-status);
  stroke-width: 10;
}

.nuxt-speedkit__lighthouse > svg text {
  font-size: 32px;
  fill: var(--color-status);
}

.nuxt-speedkit__lighthouse span {
  font-size: 12px;
  text-decoration: underline;
}

.nuxt-speedkit__lighthouse svg {
  display: inline;
  width: 12px;
  height: 12px;
  margin-left: 3px;
}

@keyframes nuxt-speedkit-lighthouse-stroke {
  to {
    stroke-dashoffset: var(--radian);
  }
}

@keyframes nuxt-speedkit-lighthouse-stroke {
  to {
    transform: rotate(270deg);
  }
}
</style>
