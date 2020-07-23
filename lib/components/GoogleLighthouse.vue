<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" />
      <circle class="loading" :class="{ready}" cx="50" cy="50" r="45" />
      <text x="50" y="50" text-anchor="middle" alignment-baseline="central">
        100
      </text>
    </svg>
  </div>
</template>

<script>
import { getLighthouseMetrics } from 'lazy-resources/utils/lighthouse'

export default {
  data () {
    return {
      ready: false
    }
  },

  async mounted () {
    const result = await getLighthouseMetrics()
    this.ready = true
    console.log(result)
  }
}
</script>

<style lang="postcss" scoped>
div {
  --pi: 3.14159265358979;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  & svg {
    width: 50px;
    height: 50px;

    & circle {
      fill: transparent;
      stroke: grey;
      stroke-width: 10;
    }

    & circle.loading {
      fill: transparent;
      stroke: red;
      stroke-dasharray: calc(2 * var(--pi) * 45);
      stroke-dashoffset: calc(2 * var(--pi) * 45);

      &.ready {
        animation: stroke 2s ease-out forwards;
      }
    }

    & text {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 32px;
      fill: white;
    }
  }
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
