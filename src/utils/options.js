import { logger } from '../utils';

export function getDefaultOptions() {
  return {
    debug: false,

    crossorigin: undefined,

    disableNuxtFontaine: false, // If set, `@nuxtjs/fontaine` will not be integrated.
    disableNuxtImage: false, // If set, `@nuxt/image` will not be integrated.

    optimizeSSR: {
      cleanPreloads: true,
      cleanPrefetches: true,
      inlineStyles: true
    },

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

    targetFormats: [],
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
  if ('optimizePreloads' in options) {
    logger.warn(
      'Option `optimizePreloads` is deprecated, use `optimizeSSR` instead.'
    );
    delete options.optimizePreloads;
  }
}
