<template>
  <picture>
    <source
      v-for="(source, index) in sources"
      :key="index"
      :srcset="source.dataURI || source.srcset || source.url"
      :media="source.media"
      :sizes="source.sizes"
      :type="source.type"
    >
    <img :class="{'in-progress': inProgress}" loading="lazy" :alt="alt" :title="title" :crossorigin="crossorigin">
  </picture>
</template>

<script>
export default {
  props: {
    sources: {
      type: Array,
      default () {
        return []
      }
    },

    alt: {
      type: String,
      default () {
        return ''
      }
    },
    title: {
      type: String,
      default () {
        return ''
      }
    },

    crossorigin: {
      type: String,
      default () {
        return 'anonymous'
      }
    },

    inProgress: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
picture {
  display: block;
  height: inherit;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    filter: blur(0);
    transition-duration: 350ms;
    transition-property: filter;
    object-fit: cover;

    &.in-progress {
      filter: blur(10px);
    }
  }
}
</style>
