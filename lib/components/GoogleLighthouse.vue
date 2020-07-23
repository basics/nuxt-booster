<template>
  <div class="lighthouse" :style="style" :class="{ready}">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" />
      <circle class="loading" cx="50" cy="50" r="45" />
      <text v-if="ready" x="50" y="50" text-anchor="middle" alignment-baseline="central">
        {{ performance }}
      </text>
    </svg>
  </div>
</template>

<script>
import { getLighthouseMetrics } from 'lazy-resources/utils/lighthouse'

export default {
  data () {
    return {
      ready: false,
      stats: { performance: -1 }
    }
  },

  computed: {
    style () {
      return { '--color-status': getColorByScore(this.stats.performance), '--score': this.progress }
    },

    performance () {
      return this.stats.performance * 100
    },

    progress () {
      return (2 * Math.PI * 45 * (1 - this.stats.performance))
    }
  },

  async mounted () {
    const result = await getLighthouseMetrics()
    this.stats.performance = result.lhrSlim.find(item => item.id === 'performance').score
    this.ready = true

    console.log(result)
  }
}

function getColorByScore (score) {
  if (score >= 0.9) {
    return '#0cce6b'
  } else if (score >= 0.5) {
    return '#ffa400'
  } else if (score < 0) {
    return '#BDBDBD'
  } else {
    return '#ff4e42'
  }
}
</script>

<style lang="postcss" scoped>
.lighthouse {
  --pi: 3.14159265358979;
  --score: 0;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: white;

  & svg {
    display: block;
    width: 50px;
    height: 50px;

    & circle {
      fill: transparent;
      stroke: #bdbdbd;
      stroke-width: 10;
      transform: rotate(-90deg);
      transform-origin: 50%;

      @nest .ready& {
        opacity: 0.1;
        fill: var(--color-status);
        stroke: var(--color-status);
      }
    }

    & circle.loading {
      fill: transparent;
      stroke: var(--color-status);
      stroke-dasharray: calc(2 * var(--pi) * 45);
      stroke-dashoffset: calc(2 * var(--pi) * 45);

      @nest .ready& {
        opacity: 1;
        animation: stroke 2s ease-out forwards;
      }
    }

    & text {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 32px;
      fill: var(--color-status);
    }
  }
}

@keyframes stroke {
  to {
    stroke-dashoffset: var(--score);
  }
}
</style>
