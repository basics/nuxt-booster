import vFont from '#speedkit/directives/vFont';
import { isSupportedBrowser } from '#speedkit/utils/browser';
import LoadingSpinner from '#speedkit/components/SpeedkitImage/classes/LoadingSpinner';

export default defineNuxtPlugin({
  name: 'speedkit-plugin',
  enforce: 'post',
  async setup(nuxtApp) {
    const FontList = await import('#speedkit/classes/FontList').then(
      module => module.default || module
    );
    const fontConfig = await import('./fontConfig.mjs').then(
      module => module.default || module
    );
    const fontList = new FontList(fontConfig);
    const fonts = await import('./fonts.mjs').then(
      module => module.default || module
    );

    nuxtApp.provide('speedkit', {
      getFont: fontList.getFont.bind(fontList),
      crossorigin: <%= JSON.stringify(options.crossorigin) %>,
      isBrowserSupported: () => isSupportedBrowser(<%= options.supportedBrowserDetector %>),
      loader: () => <% if (options.loader.dataUri) { %>new LoadingSpinner({
      dataUri: loaderDataUri,
      size: '<%= options.loader.size %>',
      backgroundColor: '<%= options.loader.backgroundColor %>'
      })<% } else { %>undefined<% } %>,
      targetFormats: <%= JSON.stringify(options.targetFormats) %>
    });

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
