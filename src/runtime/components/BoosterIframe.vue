<template>
  <iframe
    ref="iframe"
    :src="lazySrc"
    class="nuxt-booster-iframe"
    v-bind="$attrs"
    :title="title"
    @load="loaded = $event"
  />
</template>

<script>
import { useBoosterComponentObserver } from '#imports';
export default {
  props: {
    src: {
      type: String,
      default: null
    },

    title: {
      type: String,
      default: null
    },

    componentObserver: {
      type: Object,
      default() {
        return {
          trackVisibility: true,
          delay: 350
        };
      }
    }
  },
  emits: ['load', 'enter'],
  setup() {
    const { el: iframe, inView } = useBoosterComponentObserver();
    return { iframe, inView };
  },
  data() {
    return {
      lazySrc: null,
      loaded: false
    };
  },
  watch: {
    loaded(e) {
      if (e.target.src) {
        this.$emit('load', e);
      }
    },
    inView() {
      this.lazySrc = this.src;
      this.$emit('enter');
    }
  }
};
</script>

<style lang="postcss" scoped>
iframe {
  border: none;
}
</style>
