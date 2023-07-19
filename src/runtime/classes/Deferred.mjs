export const PENDING = Symbol('pending');
export const FULFILLED = Symbol('fulfilled');
export const REJECTED = Symbol('rejected');

export default class Deferred {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
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
}
