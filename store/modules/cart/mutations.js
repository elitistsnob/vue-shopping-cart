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
    [types.CART_UPDATE_ITEM](state, item) {
        state.items = items;
    },
    [types.REMOVE_FROM_CART](state, index) {
        state.items.splice(index, 1);
    },

};
