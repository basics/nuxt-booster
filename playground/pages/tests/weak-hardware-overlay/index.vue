<template>
  <main :class="{ mounted }" tag="main">
    <div>
      WeakHardwareOverlay
      <speedkit-weak-hardware-overlay />
    </div>
    <speedkit-layer />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import SpeedkitLayer from '#speedkit/components/SpeedkitLayer';
import SpeedkitWeakHardwareOverlay from '#speedkit/components/WeakHardwareOverlay';

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

defineOptions({
  layout: 'blank'
});
</script>
