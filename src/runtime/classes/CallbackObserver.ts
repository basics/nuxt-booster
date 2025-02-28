export class CallbackObserver {
  #listeners: CallableFunction[] = [];
  #destroyed = false;
  constructor(fn: CallableFunction) {
    fn((value: CallableFunction) => {
      if (this.#destroyed) {
        return false;
      }
      this.#listeners.forEach(listener => listener(value));
      return true;
    });
  }

  subscribe(listener: CallableFunction) {
    this.#listeners.push(listener);
    return {
      unsubscribe: () => {
        this.#listeners = this.#listeners.filter(v => v === listener);
      }
    };
  }

  destroy() {
    this.#destroyed = true;
  }
}

export const combineCallbackObserver = (
  callback: CallableFunction,
  observers: CallbackObserver[]
) => {
  let values: CallbackObserver[] = [];
  const observerCallback = (index: number) => (value: CallbackObserver) => {
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
