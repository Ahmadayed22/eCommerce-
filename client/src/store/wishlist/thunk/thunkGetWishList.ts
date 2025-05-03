import { TProduct } from '@customTypes/TProduct';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/Store';
import { AxiosErrorHandler } from '@util';
import axios from 'axios';

type TDataType = 'productsFullInfo' | 'ProductIds';
type TResponse = TProduct[];
const thunkGetWishList = createAsyncThunk(
  'wishlist/thunkGetWishList',
  async (dataType: TDataType, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const { auth } = getState() as RootState;

    try {
      const wishlist = await axios.get<{ ProductIds: number }[]>(
        `/wishlist?userId=${auth.userInfo?.id}`
      );

      // if the userWishList is Empty return EmptyArray
      console.log(wishlist.data.length);
      if (!wishlist.data.length) {
        return { data: [], dataType: 'empty' };
      }

      if (dataType === 'ProductIds') {
        const concatenatedItemsId = wishlist.data.map((el) => el.ProductIds);

        return { data: concatenatedItemsId, dataType: 'ProductIds' };
      } else {
        const concatenatedItemsId = wishlist.data
          .map((el) => `id=${el.ProductIds}`)
          .join('&');
        const response = await axios.get<TResponse>(
          `/products?${concatenatedItemsId}`
        );

        return { data: response.data, dataType: 'productsFullInfo' };
      }
    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default thunkGetWishList;
