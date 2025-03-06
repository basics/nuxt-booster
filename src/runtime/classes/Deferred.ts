export const PENDING = Symbol('pending');
export const FULFILLED = Symbol('fulfilled');
export const REJECTED = Symbol('rejected');

export enum DeferredState {
  PENDING,
  FULFILLED,
  REJECTED
}
export default class Deferred<T> {
  promise: Promise<T>;
  resolve: (value?: T | PromiseLike<T>) => void = () => {};
  reject: (value?: T | PromiseLike<T>) => void = () => {};
  state?: DeferredState;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve as (value?: T | PromiseLike<T>) => void;
      this.reject = reject as (value?: T | PromiseLike<T>) => void;
      this.state = DeferredState.PENDING;
    })
      .then(e => {
        this.state = DeferredState.FULFILLED;
        return e;
      })
      .catch(e => {
        this.state = DeferredState.REJECTED;
        throw new Error(e);
      });
  }

  static create() {
    return new Deferred();
  }
}
