<template>
  <only-ssr :disabled="disabled">
    <div class="nuxt-speedkit__speedkit-layer" v-if="!hide">
      <slot>
        <button class="nuxt-speedkit__speedkit-layer__button">
          OK
        </button>
      </slot>
    </div>
  </only-ssr>
</template>

<script>

import OnlySsr from './OnlySsr'
export default {
  name: 'SpeedkitInfoLayer',

  components: {
    OnlySsr
  },
  props: {
    hide: {
      type: Boolean,
      default: process.env.NUXT_SPEEDKIT_IGNORE_PERFORMANCE
    },
    ignoreNoSsr: {
      type: Boolean,
      default: process.env.NUXT_SPEEDKIT_IGNORE_PERFORMANCE
    }
  },
  computed: {
    disabled () {
      return this.ignoreNoSsr
    }
  }
}
</script>
