import * as types from '~/store/mutation-types';

export default {
    addItem({commit}, payload) {
        commit(types.CART_ADD_ITEM, payload);
    },
    updateCart() {
        commit(types.CART_UPDATE_ITEM, payload);
    },
    removeFromCart() {
        commit(types.CART_REMOVE_ITEM, payload);
    },
    incrementQty() {
        item.commit('qty');
    },
    decrementQty() {
        // Do stuff
    },
};
