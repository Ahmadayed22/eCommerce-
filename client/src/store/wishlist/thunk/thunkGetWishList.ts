import { TProduct } from '@customTypes/TProduct';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosErrorHandler } from '@util';
import axios from 'axios';

type TResponse = TProduct[];
const thunkGetWishList = createAsyncThunk(
  'wishlist/thunkGetWishList',
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI;
    try {
      const wishlist = await axios.get<{ productId: number }[]>(
        `/wishlist?userId=1`,
        {
          signal,
        }
      );
      // if the userWishList is Empty return EmptyArray
      if (!wishlist.data.length) {
        return fulfillWithValue([]);
      }
      const concatenatedItemsId = wishlist.data
        .map((el) => `id=${el.productId}`)
        .join('&');
      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default thunkGetWishList;
