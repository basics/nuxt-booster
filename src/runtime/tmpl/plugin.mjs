import vFont from '#speedkit/directives/vFont';
import { isSupportedBrowser } from '#speedkit/utils/browser';
import FontList from '#speedkit/classes/FontList';
import hydrate from '#speedkit/hydrate';

export default defineNuxtPlugin({
  name: 'speedkit-plugin',
  enforce: 'post',
  async setup(nuxtApp) {
    const fontConfig = await import('./fontConfig.mjs').then(
      module => module.default || module
    );
    const fontList = new FontList(fontConfig);

    nuxtApp.provide('speedkit', {
      hydrate,
      getFont: fontList.getFont.bind(fontList),
      crossorigin: <%= JSON.stringify(options.crossorigin) %>,
      isBrowserSupported: () => isSupportedBrowser(<%= options.supportedBrowserDetector %>)
    });

    const fonts = await import('./fonts.mjs').then(
      module => module.default || module
    );

    useHead({
      style: [
        {
          key: 'speedkit-fonts',
          type: 'text/css',
          children: fonts
        }
      ]
    });
  },
  hooks: {
    'app:created'() {
      const { vueApp } = useNuxtApp();
      vueApp.use(vFont);
    }
  }
});
