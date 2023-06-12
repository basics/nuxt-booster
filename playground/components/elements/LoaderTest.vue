<template>
  <div class="loader-test" :class="{ active, critical: isCritical }">
    <span>{{ active ? 'active' : 'inactive' }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from '#imports';

const active = ref(false);

onMounted(() => (active.value = true));
</script>

<style lang="postcss" scoped>
.loader-test {
  display: flex;
  color: white;
  background: red;

  &:not(.critical) {
    transition: background 0.2s 1s linear;
  }

  &.active {
    background: green;
  }
}
</style>
