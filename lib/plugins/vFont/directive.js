import { registerIntersecting, unregisterIntersecting } from 'nuxt-speedkit/utils/intersectionObserver';

export default {
  install (Vue, name) {
    Vue.directive(name, {
      bind (el, binding, vnode) {
        const rootSelector = vnode.context.fontCollection.add(vnode, [].concat(binding.value));
        vnode.elm.setAttribute(rootSelector.name, rootSelector.value);
      },

      inserted (el, binding, vnode) {
        if (!isElementOutViewport(el)) {
          activateFonts(el, binding, vnode);
        } else {
          registerIntersecting(el, () => activateFonts(el, binding, vnode));
        }
      },

      unbind (el, binding, vnode) {
        unregisterIntersecting(el);
      }
    });
  }
};

async function activateFonts (el, binding, vnode) {
  const fonts = [].concat(binding.value);
  await Promise.all(fonts.map(font => font.load()));
  el.classList.add('font-active');
  vnode.context.$emit('load:font', fonts);
}

function isElementOutViewport (el) {
  const rect = el.getBoundingClientRect();
  return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}
