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

export const isElementOutViewport = function (el) {
  const node = getScrollableParent(el) || window;
  const rect = el.getBoundingClientRect();

  const parentRect = ('getBoundingClientRect' in node && node.getBoundingClientRect()) || { left: 0, right: 0, top: 0 };
  const position = {
    x: rect.left + parentRect.left,
    y: rect.top + parentRect.top
  };
  const rootDimension = {
    x: node.offsetWidth || node.innerWidth,
    y: node.offsetHeight || node.innerHeight
  };

  return rect.bottom < 0 || rect.right < 0 || position.x > rootDimension.x || position.y > rootDimension.y;
};

const regex = /(auto|scroll)/;

const style = (node, prop) =>
  getComputedStyle(node, null).getPropertyValue(prop);

const scroll = node => regex.test(
  style(node, 'overflow') +
  style(node, 'overflow-y') +
  style(node, 'overflow-x')
);

const getScrollableParent = (node, nodes = []) => {
  if (!node || node === document.body) {
    return null;
  } else if ((node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth) && scroll(node)) {
    return node;
  }
  nodes.push(node);
  return getScrollableParent(node.parentNode, nodes);
};
