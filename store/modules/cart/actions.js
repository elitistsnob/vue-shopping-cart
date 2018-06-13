import * as types from '~/store/mutation-types';

export default {
    addItem({commit, state}, payload) {
        commit(types.CART_ADD_ITEM, payload);
    },

    removeFromCart({commit, state}, selectedItem) {
        const items = state.items;
        const index = items.findIndex(item => item.itemid === selectedItem.itemid);
        if (index !== -1) {
            items.splice(index, 1);
        }
        commit(types.CART_UPDATE_ITEMS, items);
    },

    qtyChange({commit, state}, item) {
        commit(types.UPDATE_CART, item);
    },
};
