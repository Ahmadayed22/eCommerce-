import { TProduct } from '@customTypes/TProduct';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/Store';
import axios from 'axios';

type TResponse = TProduct[];
const thunkGetProductsByItems = createAsyncThunk(
  'cart/thunkGetProductsByItems',
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);
    if (!itemsId.length) return fulfillWithValue([]);
    const queryConnectedItemsId = itemsId.map((el) => `id=${el}`).join('&');

    try {
      const response = await axios.get<TResponse>(
        `/products?${queryConnectedItemsId}`
      );
      return response.data;
    } catch (error) {
      return axios.isAxiosError(error)
        ? rejectWithValue(error.response?.data.message || error.message)
        : rejectWithValue('An unexpected error');
    }
  }
);
export default thunkGetProductsByItems;
