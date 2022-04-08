import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customerInfo: JSON.parse(localStorage.getItem('customerInfo')) || 1,
};

const customerInfoSlice = createSlice({
  name: 'customerInfo',
  initialState,
  reducers: {
    updateCustomerInfo: (state, action) => {
      state.customerInfo = action.payload;
    },
  },
});

export const { updateCustomerInfo } = customerInfoSlice.actions;

export const customerInfo = (state) => state.customerInfo.customerInfo;

export default customerInfoSlice.reducer;
