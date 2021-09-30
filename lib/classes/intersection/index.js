import { getIntersectionObservable } from './Observable';
import ElementObserver from './ElementObserver';

export const getElementObserver = (el, options) => {
  const scrollContainer = getScrollableParent(el);
  const observerOptions = Object.assign(getDefaultOptions(scrollContainer), options);
  return new ElementObserver(getIntersectionObservable(observerOptions), el);
};

const getScrollableParent = (node) => {
  if (node === null) {
    return null;
  }
  return ((node.scrollHeight > node.clientHeight) && node) || getScrollableParent(node.parentNode);
};

const getDefaultOptions = (scrollContainer) => {
  return {
    root: (scrollContainer !== global.document.documentElement && scrollContainer) || undefined,
    threshold: [0]
  };
};
