<template>
  <button v-font="fonts.getFont('Comic Neue', 700, 'italic')" class="atom-base-button">
    {{ label }}
  </button>
</template>

<script>
export default {
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
