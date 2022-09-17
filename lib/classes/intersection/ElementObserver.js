import Deferred from '../Deferred';

export default class ElementObserver {
  #observer;
  #unregister;
  #inView = false;

  #inViewListeners = [];
  #outViewListeners = [];
  #inViewDeferrer = new Deferred();
  #outViewDeferrer = new Deferred();

  constructor (observable, el) {
    this.#observer = observable.register(el, this.onIntersecting.bind(this));
    this.#unregister = () => observable.unregister(el);
  }

  get observer () {
    return this.#observer;
  }

  get inView () {
    return this.#inView;
  }

  onIntersecting (isIntersecting) {
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

  enterViewOnce () {
    return this.#inViewDeferrer.promise;
  }

  enterView (fn) {
    this.#inViewListeners.push(fn);
  }

  leaveViewOnce () {
    return this.#outViewDeferrer.promise;
  }

  leaveView (fn) {
    this.#outViewListeners.push(fn);
  }

  destroy () {
    this.#unregister();
  }
}
