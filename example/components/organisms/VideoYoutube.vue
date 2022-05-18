<template>
  <document-section
    v-font="[
      $getFont('Merriweather', 400),
    ]"
    class="video-youtube"
  >
    <speedkit-youtube v-bind="$attrs">
      <template #afterPlayer>
        <weak-hardware-overlay />
      </template>
    </speedkit-youtube>
    <p v-if="text" v-html="text" />
  </document-section>
</template>

<script>

import SpeedkitYoutube from 'nuxt-speedkit/components/SpeedkitYoutube';
import WeakHardwareOverlay from '@/components/atoms/WeakHardwareOverlay';

export default {
  components: { SpeedkitYoutube, WeakHardwareOverlay },

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
.video-youtube {
  padding: 0 10%;
}

</style>
