
<template>
  <component-observer
    v-bind="componentObserver"
    @enterView="onEnterView"
  >
    <iframe
      :src="lazySrc"
      class="nuxt-speedkit-iframe"
      v-bind="$attrs"
      frameborder="0"
      @load="onLoad"
    />
  </component-observer>
</template>

<script>

import ComponentObserver from 'nuxt-speedkit/components/abstracts/ComponentObserver';

export default {

  components: {
    ComponentObserver
  },

  inheritAttrs: false,

  props: {

    src: {
      type: String,
      default: null
    },

    componentObserver: {
      type: Object,
      default () {
        return {
          trackVisibility: true,
          delay: 350
        };
      }
    }

  },

  data () {
    return {
      lazySrc: null
    };
  },

  methods: {
    onLoad (e) {
      if (e.target.src) {
        this.$emit('load', e);
      }
    },

    onEnterView (e) {
      this.lazySrc = this.src;
      this.$emit('enter', e);
    }
  }

};

</script>

<style lang="postcss" scoped>
/* empty */
</style>
