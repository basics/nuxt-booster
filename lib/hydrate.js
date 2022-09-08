
import { hydrateWhenVisible } from 'vue-lazy-hydration';

function getMaxIdleTries () {
  return global.__NUXT_SPEEDKIT_HYDRATE_MAX_IDLE_DURATION__ * 60;
}

const MAX_IDLE_TRIES = getMaxIdleTries();

const isDev = process.env.NODE_ENV === 'development';

let idleExecuteResolve = true;
export const setIdleExecute = value => (idleExecuteResolve = value);

export default (component) => {
  if (isDev || process.server) {
    return component;
  }

  return wrap(component, idleExecuteResolve);
};

const wrap = (component, executeResolve) => {
  return hydrateWhenVisible(async () => {
    if (executeResolve) {
      return execute(await component());
    } else {
      return component();
    }
  }, {
    observerOptions: { rootMargin: process.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT || '0%' }
  });
};

const execute = (component) => {
  return new Promise((resolve) => {
    return waitForIdle(() => resolve(component));
  });
};

function waitForIdle (cb, idleTries = 0) {
  if (idleTries >= MAX_IDLE_TRIES) {
    cb();
  } else if ('requestIdleCallback' in global && MAX_IDLE_TRIES > idleTries) {
    idleTries++;
    global.requestIdleCallback((deadline) => {
      const time = deadline.timeRemaining();
      if (time > 10 || deadline.didTimeout) {
        cb();
      } else {
        waitForIdle(cb, idleTries);
      }
    }, { timeout: 2000 });
  } else {
    cb();
  }
}
