import { ipoint, calc } from '@js-basics/vector';
import { getIntersectionObservable } from './Observable';
import ElementObserver from './ElementObserver';

export const getElementObserver = (el, options) => {
  const scrollContainer = getScrollableParent(el);
  const observerOptions = Object.assign(getDefaultOptions(scrollContainer), options);
  return new ElementObserver(getIntersectionObservable(observerOptions), el);
};

const getDefaultOptions = (scrollContainer) => {
  return {
    root: (scrollContainer !== global.document.documentElement && scrollContainer) || undefined,
    threshold: [0]
  };
};

const regex = /(auto|scroll)/;

const style = (node, prop) =>
  getComputedStyle(node, null).getPropertyValue(prop);

const scroll = node =>
  regex.test(
    style(node, 'overflow') +
    style(node, 'overflow-y') +
    style(node, 'overflow-x'));

const getScrollableParent = (node) => {
  if (!node || node === document.body) {
    return null;
  } else if ((node.scrollHeight > node.clientHeight) && scroll(node)) {
    return node;
  }
  return getScrollableParent(node.parentNode);
};

export const isElementOutViewport = function (el) {
  const node = getScrollableParent(el) || window;
  const rect = el.getBoundingClientRect();
  const parentRect = ('getBoundingClientRect' in node && node.getBoundingClientRect()) || { left: 0, right: 0 };

  const position = calc(() => ipoint(rect.left, rect.top) - ipoint(parentRect.left, parentRect.top));
  const rootDimension = ipoint(node.offsetWidth || node.innerWidth, node.offsetHeight || node.innerHeight);

  return rect.bottom < 0 || rect.right < 0 || position.x > rootDimension.x || position.y > rootDimension.y;
};
