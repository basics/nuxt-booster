<template>
  <content-container
    v-font="[$getFont('Merriweather', 400)]"
    class="video-vimeo"
  >
    <booster-vimeo v-bind="$attrs">
      <template #default="{ videoData }">
        <div class="description" v-html="videoData && videoData.description" />
      </template>
      <template #afterPlayer>
        <weak-hardware-overlay />
      </template>
    </booster-vimeo>
  </content-container>
</template>

<script setup lang="ts">
import BoosterVimeo from '#booster/components/BoosterVimeo.vue';
import WeakHardwareOverlay from '@/components/WeakHardwareOverlay.vue';
import { ContentContainer } from 'vue-semantic-structure';
import { useBoosterFonts } from '#imports';

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
