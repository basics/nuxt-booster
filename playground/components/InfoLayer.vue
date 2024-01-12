<template>
  <booster-layer class="info-layer" v-bind="$attrs">
    <div>
      <p v-font="$getFont('Quicksand', 400, 'normal')">
        Sorry, but you will have a limited user experience due to a…
      </p>
      <ul v-font="$getFont('Quicksand', 700, 'normal')">
        <li id="nuxt-booster-message-nojs">disabled javascript</li>
        <li id="nuxt-booster-message-unsupported-browser">outdated browser</li>
        <li id="nuxt-booster-message-reduced-bandwidth">reduced-bandwidth</li>
        <li id="nuxt-booster-message-weak-hardware">weak hardware</li>
        <li id="nuxt-booster-message-low-battery">low battery</li>
      </ul>
      <div class="info-layer-buttons">
        <base-button
          id="nuxt-booster-button-init-nojs"
          for="nuxt-booster-layer-close"
        >
          Yes
        </base-button>
        <base-button
          id="nuxt-booster-button-init-reduced-view"
          tag="label"
          for="nuxt-booster-layer-close"
        >
          No
        </base-button>
        <base-button id="nuxt-booster-button-init-app" label="Yes" />
      </div>
    </div>
  </booster-layer>
</template>

<script setup>
import { getStyleDescription } from '#booster/utils/description';
import { useHead, useBoosterFonts } from '#imports';
import BoosterLayer from '#booster/components/BoosterLayer';
import BaseButton from '@/components/base/Button';
const { $getFont } = useBoosterFonts();

useHead({
  noscript: [
    getStyleDescription(
      '.info-layer > div { animation-delay: initial !important; }',
      true
    )
  ]
});

defineOptions({ inheritAttrs: false });
</script>

<style lang="postcss" scoped>
.info-layer {
  & :deep(#nuxt-booster-layer-content) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 25%);
    backdrop-filter: blur(em(7px));
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 0.2s;
    animation-delay: 3s;
    animation-fill-mode: forwards;

    & > div {
      padding: 10px;
      color: #fff;
      text-align: center;
      background-color: rgb(0 0 0 / 60%);
      box-shadow: 0 0 em(10px) rgb(0 0 0 / 60%);
      transform: translateY(-100%);
      animation-name: fall-down;
      animation-duration: 0.2s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
    }
  }

  &.nuxt-booster-layer-visible {
    & :deep(#nuxt-booster-layer-content) {
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

.info-layer-buttons {
  margin: em(10px) 0;

  & > * {
    margin: 0 em(5px);
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
