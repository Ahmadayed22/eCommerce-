import { createSlice } from '@reduxjs/toolkit';
import thunkLikeToggle from './thunk/thunkLikeToggle';
import thunkGetWishList from './thunk/thunkGetWishList';
import { TLoading } from '@customTypes/TLoading';
import { TProduct } from '@customTypes/TProduct';
import { authLogout } from '@store/auth/authSlice';
type TWishlist = {
  itemsId: number[];
  error: string | null;
  loading: TLoading;
  productFullInfo: TProduct[];
};

const initialState: TWishlist = {
  itemsId: [],
  error: null,
  loading: 'idle',
  productFullInfo: [],
};
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    cleanUpWishlistProductFullInfo: (state) => {
      state.productFullInfo = [];
    },
    cleanUpWishlistItemsId: (state) => {
      state.itemsId = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkLikeToggle.pending, (state) => {
      state.error = null;
    });
    builder.addCase(thunkLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === 'add') {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
        state.productFullInfo = state.productFullInfo.filter(
          (el) => el.id !== action.payload.id
        );
      }
    });
    builder.addCase(thunkLikeToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });

    //   get WishList items
    builder.addCase(thunkGetWishList.pending, (state) => {
      state.error = null;
      state.loading = 'pending';
    });
    builder.addCase(thunkGetWishList.fulfilled, (state, action) => {
      if (action.payload.dataType === 'productFullInfo') {
        state.productFullInfo = action.payload.data as TProduct[];
      } else if (action.payload.dataType === 'ProductIds') {
        state.itemsId = action.payload.data as number[];
      }
      state.loading = 'succeeded';
    });
    builder.addCase(thunkGetWishList.rejected, (state, action) => {
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
        state.loading = 'failed';
      }
    });

    // when logout
    builder.addCase(authLogout, (state) => {
      state.productFullInfo = [];
      state.itemsId = [];
    });
  },
});

const wishlistReducer = wishlistSlice.reducer;
export const { cleanUpWishlistProductFullInfo, cleanUpWishlistItemsId } =
  wishlistSlice.actions;
export { wishlistReducer, thunkLikeToggle, thunkGetWishList };
