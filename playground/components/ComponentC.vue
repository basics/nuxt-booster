<template>
  <div class="component-c">
    Component C
    <pre>
      {{ { isCritical, currentCritical, critical } }}
    </pre>
  </div>
</template>

<script setup>
import { useSpeedkit } from '#speedkit/composables/speedkit';
const { isCritical, currentCritical, critical } = useSpeedkit();
</script>

<script>
export default {};
</script>
