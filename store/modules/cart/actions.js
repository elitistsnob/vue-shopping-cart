import * as types from '~/store/mutation-types';

export default {
    addItem({commit}, payload) {
        commit(types.CART_ADD_ITEM, payload);
    },
    updateCart() {
        commit(types.CART_UPDATE_ITEM, payload);
    },
    incrementQty() {
        item.commit('qty');
    },
    decrementQty() {
        // Do stuff
    },
    removeFromCart({commit, state}, selectedItem) {
        const items = state.items.filter(item => item.itemid !== selectedItem.itemid);
        commit(types.CART_UPDATE_ITEMS, items);
    },
};
