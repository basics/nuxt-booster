<template>
  <section v-font="[$getFont('Merriweather', 400)]" class="video-vimeo">
    <booster-vimeo v-bind="$attrs">
      <template #default="{ videoData }">
        <div class="description" v-html="videoData && videoData.description" />
      </template>
      <template #afterPlayer>
        <weak-hardware-overlay />
      </template>
    </booster-vimeo>
  </section>
</template>

<script setup>
import BoosterVimeo from '#booster/components/BoosterVimeo';
import WeakHardwareOverlay from '@/components/WeakHardwareOverlay';

const { $getFont } = useBoosterFonts();
defineProps({
  text: { type: String, default: null }
});
</script>

<style lang="postcss" scoped>
.video-vimeo {
  padding: em(40px) 10%;

  & .description {
    margin-top: em(20px);
  }
}
</style>
