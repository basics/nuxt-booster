import { useRuntimeConfig } from '#imports';
import type { ModulePublicRuntimeConfig } from '../../module';

export default function useBoosterConfig(): ModulePublicRuntimeConfig {
  const { booster: runtimeConfig } = useRuntimeConfig().public;
  return runtimeConfig;
}
