const defaultConfig = {
  device: {
    hardwareConcurrency: { min: 2, max: 48 },
    deviceMemory: { min: 2 }
  },
  timing: {
    fcp: 500,
    dcl: 800
  },
  lighthouseDetectionByUserAgent: false
  // saveData: false,
};
let customConfig = defaultConfig;
let polyfill = setupPolyfill(customConfig);

export function setup (config = {}) {
  customConfig = {
    device: Object.assign({}, defaultConfig.device, config.device || {}),
    timing: Object.assign({}, defaultConfig.timing, config.timing || {}),
    lighthouseDetectionByUserAgent: customConfig.lighthouseDetectionByUserAgent || defaultConfig.lighthouseDetectionByUserAgent
  };
  customConfig = Object.assign({}, defaultConfig, config);
  polyfill = setupPolyfill(customConfig);
}

function setupPolyfill (config = {}) {
  const navigator = global.navigator || {};
  return {
    hardwareConcurrency: navigator.hardwareConcurrency || config.device.hardwareConcurrency.min,
    deviceMemory: navigator.deviceMemory || config.device.deviceMemory.min,
    userAgent: navigator.userAgent || ''
  };
}

export function hasSufficientPerformance () {
  return (
    hasSufficientDownloadPerformance() &&
    hasSufficientHardwareSetup() &&
    // !hasActivatedSaveDataMode() &&
    !(customConfig.lighthouseDetectionByUserAgent ? isLighthouse() : false) &&
    !process.server
  );
}

export function hasSufficientHardwareSetup () {
  return (
    (polyfill.hardwareConcurrency) >= customConfig.device.hardwareConcurrency.min &&
    (polyfill.hardwareConcurrency) <= customConfig.device.hardwareConcurrency.max &&
    (polyfill.deviceMemory) >= customConfig.device.deviceMemory.min
  );
}

// export function hasActivatedSaveDataMode () {
//   return polyfill.connection.saveData || customConfig.saveData
// }

export function isLighthouse () {
  return /(Speed Insights)|(Chrome-Lighthouse)/.test(polyfill.userAgent);
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
