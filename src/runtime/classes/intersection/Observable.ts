import type { ObservableHTMLElement, ObservableOptions } from '../../../types';

export default class IntersectionObservable {
  #intersectionObserver;
  #listeners = new Map();

  constructor(options: ObservableOptions) {
    this.#intersectionObserver = new window.IntersectionObserver(
      entries => this.next(entries),
      options
    );
  }

  next(entries: IntersectionObserverEntry[]) {
    entries.forEach(({ target, isIntersecting }) => {
      if (this.#listeners.has(target)) {
        this.#listeners.get(target)(isIntersecting);
      }
    });
  }

  register(el: HTMLElement, callback: CallableFunction) {
    this.#listeners.set(el, callback);
    this.#intersectionObserver.observe(el);
  }

  unregister(el: HTMLElement) {
    this.#listeners.delete(el);
    this.#intersectionObserver.unobserve(el);
  }
}

export interface IIntersectionObservable {
  register: (el: HTMLElement, callback: CallableFunction) => void;
  unregister: (el: HTMLElement) => void;
}

export const getIntersectionObservable = (
  options: ObservableOptions
): IIntersectionObservable => {
  const { node, key } = getNodeAndKey(options);

  if (!node.observables.has(key)) {
    node.observables.set(key, new IntersectionObservable(options));
  }

  const observable = node.observables.get(key) as IntersectionObservable;

  return {
    register: (el: HTMLElement, callback: CallableFunction) =>
      observable.register(el, callback),
    unregister: (el: HTMLElement) => observable.unregister(el)
  };
};

const getNodeAndKey = ({ root, ...options }: ObservableOptions) => {
  const node = (root ||
    window.document.documentElement) as ObservableHTMLElement;
  if (!node.observables) {
    node.observables = new Map();
  }
  return { key: JSON.stringify({ ...options }), node };
};
