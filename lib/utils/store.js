
export const state = () => ({
  containers: {}
})

export const getters = {
  containers (state) {
    return state.containers
  }
}

export const mutations = {
  createContainer (state, id) {
    createContainer(state, id)
  },
  addFontFamily (state, { id, fontFamily }) {
    createContainer(state, id)
    state.containers[id].fontFamily.push(...fontFamily)
  }
}

export const actions = {
  createContainer (context, id) {
    context.commit('createContainer', id)
  },
  addFontFamily (context, {
    id, fontFamily
  }) {
    return context.commit('addFontFamily', { id, fontFamily })
  }
}

export function register (store, moduleName) {
  store.registerModule(moduleName, {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  })
}

function createContainer (state, id) {
  if (!(id in state.containers)) {
    state.containers[id] = {
      id,
      fontFamily: []
    }
  }
}
