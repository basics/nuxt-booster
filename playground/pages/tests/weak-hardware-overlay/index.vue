<template>
  <div :class="{ mounted }">
    <div>
      WeakHardwareOverlay
      <booster-weak-hardware-overlay />
    </div>
    <booster-layer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import BoosterLayer from '#booster/components/BoosterLayer';
import BoosterWeakHardwareOverlay from '#booster/components/WeakHardwareOverlay';

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

definePageMeta({
  layout: 'blank'
});
</script>
