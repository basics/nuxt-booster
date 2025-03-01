export const PENDING = Symbol('pending');
export const FULFILLED = Symbol('fulfilled');
export const REJECTED = Symbol('rejected');

export default class Deferred<T> {
  promise: Promise<T>;
  resolve: (value?: T | PromiseLike<T>) => void = () => {};
  reject: (value?: T | PromiseLike<T>) => void = () => {};
  state?: symbol;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve as (value?: T | PromiseLike<T>) => void;
      this.reject = reject as (value?: T | PromiseLike<T>) => void;
      this.state = PENDING;
    })
      .then(e => {
        this.state = FULFILLED;
        return e;
      })
      .catch(e => {
        this.state = REJECTED;
        throw new Error(e);
      });
  }

  static create() {
    return new Deferred();
  }
}
