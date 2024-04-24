<template>
  <div class="test-transition">
    <nuxt-link to="/tests/useBoosterHead">Transition 1</nuxt-link> |
    <nuxt-link to="/tests/useBoosterHead/1">Transition 2</nuxt-link> |
    <nuxt-link to="/tests/useBoosterHead/2">Transition 3</nuxt-link>
    <div>
      <test-headline-a critical>Transition 1</test-headline-a>
      <Transition name="fade">
        <test-headline-b v-if="show">Transition 1.1</test-headline-b>
      </Transition>
      <button @click="show = !show">Click here</button>
    </div>
  </div>
</template>

<script setup>
import TestHeadlineA from '@/components/tests/TestHeadlineA';
import TestHeadlineB from '@/components/tests/TestHeadlineB';

const show = ref(false);

definePageMeta({
  layout: 'transition',
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
});
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
