<template>
  <a
    :href="reportUrl"
    class="nuxt-speedkit__lighthouse"
    target="_blank"
    :style="style"
    :class="{ready: stats.isReady()}"
    :title="title"
  >
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
      <circle :class="stateClasses" cx="50" cy="50" r="45" />
      <line v-if="stats.isFailed()" x1="18" y1="18" x2="82" y2="82" />
      <text v-if="stats.isReady()" x="50" y="50" text-anchor="middle" alignment-baseline="central">
        {{ Math.round(score * 100) }}
      </text>
    </svg>
    <span v-if="stats.isReady()">
      Report<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
      </svg>
    </span>
  </a>
</template>

<script>
import { getLighthouseMetrics, getPendingStats } from 'nuxt-speedkit/utils/lighthouse'

export default {
  props: {
    statsMetric: {
      type: String,
      default () {
        return 'performance'
      }
    }
  },

  data () {
    return {
      url: '',
      stats: getPendingStats()
    }
  },

  computed: {
    style () {
      return {
        '--color-status': this.color,
        '--radian': this.radian * 45,
        '--duration': `${1000 / (Math.PI * 2) * this.radian}ms`
      }
    },

    stateClasses () {
      return {
        pending: this.stats.isPending(),
        fail: this.stats.isFailed(),
        ready: this.stats.isReady()
      }
    },

    title () {
      return `
        Performance: ${this.stats.getScoreOfMetric('performance') * 100}
        SEO: ${this.stats.getScoreOfMetric('seo') * 100}
        Accessibility: ${this.stats.getScoreOfMetric('accessibility') * 100}
        Best Practices: ${this.stats.getScoreOfMetric('best-practices') * 100}
      `.trim().replace(/( )+/g, '$1')
    },

    score () {
      return this.stats.getScoreOfMetric(this.statsMetric)
    },

    radian () {
      return 2 * Math.PI * (1 - this.score)
    },

    color () {
      return this.stats.getStateColorByMetric(this.statsMetric)
    },

    reportUrl () {
      return `https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=${global.encodeURI(this.url)}`
    }
  },

  watch: {
    $route (to, from) {
      if ('lh' in this.$route.query) {
        this.getMetrics()
      }
    }
  },

  mounted () {
    this.getMetrics()
  },

  methods: {
    async getMetrics () {
      this.stats = getPendingStats()
      try {
        this.stats = await getLighthouseMetrics(global.location.href)
        this.url = this.stats.data.crux.loadingExperience.initial_url
      } catch (errorStats) {
        this.stats = errorStats
        this.url = ''
      }
    }
  }
}

</script>
