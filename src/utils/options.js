import { logger } from '../utils.js';

export function getDefaultOptions() {
  return {
    debug: false,

    crossorigin: undefined,

    disableNuxtFontaine: false, // If set, `@nuxtjs/fontaine` will not be integrated.
    disableNuxtImage: false, // If set, `@nuxt/image` will not be integrated.

    optimizePreloads: true,

    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      timing: {
        fcp: 800,
        dcl: 1200 // fallback if fcp is not available (safari)
      }
    },

    fonts: [],

    targetFormats: undefined,
    densities: 'x1 x2',

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
      'Option `loader` is deprecated, there is no integrated loader anymore.'
    );
    delete options.loader;
  }
  if ('disableNuxtCritters' in options) {
    logger.warn(
      'Option `disableNuxtCritters` is deprecated, there is no integrated critters anymore.'
    );
    delete options.loader;
  }
}
