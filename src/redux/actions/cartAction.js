export const setCartItem = (payload)=>{
    return {
        type: "SET_CART_ITEM",
        payload
    }
}
export const removeCartItem = (payload)=>{
    return {
        type: "REMOVE_CART_ITEM",
        payload
    }
}
export const cartItemPlus = (payload)=>{
    return {
        type: "CART_ITEM_PLUS",
        payload
    }
}
export const cartItemMinus = (payload)=>{
    return {
        type: "CART_ITEM_MINUS",
        payload
    }
}