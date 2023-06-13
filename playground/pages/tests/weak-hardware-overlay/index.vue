<template>
  <div :class="{ mounted }">
    <div>
      WeakHardwareOverlay
      <speedkit-weak-hardware-overlay />
    </div>
    <speedkit-layer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { definePageMeta } from '#imports';

import SpeedkitLayer from '#speedkit/components/SpeedkitLayer';
import SpeedkitWeakHardwareOverlay from '#speedkit/components/WeakHardwareOverlay';

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

definePageMeta({
  layout: 'blank'
});
</script>
