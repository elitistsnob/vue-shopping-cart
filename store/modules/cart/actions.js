import * as types from '~/store/mutation-types';

export const removeFromCart = ({ commit }, product) => {
    commit('REMOVE_FROM_CART', product)
  }

export default {
    addItem({commit}, payload) {
        commit(types.CART_ADD_ITEM, payload);
        // localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
    },
    updateCart() {
        commit(types.CART_UPDATE_ITEM, payload);
    },
    // removeFromCart() {
    //     // commit(types.CART_REMOVE_ITEM, payload);
    // },
    incrementQty() {
        item.commit('qty');
    },
    decrementQty() {
        // Do stuff
    },
    removeFromCart({commit}, payload) {
        commit(types.REMOVE_FROM_CART, payload);
      },

};
