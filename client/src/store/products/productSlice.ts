import { createSlice } from '@reduxjs/toolkit';
import { TProduct } from '@customTypes/TProduct';
import productFetchThunk from './thunk/thunkProductByCatPrefix';
import { TLoading } from 'src/types/TLoading';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../Store';
type TproductState = {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
};
// Define the initial state using that type
const initialState: TproductState = {
  records: [],
  loading: 'idle',
  error: null,
};

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    cleanUpProductsRecords: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productFetchThunk.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(productFetchThunk.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.records = action.payload;
    });
    builder.addCase(productFetchThunk.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpProductsRecords } = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

const productReducer = productSlice.reducer;
export default productReducer;

export { productFetchThunk };
