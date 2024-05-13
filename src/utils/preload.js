import initHook from '../hookFunctions/nitro/init';
import { isViteBuild, isWebpackBuild, logger } from '../utils';

export function optimizePreloads(moduleOptions, nuxt) {
  nuxt.options.experimental.inlineSSRStyles = false;

  if (isViteBuild(nuxt)) {
    nuxt.options.vite.build.manifest = false;
    nuxt.options.vite.build.cssCodeSplit = true;
  } else if (isWebpackBuild(nuxt)) {
    nuxt.options.webpack.extractCSS = true;
    logger.info(`Use workaround for \`SSR Styles\` in \`Webpack\`.`);
  }

  const hookOptions = {
    manifest: null
  };
  nuxt.hook('build:manifest', manifest => (hookOptions.manifest = manifest));
  nuxt.hook('nitro:init', initHook(nuxt, hookOptions));
}
