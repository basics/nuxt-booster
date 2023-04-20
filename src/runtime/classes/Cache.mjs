import Deferred from './Deferred';

export default class Cache {
  constructor () {
    this.map = new Map();
  }

  getPromise (hash, fn) {
    if (!this.map.has(hash)) {
      const deferred = new Deferred();
      this.map.set(hash, deferred.promise);
      fn(deferred.resolve, deferred.reject);
    }
    return this.map.get(hash);
  }
}
