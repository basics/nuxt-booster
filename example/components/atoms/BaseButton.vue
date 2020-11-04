<template>
  <button class="atom-base-button" @click="onClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Button Label'
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="postcss">
.atom-base-button {
  padding: 10px 20px;
  color: currentColor;
  cursor: pointer;
  background: transparent;
  border: solid currentColor 1px;
  border-radius: 5px;
  outline: none;
  transition: transform 0.2s linear;
  appearance: none;

  &:active {
    transform: scale(0.95);
  }
}
</style>
