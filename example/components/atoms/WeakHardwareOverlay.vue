<template>
  <speedkit-weak-hardware-overlay>
    <div v-font="$getFont('Montserrat Alternates', 400, 'normal')">
      <p>{{ text }}</p>
      <button id="nuxt-speedkit-button-init-app">
        {{ buttonText }}
      </button>
    </div>
  </speedkit-weak-hardware-overlay>
</template>

<script>

import SpeedkitWeakHardwareOverlay from 'nuxt-speedkit/components/WeakHardwareOverlay';
export default {
  components: { SpeedkitWeakHardwareOverlay },

  props: {
    text: {
      type: String,
      default: 'To improve your experience, extensive features have been disabled.'
    },
    buttonText: {
      type: String,
      default: 'Click here to enable them.'
    }
  }

};

</script>

<style lang="postcss" scoped>
.nuxt-speedkit-weak-hardware-overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
  backdrop-filter: blur(em(4px));

  & div {
    font-size: 14px;
    text-align: center;
  }
}
</style>
