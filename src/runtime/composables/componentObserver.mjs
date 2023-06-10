import { getElementObserver } from '#speedkit/classes/intersection';
import useCritical from '#speedkit/composables/critical';

export default function useComponentObserver(options) {
  const el = ref(null);
  const inView = ref(false);

  const { isCritical } = useCritical();

  onMounted(async () => {
    options = {
      root: undefined,
      rootMargin: '0px',
      threshold: [0],
      trackVisibility: false,
      delay: 0,
      ...options
    };

    if (isCritical.value) {
      inView.value = true;
    } else {
      await getElementObserver(el.value, options).enterViewOnce();
      inView.value = true;
    }
  });
  return { el, inView };
}
