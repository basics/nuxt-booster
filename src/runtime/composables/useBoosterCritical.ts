import {
  useAttrs,
  provide,
  inject,
  ref,
  computed,
  type ComputedRef
} from 'vue';

const criticalContextKey = Symbol('criticalContext');

export default function useBoosterCritical(
  options: {
    critical?: boolean;
  } = {}
) {
  const attrs = useAttrs();

  const { critical } = { critical: undefined, ...options };

  const currentCritical = ref(
    !('critical' in attrs)
      ? critical
      : attrs.critical === '' || String(attrs.critical) === 'true'
  );

  const criticalInject: boolean = inject(
    criticalContextKey,
    currentCritical.value || false
  );

  const isCritical: ComputedRef<boolean> = computed(() => {
    return typeof currentCritical.value === 'boolean'
      ? currentCritical.value
      : criticalInject;
  });

  provide(criticalContextKey, isCritical.value || critical);

  return {
    isCritical
  };
}
