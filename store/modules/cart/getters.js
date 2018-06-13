export default {
    cartItems: state => state.items,
    getCartTotal: state => state.items.reduce((total, item) => total + item.price * item.qty, 0),
    getQty: state => state.items.length,
    itemQty: state => state.items.reduce((current, next) => current + next.qty, 0),
};