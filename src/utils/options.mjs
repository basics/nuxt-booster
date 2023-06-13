import { MODULE_NAME, logger } from '../utils.mjs';

export function getDefaultOptions() {
  return {
    debug: false,

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

    targetFormats: null,

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
