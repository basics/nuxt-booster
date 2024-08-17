export default options => {
  let code = `import { defineNuxtPlugin, useBoosterHydrate } from '#imports';
import vFont from '#booster/directives/vFont';
import { isSupportedBrowser } from '#booster/utils/browser';
import FontList from '#booster/classes/FontList';
import { useNuxtApp, useBoosterHead, useRequestHeaders, useRequestURL, useRequestFetch } from '#imports';
import './fonts.css';`;

  if (options.mode !== 'client') {
    code += `
import NodeCache from 'node-cache';
`;
  }

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

  if (options.mode === 'client') {
    code += `
const dimensionCache = new Map();`;
  } else {
    code += `
function fetchRetry(url, options, retries = 3, delay = 300) {
  return fetch(url, options).catch(function (error) {
    if (retries <= 0) throw error;
    return new Promise(resolve => setTimeout(resolve, delay)).then(() => fetchRetry(url, options, retries - 1, delay));
  });
}

const dimensionCache = new NodeCache({ stdTTL: 60 * 60 * 24, checkperiod: 60 * 60 * 1, useClones: false });`;
  }

  code += `
async function getImageSize (src) {
`;

  if (options.mode === 'client') {
    code += `

  if (!dimensionCache.has(src)) {
    const { width, height } = await new Promise((resolve) => {
      const img = new global.Image();
      img.onload = () => resolve({width: img.naturalWidth, height: img.naturalHeight});
      img.src = src;
    });
    dimensionCache.set(src, { width, height });
  }
  return dimensionCache.get(src)`;
  } else {
    code += `
  const isNitroPrerender = 'x-nitro-prerender' in useRequestHeaders()

  try {
    let url = src;
    if (isNitroPrerender) {
      url = url.replace(useRequestURL().origin, '');
    }

    if (!dimensionCache.has(url)) {
      const blob = await useRequestFetch()(url);
      const { imageMeta } = await import('image-meta').then(
        module => module.default || module
      );

      const data = await fetchRetry(URL.createObjectURL(blob), undefined, 3).then(async res =>
        Buffer.from(await res.arrayBuffer())
      );
      const dimension = await imageMeta(data);
      dimensionCache.set(url, dimension);
    }

    return dimensionCache.get(url);
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
