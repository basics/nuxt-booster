
import Deferred from '../classes/Deferred';

/**
 * Insprired by https://github.com/maoberlehner/vue-lazy-hydration
 * Thanks Markus Oberlehner (maoberlehner)
 */

const resolves = new Map();

global.__NUXT_SPEEDKIT_RESOLVE_COMPONENTS__ = resolveComponents;

export const MODE = {
  NONE: 'none',
  VISIBLE: 'visible',
  EVENT: 'event',
  NAME: 'name'
};

export function resolveComponents (name) {
  let components;
  if (name) {
    if (!resolves.has(name)) {
      // eslint-disable-next-line no-console
      console.error(`Have no resolve with specified name ${name}`);
      return;
    }
    components = resolves.get(name).map(cb => [name, cb]);
  } else {
    components = Array.from(resolves).map(resolve => resolve[1].map(cb => [resolve[0], cb])).flat();
  }
  components.forEach(([
    key, resolve
  ]) => {
    resolves.delete(key);
    resolve();
  });
}

function addResolve (name, resolve) {
  resolves.set(name, (resolves.get(name) || []).concat([resolve]));
}

/**
 * Use for functional wrapper (code)
 */
export default function speedkit (component, mode = MODE.NONE, options = {}) {
  if (process.server) { return component; }

  options = Object.assign({ name: null }, options);

  const { resolvableComponent, resolve } = resolvableComponentFactory(component);

  const loading = loadingComponentFactory(resolve, {
    mounted () {
      registerResolve(this, resolve, mode, Object.assign({}, options, { el: this.$el }));
    }
  });

  return () => ({
    component: resolvableComponent,
    delay: 0,
    loading
  });
}
export function registerResolve (component, resolve, mode, options) {
  addResolve(component._uid, resolve);
  switch (mode) {
    case MODE.EVENT:
      if (!options.name) {
        throw new Error('mode event needs a event name (e.g. click)');
      }
      // eslint-disable-next-line scanjs-rules/call_addEventListener
      options.el.addEventListener(options.name, resolve, {
        capture: true,
        once: true,
        passive: true
      });
      break;
    case MODE.NAME:
      if (!options.name) {
        throw new Error('mode "name" needs a name (e.g. xyz)');
      }
      addResolve(options.name, resolve);
      break;
    case MODE.VISIBLE:
      if (component.$el instanceof HTMLElement) {
        createObserver(component.$el, component._uid, options);
      } else {
        resolve();
      }
      break;
  }
}

function loadingComponentFactory (resolve, options) {
  return {
    render (h) {
      const tag = this.$el ? this.$el.tagName : 'div';

      // eslint-disable-next-line no-underscore-dangle
      if (!this.$el) { resolve(); }

      return h(tag);
    },
    ...options
  };
}

function resolvableComponentFactory (component) {
  const deferred = new Deferred();
  return {
    resolvableComponent: deferred.promise,
    resolve: () => {
      deferred.resolve(typeof component === 'function' ? component() : component);
    }
  };
}

function createObserver (el, id, options) {
  options = Object.assign({ rootMargin: '0%', threshold: [0] }, options);
  if (typeof IntersectionObserver === 'undefined') { return null; }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isIntersecting = entry.isIntersecting || entry.intersectionRatio > 0;
      if (!isIntersecting || !resolves.has(id)) { return; }
      observer.disconnect();
      resolveComponents(id);
    });
  }, options);
  observer.observe(el);
  return observer;
}
