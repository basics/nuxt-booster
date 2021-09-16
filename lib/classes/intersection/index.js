import Observable from './Observable';
import ElementObserver from './ElementObserver';

const observerMap = new Map();

export const getElementObserver = (el, options = {}) => {
  const scrollContainer = getScrollableParent(el);
  return new ElementObserver(getObserver(Object.assign({
    root: (scrollContainer !== global.document.documentElement && scrollContainer) || undefined,
    threshold: [0],
    key: 'default'
  }, options)), el);
};

const getObserver = (options) => {
  const key = options.key;
  if (!observerMap.has(key)) {
    observerMap.set(key, new Observable(options));
  }
  return observerMap.get(key);
};

const getScrollableParent = (node) => {
  if (node === null) {
    return null;
  }
  return ((node.scrollHeight > node.clientHeight) && node) || getScrollableParent(node.parentNode);
};
