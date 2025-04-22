import { TProduct } from '@customTypes/TProduct';
import { createSlice } from '@reduxjs/toolkit';
import { getCartTotalQuantitySelector } from './selectors/index';
import thunkGetProductsByItems from './thunk/thunkGetProductsByItems';
import { TLoading } from '@customTypes/TLoading';
type TCartStatus = {
  // id:quantity
  items: { [key: string]: number };
  productFullInfo: TProduct[];
  loading: TLoading;
  error: string | null;
};

const initialState: TCartStatus = {
  items: {},
  productFullInfo: [],
  loading: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] ?? 0) + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetProductsByItems.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(thunkGetProductsByItems.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.productFullInfo = action.payload;
    });
    builder.addCase(thunkGetProductsByItems.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export { getCartTotalQuantitySelector, thunkGetProductsByItems };
export const { addToCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
