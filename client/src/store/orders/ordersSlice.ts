import { TLoading } from '@customTypes/TLoading';
import TOrderItem from '@customTypes/TOrderItem';
import { createSlice } from '@reduxjs/toolkit';
import thunkPlaceOrder from './thunk/thunkPlaceOrder';
import thunkGetOrders from './thunk/thunkGetOrders';

interface IOrderSlice {
  orderList: TOrderItem[];
  loading: TLoading;
  error: string | null;
}

const initialState: IOrderSlice = {
  orderList: [],
  loading: 'idle',
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    resetOrderStatus: (state) => {
      state.loading = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // place order
    builder.addCase(thunkPlaceOrder.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(thunkPlaceOrder.fulfilled, (state) => {
      state.loading = 'succeeded';
    });
    builder.addCase(thunkPlaceOrder.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });

    // get orders
    builder.addCase(thunkGetOrders.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(thunkGetOrders.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.orderList = action.payload;
    });
    builder.addCase(thunkGetOrders.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export const { resetOrderStatus } = orderSlice.actions;

const orderReduser = orderSlice.reducer;
export { orderReduser, thunkGetOrders, thunkPlaceOrder };
