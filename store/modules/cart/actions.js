import * as types from '~/store/mutation-types';

export default {
    addItem({commit}, payload) {
        commit(types.CART_ADD_ITEM, payload);
    },
    removeFromCart() {
        commit(types.CART_REMOVE_ITEM, payload);
    },
    qtyIncrement() {
        // Do stuff
    },
    qtyDecrement() {
        // Do stuff
    },
    checkout() {
        // Do stuff
    },
    
    // increment (context) {
    //     context.commit('increment')
    // }
};
