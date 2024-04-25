<template>
  <button v-bind="$attrs">
    <slot name="default" />
  </button>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
});
</script>

<style lang="postcss" scoped>
button {
  padding: 0;
  margin: 0;
  overflow: visible;
  font: inherit;

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;

  /* inherit font & color from ancestor */
  color: inherit;
  background: transparent;
  border: none;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
}
</style>
