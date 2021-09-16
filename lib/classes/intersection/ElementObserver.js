import { Subscription } from 'rxjs';
import { filter, tap, first } from 'rxjs/operators';

export default class ElementObserver {
  #subscriptions;
  #intersectionObserver;
  #el;
  #inView;

  constructor (intersectionObserver, el) {
    this.subscriptions = new Subscription();
    this.intersectionObserver = intersectionObserver;
    this.el = el;
    this.inView = false;
    observe(this.intersectionObserver.observer, this.el);
  }

  enterViewOnce () {
    return this.intersectionObserver.observable.pipe(
      filter(({ target, isIntersecting }) => target === this.el && isIntersecting),
      first()
    ).toPromise();
  }

  enterView (fn) {
    const subscription = this.intersectionObserver.observable.pipe(
      filter(({ target, isIntersecting }) => !this.inView && target === this.el && isIntersecting),
      tap(() => { this.inView = true; })
    ).subscribe(fn);
    this.subscriptions.add(subscription);
  }

  leaveViewOnce () {
    return this.intersectionObserver.observable.pipe(
      filter(({ target, isIntersecting }) => target === this.el && !isIntersecting),
      first()
    ).toPromise();
  }

  leaveView (fn) {
    const subscription = this.intersectionObserver.observable.pipe(
      filter(({ target, isIntersecting }) => this.inView && target === this.el && !isIntersecting),
      tap(() => { this.inView = false; })
    ).subscribe(fn);
    this.subscriptions.add(subscription);
  }

  destroy () {
    this.subscriptions.unsubscribe();
    this.observer && unobserve(this.observer, this.el);
  }
}

const observe = async (observer, el) => {
  (await observer.promise).observe(el);
};

const unobserve = async (observer, el) => {
  (await observer.promise).unobserve(el);
};
