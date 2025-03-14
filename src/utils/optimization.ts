import initHook from '../hookFunctions/nitro/init';
import { isViteBuild, isWebpackBuild, logger } from '../utils';
import type { HookOptions, OptimizeSSR } from '../module';
import type { Nuxt } from 'nuxt/schema';

export function optimizeSSR(optimizeSSR: boolean | OptimizeSSR, nuxt: Nuxt) {
  const options = {
    cleanPreloads: true,
    cleanPrefetches: true,
    inlineStyles: true,
    ...(optimizeSSR === true ? {} : optimizeSSR)
  };

  if (isViteBuild(nuxt)) {
    if (nuxt.options.vite.build) {
      nuxt.options.vite.build.manifest = false;
      if (options.inlineStyles) {
        nuxt.options.vite.build.cssCodeSplit = true;
      }
    }
  } else if (isWebpackBuild(nuxt) && options.inlineStyles) {
    nuxt.options.webpack.extractCSS = true;
    logger.info(`Use workaround for \`SSR Styles\` in \`Webpack\`.`);
  }

  const hookOptions: HookOptions = {
    manifest: undefined,
    ...options
  };
  nuxt.hook('build:manifest', async manifest => {
    hookOptions.manifest = await manifest;
  });
  nuxt.hook('nitro:init', initHook(nuxt, hookOptions));
}
