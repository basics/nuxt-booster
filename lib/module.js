const path = require('upath');
const consola = require('consola');

let pkg;
try {
  pkg = require('./package.json');
} catch (error) {
  pkg = require('../package.json');
}

const FontConfig = require('./classes/FontConfig');

const { addBundleRendererDirective } = require('./module/bundleRenderer');
const { registerAppEntry, autoImportComponents } = require('./module/hookFunctions');
const { getOptions, getComponentFiles, getSupportedBrowserDetector, setEnvironments, optimizePreloads, getNuxtImageModuleOptions } = require('./module/utils');
const { getCrossorigin } = require('./utils');

module.exports = async function (moduleOptions) {
  const options = getOptions({
    ...this.options.speedkit,
    ...moduleOptions
  });

  if (!options.disableNuxtImage) {
    addNuxtImage(this);
  }

  // Add package to build transpile
  this.nuxt.options.build.transpile.push(pkg.name);

  setEnvironments(this.nuxt, options);

  if (options.detection.performance && this.options.ssr) {
    this.nuxt.hook('webpack:config', registerAppEntry(path.resolve(this.options.buildDir, pkg.name, 'entry.js')));
  } else {
    consola.warn(`[${pkg.name}] module functionality is limited without ssr and performance check`);
  }

  if (options.optimizePreloads) {
    optimizePreloads(this.nuxt);
  } else {
    consola.warn(`[${pkg.name}] preload optimization is disabled by module option \`optimizePreloads\`.`);
  }

  addBundleRendererDirective(this.options.render.bundleRenderer);

  const componentsDir = path.join(this.nuxt.options.buildDir, pkg.name, 'components');

  // @nuxt/components
  options.componentAutoImport && autoImportComponents(this.nuxt, componentsDir, options.componentPrefix);

  await addBuildTemplates(this, options);
};

module.exports.meta = pkg;

async function addBuildTemplates (scope, options) {
  const supportedBrowserDetector = getSupportedBrowserDetector(!options.detection.browserSupport);
  const fontConfig = new FontConfig(options.fonts, scope.nuxt.options.alias);

  scope.nuxt.hook('listen', (_, listener) => {
    // eslint-disable-next-line no-secrets/no-secrets
    process.env.NUXT_SPEEDKIT_INTERAL_URL = `${listener.https ? 'https' : 'http'}://${listener.host || 'localhost'}:${listener.port}`;
  });

  scope.addPlugin({
    src: path.resolve(__dirname, 'templates/plugin.js'),
    fileName: pkg.name + '/plugin.js',
    options: {
      fonts: fontConfig.toJSON(),
      targetFormats: options.targetFormats,
      crossorigin: getCrossorigin(options.crossorigin, scope.nuxt.options.render.crossorigin),
      supportedBrowserDetector,
      loader: options.loader
    }
  });

  scope.addTemplate({
    src: path.resolve(__dirname, 'templates/entry.js'),
    fileName: pkg.name + '/entry.js',
    options: {
      isDev: !options.debug && process.env.NODE_ENV === 'development',
      runOptions: options.runOptions,
      ssr: scope.nuxt.options.ssr,
      ignorePerformance: !options.detection.performance,
      performanceMetrics: JSON.stringify(options.performanceMetrics || {}),
      supportedBrowserDetector
    }
  });

  scope.addTemplate({
    src: path.resolve(__dirname, 'templates/fonts.css'),
    fileName: pkg.name + '/fonts.css',
    options: { content: fontConfig.toCSS() }
  });

  // copy components for alias usage.
  const libComponentsDir = path.join(__dirname, 'components');
  const components = await getComponentFiles(libComponentsDir);
  components.forEach((file) => {
    scope.addTemplate({
      src: path.join(libComponentsDir, file),
      fileName: `${pkg.name}/components/${file}`
    });
  });
}

function addNuxtImage ({ addModule, nuxt }) {
  // Check if @nuxt/image exists, if not, module is registered in nuxt.
  const modules = [...nuxt.options.modules, ...nuxt.options.buildModules];
  if (!modules.find(module => getModuleName(module) === '@nuxt/image')) {
    consola.info(`[${pkg.name}] added module \`@nuxt/image\`, for more configuration learn more at \`https://image.nuxtjs.org/setup#configure\``);
    addModule('@nuxt/image');
  }

  // Check @nuxt/image Options
  nuxt.hook('modules:done', (moduleContainer) => {
    const nuxtImageOptions = getNuxtImageModuleOptions(moduleContainer);
    if (nuxtImageOptions && ['youtube', 'vimeo'].find(alias => !(alias in nuxtImageOptions.alias))) {
      consola.warn('For using `SpeedkitYoutube` and `SpeedkitVimeo` you have to set the required domains & aliases for the `Provider` in the `@nuxt/image` options. \nLearn more https://nuxt-speedkit.grabarzundpartner.dev/setup#nuxtimage');
    }
  });
}

function getModuleName (m) {
  if (Array.isArray(m)) { m = m[0]; }
  return m.meta ? m.meta.name : m;
};
