<template>
  <speedkit-layer class="info-layer">
    <div>
      <p v-font="$getFont('Quicksand', 400, 'normal')">
        Sorry, but you will have a limited user experience due to a…
      </p>
      <ul v-font="$getFont('Quicksand', 700, 'normal')">
        <li id="nuxt-speedkit__message__nojs">
          disabled javascript
        </li>
        <li id="nuxt-speedkit__message__unsupported-browser">
          outdated browser
        </li>
        <li id="nuxt-speedkit__message__outdated-device">
          outdated device
        </li>
        <li id="nuxt-speedkit__message__slow-connection">
          slow connection
        </li>
      </ul>
      <div class="info-layer__buttons">
        <base-button id="nuxt-speedkit__button__init-nojs">
          <label for="nuxt-speedkit__speedkit-layer__close">
            OK
          </label>
        </base-button>
        <base-button id="nuxt-speedkit__button__init-font" onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;">
          <label for="nuxt-speedkit__speedkit-layer__close">
            No
          </label>
        </base-button>
        <base-button id="nuxt-speedkit__button__init-app" label="Yes" onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;" />
      </div>
    </div>
  </speedkit-layer>
</template>

<script>

import BaseButton from '@/components/atoms/BaseButton';
import SpeedkitLayer from 'nuxt-speedkit/components/SpeedkitLayer';
import { getStyleDescription } from 'nuxt-speedkit/utils/description';

export default {
  components: {
    BaseButton,
    SpeedkitLayer
  },
  data () {
    return {
      hydrate: false
    };
  },
  head () {
    return {
      noscript: [
        getStyleDescription('.info-layer > div { animation-delay: initial !important; }', true)
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    };
  }
};
</script>

<style lang="postcss" scoped>
.info-layer {
  & >>> #nuxt-speedkit__speedkit-layer__content {
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
    animation-delay: 3s;
    backdrop-filter: blur(calc(7 / 16 * 1em));
    animation-fill-mode: forwards;

    & > div {
      padding: 10px;
      color: #fff;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6);
      box-shadow: 0 0 calc(10 / 16 * 1em) rgba(0, 0, 0, 0.6);
      transform: translateY(-100%);
      animation-name: fall-down;
      animation-duration: 0.2s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
    }
  }

  &.nuxt-speedkit__speedkit-layer--visible {
    & >>> #nuxt-speedkit__speedkit-layer__content {
      animation-delay: initial;
    }
  }
}

ul {
  padding: 0;
  margin: 0;

  & > li {
    display: none;
  }
}

.info-layer__buttons {
  margin: calc(10 / 16 * 1em) 0;

  & > * {
    margin: 0 calc(5 / 16 * 1em);
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
