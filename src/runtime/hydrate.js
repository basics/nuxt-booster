import { hydrate } from './composables/useBoosterHydrate';

export default (...args) => {
  console.warn(
    'import `#booster/hydrate` is deprecated. Use `useBoosterHydrate` instead.'
  );
  return hydrate(...args);
};
