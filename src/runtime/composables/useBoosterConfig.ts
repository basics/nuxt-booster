import { useRuntimeConfig } from '#imports';
import type { ModulePublicRuntimeConfig } from '../../types';

export default function useBoosterConfig(): ModulePublicRuntimeConfig {
  const { booster: runtimeConfig } = useRuntimeConfig().public;
  return runtimeConfig;
}
