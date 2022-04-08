import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCurrentPrd: (state, action) => {
      state.currentProduct = action.payload;
    },

    updateSize: (state, action) => {
      const size = action.payload;
      state.currentProduct = {
        ...state.currentProduct,
        size: size,
      };
    },

    updateTopping: (state, action) => {
      const topping = action.payload;
      state.currentProduct = {
        ...state.currentProduct,
        toppings: topping,
      };
    },

    updatePrice: (state, action) => {
      const price = action.payload;
      state.currentProduct = {
        ...state.currentProduct,
        totalPrice: price,
      };
    },
  },
});

export const { setCurrentPrd, updateSize, updateTopping, updatePrice } =
  productSlice.actions;

export const currentProduct = (state) => state.product.currentProduct;

export default productSlice.reducer;
