import { useNuxtApp } from '#imports';
import type { BoosterContext } from '../../types';

export default function useBoosterContext(): BoosterContext {
  const { $booster } = useNuxtApp();
  return $booster;
}
