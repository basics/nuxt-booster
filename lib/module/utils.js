const { defu } = require('defu');
const consola = require('consola');
const glob = require('glob');
const { getUserAgentRegExp } = require('browserslist-useragent-regexp');
const serialize = require('serialize-to-js');
const { preloadOptimization } = require('./hookFunctions');

const DEFAULT_TARGET_FORMATS = ['webp', 'avif', 'jpg|jpeg|png|gif'];

let pkg;
try {
  pkg = require('../package.json');
} catch (error) {
  pkg = require('../../package.json');
}

function getOptions (options) {
  if ('pictureFormats' in options) {
    consola.warn(`[${pkg.name}] Option \`pictureFormats\` is deprecated, use \`targetFormats\` instead. \`https://nuxt-speedkit.grabarzundpartner.dev/options#targetformats\``);
    options.targetFormats = options.pictureFormats;
  }
  if ('maxIdleDuration' in options) {
    consola.warn(`[${pkg.name}] Option \`maxIdleDuration\` is deprecated and not necessary anymore. Specification can be removed from the configuration.`);
  }
  if ('maxIdleDurations' in options) {
    consola.warn(`[${pkg.name}] Option \`maxIdleDurations\` is deprecated and not necessary anymore. Specification can be removed from the configuration.`);
  }

  options = defu(options, {

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
      dataUri: undefined,
      size: '100px',
      backgroundColor: 'grey'
    }

  });
  options.targetFormats = options.targetFormats || DEFAULT_TARGET_FORMATS;
  return options;
}

function setEnvironments (nuxt, options) {
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT = options.lazyOffset.component;
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_ASSET = options.lazyOffset.asset;
}

function optimizePreloads (nuxt) {
  nuxt.options.generate.manifest = false;
  nuxt.options.render.resourceHints = true;
  nuxt.options.render.asyncScripts = true;
  nuxt.options.render.http2.push = false;

  nuxt.hook('render:resourcesLoaded', preloadOptimization());
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

function getNuxtImageModuleOptions (moduleContainer) {
  let imageOptions;
  if ('image' in moduleContainer.options) {
    imageOptions = moduleContainer.options.image;
  } else {
    imageOptions = [].concat(
      moduleContainer.options.modules,
      moduleContainer.options.buildModules
    ).find(module => Array.isArray(module) && module[0] === '@nuxt/image' && module[1]);
    return module && module[1];
  }

  return defu({
    domains: [],
    alias: {},
    screens: {}
  }, imageOptions);
};

module.exports = {
  pkg,
  getOptions,
  setEnvironments,
  optimizePreloads,
  getSupportedBrowserDetector,
  getComponentFiles,
  getNuxtImageModuleOptions
};
