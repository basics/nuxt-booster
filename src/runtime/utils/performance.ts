import type { PerformanceMetrics } from './../../types';
import {
  CallbackObserver,
  combineCallbackObserver
} from '#booster/classes/CallbackObserver';

function getDefaultConfig(): PerformanceMetrics {
  return {
    timing: {
      fcp: 500,
      dcl: 800
    }
  };
}

let customConfig: PerformanceMetrics = getDefaultConfig();

export function setup(config: PerformanceMetrics = getDefaultConfig()) {
  customConfig = {
    timing: {
      ...customConfig.timing,
      ...(config.timing || {})
    } as PerformanceMetrics['timing']
  };
  customConfig = {
    ...customConfig,
    ...config
  };
}

export function hasSufficientPerformance() {
  return hasSufficientDownloadPerformance() && !import.meta.server;
}

export function hasSufficientDownloadPerformance() {
  if (window.performance && customConfig.timing) {
    const paint = performance.getEntriesByName('first-contentful-paint');
    const resources = performance.getEntriesByType('resource');
    if (paint.length) {
      return paint[0].startTime < customConfig.timing.fcp;
    } else if (resources.length) {
      return (
        resources.reduce((result, resource) => {
          // TODO: Property 'responseEnd' does not exist on type 'PerformanceEntry'.
          // if (!result || result < resource.responseEnd) {
          //   result = resource.responseEnd;
          // }
          if (!result || result < resource.startTime + resource.duration) {
            result = resource.startTime + resource.duration;
          }
          return result;
        }, 0) < customConfig.timing.dcl
      );
    }
  }
  return false;
}

let startTime: number;

function resolveTimes(
  maxTime: number,
  threshold: number,
  resolve: CallableFunction,
  reject: CallableFunction
) {
  const buffer = new ValueBuffer(10, threshold / 2);
  return ([raf, idle]: [number, number]) => {
    const time = window.performance.now() - startTime;
    const value = idle / raf;

    if (value <= 1) {
      buffer.add(value);
    }

    if (buffer.avg <= 1 && buffer.avg > threshold) {
      resolve(true);
    } else if (time >= maxTime) {
      reject(false);
    }
  };
}

export function getDefaultRunOptions() {
  return { maxTime: 1000, threshold: 0.65 };
}

export async function run(options = {}) {
  if ('requestIdleCallback' in window) {
    const { maxTime, threshold } = { ...getDefaultRunOptions(), ...options };
    const fpsObserver = new CallbackObserver(rafTime);
    const idleObserver = new CallbackObserver(idleTime);

    return new Promise((resolve, reject) => {
      startTime = window.performance.now();
      combineCallbackObserver(
        resolveTimes(maxTime, threshold, resolve, reject),
        [fpsObserver, idleObserver]
      );
    }).finally(() => {
      fpsObserver.destroy();
      idleObserver.destroy();
    });
  }
}

function rafTime(fn: CallableFunction) {
  let prevTime = performance.now();
  const loop = () => {
    const time = performance.now();
    const offset = time - prevTime;
    prevTime = time;
    const running = fn(offset);
    if (running) {
      requestAnimationFrame(loop);
    }
  };
  requestAnimationFrame(loop);
}

function idleTime(callback: CallableFunction) {
  const loop = (deadline: IdleDeadline) => {
    const running = callback(deadline.timeRemaining());
    if (running) {
      window.requestIdleCallback(loop);
    }
  };
  window.requestIdleCallback(loop);
}

class ValueBuffer {
  list;
  index = 0;
  constructor(count = 10, defaultValue = 0) {
    this.list = Array(count).fill(defaultValue);
  }

  add(value: number) {
    this.list[this.index] = value;
    this.index = (this.index + 1) % this.list.length;
  }

  get avg() {
    return this.list.reduce((r, v) => (r += v), 0) / this.list.length;
  }
}
