const listeners = new Map();

function createObserver (rootMargin = '0%', threshold = [0]) {
  if (typeof IntersectionObserver === 'undefined') { return null; }
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isIntersecting = entry.isIntersecting || entry.intersectionRatio > 0;
      if (!isIntersecting) { return; }
      const el = entry.target;
      trigger(el);
    });
  }, { rootMargin, threshold });
}

let intersectionObserver;

function trigger (el) {
  listeners.get(el)();
  unobserveIntersection(el);
}

export function observeIntersection (el, cb) {
  intersectionObserver = intersectionObserver || createObserver(process.env.NUXT_SPEEDKIT_LAZY_OFFSET_ASSET);
  if (intersectionObserver) {
    listeners.set(el, cb);
    intersectionObserver.observe(el);
  }
}

export function unobserveIntersection (el) {
  listeners.delete(el);
  intersectionObserver && intersectionObserver.unobserve(el);
}
