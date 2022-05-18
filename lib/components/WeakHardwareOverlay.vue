<template>
  <only-ssr>
    <div class="nuxt-speedkit-weak-hardware-overlay">
      <slot>
        Area is disabled for performance reasons.<br><button id="nuxt-speedkit-button-init-app">
          Click for activation
        </button>
      </slot>
    </div>
  </only-ssr>
</template>

<script>

import OnlySsr from 'nuxt-speedkit/components/abstracts/OnlySsr';

export default {
  components: {
    OnlySsr
  }
};

</script>

<style lang="postcss" scoped>
.nuxt-speedkit-weak-hardware-overlay {
  @nest html:not(.nuxt-speedkit-reduced-view) & {
    display: none;
  }
}
</style>
