import * as types from '~/store/mutation-types';

export default {
    changeInventory({commit, state}, payload) {
        commit(types.UPDATE_SHOP, payload);
    },
    updateShopQty({commit, state}, payload) {
        commit(types.UPDATE_SHOP_QTY, payload);
    },

};
