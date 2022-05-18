<template>
  <div v-if="active" class="nuxt-speedkit-weak-hardware-overlay">
    <slot>
      Area is disabled for performance reasons.<br><button id="nuxt-speedkit-button-init-app">
        Click for activation
      </button>
    </slot>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      active: process.server
    };
  }
};

</script>
