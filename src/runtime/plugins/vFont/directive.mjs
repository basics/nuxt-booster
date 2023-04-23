
import { isElementOutViewport, getElementObserver } from '#speedkit/classes/intersection';
const CLASS_FONT_ACTIVE = 'font-active';

const obervers = new Map();

export default {
  install (Vue, name) {
    Vue.directive(name, {

      getSSRProps (binding) {
        const rootSelector = binding.instance.fontCollection.add(binding.instance.$.vnode, [].concat(binding.value));
        return {
          [rootSelector.name]: rootSelector.value
        };
      },

      updated (el, binding, vnode) {
        if (vnode.context.fontActive) {
          el.classList.add(CLASS_FONT_ACTIVE);
        }
      },

      async mounted (el, binding, vnode) {
        if (vnode.context.isCritical || !isElementOutViewport(el)) {
          activateFonts(el, binding, vnode);
        } else {
          const observer = getElementObserver(el, {
            rootMargin: process.env.NUXT_SPEEDKIT_LAZY_OFFSET_ASSET
          });
          obervers.set(el, observer);
          await observer.enterViewOnce();
          activateFonts(el, binding, vnode);
        }
      },

      unmounted (el) {
        obervers.has(el) && obervers.get(el).destroy();
      }
    });
  }
};

async function activateFonts (el, binding, vnode) {
  const fonts = [].concat(binding.value);

  await Promise.all(
    fonts
      .filter(font => !font.media || window.matchMedia(font.media).matches)
      .map(font => font.load())
  );

  el.classList.add(CLASS_FONT_ACTIVE);
  vnode.context.fontActive = true;

  if (vnode.componentInstance) {
    // trigger event on defined componente
    vnode.componentInstance.$emit('load:font', fonts);
  } else if (vnode.data.on && vnode.data.on['load:font']) {
    // trigger event on vnode (e.g. span)
    vnode.data.on['load:font'](fonts);
  }
}
