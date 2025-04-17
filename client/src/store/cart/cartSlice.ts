import { TProduct } from '@customTypes/TProduct';
import { createSlice } from '@reduxjs/toolkit';
import { getCartTotalQuantitySelector } from './selectors/index';
type TCartStatus = {
  // id:quantity
  items: { [key: number]: number };
  productFullInfo: TProduct[];
};

const initialState: TCartStatus = {
  items: {},
  productFullInfo: [],
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
});

export { getCartTotalQuantitySelector };
export const { addToCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
