<template>
  <content-container
    v-font="[$getFont('Merriweather', 400)]"
    class="video-youtube"
  >
    <booster-youtube v-bind="$attrs">
      <template #afterPlayer>
        <weak-hardware-overlay />
      </template>
    </booster-youtube>
    <p v-if="text" v-html="text" />
  </content-container>
</template>

<script setup lang="ts">
import BoosterYoutube from '#booster/components/BoosterYoutube.vue';
import WeakHardwareOverlay from '@/components/WeakHardwareOverlay.vue';
import { ContentContainer } from 'vue-semantic-structure';
import { useBoosterFonts } from '#imports';

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
