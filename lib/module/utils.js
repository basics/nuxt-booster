const defu = require('defu');
const consola = require('consola');
const glob = require('glob');
const { getUserAgentRegExp } = require('browserslist-useragent-regexp');
const serialize = require('serialize-to-js');

let pkg;
try {
  pkg = require('../package.json');
} catch (error) {
  pkg = require('../../package.json');
}

function getOptions (options) {
  // fix options name, remove next versions
  if ('performance' in options) {
    consola.warn(`[${pkg.name}] Option \`performance\` is deprecated, use \`performanceMetrics\` instead.`);
    options.performanceMetrics = options.performance;
  }

  return defu(options, {

    disableNuxtImage: false, // Sets "true" if you do not need @nuxt/image.

    detection: {
      performance: true,
      browserSupport: true
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200 // fallback if fcp is not available (safari)
      },
      lighthouseDetectionByUserAgent: false
    },
    fonts: [],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    },

    loader: {
      dataUri: null,
      size: '100px',
      backgroundColor: 'grey'
    }
  });
}

function setEnvironments (nuxt, options) {
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT = options.lazyOffset.component;
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_ASSET = options.lazyOffset.asset;
}

function getSupportedBrowserDetector (ignore) {
  if (ignore) {
    return JSON.stringify({ regex: '' });
  } else {
    return serialize({ regex: getUserAgentRegExp({ allowHigherVersions: true, allowZeroSubversions: true }) });
  }
}

function getComponentFiles (cwd) {
  return new Promise(resolve => glob('**/*.vue', {
    cwd
  }, (err, files) => {
    if (err) {
      throw err;
    }
    resolve(files);
  }));
}

module.exports = {
  pkg,
  getOptions,
  setEnvironments,
  getSupportedBrowserDetector,
  getComponentFiles
};
