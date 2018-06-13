/*
// Namespace your mutation types (variable should be uppercase, value should be lowercase).
// Then use your namespace in your mutation name (variable and value should be uppercase).
// Separate the namespace from the mutation-type using a forward slash (/).
export const SN_NAMESPACE = 'namespace';
export const NAMESPACE_UPDATE_SOMETHING = `${SN_NAMESPACE}/UPD_SOMETHING`;
*/

export const SN_CART = 'cart';
export const CART_ADD_ITEM = `${SN_CART}/ADD_ITEM`;
export const CART_UPDATE_ITEMS = `${SN_CART}/UPDATE_ITEMS`;
export const REMOVE_FROM_CART = `${SN_CART}/REMOVE`;
export const ITEM_QTY = `${SN_CART}/UPDATE_QTY`;
export const QTY_CHANGE = `${SN_CART}/QTY_CHANGE`;
export const UPDATE_CART = `${SN_CART}/UPDATE_CART`;
