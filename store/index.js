import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import actions from './actions';
import modules from './modules';

export default () => new Vuex.Store({
    // plugins: [createPersistedState()],
    actions,
    modules,
});
