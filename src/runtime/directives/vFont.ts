import {
  isElementOutViewport,
  getElementObserver
} from '#booster/classes/intersection';

import type {
  ComponentPublicInstance,
  DirectiveBinding,
  VNode,
  App as VueApp
} from 'vue';
import type { DirectiveGetFontResult } from '../../module';
import type Font from '#booster/classes/Font';

const CLASS_FONT_ACTIVE = 'font-active';

type Instance =
  | (Partial<ComponentPublicInstance> & {
      fontsReady?: Map<Element, boolean>;
    })
  | null;

interface Binding extends Omit<DirectiveBinding, 'value'> {
  instance: Instance;
  value: DirectiveGetFontResult | DirectiveGetFontResult[];
}

const observers = new Map();
export default {
  install(vueApp: VueApp) {
    vueApp.directive('font', {
      created(el, binding: Binding, vnode) {
        const instance: Instance | null = binding.instance;
        if (instance) {
          instance.fontsReady = instance.fontsReady || new Map();
          let values: DirectiveGetFontResult[] = [];
          if (Array.isArray(binding.value)) {
            values = binding.value;
          } else {
            values.push(binding.value);
          }

          if (values.length) {
            const { isCritical, fontCollection } = getFirstFont(values);

            const definitions = values.map(({ definition }) => definition);
            const rootSelector = fontCollection.add(definitions);
            el.setAttribute(rootSelector.name, rootSelector.value);
            instance.fontsReady.set(el, isCritical);
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
        }
      },

      getSSRProps(binding) {
        const values = getValueList(binding.value);
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
        if ((binding.instance as Instance)?.fontsReady?.get(el)) {
          el.classList.add(CLASS_FONT_ACTIVE);
          emit(
            vnode.props,
            'onLoad:font',
            getValueList(binding.value).map(value => value.definition)
          );
        }
      },

      async mounted(el, binding, scope) {
        const firstFont = getFirstFont(getValueList(binding.value));
        if (firstFont) {
          const { isCritical, runtimeConfig } = getFirstFont(
            getValueList(binding.value)
          );
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

function getValueList(
  value: DirectiveGetFontResult | DirectiveGetFontResult[]
) {
  return Array.isArray(value) ? value : [value];
}

function getFirstFont(values: DirectiveGetFontResult[]) {
  return values[0];
}

async function activateFonts(el: HTMLElement, binding: Binding, scope: VNode) {
  const fonts = getValueList(binding.value).map(({ definition }) => definition);
  await Promise.all(
    fonts
      .filter(font => !font.media || window.matchMedia(font.media).matches)
      .map(font => font.load())
  );

  el.classList.add(CLASS_FONT_ACTIVE);
  binding.instance?.fontsReady?.set(el, true);

  emit(scope.props, 'onLoad:font', fonts);
}

const emit = (props: VNode['props'], name: string, fonts: Font[]) => {
  if (typeof props?.[String(name)] === 'function') {
    props[String(name)](fonts);
  }
};
