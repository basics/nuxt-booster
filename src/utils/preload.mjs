import initHook from '../hookFunctions/nitro/init.mjs';
import { isViteBuild } from '../utils.mjs';

export function optimizePreloads(moduleOptions, nuxt) {
  const disableNuxtCritters = moduleOptions.disableNuxtCritters;

  if (isViteBuild(nuxt)) {
    nuxt.options.vite.build.manifest = false;
    if (disableNuxtCritters) {
      nuxt.options.vite.build.cssCodeSplit = false;
    }
  }

  nuxt.options.experimental.inlineSSRStyles = false;

  nuxt.hook('nitro:init', initHook(nuxt, disableNuxtCritters));
}
