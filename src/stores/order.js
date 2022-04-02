import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialOrder = {
  order: null,
  customerInfor: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialOrder,
  reducers: {},
});
