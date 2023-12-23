import { useRuntimeConfig } from '#app';

export default function useConfig() {
  const { booster: runtimeConfig } = useRuntimeConfig().public;
  return runtimeConfig;
}
