<template>
  <div
    class="montserrat-alternates"
    :class="{ hydrated }"
    style="height: 100vh">
    <div>
      <p>Is Critical: {{ isCritical }}</p>
      <p>
        Montserrat Alternates:
        <span v-font="$getFont('Montserrat Alternates')"
          >Montserrat Alternates</span
        >
      </p>
      <fieldset>
        <legend>Trigger Update</legend>
        <button @click="updateText = 'I am updated'">Trigger Update</button
        ><br />
        <span v-font="$getFont('Montserrat Alternates', 700)">{{
          updateText
        }}</span>
      </fieldset>
      <fieldset>
        <legend>Trigger Active</legend>
        <button @click="active = true">Trigger Active</button><br />
        <span v-if="active" v-font="$getFont('Montserrat Alternates', 700)"
          >I am active!</span
        >
      </fieldset>
    </div>
  </div>
</template>

<script setup>
import useFonts from '#speedkit/composables/fonts';
const { $getFont, isCritical } = useFonts();
</script>

<script>
export default {
  data() {
    return {
      updateText: 'Update me!',
      active: false,
      hydrated: false
    };
  },
  mounted() {
    this.hydrated = true;
  }
};
</script>
