import { resolve, join } from 'pathe';

import {
  createResolver,
  defineNuxtModule,
  addPluginTemplate,
  addTemplate
} from '@nuxt/kit';
import { getCrossorigin } from './runtime/utils.mjs';
import FontConfig from './runtime/classes/FontConfig.mjs';
import {
  DEFAULT_TARGET_FORMATS,
  MODULE_NAME,
  addNuxtCritters,
  addNuxtFontaine,
  addNuxtImage,
  isWebpackBuild,
  logger,
  setPublicRuntimeConfig
} from './utils.mjs';
import { getDefaultOptions } from './utils/options.mjs';
import { getFontConfigTemplate } from './utils/template.mjs';
import { optimizePreloads } from './utils/preload.mjs';
import { getSupportedBrowserDetector } from './utils/browser.mjs';
import { registerAppEntry as registerAppEntryWebpack } from './hookFunctions/webpack.mjs';
import { registerAppEntry as registerAppEntryVite } from './hookFunctions/vite.mjs';

const resolver = createResolver(import.meta.url);

export default defineNuxtModule({
  meta: {
    name: 'nuxt-speedkit',
    configKey: 'speedkit',
    compatibility: {
      nuxt: '^3.0.x'
    }
  },
  defaults: getDefaultOptions(),

  async setup(moduleOptions, nuxt) {
    const runtimeDir = resolver.resolve('./runtime');
    nuxt.options.alias['#speedkit'] = runtimeDir;
    nuxt.options.build.transpile.push(runtimeDir);

    // Workaround for missing default function by external use.
    nuxt.options.alias['speedkit-create-sort'] =
      'sort-css-media-queries/lib/create-sort.js';

    await addModules(nuxt, moduleOptions);

    setPublicRuntimeConfig(nuxt, moduleOptions);

    // TODO: Remove in future
    if (isWebpackBuild(nuxt)) {
      logger.warn(
        `[${MODULE_NAME}]: Webpack build is not usable yet.\nOpen Issues:\n- Inline Styles (\`https://nuxt.com/docs/api/configuration/nuxt-config#inlinessrstyles\`)`
      );
    }

    if (moduleOptions.detection.performance && nuxt.options.ssr) {
      if (isWebpackBuild(nuxt)) {
        nuxt.hook(
          'webpack:config',
          registerAppEntryWebpack(
            resolve(nuxt.options.buildDir, MODULE_NAME, 'entry.mjs')
          )
        );
      } else {
        nuxt.hook(
          'vite:extend',
          registerAppEntryVite(
            resolve(nuxt.options.buildDir, MODULE_NAME, 'entry.mjs')
          )
        );
      }
    } else {
      logger.warn(
        'Module functionality is limited without ssr and performance check'
      );
    }

    if (moduleOptions.optimizePreloads) {
      optimizePreloads(moduleOptions, nuxt);
    } else {
      logger.warn(
        'Preload optimization is disabled by module option `optimizePreloads`.'
      );
    }

    await addBuildTemplates(nuxt, moduleOptions);
  }
});

async function addBuildTemplates(nuxt, options) {
  const supportedBrowserDetector = await getSupportedBrowserDetector(
    !options.detection.browserSupport
  );
  const fontConfig = new FontConfig(options.fonts, nuxt.options.alias);

  nuxt.hook('listen', (_, listener) => {
    process.env.NUXT_SPEEDKIT_INTERAL_URL = `${
      listener.https ? 'https' : 'http'
    }://${listener.host || 'localhost'}:${listener.port}`;
  });

  addTemplate({
    filename: MODULE_NAME + '/fontConfig.mjs',
    getContents: () => getFontConfigTemplate(fontConfig),
    write: true
  });

  addTemplate({
    filename: MODULE_NAME + '/fonts.css',
    getContents: () =>
      `/*! speedkit-font-faces start */${fontConfig.toCSS()}/*! speedkit-font-faces end */`,
    write: true
  });

  ['client', 'server'].forEach(mode => {
    addPluginTemplate({
      src: resolver.resolve('runtime/tmpl', 'plugin.mjs'),
      fileName: MODULE_NAME + `/plugin.${mode}.js`,
      write: true,
      mode,
      options: {
        mode,
        targetFormats: options.targetFormats,
        crossorigin: getCrossorigin(options.crossorigin),
        supportedBrowserDetector,
        loader: options.loader
      }
    });
  });

  addTemplate({
    src: resolver.resolve('runtime/tmpl', 'entry.mjs'),
    fileName: MODULE_NAME + '/entry.mjs',
    write: true,
    options: {
      webpack: isWebpackBuild(nuxt),
      performanceCheck: true,
      isDev: !options.debug && process.env.NODE_ENV === 'development',
      entry: join(nuxt.options.appDir, 'entry'),
      runOptions: options.runOptions,
      ssr: nuxt.options.ssr,
      ignorePerformance: !options.detection.performance,
      performanceMetrics: JSON.stringify(options.performanceMetrics || {}),
      supportedBrowserDetector
    }
  });
}

async function addModules(nuxt, moduleOptions) {
  if (!moduleOptions.disableNuxtCritters) {
    await addNuxtCritters(nuxt);
  }
  if (!moduleOptions.disableNuxtFontaine) {
    await addNuxtFontaine(nuxt);
  }
  if (!moduleOptions.disableNuxtImage) {
    moduleOptions.targetFormats =
      moduleOptions.targetFormats || DEFAULT_TARGET_FORMATS;
    await addNuxtImage(nuxt);
  }
}
