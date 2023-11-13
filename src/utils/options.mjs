import { MODULE_NAME, logger } from '../utils.mjs';

export function getDefaultOptions() {
  return {
    debug: false,

    crossorigin: undefined,

    disableNuxtCritters: true, // If set, `@nuxtjs/critters` will not be integrated.
    disableNuxtFontaine: false, // If set, `@nuxtjs/fontaine` will not be integrated.
    disableNuxtImage: false, // If set, `@nuxt/image` will not be integrated.

    optimizePreloads: true,

    detection: {
      performance: true,
      browserSupport: true,
      battery: true
    },

    performanceMetrics: {
      timing: {
        fcp: 800,
        dcl: 1200 // fallback if fcp is not available (safari)
      }
    },

    fonts: [],

    targetFormats: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  };
}

export function deprecationsNotification(options) {
  if ('loader' in options) {
    logger.warn(
      `[${MODULE_NAME}] Option \`loader\` is deprecated, There is no integrated loader anymore.`
    );
    delete options.loader;
  }
}
