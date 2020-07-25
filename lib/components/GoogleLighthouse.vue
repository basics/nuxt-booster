<script>
export default {
  props: {
    url: {
      type: String,
      default () {
        return null
      }
    },

    statsMetric: {
      type: String,
      default () {
        return 'performance'
      }
    }
  },

  data () {
    return {
      comp: null
    }
  },

  created () {
    this.$router.beforeEach((to, from, next) => {
      if (!to.query.lh && from.query.lh) {
        to.query.lh = from.query.lh
        next({ path: to.path, query: to.query })
      }
      next()
    })
  },

  async mounted () {
    if (this.$route.query.lh) {
      this.comp = (await import('./lighthouse/Widget.vue')).default
    }
  },

  render (createElement) {
    if (this.comp) {
      return createElement('component', { is: this.comp, props: { url: this.url } })
    } else {
      return null
    }
  }
}
</script>
