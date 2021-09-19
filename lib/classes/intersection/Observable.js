import { Observable } from 'rxjs';
import { mergeMap, share, filter } from 'rxjs/operators';
import Deferred from '../Deferred';

export default class IntersectionObservable {
  #observer = new Deferred();
  #observable;

  constructor (options) {
    this.#observable = new Observable((observer) => {
      const intersectionObserver = new global.IntersectionObserver(entries => observer.next(entries), options);
      this.#observer.resolve(intersectionObserver);
      return () => intersectionObserver.disconnect();
    }).pipe(mergeMap(entries => entries), share());
  }

  register (el) {
    observe(this.#observer.promise, el);
    return this.#observable.pipe(filter(({ target }) => el === target), share());
  }

  unregister (el) {
    unobserve(this.#observer.promise, el);
  }
}

const observe = async (observer, el) => (await observer).observe(el);
const unobserve = async (observer, el) => (await observer).unobserve(el);

export const getIntersectionObservable = (options) => {
  const key = getKey(options);

  if (!options.root.observables) {
    options.root.observables = new Map();
  }

  if (!options.root.observables.has(key)) {
    options.root.observables.set(key, new IntersectionObservable(options));
  }

  const observable = options.root.observables.get(key);
  return {
    register: el => observable.register(el),
    unregister: el => observable.unregister(el)
  };
};

const getKey = ({ root, ...options }) => {
  const node = root || global.document.documentElement;
  if (!node.intersectionObserverRootKey) {
    node.intersectionObserverRootKey = (Math.random() + 1).toString(36).substring(7);
  }
  return JSON.stringify(Object.assign(options, { root: node.intersectionObserverRootKey }));
};
