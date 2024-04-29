<template>
  <div v-if="isServer" id="nuxt-booster-layer">
    <input id="nuxt-booster-layer-close" name="close" type="checkbox" />
    <div id="nuxt-booster-layer-content">
      <slot>
        <div>
          <p>Sorry, but you will have a limited user experience due to a…</p>

          <ul style="padding: 0; list-style: none">
            <!-- Displayed when javascript is disabled. -->
            <li id="nuxt-booster-message-nojs">disabled javascript</li>
            <!-- Displayed when browser does not support. -->
            <li id="nuxt-booster-message-unsupported-browser">
              outdated browser
            </li>
            <!-- Displayed when connection bandwidth is too low. -->
            <li id="nuxt-booster-message-reduced-bandwidth">slow connection</li>
            <!-- Displayed when user hardware are not sufficient.  -->
            <li id="nuxt-booster-message-weak-hardware">weak hardware</li>
            <!-- Displayed when the user batteries are not sufficient.  -->
            <li id="nuxt-booster-message-low-battery">low battery</li>
          </ul>

          <!-- Button to hide the layer with no javascript -->
          <button id="nuxt-booster-button-init-nojs">
            <label for="nuxt-booster-layer-close"> Apply without js </label>
          </button>

          <!-- Button for use without javascript and with fonts -->
          <button id="nuxt-booster-button-init-reduced-view">
            <label for="nuxt-booster-layer-close">
              Apply without scripts
            </label>
          </button>

          <!-- Button for activate javascript by bad connection or browser support -->
          <button id="nuxt-booster-button-init-app">
            Apply with all Features
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { getStyleDescription } from '#booster/utils/description';
import { useHead, ref, onMounted } from '#imports';

const isServer = ref(true);

onMounted(() => (isServer.value = false));

useHead({
  noscript: [
    getStyleDescription(
      `#nuxt-booster-layer button:not(#nuxt-booster-button-init-nojs) { display: none !important; } #nuxt-booster-button-nojs, #nuxt-booster-button-init-nojs, #nuxt-booster-message-nojs { display: initial !important; }`,
      true,
      'booster-layer'
    )
  ]
});
</script>

<style>
/*! purgecss start ignore */

#nuxt-booster-layer {
  width: 0;
  height: 0;
}

#nuxt-booster-layer input {
  display: none;
}

#nuxt-booster-layer input:checked + * {
  display: none;
}

#nuxt-booster-button-init-nojs {
  display: none;
}

#nuxt-booster-message-nojs {
  display: none;
}

#nuxt-booster-message-unsupported-browser {
  display: none;
}

#nuxt-booster-message-reduced-bandwidth {
  display: none;
}

#nuxt-booster-message-weak-hardware {
  display: none;
}

#nuxt-speedkit-message-low-battery {
  display: none;
}

/*! purgecss end ignore */
</style>
