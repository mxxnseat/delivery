const initialState = {
    cart: [],
    totalPrice: 0
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_CART_ITEM': {
            const find = state.cart.findIndex(item => {
                return item.id == payload.id && item.size == payload.size;
            });
            let cart;

            if (find >= 0) {
                state.cart[find].count += 1;
                state.cart[find].totalPrice += payload.price;
                cart = state.cart;
            } else {
                payload.count = 1;
                payload.totalPrice = payload.price;
                payload.cartID = state.cart.length;
                cart = [...state.cart, payload];
            }


            return {
                ...state,
                cart,
                totalPrice: cart.reduce((a, c) => a + c.totalPrice, 0)
            }
        }
        case 'REMOVE_CART_ITEM':
            return {
                ...state,
                cart: state.cart.filter(item => item.cartID != payload),
                totalPrice: state.cart.filter(item => item.cartID != payload).reduce((a, c) => a + c.totalPrice, 0)
            }
        case 'CART_ITEM_MINUS':
            {
                const find = state.cart.findIndex(item => item.cartID == payload);
                if(state.cart[find].count == 1) return {
                    ...state,
                    cart: [...state.cart],
                };
                state.cart[find].count -= 1;
                state.cart[find].totalPrice -= state.cart[find].price;
                return {
                    ...state,
                    cart: [...state.cart],
                    totalPrice: [...state.cart].reduce((a, c) => a + c.totalPrice, 0)
                }
            }

        case 'CART_ITEM_PLUS':
            {
                const find = state.cart.findIndex(item => item.cartID == payload);
                state.cart[find].count += 1;
                state.cart[find].totalPrice += state.cart[find].price;
                return {
                    ...state,
                    cart: [...state.cart],
                    totalPrice: [...state.cart].reduce((a, c) => a + c.totalPrice, 0)
                }
            }



        default: return state;
    }
}