import { TProduct } from '@customTypes/TProduct';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/Store';
import { AxiosErrorHandler } from '@util';
import axios from 'axios';

type TResponse = TProduct[];
const thunkGetProductsByItems = createAsyncThunk(
  'cart/thunkGetProductsByItems',
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue, signal } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);
    if (!itemsId.length) return fulfillWithValue([]);
    const queryConnectedItemsId = itemsId.map((el) => `id=${el}`).join('&');

    try {
      const response = await axios.get<TResponse>(
        `/products?${queryConnectedItemsId}`,
        {
          signal,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);
export default thunkGetProductsByItems;
