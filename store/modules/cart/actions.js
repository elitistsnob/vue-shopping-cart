import * as types from '~/store/mutation-types';

export default {
    addItem({commit, state}, payload) {
        commit(types.CART_ADD_ITEM, payload);
    },

    removeFromCart({commit, state}, selectedItem) {

        commit(types.CART_UPDATE_ITEMS, selectedItem);
    },

    qtyChange({commit, state}, item) {
        commit(types.UPDATE_CART, item);
    },
};
