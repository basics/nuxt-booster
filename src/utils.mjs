import { defu } from 'defu';
import { installModule, useLogger } from '@nuxt/kit';

export const DEFAULT_TARGET_FORMATS = ['webp', 'avif', 'jpg|jpeg|png|gif'];

export const MODULE_NAME = 'nuxt-speedkit';

export const logger = useLogger(MODULE_NAME);

function getModuleName(m) {
  if (Array.isArray(m)) {
    m = m[0];
  }
  return m.meta ? m.meta.name : m;
}

export function isWebpackBuild(nuxt) {
  return nuxt.options.builder === '@nuxt/webpack-builder';
}
export function isViteBuild(nuxt) {
  return !isWebpackBuild(nuxt);
}

export const setPublicRuntimeConfig = (nuxt, options) => {
  nuxt.options.runtimeConfig.public.speedkit = {
    lazyOffsetComponent: options.lazyOffset.component,
    lazyOffsetAsset: options.lazyOffset.asset,
    usedFontaine: !options.disableNuxtFontaine
  };
};

function moduleExists(nuxt, moduleName) {
  return (
    nuxt.options.modules &&
    nuxt.options.modules.find(module => getModuleName(module) === moduleName)
  );
}

export async function addNuxtFontaine(nuxt) {
  if (!moduleExists(nuxt, '@nuxtjs/fontaine')) {
    logger.info(
      `Added module \`@nuxtjs/fontaine\`, for more configuration learn more at \`https://github.com/nuxt-modules/fontaine\``
    );
    await installModule('@nuxtjs/fontaine');
  }
}

export async function addNuxtImage(nuxt) {
  if (!moduleExists(nuxt, '@nuxt/image')) {
    logger.info(
      `Added module \`@nuxt/image\`, for more configuration learn more at \`https://image.nuxtjs.org/setup#configure\``
    );
    await installModule('@nuxt/image');
  }

  // Check @nuxt/image Options
  nuxt.hook('modules:done', () => {
    const nuxtImageOptions = getNuxtImageModuleOptions(nuxt);
    if (
      nuxtImageOptions &&
      ['youtube', 'vimeo'].find(alias => !(alias in nuxtImageOptions.alias))
    ) {
      logger.warn(
        'For using `SpeedkitYoutube` and `SpeedkitVimeo` you have to set the required domains & aliases for the `Provider` in the `@nuxt/image` options. \nLearn more https://nuxt-speedkit.grabarzundpartner.dev/setup#nuxtimage'
      );
    }
  });
}

export function getNuxtImageModuleOptions(moduleContainer) {
  return defu(
    {
      domains: [],
      alias: {},
      screens: {}
    },
    getModuleOptions(moduleContainer, '@nuxt/image', 'image')
  );
}

export function getModuleOptions(moduleContainer, packageName, configKey) {
  let options;
  if (configKey in moduleContainer.options) {
    options = moduleContainer.options[String(configKey)];
  } else {
    const module = []
      .concat(
        moduleContainer.options.modules,
        moduleContainer.options.buildModules
      )
      .find(
        module =>
          Array.isArray(module) && module[0] === packageName && module[1]
      );
    options = (module && module[1]) || {};
  }
  return options;
}
