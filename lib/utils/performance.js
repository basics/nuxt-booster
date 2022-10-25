
import { CallbackObserver, combineCallbackObserver } from '../classes/CallbackObserver';

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

let startTime;

const resolveTimes = (timeRange, threshold, resolve, reject) => {
  return ([raf, idle]) => {
    const time = (window.performance.now() - startTime);
    const value = (idle / raf);
    if (time > timeRange[0] && value <= 1 && value > threshold) {
      resolve(true);
    } else if (time >= timeRange[1]) {
      reject(false);
    }
  };
};

export const getDefaultRunOptions = () => {
  return { timeRange: [0, 1000], threshold: 0.65 };
};

export const run = (options = {}) => {
  const { timeRange, threshold } = { ...getDefaultRunOptions(), ...options };
  const fpsObserver = new CallbackObserver(rafTime);
  const idleObserver = new CallbackObserver(idleTime);

  return new Promise((resolve, reject) => {
    startTime = window.performance.now();
    combineCallbackObserver(resolveTimes(timeRange, threshold, resolve, reject), [fpsObserver, idleObserver]);
  }).finally(() => {
    fpsObserver.destroy();
    idleObserver.destroy();
  });
};

const rafTime = (fn) => {
  let prevTime = performance.now();
  const loop = () => {
    const time = performance.now();
    const offset = (time - prevTime);
    prevTime = time;
    const running = fn(offset);
    if (running) {
      requestAnimationFrame(loop);
    }
  };
  requestAnimationFrame(loop);
};

const idleTime = (callback) => {
  const loop = (deadline) => {
    const running = callback(deadline.timeRemaining());
    if (running) {
      global.requestIdleCallback(loop);
    }
  };
  global.requestIdleCallback(loop);
};
