import { useAttrs, provide, inject, ref, computed } from 'vue';

const criticalContextKey = Symbol('criticalContext');

export default function (context = {}) {
  const attrs = useAttrs();

  const { critical = false } = { critical: false, ...context };

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
