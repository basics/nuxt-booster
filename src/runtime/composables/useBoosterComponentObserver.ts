import { getElementObserver } from '#booster/classes/intersection';
import { useBoosterCritical } from '#imports';
import { onMounted, ref } from 'vue';
import type { ObservableHTMLElement, ObservableOptions } from '../../module';

export default function useBoosterComponentObserver(
  options: ObservableOptions = {}
) {
  const el = ref<HTMLElement | undefined>(undefined);
  const inView = ref<boolean>(false);

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
      if (el.value) {
        await getElementObserver(
          el.value as ObservableHTMLElement,
          options
        ).enterViewOnce();
        inView.value = true;
      } else {
        console.error('Element not found');
      }
    }
  });
  return { el, inView };
}
