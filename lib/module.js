const path = require('upath');
const glob = require('glob');
const consola = require('consola');
const { getUserAgentRegExp } = require('browserslist-useragent-regexp');
const serialize = require('serialize-to-js');

let pkg;
try {
  pkg = require('./package.json');
} catch (error) {
  pkg = require('../package.json');
}

const { addBundleRendererDirective } = require('./module/bundleRenderer');
const { registerAppEntry, autoImportComponents, preloadOptimization } = require('./module/hookFunctions');
const FontConfig = require('./classes/FontConfig');

module.exports = async function (moduleOptions) {
  const options = Object.assign(getDefaultOptions(), {
    ...this.options[pkg.name],
    ...moduleOptions
  });
  const supportedBrowserDetector = getSupportedBrowserDetector(options.ignoreBrowserSupport);

  // Add package to build transpile
  this.nuxt.options.build.transpile.push(pkg.name);

  setEnvironments(this.nuxt, options);

  if (!options.ignorePerformance && this.options.ssr) {
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

  addBundleRendererDirective(this.options.render.bundleRenderer, options);

  const fontConfig = new FontConfig(options.fonts, this.nuxt.options.alias);
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: pkg.name + '/plugin.js',
    options: { fonts: fontConfig.toJSON(), crossorigin: JSON.stringify(options.crossorigin || 'anonymous') }
  });
  this.addTemplate({
    src: path.resolve(__dirname, 'entry.js'),
    fileName: pkg.name + '/entry.js',
    options: { ignorePerformance: options.ignorePerformance, performance: JSON.stringify(options.performance || {}), supportedBrowserDetector }
  });
  this.addTemplate({
    src: path.resolve(__dirname, 'css/fonts.css'),
    fileName: pkg.name + '/fonts.css',
    options: { content: fontConfig.toCSS() }
  });

  // create alias for component import "nuxt-speedkit-components"
  const componentsDir = path.join(this.nuxt.options.buildDir, pkg.name, 'components');
  this.nuxt.options.alias[`${pkg.name}-components`] = componentsDir;

  // @nuxt/components
  options.componentAutoImport && this.nuxt.hook('components:dirs', autoImportComponents(componentsDir, options.componentPrefix));

  const libComponentsDir = path.join(__dirname, 'components');
  const components = await getComponentFiles(libComponentsDir);
  components.forEach((file) => {
    this.addTemplate({
      src: path.join(libComponentsDir, file),
      fileName: `${pkg.name}/components/${file}`,
      options: {
        ignorePerformance: options.ignorePerformance
      }
    });
  });
};

function getDefaultOptions () {
  return {
    ignorePerformance: false,
    ignoreBrowserSupport: false,
    performance: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200 // fallback if fcp is not available (safari)
      },
      lighthouseDetectionByUserAgent: false
    },
    fonts: [],

    componentAutoImport: false,
    componentPrefix: null,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  };
}

function setEnvironments (nuxt, options) {
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT = options.lazyOffset.component;
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_ASSET = options.lazyOffset.asset;
  nuxt.options.env.NUXT_SPEEDKIT_IGNORE_PERFORMANCE = options.ignorePerformance;
}

function getSupportedBrowserDetector (ignore) {
  if (ignore) {
    return JSON.stringify({ regex: '' });
  } else {
    return serialize({ regex: getUserAgentRegExp({ allowHigherVersions: true, allowZeroSubversions: true }) });
  }
}

function getComponentFiles (cwd) {
  return new Promise(resolve => glob('**/*.vue', {
    cwd
  }, (err, files) => {
    if (err) {
      throw err;
    }
    resolve(files);
  }));
}

module.exports.meta = pkg;
