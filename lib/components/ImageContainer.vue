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
      default: false
    }
  },

  computed: {
    hasSlot () {
      return this.$slots.caption;
    }
  }
};
</script>

<style scoped>

.nuxt-speedkit__image-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}

.nuxt-speedkit__image-container > span.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 10%;
  transform: translate(-50%, -50%);
}

.nuxt-speedkit__image-container > span.loading::before {
  box-sizing: border-box;
  display: block;
  padding-top: 100%;
  content: '';
}

.nuxt-speedkit__image-container > span.loading::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: block;
  content: '';
  border: 3px solid #ccc;
  border-top-color: #07d;
  border-radius: 50%;
  animation-name: spinner;
  animation-duration: 0.6s;
  animation-timing-function: linear;
  animation-delay: 0.35s;
  animation-iteration-count: infinite;
  will-change: transform;
}

</style>
