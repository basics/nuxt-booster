<template>
  <div
    v-font="$getFont(font.family, font.weight, font.style)"
    class="scroll-item"
  >
    {{ [font.family, font.weight, font.style].join(' - ') }}
  </div>
</template>

<script setup lang="ts">
import type { FontFamily, FontStyle, FontWeight } from '#build/types/booster';
import { useBoosterFonts, type PropType } from '#imports';

const { $getFont } = useBoosterFonts();

export type Item = {
  font: {
    family: FontFamily;
    weight: FontWeight;
    style: FontStyle;
  };
};

defineProps({
  font: {
    type: Object as PropType<Item['font']>,
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
