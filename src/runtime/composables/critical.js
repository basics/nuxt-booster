import { computed, ref, inject, provide, useAttrs } from 'vue';

const criticalContextKey = Symbol('criticalContext');

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
