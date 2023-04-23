/* eslint-disable no-secrets/no-secrets */
// import path from 'pathe';
// import consola from 'consola';

// import { addBundleRendererDirective } from './bundleRenderer';
// import { registerAppEntry, autoImportComponents } from './hookFunctions';
// import { getOptions, getComponentFiles, setEnvironments, optimizePreloads, getNuxtImageModuleOptions, MODULE_NAME } from './utils';
// import FontConfig from './runtime/classes/FontConfig';
// import { getCrossorigin } from './runtime/utils';
// import { getSupportedBrowserDetector } from './utils/browser';
import {
  createResolver,
  defineNuxtModule,
  addPluginTemplate,
  addTemplate,
  isNuxt3,
  logger
} from '@nuxt/kit';
import { getDefaultOptions } from './utils.mjs';

export default defineNuxtModule({
  meta: {
    name: 'nuxt-custom-elements',
    configKey: 'customElements',
    compatibility: {
      nuxt: '^3.0.x'
    }
  },
  defaults: getDefaultOptions(),

  setup (moduleOptions, nuxt) {
    const resolver = createResolver(import.meta.url);

    const runtimeDir = resolver.resolve('./runtime');
    nuxt.options.alias['#speedkit'] = runtimeDir;
    nuxt.options.build.transpile.push(runtimeDir);

    // if (!options.disableNuxtImage) {
    // options.targetFormats = options.targetFormats || DEFAULT_TARGET_FORMATS;
    //   await addNuxtImage(this);
    // }

    // const runtimeDir = path.resolve(__dirname, 'runtime');
    // this.nuxt.options.alias['#speedkit'] = runtimeDir;
    // this.nuxt.options.build.transpile.push('#speedkit');
    // // @deprecated Alias `nuxt-speedkit` is replaced by #speedkit for runtime only
    // this.nuxt.options.alias['nuxt-speedkit'] = runtimeDir;
    // this.nuxt.options.build.transpile.push('nuxt-speedkit');

    // setEnvironments(this.nuxt, options);

    // if (options.detection.performance && this.options.ssr) {
    //   this.nuxt.hook('webpack:config', registerAppEntry(path.resolve(this.options.buildDir, MODULE_NAME, 'entry.js')));
    // } else {
    //   consola.warn(`[${MODULE_NAME}] module functionality is limited without ssr and performance check`);
    // }

    // if (options.optimizePreloads) {
    //   optimizePreloads(this.nuxt);
    // } else {
    //   consola.warn(`[${MODULE_NAME}] preload optimization is disabled by module option \`optimizePreloads\`.`);
    // }

    // addBundleRendererDirective(this.options.render.bundleRenderer);

    // const componentsDir = path.join(this.nuxt.options.buildDir, MODULE_NAME, 'components');

    // // @nuxt/components
    // options.componentAutoImport && autoImportComponents(this.nuxt, componentsDir, options.componentPrefix);

    // await addBuildTemplates(this, options);
  }
});

// export const meta = {
//   name: MODULE_NAME
// };

// async function addBuildTemplates (scope, options) {
//   const supportedBrowserDetector = await getSupportedBrowserDetector(!options.detection.browserSupport);
//   const fontConfig = new FontConfig(options.fonts, scope.nuxt.options.alias);

//   scope.nuxt.hook('listen', (_, listener) => {
//     process.env.NUXT_SPEEDKIT_INTERAL_URL = `${listener.https ? 'https' : 'http'}://${listener.host || 'localhost'}:${listener.port}`;
//   });

//   ['client', 'server'].forEach((mode) => {
//     scope.addPlugin({
//       src: path.resolve(__dirname, 'runtime/tmpl', 'plugin.mjs'),
//       fileName: MODULE_NAME + `/plugin.${mode}.js`,
//       mode,
//       options: {
//         mode,
//         fonts: fontConfig.toJSON(),
//         targetFormats: options.targetFormats,
//         crossorigin: getCrossorigin(options.crossorigin, scope.nuxt.options.render.crossorigin),
//         supportedBrowserDetector,
//         loader: options.loader
//       }
//     });
//   });

//   scope.addTemplate({
//     src: path.resolve(__dirname, 'runtime/tmpl', 'entry.mjs'),
//     fileName: MODULE_NAME + '/entry.js',
//     options: {
//       isDev: !options.debug && process.env.NODE_ENV === 'development',
//       runOptions: options.runOptions,
//       ssr: scope.nuxt.options.ssr,
//       ignorePerformance: !options.detection.performance,
//       performanceMetrics: JSON.stringify(options.performanceMetrics || {}),
//       supportedBrowserDetector
//     }
//   });

//   scope.addTemplate({
//     src: path.resolve(__dirname, 'runtime/tmpl', 'fonts.css'),
//     fileName: MODULE_NAME + '/fonts.css',
//     options: { content: fontConfig.toCSS() }
//   });

//   // copy components for alias usage.
//   const libComponentsDir = path.join(__dirname, 'components');
//   const components = await getComponentFiles(libComponentsDir);
//   components.forEach((file) => {
//     scope.addTemplate({
//       src: path.join(libComponentsDir, file),
//       fileName: `${MODULE_NAME}/components/${file}`
//     });
//   });
// }

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
