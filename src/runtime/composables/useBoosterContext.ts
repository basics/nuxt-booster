import { useNuxtApp } from '#imports';
import type { BoosterContext } from '../../module';

export default function useBoosterContext(): BoosterContext {
  const { $booster } = useNuxtApp();
  return $booster;
}
