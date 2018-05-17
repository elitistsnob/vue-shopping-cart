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

        // Surpressing CART_ADD_ITEM action after first click
        // let itemExists = state.items.indexOf(item) > -1;
        // if (!itemExists) {
        //     state.items.push(item);
        // }
    },
    [types.CART_UPDATE_ITEMS](state, items) {
        state.items = items;
    },
    // [types.ITEM_QTY](state, item) {
    //     state.items.push(item.quantity);
    // },
    [types.ITEM_QTY](state, item, qty) {
        item.qty = qty;
        let itemIndex = state.items.indexOf(item);
        if (itemIndex === -1 && qty > 0) {
            state.items.push(item);
        } else if (qty === 0) state.items.splice(itemIndex, 1);
    },
};
