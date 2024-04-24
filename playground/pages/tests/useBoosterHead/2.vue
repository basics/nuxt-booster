<template>
  <div class="test-transition">
    <nuxt-link to="/tests/useBoosterHead">Transition 1</nuxt-link> |
    <nuxt-link to="/tests/useBoosterHead/1">Transition 2</nuxt-link> |
    <nuxt-link to="/tests/useBoosterHead/2">Transition 3</nuxt-link>
    <div>
      <test-headline-c critical>Transition 3</test-headline-c>
    </div>
  </div>
</template>

<script setup>
import TestHeadlineC from '@/components/tests/TestHeadlineC';

definePageMeta({
  layout: 'transition',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
});
</script>

<style lang="postcss" scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
