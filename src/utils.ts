import { defu } from 'defu';
import { installModule, useLogger } from '@nuxt/kit';

import type {
  ModuleDefinition,
  ModuleOptions as NuxtModuleOptions,
  Nuxt
} from 'nuxt/schema';
import type { ModuleOptions, PublicBoosterOptions } from './types';
import type * as consola from 'consola';

export const MODULE_NAME = 'nuxt-booster';

export const logger = useLogger(MODULE_NAME) as consola.ConsolaInstance;

function getModuleName(
  module: ModuleDefinition<
    NuxtModuleOptions,
    Partial<NuxtModuleOptions>,
    boolean
  >
) {
  if (Array.isArray(module)) {
    module = module[0];
  }
  return module.meta ? module.meta.name : module;
}

export function isWebpackBuild(nuxt: Nuxt) {
  return nuxt.options.builder === '@nuxt/webpack-builder';
}
export function isViteBuild(nuxt: Nuxt) {
  return !isWebpackBuild(nuxt);
}

export function setPublicRuntimeConfig(nuxt: Nuxt, options: ModuleOptions) {
  (nuxt.options.runtimeConfig.public.booster as PublicBoosterOptions) = {
    debug: options.debug,
    lazyOffsetComponent: options.lazyOffset.component,
    lazyOffsetAsset: options.lazyOffset.asset,
    usedFontaine: !options.disableNuxtFontaine
  };
}

function moduleExists(nuxt: Nuxt, moduleName: string) {
  return nuxt.options.modules?.find(
    module => getModuleName(module as NuxtModuleOptions) === moduleName
  );
}

export async function addNuxtFontaine(nuxt: Nuxt) {
  if (!moduleExists(nuxt, '@nuxtjs/fontaine')) {
    logger.info(
      `Added module \`@nuxtjs/fontaine\`, for more configuration learn more at \`https://github.com/nuxt-modules/fontaine\``
    );
    await installModule('@nuxtjs/fontaine');
  }
}

export async function addNuxtImage(nuxt: Nuxt) {
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
        'For using `BoosterYoutube` and `BoosterVimeo` you have to set the required domains & aliases for the `Provider` in the `@nuxt/image` options. \nLearn more https://basics.github.io/nuxt-booster/setup#nuxtimage'
      );
    }
  });
}

export function getNuxtImageModuleOptions(nuxt: Nuxt) {
  return defu(
    {
      domains: [],
      alias: {},
      screens: {}
    },
    getModuleOptions(nuxt, '@nuxt/image', 'image')
  );
}

export function getModuleOptions(
  nuxt: Nuxt,
  packageName: string,
  configKey: string
) {
  let options;
  if (configKey in nuxt.options) {
    // eslint-disable-next-line security/detect-object-injection, @typescript-eslint/no-explicit-any
    options = (nuxt.options as Record<string, any>)[configKey];
  } else {
    const module = Array.from(nuxt.options.modules).find(
      module => Array.isArray(module) && module[0] === packageName && module[1]
    ) as [string, NuxtModuleOptions] | undefined;
    if (module && module.length > 1) {
      options = module[1];
    }
  }
  return options;
}
