<template>
  <div class="component-a">
    Component A <br /><component-b critical />
    <pre>
      {{ { isCritical, critical } }}
    </pre>
  </div>
</template>

<script setup>
import ComponentB from './ComponentB.vue';
import { useSpeedkit } from '#speedkit/composables/speedkit';
const { isCritical, critical } = useSpeedkit();
</script>

<script>
export default {
  components: {
    ComponentB
  }
};
</script>
