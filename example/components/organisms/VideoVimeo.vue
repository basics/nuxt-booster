<template>
  <div
    v-font="[
      $getFont('Merriweather', 400),
    ]"
    class="video-vimeo"
  >
    <speedkit-vimeo v-bind="$attrs" />
    <p v-if="text" v-html="text" />
  </div>
</template>

<script>

import SpeedkitVimeo from 'nuxt-speedkit/components/SpeedkitVimeo';

export default {
  components: { SpeedkitVimeo },

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
}
</style>
