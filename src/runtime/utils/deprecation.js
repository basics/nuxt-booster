export function obsolete(newFunction, message) {
  const wrapper = (...args) => {
    console.warn(message);
    return newFunction.apply(this, args);
  };
  wrapper.prototype = newFunction.prototype;

  return wrapper;
}
