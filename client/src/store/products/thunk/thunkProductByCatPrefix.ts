import { TProduct } from '@customTypes/TProduct';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosErrorHandler } from '@util';
import axios from 'axios';

type TResponse = TProduct[];

const productFetchThunk = createAsyncThunk(
  'products/fetchProductThunk',
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `/products/?cat_prefix=${prefix}`,
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
export default productFetchThunk;
