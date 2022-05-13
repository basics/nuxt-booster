const defaultConfig = {
  timing: {
    fcp: 500,
    dcl: 800
  }
  // saveData: false,
};
let customConfig = defaultConfig;

export function setup (config = {}) {
  customConfig = {
    timing: Object.assign({}, defaultConfig.timing, config.timing || {})
  };
  customConfig = Object.assign({}, defaultConfig, config);
}

export function hasSufficientPerformance () {
  return (
    hasSufficientDownloadPerformance() &&
    !process.server
  );
}

export function hasSufficientDownloadPerformance () {
  if (global.performance) {
    const paint = performance.getEntriesByName('first-contentful-paint');
    const resources = performance.getEntriesByType('resource');
    if (paint.length) {
      return paint[0].startTime < customConfig.timing.fcp;
    } else if (resources.length) {
      return resources.reduce((result, resource) => {
        if (!result || result < resource.responseEnd) {
          result = resource.responseEnd;
        }
        return result;
      }, null) < customConfig.timing.dcl;
    }
  }
  return false;
}
