<template>
  <document-section
    v-font="[
      $getFont('Merriweather', 400),
    ]"
    class="video-vimeo"
  >
    <speedkit-vimeo v-bind="$attrs">
      <template #default="{videoData}">
        <div class="description" v-html="videoData && videoData.description" />
      </template>
      <template #afterPlayer>
        <weak-hardware-overlay />
      </template>
    </speedkit-vimeo>
  </document-section>
</template>

<script>

import SpeedkitVimeo from 'nuxt-speedkit/components/SpeedkitVimeo';
import WeakHardwareOverlay from '@/components/atoms/WeakHardwareOverlay';

export default {
  components: { SpeedkitVimeo, WeakHardwareOverlay },

  inheritAttrs: false,

  props: {
    text: {
      type: String,
      default: null
    }
  }

};
</script>

<style lang="postcss" scoped>
.video-vimeo {
  padding: 0 10%;

  & .description {
    margin-top: em(20px);
  }
}
</style>
