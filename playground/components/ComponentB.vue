<template>
  <div class="component-a">
    Component B<br /><component-c :critical="false" />
    <pre>
      {{ { isCritical, critical } }}
    </pre>
  </div>
</template>

<script setup>
import ComponentC from './ComponentC.vue';
import { useSpeedkit } from '#speedkit/composables/speedkit';

const { isCritical, critical } = useSpeedkit();
</script>

<script>
export default {
  components: {
    ComponentC
  }
};
</script>
