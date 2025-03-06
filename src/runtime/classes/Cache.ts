import Deferred from './Deferred';

export default class Cache<T> {
  map: Map<string, Promise<T>>;

  constructor() {
    this.map = new Map();
  }

  getPromise(hash: string, fn: CallableFunction) {
    if (!this.map.has(hash)) {
      const deferred = new Deferred<T>();
      this.map.set(hash, deferred.promise);
      fn(deferred.resolve, deferred.reject);
    }
    return this.map.get(hash);
  }
}
