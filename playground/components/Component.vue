<template>
  <div>
    <div>
      <pre>{{ $getFont('Quicksand') }}<span v-font="$getFont('Quicksand')">Test 1</span></pre>
    </div>
    <div>
      <pre>{{ $getFont('Merriweather') }}<span v-font="$getFont('Merriweather')">Test 2</span></pre>
    </div>
    <!-- <pre>{{ $getFont('Quicksand') }}</pre>
    <span v-font="$getFont('Quicksand')">Test</span>
    <component-a /> -->
    <!-- <pre>
      {{ ({ isCritical, criticalParent }) }}
    </pre>  -->
  </div>
</template>

<script setup>
import ComponentA from './ComponentA.vue';
import { useSpeedkit } from '#speedkit/composables/speedkit';
const { $getFont } = useSpeedkit();
</script>

<script>
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ComponentA
  }
};
</script>

<style scoped lang="postcss">
div {
  height: 200vh;

  & > div {
    height: 100%;
  }
}
</style>
