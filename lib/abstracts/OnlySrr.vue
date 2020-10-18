<script>
export default {
  abstract: true,
  render () {
    if (process.server) {
      return this.$slots.default[0]
    }
    return null
  }
}
</script>
