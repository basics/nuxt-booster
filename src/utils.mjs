import { defu } from 'defu';
import consola from 'consola';
import glob from 'glob';
import { preloadOptimization } from './hookFunctions';

const DEFAULT_TARGET_FORMATS = ['webp', 'avif', 'jpg|jpeg|png|gif'];

const MODULE_NAME = 'nuxt-booster';

export const logger = consola.withTag(MODULE_NAME);

function getOptions(options) {
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

function deprecationsNotification(options) {
  if ('pictureFormats' in options) {
    logger.warn(
      `[${MODULE_NAME}] Option \`pictureFormats\` is deprecated, use \`targetFormats\` instead. \`https://basics.github.io/nuxt-booster/options#targetformats\``
    );
    options.targetFormats = options.pictureFormats;
  }
  if ('maxIdleDuration' in options) {
    logger.warn(
      `[${MODULE_NAME}] Option \`maxIdleDuration\` is deprecated and not necessary anymore. Specification can be removed from the configuration.`
    );
  }
  if ('maxIdleDurations' in options) {
    logger.warn(
      `[${MODULE_NAME}] Option \`maxIdleDurations\` is deprecated and not necessary anymore. Specification can be removed from the configuration.`
    );
  }
}

function setEnvironments(nuxt, options) {
  nuxt.options.env.NUXT_BOOSTER_LAZY_OFFSET_COMPONENT =
    options.lazyOffset.component;
  nuxt.options.env.NUXT_BOOSTER_LAZY_OFFSET_ASSET = options.lazyOffset.asset;
}

function optimizePreloads(nuxt) {
  nuxt.options.generate.manifest = false;
  nuxt.options.render.resourceHints = true;
  nuxt.options.render.asyncScripts = true;
  nuxt.options.render.http2.push = false;

  nuxt.hook('render:resourcesLoaded', preloadOptimization());
}

function getComponentFiles(cwd) {
  return new Promise(resolve =>
    glob(
      '**/*.vue',
      {
        cwd
      },
      (err, files) => {
        if (err) {
          throw err;
        }
        resolve(files);
      }
    )
  );
}

function getNuxtImageModuleOptions(moduleContainer) {
  let imageOptions;
  if ('image' in moduleContainer.options) {
    imageOptions = moduleContainer.options.image;
  } else {
    const module = []
      .concat(
        moduleContainer.options.modules,
        moduleContainer.options.buildModules
      )
      .find(
        module =>
          Array.isArray(module) && module[0] === '@nuxt/image' && module[1]
      );
    imageOptions = (module && module[1]) || {};
  }

  return defu(
    {
      domains: [],
      alias: {},
      screens: {}
    },
    imageOptions
  );
}

export {
  MODULE_NAME,
  deprecationsNotification,
  getOptions,
  setEnvironments,
  optimizePreloads,
  getComponentFiles,
  getNuxtImageModuleOptions
};
