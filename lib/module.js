import { resolve, join } from 'pathe';
import {
  // createResolver,
  defineNuxtModule,
  addPluginTemplate,
  addTemplate,
  // isNuxt3,
  installModule,
  logger
} from '@nuxt/kit';

// let pkg;
// try {
//   pkg = require('./package.json');
// } catch (error) {
//   pkg = require('../package.json');
// }

import nuxtImage from '@nuxt/image';
import FontConfig from './classes/FontConfig';

import { addBundleRendererDirective } from './module/bundleRenderer';
import { registerAppEntry, autoImportComponents } from './module/hookFunctions';
import { getComponentFiles, setEnvironments, optimizePreloads, getNuxtImageModuleOptions, getDefaultOptions, deprecationsNotification, MODULE_NAME } from './module/utils';
import { getSupportedBrowserDetector } from './module/browser';
import { getCrossorigin } from './utils';

export default defineNuxtModule({
  meta: {
    name: 'nuxt-speedkit',
    configKey: 'speedkit',
    compatibility: {
      nuxt: '^2.x'
    }
  },
  defaults: getDefaultOptions(),

  async setup (moduleOptions, nuxt) {
    deprecationsNotification(moduleOptions);

    // const resolver = createResolver(import.meta.url);

    // const runtimeDir = resolver.resolve('./runtime');
    // nuxt.options.alias['#speedkit'] = runtimeDir;
    // nuxt.options.build.transpile.push(runtimeDir);

    if (!moduleOptions.disableNuxtImage) {
      addNuxtImage(nuxt);
    }

    // Add package to build transpile
    nuxt.options.build.transpile.push(MODULE_NAME);

    setEnvironments(nuxt, moduleOptions);

    if (moduleOptions.detection.performance && moduleOptions.ssr) {
      nuxt.hook('webpack:config', registerAppEntry(resolve(moduleOptions.buildDir, MODULE_NAME, 'entry.js')));
    } else {
      logger.warn(`[${MODULE_NAME}] module functionality is limited without ssr and performance check`);
    }

    if (moduleOptions.optimizePreloads) {
      optimizePreloads(nuxt);
    } else {
      logger.warn(`[${MODULE_NAME}] preload optimization is disabled by module option \`optimizePreloads\`.`);
    }

    addBundleRendererDirective(nuxt.options.render.bundleRenderer);

    const componentsDir = join(nuxt.options.buildDir, MODULE_NAME, 'components');

    // @nuxt/components
    moduleOptions.componentAutoImport && autoImportComponents(nuxt, componentsDir, moduleOptions.componentPrefix);

    await addBuildTemplates(nuxt, moduleOptions);
  }
});

async function addBuildTemplates (nuxt, options) {
  const supportedBrowserDetector = await getSupportedBrowserDetector(!options.detection.browserSupport);
  const fontConfig = new FontConfig(options.fonts, nuxt.options.alias);

  nuxt.hook('listen', (_, listener) => {
    process.env.NUXT_SPEEDKIT_INTERAL_URL = `${listener.https ? 'https' : 'http'}://${listener.host || 'localhost'}:${listener.port}`;
  });

  addPluginTemplate({
    src: resolve(__dirname, 'templates/plugin.js'),
    fileName: MODULE_NAME + '/plugin.js',
    options: {
      fonts: fontConfig.toJSON(),
      targetFormats: options.targetFormats,
      crossorigin: getCrossorigin(options.crossorigin, nuxt.options.render.crossorigin),
      supportedBrowserDetector,
      loader: options.loader
    }
  });

  addTemplate({
    src: resolve(__dirname, 'templates/entry.js'),
    fileName: MODULE_NAME + '/entry.js',
    options: {
      isDev: !options.debug && process.env.NODE_ENV === 'development',
      runOptions: options.runOptions,
      ssr: nuxt.options.ssr,
      ignorePerformance: !options.detection.performance,
      performanceMetrics: JSON.stringify(options.performanceMetrics || {}),
      supportedBrowserDetector
    }
  });

  addTemplate({
    src: resolve(__dirname, 'templates/fonts.css'),
    fileName: MODULE_NAME + '/fonts.css',
    options: { content: fontConfig.toCSS() }
  });

  // copy components for alias usage.
  const libComponentsDir = join(__dirname, 'components');
  const components = await getComponentFiles(libComponentsDir);
  components.forEach((file) => {
    addTemplate({
      src: join(libComponentsDir, file),
      fileName: `${MODULE_NAME}/components/${file}`
    });
  });
}

function addNuxtImage (nuxt) {
  // Check if @nuxt/image exists, if not, module is registered in nuxt.
  const modules = [...nuxt.options.modules, ...nuxt.options.buildModules];
  if (!modules.find(module => getModuleName(module) === '@nuxt/image')) {
    logger.info(`[${MODULE_NAME}] added module \`@nuxt/image\`, for more configuration learn more at \`https://image.nuxtjs.org/setup#configure\``);
    installModule(nuxtImage.bind({
      nuxt, addPlugin: addPluginTemplate
    }));
  }

  // Check @nuxt/image Options
  nuxt.hook('modules:done', (moduleContainer) => {
    const nuxtImageOptions = getNuxtImageModuleOptions(moduleContainer);
    if (nuxtImageOptions && ['youtube', 'vimeo'].find(alias => !(alias in nuxtImageOptions.alias))) {
      logger.warn('For using `SpeedkitYoutube` and `SpeedkitVimeo` you have to set the required domains & aliases for the `Provider` in the `@nuxt/image` options. \nLearn more https://nuxt-speedkit.grabarzundpartner.dev/setup#nuxtimage');
    }
  });
}

function getModuleName (m) {
  if (Array.isArray(m)) { m = m[0]; }
  return m.meta ? m.meta.name : m;
};
