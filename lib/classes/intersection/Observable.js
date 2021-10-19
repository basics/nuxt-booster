export default class IntersectionObservable {
  #intersectionObserver;
  #listeners = new Map();

  constructor (options) {
    this.#intersectionObserver = new global.IntersectionObserver(entries => this.next(entries), options);
  }

  next (entries) {
    entries.forEach(({ target, isIntersecting }) => {
      if (this.#listeners.has(target)) {
        this.#listeners.get(target)(isIntersecting);
      }
    });
  }

  register (el, callback) {
    this.#listeners.set(el, callback);
    this.#intersectionObserver.observe(el);
  }

  unregister (el) {
    this.#listeners.delete(el);
    this.#intersectionObserver.unobserve(el);
  }
}

export const getIntersectionObservable = (options) => {
  const { node, key } = getNodeAndKey(options);

  if (!node.observables.has(key)) {
    node.observables.set(key, new IntersectionObservable(options));
  }

  const observable = node.observables.get(key);

  return {
    register: (el, callback) => observable.register(el, callback),
    unregister: (el, callback) => observable.unregister(el, callback)
  };
};

const getNodeAndKey = ({ root, ...options }) => {
  const node = root || global.document.documentElement;
  if (!node.observables) {
    node.observables = new Map();
  }
  return { key: JSON.stringify(Object.assign(options)), node };
};
