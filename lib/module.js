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
const { registerAppEntry, autoImportComponents, preloadOptimization } = require('./module/hookFunctions');
const { getOptions, getComponentFiles, getSupportedBrowserDetector, setEnvironments } = require('./module/utils');

module.exports = async function (moduleOptions) {
  const options = getOptions({
    ...this.options.speedkit,
    ...moduleOptions
  });

  // Add package to build transpile
  this.nuxt.options.build.transpile.push(pkg.name);

  setEnvironments(this.nuxt, options);

  if (options.detection.performance && this.options.ssr) {
    this.nuxt.hook('webpack:config', registerAppEntry(path.resolve(this.options.buildDir, pkg.name, 'entry.js')));
  } else {
    consola.warn(pkg.name, 'module functionality is limited without ssr and performance check');
  }

  // register hook for preload optimization.
  if (!this.nuxt.options.render.http2.push) {
    this.nuxt.hook('render:resourcesLoaded', preloadOptimization());
  } else {
    consola.warn(pkg.name, 'preload cleaning is disabled by render.http2.push');
  }

  addBundleRendererDirective(this.options.render.bundleRenderer);

  const componentsDir = path.join(this.nuxt.options.buildDir, pkg.name, 'components');

  // create alias for component import "nuxt-speedkit-components"
  this.nuxt.options.alias[`${pkg.name}-components`] = componentsDir;

  // @nuxt/components
  options.componentAutoImport && this.nuxt.hook('components:dirs', autoImportComponents(componentsDir, options.componentPrefix));

  await addBuildTemplates(this, options);
};

module.exports.meta = pkg;

async function addBuildTemplates (scope, options) {
  const supportedBrowserDetector = getSupportedBrowserDetector(!options.detection.browserSupport);
  const fontConfig = new FontConfig(options.fonts, scope.nuxt.options.alias);
  scope.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: pkg.name + '/plugin.js',
    options: { fonts: fontConfig.toJSON(), crossorigin: JSON.stringify(options.crossorigin || scope.nuxt.options.render.crossorigin || 'anonymous') }
  });
  scope.addTemplate({
    src: path.resolve(__dirname, 'entry.js'),
    fileName: pkg.name + '/entry.js',
    options: { ignorePerformance: !options.detection.performance, performance: JSON.stringify(options.performance || {}), supportedBrowserDetector }
  });
  scope.addTemplate({
    src: path.resolve(__dirname, 'css/fonts.css'),
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
