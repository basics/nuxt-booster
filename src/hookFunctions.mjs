import { join } from 'pathe';

function autoImportComponents (nuxt, componentsDir, componentPrefix) {
  nuxt.hook('components:dirs', (dirs) => {
    dirs.push(
      { path: componentsDir, pattern: '*', prefix: componentPrefix },
      { path: join(componentsDir, 'abstracts'), pattern: '*', prefix: `${componentPrefix || ''}Abstract` }
    );
  });
}

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

export {
  autoImportComponents,
  preloadOptimization
};
