import { createSlice } from '@reduxjs/toolkit';
import TCategory from 'src/types/TCategory';
import categoryFetchThunk from './thunk/thunkCatagories';
import { TLoading } from 'src/types/TLoading';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../Store';
type TCategoryState = {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
};
// Define the initial state using that type
const initialState: TCategoryState = {
  records: [],
  loading: 'idle',
  error: null,
};

export const categorySlice = createSlice({
  name: 'category',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(categoryFetchThunk.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(categoryFetchThunk.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.records = action.payload;
    });
    builder.addCase(categoryFetchThunk.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

// export const { } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

const CategoryReducer = categorySlice.reducer;
export default CategoryReducer;

export { categoryFetchThunk };
