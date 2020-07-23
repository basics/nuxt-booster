<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" />
    </svg>
  </div>
</template>

<script>
import { getLighthouseMetrics } from 'lazy-resources/utils/lighthouse'

export default {
  async mounted () {
    console.log(await getLighthouseMetrics())
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
      stroke: red;
      stroke-dasharray: calc(2 * var(--pi) * 45);
      stroke-dashoffset: calc(2 * var(--pi) * 45);
      stroke-width: 10;
      animation: stroke 2s ease-out forwards;
    }
  }
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
