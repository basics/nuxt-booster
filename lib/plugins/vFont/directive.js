import { observeIntersection, unobserveIntersection } from 'nuxt-speedkit/utils/intersectionObserver';

const CLASS_FONT_ACTIVE = 'font-active';

export default {
  install (Vue, name) {
    Vue.directive(name, {
      bind (el, binding, vnode) {
        const rootSelector = vnode.context.fontCollection.add(vnode, [].concat(binding.value));
        vnode.elm.setAttribute(rootSelector.name, rootSelector.value);
      },

      update (el, binding, vnode) {
        if (vnode.context.fontActive) {
          el.classList.add(CLASS_FONT_ACTIVE);
        }
      },

      inserted (el, binding, vnode) {
        if (!isElementOutViewport(el)) {
          activateFonts(el, binding, vnode);
        } else {
          observeIntersection(el, () => activateFonts(el, binding, vnode));
        }
      },

      unbind (el, binding, vnode) {
        unobserveIntersection(el);
      }
    });
  }
};

async function activateFonts (el, binding, vnode) {
  const fonts = [].concat(binding.value);
  await Promise.all(fonts.map(font => font.load()));
  el.classList.add(CLASS_FONT_ACTIVE);
  vnode.context.fontActive = true;
  vnode.context.$emit('load:font', fonts);
}

function isElementOutViewport (el) {
  const rect = el.getBoundingClientRect();
  return rect.bottom < 0 || rect.right < 0 || rect.left > global.innerWidth || rect.top > global.innerHeight;
}
