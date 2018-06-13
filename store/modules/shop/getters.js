export default {
    getItemQty: state => state.items.map(item => {
        if (item.itemid) {
            // element.qty += 1;
            return item.qty;
        }
    }),
    getInventory: state => state.items.map(item => {
        if (item.itemid === item.itemid) {
            // element.qty += 1;
            return item.inventory;
        }
    }),
    inCart: state => state.items,
    getItems: state => state.items,
};
