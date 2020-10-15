
const resolves = new Map()
let observer

export function resolveComponents () {
  Array.from(resolves).forEach(([key, resolve]) => {
    resolves.delete(key)
    resolve()
  })
}
global.nuxtSpeedkitResolveComponents = resolveComponents

export const MODE = {
  NONE: 'none',
  VISIBLE: 'visible',
  CLICK: 'click'
}

export function lazyComponent (component, mode = MODE.NONE) {
  if (process.isServer) { return component }

  const resolvableComponent = resolvableComponentFactory(component)

  const loading = loadingComponentFactory(resolvableComponent, {
    mounted () {
      resolves.set(this._uid, resolvableComponent._resolve)
      switch (mode) {
        case MODE.CLICK:
          this.$el.addEventListener('click', resolvableComponent._resolve, {
            capture: true,
            once: true,
            passive: true
          })
          break

        case MODE.VISIBLE:
          observer = observer || createObserver()
          if (observer) {
            this.$el.__resolveComponent = () => {
              observer.unobserve(this.$el)
              resolvableComponent._resolve()
            }
            observer.observe(this.$el)
          } else {
            resolvableComponent._resolve()
          }
          break
      }
    }
  })

  return () => ({
    component: resolvableComponent,
    delay: 0,
    loading
  })
}

export function loadingComponentFactory (resolvableComponent, options) {
  return {
    render (h) {
      const tag = this.$el ? this.$el.tagName : 'div'

      // eslint-disable-next-line no-underscore-dangle
      if (!this.$el) { resolvableComponent._resolve() }

      return h(tag)
    },
    ...options
  }
}

export function resolvableComponentFactory (component) {
  let resolve
  // eslint-disable-next-line promise/param-names
  const promise = new Promise((newResolve) => {
    resolve = newResolve
  })
  // eslint-disable-next-line no-underscore-dangle
  promise._resolve = () => {
    resolve(typeof component === 'function' ? component() : component)
  }

  return promise
}

export function createObserver () {
  if (typeof IntersectionObserver === 'undefined') { return null }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Use `intersectionRatio` because of Edge 15's
      // lack of support for `isIntersecting`.
      // See: https://github.com/w3c/IntersectionObserver/issues/211
      const isIntersecting = entry.isIntersecting || entry.intersectionRatio > 0
      if (!isIntersecting || !entry.target.__resolveComponent) { return }
      entry.target.__resolveComponent()
    })
  }, {
    rootMargin: '0% 0%'
  })
  return observer
}
