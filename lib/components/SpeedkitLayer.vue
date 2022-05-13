<template>
  <only-ssr>
    <div id="nuxt-speedkit-layer">
      <input id="nuxt-speedkit-layer-close" name="close" type="checkbox">
      <div id="nuxt-speedkit-layer-content">
        <slot>
          <div>
            <p>Sorry, but you will have a limited user experience due to a…</p>

            <ul style="padding: 0; list-style: none;">
              <!-- Displayed when javascript is disabled. -->
              <li id="nuxt-speedkit-message-nojs">
                disabled javascript
              </li>
              <!-- Displayed when browser does not support. -->
              <li id="nuxt-speedkit-message-unsupported-browser">
                outdated browser
              </li>
              <!-- Displayed when connection is too slow. -->
              <li id="nuxt-speedkit-message-slow-connection">
                slow connection
              </li>
              <!-- Displayed when by bad perforamce. -->
              <li id="nuxt-speedkit-message-bad-performance">
                basd performance
              </li>
            </ul>

            <!-- Button to hide the layer with no javascript -->
            <button id="nuxt-speedkit-button-init-nojs">
              <label for="nuxt-speedkit-layer-close">
                Apply without js
              </label>
            </button>

            <!-- Button for use without javascript and with fonts -->
            <button id="nuxt-speedkit-button-init-font" onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;">
              <label for="nuxt-speedkit-layer-close">
                Apply with Fonts
              </label>
            </button>

            <!-- Button for activate javascript by bad connection or browser support -->
            <button id="nuxt-speedkit-button-init-app" onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;">
              Apply with all Features
            </button>
          </div>
        </slot>
      </div>
    </div>
  </only-ssr>
</template>

<script>
import { getStyleDescription } from 'nuxt-speedkit/utils/description';
import OnlySsr from 'nuxt-speedkit/components/abstracts/OnlySsr';

export default {

  components: {
    OnlySsr
  },

  props: {
    critical: {
      type: Boolean,
      default () {
        return true;
      }
    }
  },

  head () {
    return {
      noscript: [
        getStyleDescription('#nuxt-speedkit-layer button:not(#nuxt-speedkit-button-init-nojs) { display: none !important; } #nuxt-speedkit-button-nojs, #nuxt-speedkit-button-init-nojs { display: initial !important; }', true)
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    };
  }

};
</script>

<style>
/*! purgecss start ignore */

#nuxt-speedkit-layer {
  width: 0;
  height: 0;
}

#nuxt-speedkit-layer input {
  display: none;
}

#nuxt-speedkit-layer input:checked + * {
  display: none;
}

#nuxt-speedkit-button-init-nojs {
  display: none;
}

#nuxt-speedkit-message-nojs {
  display: none;
}

#nuxt-speedkit-message-unsupported-browser {
  display: none;
}

#nuxt-speedkit-message-slow-connection {
  display: none;
}

#nuxt-speedkit-message-bad-performance {
  display: none;
}

/*! purgecss end ignore */
</style>
