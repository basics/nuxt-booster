import { getElementObserver } from '#booster/classes/intersection';
import { useBoosterCritical } from '#imports';
import { onMounted, ref } from 'vue';

export default function (options) {
  const el = ref(null);
  const inView = ref(false);

  const { isCritical } = useBoosterCritical();

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
