<template>
  <button v-font="$getFont('Quicksand', 400, 'normal')" class="atom-base-button" @click="onClick">
    <slot><span>{{ label }}</span></slot>
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

  emits: ['click'],
  methods: {
    onClick (e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="postcss">
.atom-base-button {
  color: currentColor;
  cursor: pointer;
  background: transparent;
  border: solid currentColor em(1px);
  border-radius: em(5px);
  outline: none;
  transition: transform 0.1s ease-in;
  appearance: none;
  will-change: transform;

  & > * {
    display: block;
    padding: em(10px) em(20px);
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
