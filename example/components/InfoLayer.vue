<template>
  <speedkit-layer>
    <div class="info_layer">
      <div>
        <p>{{ text }}</p>
        <ul>
          <custom-no-script><li>disabled javascript</li></custom-no-script>
          <li id="nuxt-speedkit__unsupported-browser">
            outdated browser
          </li>
          <li id="nuxt-speedkit__outdated-device">
            outdated device
          </li>
          <li id="nuxt-speedkit__slow-connection">
            slow connection
          </li>
        </ul>
        <button>
          <label for="close">
            No
          </label>
        </button>

        <!-- Set auto init for request load delay -->
        <button onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;" class="info_layer__button nuxt-speedkit__speedkit-layer__button">
          {{ buttonLabel }}
        </button>
      </div>
    </div>
  </speedkit-layer>
</template>

<script>

import SpeedkitLayer from 'nuxt-speedkit-components/SpeedkitLayer'
import CustomNoScript from 'nuxt-speedkit/components/customs/CustomNoScript'

export default {
  components: {
    SpeedkitLayer,
    CustomNoScript
  },
  data () {
    return {
      text: 'Sorry, but you will have a limited user experience due to a ...',
      buttonLabel: 'OK'
    }
  }
}
</script>

<style lang="postcss">
.info_layer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 0;
  animation-name: fade-in;
  animation-duration: 0.2s;
  animation-delay: 0.5s;
  backdrop-filter: blur(calc(7 / 16 * 1em));
  animation-fill-mode: forwards;

  & > div {
    padding: 10px;
    font-family: sans-serif;
    font-weight: bold;
    color: #f5f7fa;
    text-align: center;
    background-color: #2c3e50;
    box-shadow: 0 0 calc(10 / 16 * 1em) rgba(255, 255, 255, 0.6);
    transform: translateY(-50%);
    animation-name: fall-down;
    animation-duration: 0.2s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;

    @media (prefers-color-scheme: dark) {
      color: #2f495e;
      background-color: #fff;
      box-shadow: 0 0 calc(10 / 16 * 1em) rgba(0, 0, 0, 0.6);
    }

    & ul {
      padding: 0;
      margin: 0;

      & > li {
        display: none;
      }
    }
  }
}

@keyframes fade-in {
  100% {
    opacity: 1;
  }
}

@keyframes fall-down {
  100% {
    transform: translateY(0%);
  }
}

</style>
