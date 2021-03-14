<template>
  <intersection-observer
    v-bind="intersectionObserver"
    @enter="onEnter"
  >
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
    },
    intersectionObserver: {
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
      this.$emit('load', e);
    },
    onEnter (e) {
      this.lazySrc = this.src;
      this.$emit('enter', e);
    }
  }
};
</script>
