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
            item.inventory -= 1;
        }
        else {
            state.items = state.items.map(element => {
                if (element.itemid === item.itemid) {
                    // element.qty += 1;
                    element.inventory -= 1;
                }
                return element;
            });
        }
    },
    [types.UPDATE_SHOP](state, item) {
        // const qty = item.qty;
        const itemIndex = state.items.indexOf(item);
        // alert(itemIndex);

        state.items = state.items.map(element => {
            if (element.itemid === item.itemid) {
                element.itemQty += 1;
                element.inventory -= 1;
            }
            return element;
        });
    },

    [types.UPDATE_SHOP_QTY](state, item) {
        state.items = state.items.map(element => {
            if (element.itemid === item.itemid) {
                element.inventory += item.itemQty;
                element.itemQty = 0;

                // console.log(item.itemQty);
            }
            return element;
        });
    }
};
