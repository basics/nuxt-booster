const resolves = new Map()
let observer

global.nuxtSpeedkitResolveComponents = resolveComponents

export const MODE = {
  NONE: 'none',
  VISIBLE: 'visible',
  CLICK: 'click',
  NAME: 'name'
}

export function resolveComponents (name) {
  let components
  if (name) {
    if (!resolves.has(name)) {
      // eslint-disable-next-line no-console
      console.error(`Have no resolve with specified name ${name}`)
      return
    }
    components = [
      [
        name, resolves.get(name)
      ]
    ]
  } else {
    components = Array.from(resolves)
  }
  components.forEach(([
    key, resolve
  ]) => {
    resolves.delete(key)
    resolve()
  })
}

export default function speedkitComponent (component, mode = MODE.NONE, name) {
  if (process.server) { return component }

  const { resolvableComponent, resolve } = resolvableComponentFactory(component)

  const loading = loadingComponentFactory(resolve, {
    mounted () {
      resolves.set(this._uid, resolve)
      switch (mode) {
        // case MODE.CLICK:
        //   this.$el.addEventListener('click', resolve, {
        //     capture: true,
        //     once: true,
        //     passive: true
        //   })
        //   break
        case MODE.NAME:
          resolves.set(name, resolve)
          break
        case MODE.VISIBLE:
          observer = observer || createObserver()
          if (observer && this.$el instanceof HTMLElement) {
            this.$el.__resolveComponent = () => {
              observer.unobserve(this.$el)
              resolve()
            }
            observer.observe(this.$el)
          } else {
            resolve()
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

function loadingComponentFactory (resolve, options) {
  return {
    render (h) {
      const tag = this.$el ? this.$el.tagName : 'div'

      // eslint-disable-next-line no-underscore-dangle
      if (!this.$el) { resolve() }

      return h(tag)
    },
    ...options
  }
}

function resolvableComponentFactory (component) {
  let resolve
  // eslint-disable-next-line promise/param-names
  const resolvableComponent = new Promise((newResolve) => {
    resolve = newResolve
  })

  return {
    resolvableComponent,
    resolve: () => {
      resolve(typeof component === 'function' ? component() : component)
    }
  }
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
