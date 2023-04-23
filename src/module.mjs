
import { resolve, join } from 'pathe';

import {
  createResolver,
  defineNuxtModule,
  addPluginTemplate,
  addTemplate,
  // isNuxt3,
  logger
} from '@nuxt/kit';
import { getCrossorigin } from './runtime/utils.mjs';
import FontConfig from './runtime/classes/FontConfig.mjs';
import { MODULE_NAME, getDefaultOptions, setPublicRuntimeConfig } from './utils.mjs';
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

  async setup (moduleOptions, nuxt) {
    const runtimeDir = resolver.resolve('./runtime');
    nuxt.options.alias['#speedkit'] = runtimeDir;
    nuxt.options.build.transpile.push(runtimeDir);

    // if (!options.disableNuxtImage) {
    // options.targetFormats = options.targetFormats || DEFAULT_TARGET_FORMATS;
    //   await addNuxtImage(this);
    // }

    setPublicRuntimeConfig(nuxt, moduleOptions);

    if (moduleOptions.detection.performance && nuxt.options.ssr) {
      if (isWebpackBuild(nuxt)) {
        nuxt.hook('webpack:config', registerAppEntryWebpack(resolve(nuxt.options.buildDir, MODULE_NAME, 'entry.mjs')));
      } else {
        nuxt.hook('vite:extend', registerAppEntryVite(resolve(nuxt.options.buildDir, MODULE_NAME, 'entry.mjs')));
      }
    } else {
      logger(`[${MODULE_NAME}] module functionality is limited without ssr and performance check`);
    }

    // if (options.optimizePreloads) {
    //   optimizePreloads(this.nuxt);
    // } else {
    //   consola.warn(`[${MODULE_NAME}] preload optimization is disabled by module option \`optimizePreloads\`.`);
    // }

    // addBundleRendererDirective(this.options.render.bundleRenderer);

    // const componentsDir = path.join(this.nuxt.options.buildDir, MODULE_NAME, 'components');

    // // @nuxt/components
    // options.componentAutoImport && autoImportComponents(this.nuxt, componentsDir, options.componentPrefix);

    await addBuildTemplates(nuxt, moduleOptions);
  }
});

async function addBuildTemplates (nuxt, options) {
  const supportedBrowserDetector = await getSupportedBrowserDetector(!options.detection.browserSupport);
  const fontConfig = new FontConfig(options.fonts, nuxt.options.alias);

  nuxt.hook('listen', (_, listener) => {
    process.env.NUXT_SPEEDKIT_INTERAL_URL = `${listener.https ? 'https' : 'http'}://${listener.host || 'localhost'}:${listener.port}`;
  });

  ['client', 'server'].forEach((mode) => {
    addPluginTemplate({
      src: resolver.resolve('runtime/tmpl', 'plugin.mjs'),
      fileName: MODULE_NAME + `/plugin.${mode}.js`,
      write: true,
      mode,
      options: {
        mode,
        fonts: fontConfig.toJSON(),
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

  addTemplate({
    src: resolver.resolve('runtime/tmpl', 'fonts.css'),
    fileName: MODULE_NAME + '/fonts.css',
    write: true,
    options: { content: fontConfig.toCSS() }
  });
}

// async function addNuxtImage ({ addModule, nuxt }) {
//   // Check if @nuxt/image exists, if not, module is registered in nuxt.
//   const modules = [...nuxt.options.modules, ...nuxt.options.buildModules];
//   if (!modules.find(module => getModuleName(module) === '@nuxt/image')) {
//     consola.info(`[${MODULE_NAME}] added module \`@nuxt/image\`, for more configuration learn more at \`https://image.nuxtjs.org/setup#configure\``);
//     await addModule('@nuxt/image');
//   }

//   // Check @nuxt/image Options
//   nuxt.hook('modules:done', (moduleContainer) => {
//     const nuxtImageOptions = getNuxtImageModuleOptions(moduleContainer);
//     if (nuxtImageOptions && ['youtube', 'vimeo'].find(alias => !(alias in nuxtImageOptions.alias))) {
//       consola.warn('For using `SpeedkitYoutube` and `SpeedkitVimeo` you have to set the required domains & aliases for the `Provider` in the `@nuxt/image` options. \nLearn more https://nuxt-speedkit.grabarzundpartner.dev/setup#nuxtimage');
//     }
//   });
// }

// function getModuleName (m) {
//   if (Array.isArray(m)) { m = m[0]; }
//   return m.meta ? m.meta.name : m;
// }

const isWebpackBuild = nuxt => nuxt.options.builder === '@nuxt/webpack-builder';
