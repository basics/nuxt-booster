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

<style  lang="postcss" scoped>
/*! purgecss start ignore */

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

  &.ready {
    pointer-events: all;
  }

  & > svg {
    display: block;
    width: 50px;
    height: 50px;
    margin: 5px;

    & circle {
      fill: transparent;
      stroke: var(--color-status);
      stroke-width: 10;
      transform: rotate(-90deg);
      transform-origin: 50%;

      &.pending {
        stroke-dasharray: calc(1.35 * var(--pi) * 45);
        stroke-dashoffset: calc(2 * var(--pi) * 45);
        animation: nuxt-speedkit-lighthouse-rotating 1s linear infinite;
      }

      &.ready {
        fill: var(--color-status);
        fill-opacity: 0.1;
        stroke-dasharray: calc(2 * var(--pi) * 45);
        stroke-dashoffset: calc(2 * var(--pi) * 45);
        animation: nuxt-speedkit-lighthouse-stroke var(--duration) ease-out forwards;
      }
    }

    & line {
      stroke: var(--color-status);
      stroke-width: 10;
    }

    & text {
      font-size: 32px;
      fill: var(--color-status);
    }

    & span {
      font-size: 12px;
      text-decoration: underline;
    }

    & svg {
      display: inline;
      width: 12px;
      height: 12px;
      margin-left: 3px;
    }
  }
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

/*! purgecss end ignore */
</style>
