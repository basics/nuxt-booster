import Deferred from '../Deferred';
import type { IIntersectionObservable } from './Observable';

export default class ElementObserver {
  #observer;
  #unregister;
  #inView = false;

  #inViewListeners: CallableFunction[] = [];
  #outViewListeners: CallableFunction[] = [];
  #inViewDeferrer = new Deferred();
  #outViewDeferrer = new Deferred();

  constructor(observable: IIntersectionObservable, el: HTMLElement) {
    this.#observer = observable.register(el, this.onIntersecting.bind(this));
    this.#unregister = () => observable.unregister(el);
  }

  get observer() {
    return this.#observer;
  }

  get inView() {
    return this.#inView;
  }

  onIntersecting(isIntersecting: boolean) {
    if (isIntersecting) {
      this.#inViewDeferrer.resolve();
      this.#inView = true;
      this.#inViewListeners.forEach(listener => listener());
    } else if (this.#inView) {
      this.#outViewDeferrer.resolve();
      this.#inView = false;
      this.#outViewListeners.forEach(listener => listener());
    }
  }

  enterViewOnce() {
    return this.#inViewDeferrer.promise;
  }

  enterView(fn: CallableFunction) {
    this.#inViewListeners.push(fn);
  }

  leaveViewOnce() {
    return this.#outViewDeferrer.promise;
  }

  leaveView(fn: CallableFunction) {
    this.#outViewListeners.push(fn);
  }

  destroy() {
    this.#unregister();
  }
}
