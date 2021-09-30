<template>
  <div
    v-font="[
      $getFont('Merriweather', 400),
    ]"
  >
    <default-youtube v-bind="$attrs" />
    <p v-if="text" v-html="text" />
  </div>
</template>

<script>

import DefaultYoutube from 'nuxt-speedkit/components/Youtube';

export default {
  components: { DefaultYoutube },

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
