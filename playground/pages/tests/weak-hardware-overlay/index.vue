<template>
  <div :class="{ mounted }">
    <div>
      WeakHardwareOverlay
      <booster-weak-hardware-overlay />
    </div>
    <booster-layer />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import { ref, onMounted } from 'vue';

import BoosterLayer from '#booster/components/BoosterLayer.vue';
import BoosterWeakHardwareOverlay from '#booster/components/WeakHardwareOverlay.vue';

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

definePageMeta({
  layout: 'blank'
});
</script>
