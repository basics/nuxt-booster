import { useNuxtApp } from '#imports';

export default function () {
  const { $booster } = useNuxtApp();
  return $booster;
}
