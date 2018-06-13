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
        // state.items.push(item);

        // Surpressing CART_ADD_ITEM action after first click
        let itemExists = state.items.indexOf(item) > -1;
        if (!itemExists) {
            state.items.push(item);
        }
        else {
            state.items.push(item.qty);
            // state.items.push(item);
        }
    },

    [types.CART_UPDATE_ITEMS](state, items) {
        state.items = items;
    },

    [types.UPDATE_CART](state, item) {
        const qty = item.qty;
        const itemIndex = state.items.indexOf(item);
        // alert(itemIndex);

        if( itemIndex === -1 && qty > 1 ) {
            state.items.push(qty);
        } else if (qty === 1) {
            state.items.splice(itemIndex, 1);
        }
    },
};
