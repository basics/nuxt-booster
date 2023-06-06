<template>
  <div class="merriweather" style="height: 100vh">
    <div>
      <p>Is Critical: {{ isCritical }}</p>
      <p>
        Merriweather:
        <span v-font="$getFont('Merriweather')">Merriweather</span>
      </p>
      <fieldset>
        <legend>Trigger Update</legend>
        <button @click="updateText = 'I am updated'">Trigger Update</button
        ><br />
        <span v-font="$getFont('Merriweather', 700)">{{ updateText }}</span>
      </fieldset>
      <fieldset>
        <legend>Trigger Active</legend>
        <button @click="active = true">Trigger Active</button><br />
        <span v-if="active" v-font="$getFont('Merriweather', 700)"
          >I am active!</span
        >
      </fieldset>
    </div>
  </div>
</template>

<script setup>
import { useSpeedkit } from '#speedkit/composables/speedkit';
const { $getFont, isCritical } = useSpeedkit();
</script>

<script>
export default {
  data() {
    return {
      updateText: 'Update me!',
      active: false
    };
  }
};
</script>
