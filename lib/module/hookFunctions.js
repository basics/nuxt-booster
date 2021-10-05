const { join } = require('upath');

function autoImportComponents (nuxt, componentsDir, componentPrefix) {
  nuxt.hook('components:dirs', (dirs) => {
    dirs.push(
      { path: componentsDir, pattern: '*', prefix: componentPrefix },
      { path: join(componentsDir, 'abstracts'), pattern: '*', prefix: `${componentPrefix || ''}Abstract` }
    );
  });
};

function preloadOptimization () {
  return (resources) => {
    ['clientManifest', 'modernManifest'].filter(value => resources[String(value)]).forEach((key) => {
      const assetsMapping = resources[String(key)].assetsMapping;
      for (const assetKey in assetsMapping) {
        if (assetsMapping[String(assetKey)].length > 1) {
          delete assetsMapping[String(assetKey)];
        }
      }
    });
  };
}

const registerAppEntry = (filePath) => {
  return (configs) => {
    configs
      .filter(({ name }) => ['client', 'modern'].includes(name))
      .forEach((config) => {
        config.entry.app = config.entry.app.map((file) => {
          if (file.endsWith('client.js')) {
            return filePath;
          }
          return file;
        });
        config.optimization.runtimeChunk = {
          name: 'app'
        };
      });
  };
};

module.exports = {
  autoImportComponents,
  preloadOptimization,
  registerAppEntry
};
