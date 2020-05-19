
const isServer = process.server

let _installed = false
export default {
  install (Vue) {
    console.log('INSTALL')
    if (_installed) { return }
    _installed = true

    if (isServer) {
    // let currentComponentWrapper;
      Vue.mixin({
        beforeCreate () {
          if (hasLazyResources(this)) {
            const lazyResources = getLazyResources(this)
            // console.log('lazyResources', lazyResources)
            if (isMainComponent(lazyResources)) {
            // Main Component
            // console.log('MAIN COMPONENT')
              beforeCreateMain(this)
            } else {
            // Sub Component
            // console.log('SUB COMPONENT')
              beforeCreateSub(this)
            }
          }
        }
      })
    }

    if (!('$lazyResourcesContainer' in Vue.prototype)) {
      Object.defineProperty(Vue.prototype, '$lazyResourcesContainer', {
        get () { return this._lazyResourcesRoot._lazyResourcesContainer }
      })
    }
  }
}

function getComponentId (component) {
  return component._uid
}

function beforeCreateMain (scope) {
  console.log('before', 'main', getComponentId(scope))
  scope._lazyResourcesRoot = scope
  scope._lazyResourcesInfo = {
    id: scope._uid
  }
  scope.$store.dispatch('lazy-resources/createContainer', getComponentId(scope))
}
function beforeCreateSub (scope) {
  scope._lazyResourcesRoot = (scope.$parent && scope.$parent._lazyResourcesRoot) || scope

  const lazyResources = getLazyResources(scope)
  const id = scope._lazyResourcesRoot._lazyResourcesInfo.id

  if ('fontFamily' in lazyResources) {
    console.log('before', 'sub', id, lazyResources.fontFamily)
    const fontFamily = lazyResources.fontFamily
    scope.$store.dispatch('lazy-resources/addFontFamily', {
      id,
      fontFamily
    })
  }
}

function hasLazyResources (scope) {
  return scope.$options && 'lazyResources' in scope.$options && scope.$options.lazyResources
}

function getLazyResources (scope) {
  return scope.$options.lazyResources
}

function isMainComponent (lazyResources) {
  return !!lazyResources.main
}
