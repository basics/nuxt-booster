import { useRuntimeConfig } from '#app';

export default function useConfig() {
  const { speedkit: runtimeConfig } = useRuntimeConfig().public;
  return runtimeConfig;
}
