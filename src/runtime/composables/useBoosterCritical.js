import { useAttrs, provide, inject, ref, computed } from 'vue';

const criticalContextKey = Symbol('criticalContext');

/**
 *
 * @param {*} param0
 * @returns {
 * isCritical: import('vue').ComputedRef<boolean>,}
 *
 */
export default function ({ critical } = {}) {
  const attrs = useAttrs();

  const currentCritical = ref(
    !('critical' in attrs)
      ? critical
      : attrs.critical === '' || String(attrs.critical) === 'true'
  );

  const criticalInject = inject(
    criticalContextKey,
    currentCritical.value || false
  );

  const isCritical = computed(() => {
    return typeof currentCritical.value === 'boolean'
      ? currentCritical.value
      : criticalInject;
  });

  provide(criticalContextKey, isCritical.value || critical);

  return {
    isCritical,
    critical: criticalInject
  };
}
