<template>
  <div v-if="isServer" class="nuxt-speedkit-weak-hardware-overlay">
    <slot>
      Area is disabled for performance reasons.<br />
      <button id="nuxt-speedkit-button-init-app">Click for activation</button>
    </slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const isServer = ref(true);

onMounted(() => (isServer.value = false));
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
.nuxt-speedkit-weak-hardware-overlay {
  html:not(.nuxt-speedkit-reduced-view) & {
    display: none;
  }
}

/*! purgecss end ignore */
</style>
