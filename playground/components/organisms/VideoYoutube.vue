<template>
  <document-section
    v-font="[
      $getFont('Merriweather', 400),
    ]"
    class="video-youtube"
  >
    <speedkit-youtube v-bind="$attrs" />
    <p v-if="text" v-html="text" />
  </document-section>
</template>

<script>

import SpeedkitYoutube from '#speedkit/components/SpeedkitYoutube';

export default {
  components: { SpeedkitYoutube },

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
