import TOrderItem from '@customTypes/TOrderItem';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/Store';
import AxiosErrorHandler from '@util/AxiosErrorHandler';
import axios from 'axios';

type TResponse = TOrderItem[];

const thunkGetOrders = createAsyncThunk(
  'orders/actGetOrders',
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const { auth } = getState() as RootState;

    try {
      const res = await axios.get<TResponse>(
        `/orders?userId=${auth.userInfo?.id}`,
        { signal }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default thunkGetOrders;
