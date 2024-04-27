import {
  isElementOutViewport,
  getElementObserver
} from '#booster/classes/intersection';
const CLASS_FONT_ACTIVE = 'font-active';

const observers = new Map();

export default {
  install(vueApp) {
    vueApp.directive('font', {
      created(el, binding, vnode) {
        binding.instance.fontsReady = binding.instance.fontsReady || new Map();
        const values = [].concat(binding.value);
        if (values.length) {
          const { isCritical, fontCollection } = getFirstFont(values);
          const definitions = values.map(({ definition }) => definition);
          const rootSelector = fontCollection.add(definitions);
          el.setAttribute(rootSelector.name, rootSelector.value);
          binding.instance.fontsReady.set(el, true);
          vnode.fontActive = isCritical;
          if (typeof vnode.props?.class === 'string') {
            vnode.props.class = [
              ...vnode.props.class.split(' '),
              isCritical && CLASS_FONT_ACTIVE
            ]
              .filter(Boolean)
              .join(' ');
          }
        }
      },

      getSSRProps(binding) {
        const values = [].concat(binding.value);
        if (values.length) {
          const { isCritical, fontCollection } = getFirstFont(values);

          const definitions = values.map(({ definition }) => definition);

          const rootSelector = fontCollection.add(definitions);

          return {
            [rootSelector.name]: rootSelector.value,
            class: isCritical ? 'font-active' : undefined
          };
        }
      },

      updated(el, binding) {
        if (binding.instance.fontsReady.get(el)) {
          el.classList.add(CLASS_FONT_ACTIVE);
        }
      },

      async mounted(el, binding) {
        const firstFont = getFirstFont(binding.value);
        if (firstFont) {
          const { isCritical, runtimeConfig } = getFirstFont(binding.value);
          if (isCritical || !isElementOutViewport(el)) {
            activateFonts(el, binding);
          } else {
            const observer = getElementObserver(el, {
              rootMargin: runtimeConfig.lazyOffsetAsset
            });
            observers.set(el, observer);
            await observer.enterViewOnce();
            activateFonts(el, binding);
          }
        }
      },

      unmounted(el) {
        observers.delete(el);
      }
    });
  }
};

function getFirstFont(value) {
  return [].concat(value)[0];
}

async function activateFonts(el, binding) {
  const fonts = [].concat(binding.value).map(({ definition }) => definition);
  await Promise.all(
    fonts
      .filter(font => !font.media || window.matchMedia(font.media).matches)
      .map(font => font.load())
  );

  el.classList.add(CLASS_FONT_ACTIVE);
  binding.instance.fontActive = true;
}
