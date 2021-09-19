import { Subscription } from 'rxjs';
import { filter, tap, first } from 'rxjs/operators';

export default class ElementObserver {
  #subscriptions = new Subscription();
  #observer;
  #unregister;
  #inView = false;

  constructor (observable, el) {
    this.#observer = observable.register(el);
    this.#unregister = () => observable.unregister(el);
  }

  enterViewOnce () {
    return this.#observer.pipe(
      filter(({ isIntersecting }) => {
        return isIntersecting;
      }),
      first()
    ).toPromise();
  }

  enterView (fn) {
    const subscription = this.#observer.pipe(
      filter(({ isIntersecting }) => !this.#inView && isIntersecting),
      tap(() => { this.#inView = true; })
    ).subscribe(fn);
    this.#subscriptions.add(subscription);
  }

  leaveViewOnce () {
    return this.#observer.pipe(
      filter(({ isIntersecting }) => !isIntersecting),
      first()
    ).toPromise();
  }

  leaveView (fn) {
    const subscription = this.#observer.pipe(
      filter(({ isIntersecting }) => this.#inView && !isIntersecting),
      tap(() => { this.#inView = false; })
    ).subscribe(fn);
    this.#subscriptions.add(subscription);
  }

  destroy () {
    this.#subscriptions.unsubscribe();
    this.#unregister();
  }
}
