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
          binding.instance.fontsReady.set(el, isCritical);
          if (isCritical) {
            if (typeof vnode.props?.class === 'string') {
              vnode.props.class = [
                ...vnode.props.class.split(' '),
                isCritical && CLASS_FONT_ACTIVE
              ]
                .filter(Boolean)
                .join(' ');
            }
            emit(vnode.props, 'onLoad:font', definitions);
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

      updated(el, binding, vnode) {
        if (binding.instance.fontsReady.get(el)) {
          el.classList.add(CLASS_FONT_ACTIVE);
          emit(
            vnode.props,
            'onLoad:font',
            [].concat(binding.value).map(value => value.definition)
          );
        }
      },

      async mounted(el, binding, scope) {
        const firstFont = getFirstFont(binding.value);
        if (firstFont) {
          const { isCritical, runtimeConfig } = getFirstFont(binding.value);
          if (isCritical || !isElementOutViewport(el)) {
            activateFonts(el, binding, scope);
          } else {
            const observer = getElementObserver(el, {
              rootMargin: runtimeConfig.lazyOffsetAsset || '0%'
            });
            observers.set(el, observer);
            await observer.enterViewOnce();
            activateFonts(el, binding, scope);
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

async function activateFonts(el, binding, scope) {
  const fonts = [].concat(binding.value).map(({ definition }) => definition);
  await Promise.all(
    fonts
      .filter(font => !font.media || window.matchMedia(font.media).matches)
      .map(font => font.load())
  );

  el.classList.add(CLASS_FONT_ACTIVE);
  binding.instance.fontsReady.set(el, true);

  emit(scope.props, 'onLoad:font', fonts);
}

const emit = (props, name, fonts) => {
  if (typeof props?.[String(name)] === 'function') {
    props[String(name)](fonts);
  }
};
