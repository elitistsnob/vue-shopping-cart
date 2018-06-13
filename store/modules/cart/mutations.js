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
        let itemExists = state.items.find(i => {
            return i.itemid === item.itemid
        });
        if (!itemExists) {
            state.items.push(item);
            // item.inventory -= 1;
        }
        // else {
        //     state.items = state.items.map(element => {
        //         if (element.itemid === item.itemid) {
        //             element.qty += 1;
        //             element.inventory -= 1;
        //         }
        //         return element;
        //     });
        // }
    },

    [types.CART_UPDATE_ITEMS](state, item) {
        // state.items = items;

        // const items = state.items;
        const index = state.items.findIndex(item => item.itemid === item.itemid);
        if (index !== -1) {
            state.items.splice(index, 1);
        }
    },

    [types.UPDATE_CART](state, item) {
        const qty = item.itemQty;
        const itemIndex = state.items.indexOf(item);
        // alert(itemIndex);

        if( itemIndex === -1 && qty > 1 ) {
            state.items.push(qty);
        } else if (qty === 1) {
            state.items.splice(itemIndex, 1);
        }
    },
};
