<template>
  <div
    v-font="[
      $getFont('Merriweather', 400),
    ]"
  >
    <default-vimeo v-bind="$attrs" />
    <p v-if="text" v-html="text" />
  </div>
</template>

<script>

import DefaultVimeo from 'nuxt-speedkit/components/Vimeo';

export default {
  components: { DefaultVimeo },

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
div {
  padding: 0 10%;
}
</style>
