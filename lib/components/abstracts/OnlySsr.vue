<script>
export default {
  abstract: true,

  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      isServer: true
    };
  },

  mounted () {
    this.isServer = false;
  },

  render () {
    if ((this.disabled || this.isServer) && this.$slots.default) {
      return this.$slots.default[0];
    }
    return null;
  }
};
</script>
