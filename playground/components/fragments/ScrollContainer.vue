<template>
  <div
    class="scroll-container"
    :class="{ 'direction-horizontal': directionHorizontal }"
  >
    <scroll-item
      v-for="(item, index) in items"
      :key="index"
      :class="`item item-${index}`"
      :index="index"
      v-bind="item"
    />
  </div>
</template>

<script setup lang="ts">
import type { Item } from '../elements/ScrollItem.vue';
import ScrollItem from '../elements/ScrollItem.vue';
defineProps({
  directionHorizontal: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array<Item>,
    required: true
  }
});
</script>

<style lang="postcss" scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  overflow: hidden scroll;

  & .item + .item {
    margin-top: em(20px);
  }

  &.direction-horizontal {
    display: flex;
    overflow: scroll hidden;

    & .item {
      flex: 0 0 50vw;
    }

    & .item + .item {
      margin-top: 0;
      margin-left: em(20px);
    }
  }
}
</style>
