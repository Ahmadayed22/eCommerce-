import { TProduct } from '@customTypes/TProduct';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type TResponse = TProduct[];
const thunkGetWishList = createAsyncThunk(
  'wishlist/thunkGetWishList',
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;
    try {
      const wishlist =
        await axios.get<{ productId: number }[]>(`/wishlist?userId=1`);
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      return axios.isAxiosError(error)
        ? rejectWithValue(error.response?.data.message || error.message)
        : rejectWithValue('An unexpected error');
    }
  }
);

export default thunkGetWishList;
