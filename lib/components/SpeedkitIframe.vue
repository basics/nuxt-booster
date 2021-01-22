<template>
  <intersection-observer @enter="onEnter">
    <iframe
      :src="lazySrc"
      v-bind="$attrs"
      class="nuxt-speedkit__speedkit-iframe"
      loading="lazy"
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
    title: {
      type: String,
      default () {
        return null;
      }
    },
    src: {
      type: String,
      default () {
        return null;
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
