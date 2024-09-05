<template>
  <div v-if="isServer" class="nuxt-booster-weak-hardware-overlay">
    <slot>
      Area is disabled for performance reasons.<br />
      <button class="nuxt-booster-button-init-app">Click for activation</button>
    </slot>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isServer: true
    };
  },
  mounted() {
    this.isServer = false;
  }
};
</script>

<style lang="postcss" scoped>
/*! purgecss start ignore */
.nuxt-booster-weak-hardware-overlay {
  html:not(.nuxt-booster-reduced-view) & {
    display: none;
  }
}

/*! purgecss end ignore */
</style>
