import type { PluginOptions } from '../module';

export default (options: PluginOptions) => {
  let code = `import { defineNuxtPlugin, useBoosterHydrate } from '#imports';
import vFont from '#booster/directives/vFont';
import { isSupportedBrowser } from '#booster/utils/browser';
import FontList from '#booster/classes/FontList';
import { useNuxtApp, useBoosterHead, useRequestHeaders, useRequestURL, useRequestFetch } from '#imports';
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

  code += `
const dimensionCache = new Map();

async function getImageSize (src) {
`;

  if (options.mode === 'client') {
    code += `

  if (!dimensionCache.has(src)) {
    const { width, height } = await new Promise((resolve) => {
      let img = new global.Image();
      img.onload = () =>  {
        const dimension = { width: img.naturalWidth, height: img.naturalHeight };
        img = null;
        resolve(dimension)
      };
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

      const objectUrl = URL.createObjectURL(blob);
      const dimension = await fetch(objectUrl)
      .then(res => res.arrayBuffer())
      .then(Buffer.from)
      .then(imageMeta);

      URL.revokeObjectURL(objectUrl);

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
