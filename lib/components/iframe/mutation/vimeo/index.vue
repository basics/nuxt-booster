<template>
  <base-iframe-youtube class="design-default youtube" v-bind="$attrs" v-on="$listeners">
    <template #loading-spinner>
      SPINNER
    </template>
    <template #play>
      PLAY
    </template>
  </base-iframe-youtube>
</template>

<script>
import BaseIframeYoutube from './base';

export default {
  components: {
    BaseIframeYoutube
  },

  inheritAttrs: false
};
</script>

<style lang="postcss" scoped>
.design-default {
  position: relative;
}
</style>
