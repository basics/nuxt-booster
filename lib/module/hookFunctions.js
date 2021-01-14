export const autoImportComponents = (path, prefix) => {
  return (dirs) => {
    dirs.push({ path, prefix });
  };
};

export function preloadOptimization () {
  return (resources) => {
    ['clientManifest', 'modernManifest'].filter(value => resources[value]).forEach((key) => {
      const assetsMapping = resources[key].assetsMapping;
      for (const key in assetsMapping) {
        if (assetsMapping[key].length > 1) {
          delete assetsMapping[key];
        }
      }
    });
  };
}

export const injectNormalizeStyle = () => {
  return (page) => {
    page.HEAD += getNoscriptStyleString();
  };
};

export const registerAppEntry = (filePath) => {
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

function getNoscriptStyleString () {
  return '<noscript><style>.noscript-hide {display: none;}</style></noscript>';
}
