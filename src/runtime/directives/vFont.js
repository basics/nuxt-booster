import {
  isElementOutViewport,
  getElementObserver
} from '#booster/classes/intersection';
const CLASS_FONT_ACTIVE = 'font-active';

// eslint-disable-next-line sonarjs/no-unused-collection
const observers = new Map();

export default {
  install(vueApp) {
    vueApp.directive('font', {
      beforeMount(el, binding, vnode) {
        binding.instance.fontsReady = binding.instance.fontsReady || new Map();
        const values = [].concat(binding.value);
        if (values.length) {
          const { isCritical, fontCollection } = getFirstFont(values);
          const definitions = values.map(({ definition }) => definition);
          const rootSelector = fontCollection.add(definitions);
          vnode.el.setAttribute(rootSelector.name, rootSelector.value);
          binding.instance.fontsReady.set(el, true);
          vnode.fontActive = isCritical;
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

  // TODO: Wird hier sowohl eine Komponente und ein HTML-Tag beachtet?
  // binding.instance.$emit('load:font', fonts);
}
