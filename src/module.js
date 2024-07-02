import { resolve, join } from 'pathe';

import {
  addImportsDir,
  createResolver,
  defineNuxtModule,
  addPluginTemplate,
  addTemplate
} from '@nuxt/kit';
import { getCrossorigin, getSupportedBrowserDetector } from './utils/browser';
import FontConfig from './classes/FontConfig';
import {
  MODULE_NAME,
  addNuxtFontaine,
  addNuxtImage,
  isWebpackBuild,
  logger,
  setPublicRuntimeConfig
} from './utils';
import { deprecationsNotification, getDefaultOptions } from './utils/options';
import { getFontConfigTemplate } from './utils/template';
import { optimizeSSR } from './utils/optimization';
import { registerAppEntry as registerAppEntryWebpack } from './hookFunctions/webpack';
import { registerAppEntry as registerAppEntryVite } from './hookFunctions/vite';
import { getTemplate as getBlobFileTemplate } from './utils/blob';

import pluginTemplate from './tmpl/plugin.tmpl';
import entryTemplate from './tmpl/entry.tmpl';

const resolver = createResolver(import.meta.url);

export default defineNuxtModule({
  meta: {
    name: 'nuxt-booster',
    configKey: 'booster',
    compatibility: {
      nuxt: '^3.0.x'
    }
  },
  defaults: getDefaultOptions(),

  async setup(moduleOptions, nuxt) {
    const runtimeDir = resolver.resolve('./runtime');
    nuxt.options.alias['#booster'] = runtimeDir;
    nuxt.options.build.transpile.push(runtimeDir);

    deprecationsNotification(moduleOptions);

    await addModules(nuxt, moduleOptions);

    setPublicRuntimeConfig(nuxt, moduleOptions);

    if (moduleOptions.detection.performance && nuxt.options.ssr) {
      if (isWebpackBuild(nuxt)) {
        nuxt.hook(
          'webpack:config',
          registerAppEntryWebpack(
            resolve(nuxt.options.buildDir, MODULE_NAME, 'entry')
          )
        );
      } else {
        nuxt.hook(
          'vite:extend',
          registerAppEntryVite(
            resolve(nuxt.options.buildDir, MODULE_NAME, 'entry.js')
          )
        );
      }
    } else {
      logger.warn(
        'Module functionality is limited without ssr and performance check'
      );
    }

    if (moduleOptions.optimizeSSR) {
      optimizeSSR(moduleOptions, nuxt);
    } else {
      logger.warn(
        'Preload optimization is disabled by module option `optimizeSSR`.'
      );
    }

    await addBuildTemplates(nuxt, moduleOptions);

    addImportsDir(resolve(runtimeDir, 'composables'));
  }
});

async function addBuildTemplates(nuxt, options) {
  const supportedBrowserDetector = await getSupportedBrowserDetector(
    !options.detection.browserSupport
  );
  const fontConfig = new FontConfig(options.fonts, nuxt.options.alias);

  nuxt.hook('listen', (_, listener) => {
    process.env.NUXT_BOOSTER_INTERAL_URL = `${
      listener.https ? 'https' : 'http'
    }://${listener.host || 'localhost'}:${listener.port}`;
  });

  addTemplate({
    filename: MODULE_NAME + '/fontConfig.js',
    getContents: () => getFontConfigTemplate(fontConfig),
    write: true
  });

  addTemplate({
    filename: MODULE_NAME + '/fonts.css',
    getContents: () =>
      `/*! booster-font-faces start */${fontConfig.toCSS()}/*! booster-font-faces end */`,
    write: true
  });

  ['client', 'server'].forEach(mode => {
    addPluginTemplate({
      getContents: () => {
        return pluginTemplate({
          mode,
          densities: options.densities,
          targetFormats: options.targetFormats,
          crossorigin: getCrossorigin(options.crossorigin),
          supportedBrowserDetector,
          loader: options.loader
        });
      },
      filename: MODULE_NAME + `/plugin.${mode}.js`,
      write: true,
      mode
    });
  });

  addTemplate({
    filename: MODULE_NAME + '/entry.js',
    getContents: () => {
      return entryTemplate({
        webpack: isWebpackBuild(nuxt),
        performanceCheck: true,
        isDev: !options.debug && process.env.NODE_ENV === 'development',
        entry: join(nuxt.options.appDir, 'entry'),
        runOptions: options.runOptions,
        ssr: nuxt.options.ssr,
        ignore: {
          battery: !options.detection.battery,
          performance: !options.detection.performance
        },
        performanceMetrics: JSON.stringify(options.performanceMetrics || {}),
        supportedBrowserDetector
      });
    },
    write: true
  });

  const files = [['video', resolver.resolve('assets/media/video.mp4')]];
  const mediaContent = await getBlobFileTemplate(files);
  addTemplate({
    getContents: () => mediaContent,
    filename: MODULE_NAME + '/blobs.mjs',
    write: true
  });
}

async function addModules(nuxt, moduleOptions) {
  if (!moduleOptions.disableNuxtFontaine) {
    await addNuxtFontaine(nuxt);
  }
  if (!moduleOptions.disableNuxtImage) {
    if (!moduleOptions.targetFormats?.length) {
      moduleOptions.targetFormats = ['webp', 'avif', 'jpg|jpeg|png|gif'];
    }
    await addNuxtImage(nuxt);
  }
}
