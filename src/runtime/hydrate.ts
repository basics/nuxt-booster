import type { AsyncComponentLoader } from 'vue';
import { hydrate } from './composables/useBoosterHydrate';
import { obsolete } from './utils/deprecation';

/**
 * @deprecated Import `#booster/hydrate` has been deprecated, please use the new composable `useBoosterHydrate` instead!
 */
export default obsolete(
  hydrate as <T>(component: AsyncComponentLoader<T>) => T,
  'WARNING! Obsolete import called. Import `#booster/hydrate` has been deprecated, please use the new composable `useBoosterHydrate` instead!'
);
