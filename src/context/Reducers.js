export const setToLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}

export const getFromLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        let value = window.localStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
        }
        return value;
    }
}

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let addToCartTempState = { ...state, cart: action.firstLogin ? [...state.cart, ...action.payload].filter((a, i) => [...state.cart, ...action.payload].findIndex((s) => a._id === s._id) === i) : [...state.cart, { ...action.payload }] };
            setToLocalStorage("cartItems", addToCartTempState);
            return addToCartTempState
        case "REMOVE_FROM_CART":
            let removeFromCartTempState = {
                ...state,
                cart: state.cart.filter((c) => c._id !== action.payload._id),
            };
            setToLocalStorage("cartItems", removeFromCartTempState);
            return removeFromCartTempState
        case 'CLEAR_CART':
            let removeCartTempState = { ...state, cart: [] };
            setToLocalStorage("cartItems", removeCartTempState);
            return removeCartTempState
        default:
            return state;
    }
};