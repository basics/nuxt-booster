import { useNuxtApp } from '#imports';
import type { BoosterProvide } from '../../module';

export default function useBoosterProvide(): BoosterProvide {
  const { $booster } = useNuxtApp();
  return $booster;
}
