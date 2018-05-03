import * as types from '~/store/mutation-types';

export default {
    /*
    // Be sure to add your mutation types to ~/store/mutation-types.js
    // Example:
    [types.LOCALE_UPDATE_ACCEPTED](state, locales) {
        state.availableLocales = locales;
    },
    */

    [types.CART_ADD_ITEM](state, item) {
        state.items.push(item);
    },
    [types.CART_REMOVE_ITEM](state, item) {
        state.items.remove(item);
    },
    initialiseStore(state) {
        // Check if the store exists
        if(localStorage.getItem('store')) {
            let store = JSON.parse(localStorage.getItem('store'));
            
            // Check the version stored against current. If different, don't
            // load the cached version
            if(store.version == version) {
                this.replaceState(
                    Object.assign(state, store)
                );
            } else {
                state.version = version;
            }
        }
    }
};
