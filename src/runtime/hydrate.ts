import useBoosterHydrate from './composables/useBoosterHydrate';
import { obsolete } from './utils/deprecation';
import type { AsyncComponentLoader } from 'vue';

const hydrate = useBoosterHydrate();

/**
 * @deprecated Import `#booster/hydrate` has been deprecated, please use the new composable `useBoosterHydrate` instead!
 */
export default obsolete(
  hydrate as <T>(component: AsyncComponentLoader<T>) => T,
  'WARNING! Obsolete import called. Import `#booster/hydrate` has been deprecated, please use the new composable `useBoosterHydrate` instead!'
);
