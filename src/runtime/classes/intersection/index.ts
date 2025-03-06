import ElementObserver from './ElementObserver';
import { getIntersectionObservable } from './Observable';
import type { ObservableHTMLElement, ObservableOptions } from '../../../module';

export const getElementObserver = (
  el: ObservableHTMLElement,
  options: ObservableOptions
) => {
  const scrollContainer = getScrollableParent(el) as HTMLElement;
  const observerOptions = {
    ...getDefaultOptions(scrollContainer),
    ...options
  };
  const test = getIntersectionObservable(observerOptions);
  return new ElementObserver(test, el);
};

const getDefaultOptions = (scrollContainer: HTMLElement) => {
  return {
    root:
      (scrollContainer !== window.document.documentElement &&
        scrollContainer) ||
      undefined,
    threshold: [0]
  };
};

export const isElementOutViewport = function (el: HTMLElement) {
  const rect = el.getBoundingClientRect();

  const node = getScrollableParent(el);
  let parentRect = { left: 0, right: 0, top: 0 };
  if (node && 'getBoundingClientRect' in node) {
    parentRect = node.getBoundingClientRect();
  }

  const position = {
    x: rect.left + parentRect.left,
    y: rect.top + parentRect.top
  };
  const rootDimension = {
    x: node?.offsetWidth || window.innerWidth,
    y: node?.offsetHeight || window.innerHeight
  };

  return (
    rect.bottom < 0 ||
    rect.right < 0 ||
    position.x > rootDimension.x ||
    position.y > rootDimension.y
  );
};

const regex = /(auto|scroll)/;

const style = (node: HTMLElement, prop: string) =>
  getComputedStyle(node, null).getPropertyValue(prop);

const scroll = (node: HTMLElement) =>
  regex.test(
    style(node, 'overflow') +
      style(node, 'overflow-y') +
      style(node, 'overflow-x')
  );

const getScrollableParent = (
  node: HTMLElement | ParentNode | null,
  nodes: HTMLElement[] = []
): HTMLElement | undefined => {
  if (!node || node === document.body) {
    return undefined;
  } else {
    const el = node as HTMLElement;
    if (
      (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) &&
      scroll(el)
    ) {
      return el;
    }
    nodes.push(el);
    return getScrollableParent(el.parentNode, nodes);
  }
};
