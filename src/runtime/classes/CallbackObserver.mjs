export class CallbackObserver {
  #listeners = [];
  #destroyed = false;
  constructor (fn) {
    fn((value) => {
      if (this.#destroyed) {
        return false;
      }
      this.#listeners.forEach(listener => listener(value));
      return true;
    });
  }

  subscribe (listener) {
    this.#listeners.push(listener);
    return {
      unsubscribe: () => {
        this.#listeners = this.#listeners.filter(v => (v === listener));
      }
    };
  }

  destroy () {
    this.#destroyed = true;
  }
}

export const combineCallbackObserver = (callback, observers) => {
  let values = [];
  const observerCallback = index => (value) => {
    values[Number(index)] = value;
    if (values.filter(Boolean).length >= observers.length) {
      callback(values);
      values = [];
    }
  };
  observers.forEach((observer, index) => {
    observer.subscribe(observerCallback(index));
  });
};
