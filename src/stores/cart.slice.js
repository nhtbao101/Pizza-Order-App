import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  currentProduct: null,
  cartItem: [],
};

const cartData = localStorage.getItem('cart');
if (cartData) {
  initialState.cartItem = JSON.parse(cartData);
}

const setCart = (listProduct) => {
  return localStorage.setItem('cart', JSON.stringify(listProduct));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const cart = current(state.cartItem);
      const product = action.payload;
      const existingCartItemIndex = cart.findIndex(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.size) === JSON.stringify(product.size) &&
          JSON.stringify(item.toppings) === JSON.stringify(product.toppings)
      );
      if (existingCartItemIndex === -1) {
        state.cartItem.push(product);
      } else {
        state.cartItem[existingCartItemIndex].quantity += 1;
      }
      setCart(current(state.cartItem));
    },

    updateQuantity: (state, action) => {
      const cart = current(state.cartItem);
      const findIndexPrd = cart.findIndex(
        (prd) => JSON.stringify(prd) === JSON.stringify(action.payload.product)
      );
      state.cartItem[findIndexPrd].quantity = action.payload.quantity;
      setCart(current(state.cartItem));
    },

    removeCart: (state, action) => {
      const cart = current(state.cartItem);
      const newCart = cart.filter(
        (prd) => JSON.stringify(prd) !== JSON.stringify(action.payload)
      );
      state.cartItem = newCart;
      setCart(newCart);
    },
    clearCart: (state, action) => {
      state.cartItem = [];
    },
  },
});

export const { addTocart, updateQuantity, removeCart, clearCart } = cartSlice.actions;

export const cartItem = (state) => state.cart.cartItem;

export default cartSlice.reducer;
