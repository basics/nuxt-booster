import Deferred from 'promise-deferred'

export default class Cache {
  constructor () {
    this.map = new Map()
  }

  getEntry (hash) {
    if (!this.map.has(hash)) {
      this.map.set(hash, new Deferred())
    }
    return this.map.get(hash)
  }
}
