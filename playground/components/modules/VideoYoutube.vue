<template>
  <section v-font="[$getFont('Merriweather', 400)]" class="video-youtube">
    <booster-youtube v-bind="$attrs">
      <template #afterPlayer>
        <weak-hardware-overlay />
      </template>
    </booster-youtube>
    <p v-if="text" v-html="text" />
  </section>
</template>

<script setup>
import BoosterYoutube from '#booster/components/BoosterYoutube';
import WeakHardwareOverlay from '@/components/WeakHardwareOverlay';

const { $getFont } = useBoosterFonts();
defineProps({
  text: { type: String, default: null }
});
</script>

<style lang="postcss" scoped>
.video-youtube {
  padding: em(40px) 10%;
}
</style>
