import { useRuntimeConfig } from '#imports';

export default function () {
  const { booster: runtimeConfig } = useRuntimeConfig().public;
  return runtimeConfig;
}
