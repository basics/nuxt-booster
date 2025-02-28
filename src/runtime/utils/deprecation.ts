import type { AsyncComponentLoader } from 'vue';

export function obsolete(
  newFunction: <T>(component: AsyncComponentLoader<T>) => T,
  message: string
) {
  const wrapper = () => {
    console.warn(message);
    return newFunction.apply(wrapper, [
      undefined as unknown as AsyncComponentLoader<unknown>
    ]);
  };
  wrapper.prototype = newFunction.prototype;

  return wrapper;
}
