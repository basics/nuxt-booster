import type { PluginOptions } from '../module';

export default (options: PluginOptions) => {
  let code = `import { defineNuxtPlugin, useNuxtApp, useBoosterHead, useBoosterHydrate } from '#imports';
import vFont from '#booster/directives/vFont';
import FontList from '#booster/classes/FontList';
import { isSupportedBrowser } from '#booster/utils/browser';
import { getImageSize } from '#booster/utils/plugin.${options.mode}';

import './fonts.css';`;

  code += `

export default defineNuxtPlugin({
  name: 'booster-plugin',
  enforce: 'post',
  async setup(nuxtApp) {

    const hydrate = useBoosterHydrate();

    const fontConfig = await import('./fontConfig').then(
      module => module.default || module
    );
    const fontList = new FontList(fontConfig);

    const head = useBoosterHead();

    nuxtApp.provide('booster', {
      head,
      getImageSize,
      hydrate,
      getFont: fontList.getFont.bind(fontList),
      crossorigin: ${
        options.crossorigin ? "'" + options.crossorigin + "'" : null
      },
      isBrowserSupported: () => isSupportedBrowser(${
        options.supportedBrowserDetector
      }),
      targetFormats: ${JSON.stringify(options.targetFormats)},
      densities: ${JSON.stringify(options.densities)}
    });

  },
  hooks: {
    'app:created'() {
      const { vueApp } = useNuxtApp();
      vueApp.use(vFont);
    }
  }
});

`;

  return code;
};
