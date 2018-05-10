import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
      key: 'item',
      paths: []

  })(store)
}