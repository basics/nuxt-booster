<script>
import { MODE, registerResolve } from 'nuxt-speedkit/utils/speedkit'
export default {
  abstract: true,

  props: {
    mode: {
      type: String,
      default: MODE.NONE
    },
    name: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      resolved: false
    }
  },
  mounted () {
    // register resolve
    const resolve = () => {
      this.resolved = true
      this.$forceUpdate()
    }

    registerResolve(this, resolve, { mode: this.mode, name: this.name })
  },
  render (h, test) {
    if (process.server || this.resolved) {
      return this.$scopedSlots.default
        ? this.$scopedSlots.default()
        : this.$slots.default[0]
    }

    const tag = this.$el ? this.$el.tagName : 'div'
    const vnode = h(tag)
    vnode.asyncFactory = {}
    vnode.isComment = true

    return vnode
  }

}
</script>
