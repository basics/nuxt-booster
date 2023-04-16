import { resolve, join } from 'pathe';
import {
  createResolver,
  defineNuxtModule,
  addPluginTemplate,
  addTemplate,
  // isNuxt3,
  installModule,
  logger
} from '@nuxt/kit';

import nuxtImage from '@nuxt/image';
import FontConfig from './runtime/classes/FontConfig';

import { addBundleRendererDirective } from './bundleRenderer.mjs';
import { registerAppEntry, autoImportComponents } from './hookFunctions.mjs';
import { getComponentFiles, setEnvironments, optimizePreloads, getNuxtImageModuleOptions, getDefaultOptions, deprecationsNotification, MODULE_NAME } from './utils/index.mjs';
import { getCrossorigin } from './runtime/utils';
import { getSupportedBrowserDetector } from './utils/browser.mjs';

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

    const resolver = createResolver(import.meta.url);

    const runtimeDir = resolver.resolve('./runtime');
    nuxt.options.alias['#speedkit'] = runtimeDir;
    // @deprecated Alias `nuxt-speedkit` is replaced by #speedkit for runtime only
    nuxt.options.alias['nuxt-speedkit'] = runtimeDir;
    nuxt.options.build.transpile.push(runtimeDir);

    if (!moduleOptions.disableNuxtImage) {
      addNuxtImage(nuxt);
    }

    // Add package to build transpile
    nuxt.options.build.transpile.push(MODULE_NAME);

    setEnvironments(nuxt, moduleOptions);

    if (moduleOptions.detection.performance && nuxt.options.ssr) {
      nuxt.hook('webpack:config', registerAppEntry(resolve(nuxt.options.buildDir, MODULE_NAME, 'entry.mjs')));
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

    await addBuildTemplates(runtimeDir, nuxt, moduleOptions);
  }
});

async function addBuildTemplates (runtimeDir, nuxt, moduleOptions) {
  const supportedBrowserDetector = await getSupportedBrowserDetector(!moduleOptions.detection.browserSupport);
  const fontConfig = new FontConfig(moduleOptions.fonts, nuxt.options.alias);

  nuxt.hook('listen', (_, listener) => {
    process.env.NUXT_SPEEDKIT_INTERAL_URL = `${listener.https ? 'https' : 'http'}://${listener.host || 'localhost'}:${listener.port}`;
  });

  addPluginTemplate({
    src: resolve(runtimeDir, 'tmpl/plugin.mjs'),
    fileName: MODULE_NAME + '/plugin.mjs',
    options: {
      fonts: fontConfig.toJSON(),
      targetFormats: moduleOptions.targetFormats,
      crossorigin: getCrossorigin(moduleOptions.crossorigin, nuxt.options.render.crossorigin),
      supportedBrowserDetector,
      loader: moduleOptions.loader
    }
  });

  addTemplate({
    src: resolve(runtimeDir, 'tmpl/entry.mjs'),
    fileName: MODULE_NAME + '/entry.mjs',
    options: {
      isDev: !moduleOptions.debug && process.env.NODE_ENV === 'development',
      runOptions: moduleOptions.runOptions,
      ssr: nuxt.options.ssr,
      ignorePerformance: !moduleOptions.detection.performance,
      performanceMetrics: JSON.stringify(moduleOptions.performanceMetrics || {}),
      supportedBrowserDetector
    }
  });

  addTemplate({
    src: resolve(runtimeDir, 'tmpl/fonts.css'),
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
}
