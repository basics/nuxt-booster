export default options => {
  let code = `import vFont from '#speedkit/directives/vFont';
import { isSupportedBrowser } from '#speedkit/utils/browser';
import FontList from '#speedkit/classes/FontList';
import hydrate from '#speedkit/hydrate';
import './fonts.css';

export default defineNuxtPlugin({
  name: 'speedkit-plugin',
  enforce: 'post',
  async setup(nuxtApp) {

    const fontConfig = await import('./fontConfig').then(
      module => module.default || module
    );
    const fontList = new FontList(fontConfig);

    nuxtApp.provide('speedkit', {
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


function fetchRetry(url, options, retries = 3, delay = 300) {
  return fetch(url, options).catch(function (error) {
    if (retries <= 0) throw error;
    return new Promise(resolve => setTimeout(resolve, delay)).then(() => fetchRetry(url, options, retries - 1, delay));
  });
}

const dimensionCache = {};
async function getImageSize (src) {

`;

  if (options.mode === 'client') {
    code += `  const { width, height } = await new Promise((resolve) => {
    const img = new global.Image();
    img.onload = () => resolve({width: img.naturalWidth, height: img.naturalHeight});
    img.src = src;
  });
  return {width, height};`;
  } else {
    code += `
  const isNitroPrerender = 'x-nitro-prerender' in useRequestHeaders()

  try {
    // Nur im Generate!
    let url = src;
    if (isNitroPrerender) {
      url = url.replace(useRequestURL().origin, '');
    }

    if (!isNitroPrerender || !(url in dimensionCache)) {
      const blob = await useRequestFetch()(url);
      const { imageMeta } = await import('image-meta').then(
        module => module.default || module
      );

      const data = await fetchRetry(URL.createObjectURL(blob), undefined, 3).then(async res =>
        Buffer.from(await res.arrayBuffer())
      );
      const dimension = await imageMeta(data);

      if (isNitroPrerender) {
        dimensionCache[url] = dimension;
      } else {
        return dimension;
      }
    }

    return dimensionCache[url];
  } catch (error) {
    console.error('getImageSize: ' + src, error);
    return { width: 0, height: 0 };
  }
`;
  }

  code += `
}
`;

  return code;
};
