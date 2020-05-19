<template>
  <button class="atom-base-button">
    {{ label }}
  </button>
</template>

<script>
export default {
  lazyResources: {
    fontFamily: ['FontButton']
  },
  props: {
    label: {
      type: String,
      default: 'Button Label'
    }
  }
}
</script>

<style lang="postcss">
.atom-base-button {
  /* empty */
}
</style>
