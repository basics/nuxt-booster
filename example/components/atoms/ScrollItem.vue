<template>
  <div
    v-font="getFont(index)"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: -1
    },
    title: {
      type: String,
      default: 'Scroll Item'
    }
  },
  methods: {
    getFont (index) {
      return [
        this.$getFont('Quicksand', 300, 'normal'),
        this.$getFont('Quicksand', 400, 'normal'),
        this.$getFont('Quicksand', 500, 'normal'),
        this.$getFont('Quicksand', 600, 'normal'),
        this.$getFont('Quicksand', 700, 'normal')
      ][Number(index) % 4];
    }
  }
};
</script>

<style lang="postcss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  transition: background 1s linear, color 1s linear;

  &.font-active {
    color: #000;
    background: #ccc;
  }
}
</style>
