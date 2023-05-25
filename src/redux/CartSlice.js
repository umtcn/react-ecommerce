import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');

    if (cart) {
        return JSON.parse(localStorage.getItem('cart'));
    } else {
        return [];
    }
}

const setStoreLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isInItemCart = state.carts.find(item => item.id === action.payload.id);

            if (isInItemCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalAmount = tempQty *  parseFloat(item.price);

                        state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                            return cartTotal += parseFloat(cartItem.price) * cartItem.quantity;
                        }, 0);

                        state.itemCount = state.carts.length;

                        return {
                            ...item, quantity: tempQty, totalAmount: tempTotalAmount
                        }
                    } else {
                        state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                            return cartTotal += parseFloat(cartItem.price) * cartItem.quantity;
                        }, 0);

                        state.itemCount = state.carts.length;

                        return item;
                    }
                })

                state.totalAmount = tempCart.reduce((cartTotal, cartItem) => {
                    return cartTotal += parseFloat(cartItem.price) * cartItem.quantity;
                }, 0);

                state.itemCount = tempCart.length;

                state.carts = tempCart;
                setStoreLocalStorage(state.carts);
            } else {
                state.carts.push(action.payload);

                state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                    return cartTotal += parseFloat(cartItem.price) * cartItem.quantity;
                }, 0);

                state.itemCount = state.carts.length;

                setStoreLocalStorage(state.carts);
            }
        },
        updateCart: (state, action) => {
            const { id, quantity } = action.payload;
            const updatedCart = state.carts.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  quantity: quantity,
                };
              }
              return item;
            });

            state.carts = updatedCart;

            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += parseFloat(cartItem.price) * cartItem.quantity;
            }, 0);

            state.itemCount = state.carts.length;

            setStoreLocalStorage(state.carts);
          },

        removeFromCart : (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload);

            state.carts = tempCart;

            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += parseFloat(cartItem.price) * cartItem.quantity;
            }, 0);

            state.itemCount = state.carts.length;

            setStoreLocalStorage(state.carts);
        },
        clearCart : (state) => {
            state.carts = [];
            setStoreLocalStorage(state.carts);
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += parseFloat(cartItem.price) * cartItem.quantity;
            }, 0)
           
            state.itemCount = state.carts.length;
        }
    }
})

export const { addToCart, removeFromCart, clearCart, updateCart, getCartTotal } = cartSlice.actions

export default cartSlice.reducer