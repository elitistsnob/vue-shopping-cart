import * as types from '~/store/mutation-types';

export default {
    addItem({commit, state}, payload) {
        commit(types.CART_ADD_ITEM, payload);
    },
    // updateCart() {
    //     // commit(types.CART_UPDATE_ITEM, payload);
    // },
    // incrementQty() {
    //     // item.commit('qty');
    //     commit(types.ITEM_QTY, payload);
    // },
    // decrementQty() {
    //     // Do stuff
    // },
    removeFromCart({commit, state}, selectedItem) {
        const items = state.items;
        const index = items.findIndex(item => item.itemid === selectedItem.itemid);
        if (index !== -1) {
            items.splice(index, 1);
        }
        commit(types.CART_UPDATE_ITEMS, items);
        // console.log('INDEX: %s', index);
    },
    qtyChange({item, qty, state}) {
        commit(types.ITEM_QTY, item, qty);
    },
};
