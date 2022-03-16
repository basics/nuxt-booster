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
    </speedkit-vimeo>
  </document-section>
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

  & .description {
    margin-top: 20px;
  }
}
</style>
