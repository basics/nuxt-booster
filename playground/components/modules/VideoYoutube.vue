<template>
  <section v-font="[$getFont('Merriweather', 400)]" class="video-youtube">
    <speedkit-youtube v-bind="$attrs">
      <template #afterPlayer>
        <weak-hardware-overlay />
      </template>
    </speedkit-youtube>
    <p v-if="text" v-html="text" />
  </section>
</template>

<script setup>
import SpeedkitYoutube from '#speedkit/components/SpeedkitYoutube';
import WeakHardwareOverlay from '@/components/WeakHardwareOverlay';
import useFonts from '#speedkit/composables/fonts';
const { $getFont } = useFonts();
defineProps({
  text: { type: String, default: null }
});
</script>

<style lang="postcss" scoped>
.video-youtube {
  padding: 0 10%;
}
</style>
