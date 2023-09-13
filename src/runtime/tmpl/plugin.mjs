import vFont from '#speedkit/directives/vFont';
import { isSupportedBrowser } from '#speedkit/utils/browser';
import FontList from '#speedkit/classes/FontList';
import hydrate from '#speedkit/hydrate';
import './fonts.css';

export default defineNuxtPlugin({
  name: 'speedkit-plugin',
  enforce: 'post',
  async setup(nuxtApp) {

    const fontConfig = await import('./fontConfig.mjs').then(
      module => module.default || module
    );
    const fontList = new FontList(fontConfig);

    nuxtApp.provide('speedkit', {
      getImageSize,
      hydrate,
      getFont: fontList.getFont.bind(fontList),
      crossorigin: <%= options.crossorigin ? `'${options.crossorigin}'` : null %>,
      isBrowserSupported: () => isSupportedBrowser(<%= options.supportedBrowserDetector %>),
      targetFormats: <%= JSON.stringify(options.targetFormats) %>
    });

  },
  hooks: {
    'app:created'() {
      const { vueApp } = useNuxtApp();
      vueApp.use(vFont);
    }
  }
});


async function getImageSize (src) {

<% if (options.mode === 'client') { %>
  const { width, height } = await new Promise((resolve) => {
    const img = new global.Image();
    img.onload = () => resolve({width: img.naturalWidth, height: img.naturalHeight});
    img.src = src;
  });
  return {width, height};
<% } else { %>

  const isNitroPrerender = 'x-nitro-prerender' in useRequestHeaders()

  try {
    // Nur im Generate!
    let url = src;
    if (isNitroPrerender) {
      url = url.replace(useRequestURL().origin, '');
    }
    const blob = await useRequestFetch()(url);
    const { imageMeta } = await import('image-meta').then(
      module => module.default || module
    );
    const data = await fetch(URL.createObjectURL(blob)).then(async res =>
      Buffer.from(await res.arrayBuffer())
    );
    const { width, height } = await imageMeta(data);
    return { width, height };
  } catch (error) {
    console.error(`getImageSize: ` + src, error);
    return { width: 0, height: 0 };
  }

<% } %>
};
