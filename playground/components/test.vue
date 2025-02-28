<template>
  <booster-weak-hardware-overlay>
    To improve your experience, extensive features have been disabled.<br />
    <button class="nuxt-booster-button-init-app">
      Click here to enable them.
    </button>
  </booster-weak-hardware-overlay>
</template>

<script setup lang="ts">
import BoosterWeakHardwareOverlay from '#booster/components/WeakHardwareOverlay.vue';
</script>

<style lang="postcss" scoped>
.nuxt-booster-weak-hardware-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
  backdrop-filter: blur(em(2px));
}
</style>
