<template>
  <div v-font="$getFont(...font)">
    {{ font.join(' - ') }}
  </div>
</template>

<script setup>
import useFonts from '#speedkit/composables/fonts';
const { $getFont } = useFonts();
defineProps({
  font: {
    type: Array,
    required: true
  }
});
</script>

<style lang="postcss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  text-align: center;

  @media (width >= 768px) {
    font-size: 20px;
  }

  transition:
    background 1s linear,
    color 1s linear;

  &.font-active {
    color: #000;
    background: #ccc;
  }
}
</style>
