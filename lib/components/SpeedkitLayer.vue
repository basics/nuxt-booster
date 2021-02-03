<template>
  <only-ssr :disabled="disabled">
    <div id="nuxt-speedkit__speedkit-layer" v-if="!hide">
      <input name="close" id="nuxt-speedkit__speedkit-layer__close" type="checkbox">
      <div id="nuxt-speedkit__speedkit-layer__content">
        <slot>
          <div>

            <p>Sorry, but you will have a limited user experience due to a…</p>

            <ul style=" padding: 0; list-style: none;">
              <!-- Displayed when javascript no active. -->
              <custom-no-script>
                <li>disabled javascript</li>
              </custom-no-script>

              <!-- Displayed when browser does not support. -->
              <li id="nuxt-speedkit__unsupported-browser">
                outdated browser
              </li>
              <!-- Displayed when user hardware is not sufficient. -->
              <li id="nuxt-speedkit__outdated-device">
                outdated device
              </li>
              <!-- Displayed when connection is too slow. -->
              <li id="nuxt-speedkit__slow-connection">
                slow connection
              </li>
            </ul>

            <!-- Button to hide the layer with no javascript -->
            <custom-no-script>
              <button id="nuxt-speedkit__button__init-nojs" onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;">
                <label for="nuxt-speedkit__speedkit-layer__close">
                  OK
                </label>
              </button>
            </custom-no-script>

            <!-- Button for use without without javascript and with fonts -->
            <button id="nuxt-speedkit__button__init-font" onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;">
              <label for="nuxt-speedkit__speedkit-layer__close">
                No
              </label>
            </button>

            <!-- Button for activate javascript by bad connection -->
            <button id="nuxt-speedkit__button__init-app" onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;">
              Yes
            </button>

          </div>
        </slot>
      </div>
    </div>
  </only-ssr>
</template>

<script>
import { getStyleDescription } from 'nuxt-speedkit/utils/description';
import CustomNoScript from 'nuxt-speedkit/components/customs/CustomNoScript';

import OnlySsr from './abstracts/OnlySsr'
export default {
  name: 'SpeedkitLayer',

  components: {
    OnlySsr,
    CustomNoScript
  },


  head () {
    return {
      noscript: [
        getStyleDescription('#nuxt-speedkit__speedkit-layer noscript.nuxt-speedkit__noscript ~ button { display:none; }', true)
      ],
      __dangerouslyDisableSanitizers: ['noscript']
    };
  },

  props: {
    hide: {
      type: Boolean,
      default: false
    },
    ignoreNoSsr: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    disabled () {
      return this.ignoreNoSsr
    }
  }
}
</script>

<style lang="postcss">
#nuxt-speedkit__speedkit-layer {
  width: 0;
  height: 0;

  & input {
    display: none;
  }

  & input:checked + * {
    display: none;
  }
}

#nuxt-speedkit__unsupported-browser {
  display: none;
}

#nuxt-speedkit__outdated-device {
  display: none;
}

#nuxt-speedkit__slow-connection {
  display: none;
}
</style>
