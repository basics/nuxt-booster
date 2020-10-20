<template>
  <only-ssr :disabled="ignoreNoSsr">
    <div class="speedkit_layer">
      <slot>
        <button class="speedkit_layer__button">
          OK
        </button>
      </slot>
    </div>
  </only-ssr>
</template>

<script>

import OnlySsr from 'lazy-resources/abstracts/OnlySsr'
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
