import { defu } from 'defu';
import { consola } from 'consola';
import glob from 'glob';
import { preloadOptimization } from './hookFunctions.mjs';

const DEFAULT_TARGET_FORMATS = ['webp', 'avif', 'jpg|jpeg|png|gif'];

const MODULE_NAME = 'nuxt-speedkit';

export const logger = consola.withTag(MODULE_NAME);

function isWebpackBuild(nuxt) {
  return nuxt.options.builder === '@nuxt/webpack-builder';
}
function isViteBuild(nuxt) {
  return !isWebpackBuild(nuxt);
}

const getDefaultOptions = () => {
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
};

function deprecationsNotification(options) {
  if ('loader' in options) {
    logger.warn(
      `[${MODULE_NAME}] Option \`loader\` is deprecated, There is no integrated loader anymore.`
    );
    delete options.loader;
  }
}

const setPublicRuntimeConfig = (nuxt, options) => {
  nuxt.options.runtimeConfig.public.speedkit = {
    lazyOffsetComponent: options.lazyOffset.component,
    lazyOffsetAsset: options.lazyOffset.asset
  };
};

function optimizePreloads(nuxt) {
  if (isViteBuild(nuxt)) {
    nuxt.options.vite.build.manifest = false;
  }
  nuxt.options.noScripts = false;
  nuxt.hook('build:manifest', preloadOptimization());
}

function optimizeNuxtOptions(nuxt) {
  // TODO: https://github.com/nuxt/nuxt/issues/21381
  // if (isWebpackBuild(nuxt)) {
  //   nuxt.options.webpack.extractCSS = false;
  // } else {
  //   nuxt.options.vite.build.cssCodeSplit = false;
  // }
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
  DEFAULT_TARGET_FORMATS,
  MODULE_NAME,
  deprecationsNotification,
  getDefaultOptions,
  setPublicRuntimeConfig,
  optimizePreloads,
  optimizeNuxtOptions,
  getComponentFiles,
  getNuxtImageModuleOptions,
  isWebpackBuild,
  isViteBuild
};
