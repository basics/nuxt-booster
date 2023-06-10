import { useRuntimeConfig } from '#imports';

export default function useFonts() {
  const { speedkit: runtimeConfig } = useRuntimeConfig().public;

  return runtimeConfig;
}
