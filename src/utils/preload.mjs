import initHook from '../hookFunctions/nitro/init.mjs';
import { isViteBuild, isWebpackBuild, logger } from '../utils.mjs';

export function optimizePreloads(moduleOptions, nuxt) {
  const disableNuxtCritters = moduleOptions.disableNuxtCritters;
  nuxt.options.experimental.inlineSSRStyles = false;

  if (isViteBuild(nuxt)) {
    nuxt.options.vite.build.manifest = false;
    if (disableNuxtCritters) {
      nuxt.options.vite.build.cssCodeSplit = false;
    }
  } else if (isWebpackBuild(nuxt)) {
    nuxt.options.webpack.extractCSS = true;
    logger.info(`Use workaround for \`SSR Styles\` in \`Webpack\`.`);
  }

  const hookOptions = {
    disableNuxtCritters:
      typeof disableNuxtCritters !== 'undefined' ? disableNuxtCritters : true,
    manifest: null
  };
  nuxt.hook('build:manifest', manifest => (hookOptions.manifest = manifest));
  nuxt.hook('nitro:init', initHook(nuxt, hookOptions));
}
