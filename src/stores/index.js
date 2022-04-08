import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart.slice';
import productReducer from './product.slice';
import customerInfoReducer from './customerInfo.slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    customerInfo: customerInfoReducer,
  },
});
