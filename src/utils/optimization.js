import initHook from '../hookFunctions/nitro/init';
import { isViteBuild, isWebpackBuild, logger } from '../utils';

export function optimizeSSR({ optimizeSSR }, nuxt) {
  const options = {
    cleanPreloads: true,
    cleanPrefetches: true,
    inlineStyles: true,
    ...(typeof optimizeSSR === 'boolean' ? {} : optimizeSSR)
  };

  if (options.inlineStyles) {
    nuxt.options.experimental.inlineSSRStyles = false;
  }

  if (isViteBuild(nuxt)) {
    nuxt.options.vite.build.manifest = false;
    if (options.inlineStyles) {
      nuxt.options.vite.build.cssCodeSplit = true;
    }
  } else if (isWebpackBuild(nuxt) && options.inlineStyles) {
    nuxt.options.webpack.extractCSS = true;
    logger.info(`Use workaround for \`SSR Styles\` in \`Webpack\`.`);
  }
  const hookOptions = {
    manifest: null,
    ...options
  };
  nuxt.hook('build:manifest', manifest => (hookOptions.manifest = manifest));
  nuxt.hook('nitro:init', initHook(nuxt, hookOptions));
}
