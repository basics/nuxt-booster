<template>
  <figure class="nuxt-speedkit__image-container">
    <slot />
    <span v-show="loading" class="loading" />
    <figcaption v-if="hasSlot">
      <slot name="caption" />
    </figcaption>
  </figure>
</template>

<script>
export default {

  props: {
    loading: {
      type: Boolean,
      default () {
        return false
      }
    }
  },

  computed: {
    hasSlot () {
      return this.$slots.caption
    }
  }
}
</script>
