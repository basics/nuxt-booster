<template>
  <only-ssr>
    <div id="nuxt-speedkit__speedkit-layer">
      <input name="close" id="nuxt-speedkit__speedkit-layer__close" type="checkbox">
      <div id="nuxt-speedkit__speedkit-layer__content">
        <slot>
          <div>
            <p>Sorry, but you will have a limited user experience due to a…</p>

            <ul style="padding: 0; list-style: none;">
              <!-- Displayed when javascript is disabled. -->
              <li id="nuxt-speedkit__message__nojs">
                disabled javascript
              </li>
              <!-- Displayed when browser does not support. -->
              <li id="nuxt-speedkit__message__unsupported-browser">
                outdated browser
              </li>
              <!-- Displayed when user hardware is not sufficient. -->
              <li id="nuxt-speedkit__message__outdated-device">
                outdated device
              </li>
              <!-- Displayed when connection is too slow. -->
              <li id="nuxt-speedkit__message__slow-connection">
                slow connection
              </li>
            </ul>

            <!-- Button to hide the layer with no javascript -->
            <button id="nuxt-speedkit__button__init-nojs">
              <label for="nuxt-speedkit__speedkit-layer__close">
                Apply without js
              </label>
            </button>

            <!-- Button for use without javascript and with fonts -->
            <button id="nuxt-speedkit__button__init-font" onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;">
              <label for="nuxt-speedkit__speedkit-layer__close">
                Apply with Fonts
              </label>
            </button>

            <!-- Button for activate javascript by bad connection or browser support -->
            <button id="nuxt-speedkit__button__init-app" onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;">
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
import OnlySsr from './abstracts/OnlySsr'
export default {
  name: 'SpeedkitLayer',

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
        getStyleDescription('#nuxt-speedkit__speedkit-layer button:not(#nuxt-speedkit__button__init-nojs) { display: none !important; } #nuxt-speedkit__message__nojs, #nuxt-speedkit__button__init-nojs { display: initial !important; }', true)
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    };
  }

}
</script>

<style>
#nuxt-speedkit__speedkit-layer {
  width: 0;
  height: 0;
}

#nuxt-speedkit__speedkit-layer input {
  display: none;
}

#nuxt-speedkit__speedkit-layer input:checked + * {
  display: none;
}

#nuxt-speedkit__button__init-nojs {
  display: none;
}

#nuxt-speedkit__message__nojs {
  display: none;
}

#nuxt-speedkit__message__unsupported-browser {
  display: none;
}

#nuxt-speedkit__message__outdated-device {
  display: none;
}

#nuxt-speedkit__message__slow-connection {
  display: none;
}
</style>
