<template>
  <only-ssr :disabled="ignoreNoSsr">
    <div class="nuxt-speedkit__speedkit-layer">
      <slot>
        <button class="nuxt-speedkit__speedkit-layer__button">
          OK
        </button>
      </slot>
    </div>
  </only-ssr>
</template>

<script>

import OnlySsr from '../abstracts/OnlySsr'
export default {
  name: 'SpeedkitInfoLayer',

  components: {
    OnlySsr
  },

  props: {
    ignoreNoSsr: {
      type: Boolean,
      default: false
    }
  }
}
</script>
