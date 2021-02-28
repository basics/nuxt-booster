<template>
  <intersection-observer track-visibility @enter="onEnter">
    <iframe
      :src="lazySrc"
      v-bind="$attrs"
      class="nuxt-speedkit__speedkit-iframe"
      :loading="loading"
      :title="title"
      @load="onLoad"
    />
  </intersection-observer>
</template>

<script>
import IntersectionObserver from './abstracts/IntersectionObserver';

export default {
  components: {
    IntersectionObserver
  },

  props: {
    loading: {
      type: String,
      default: 'lazy'
    },
    title: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      lazySrc: null
    };
  },

  methods: {
    onLoad (e) {
      this.$emit('load', e);
    },
    onEnter (e) {
      this.lazySrc = this.src;
      this.$emit('enter', e);
    }
  }
};
</script>
