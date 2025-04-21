import { TProduct } from '@customTypes/TProduct';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type TResponse = TProduct[];

const productFetchThunk = createAsyncThunk(
  'products/fetchProductThunk',
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `/products/?cat_prefix=${prefix}`
      );
      return response.data;
    } catch (error) {
      return axios.isAxiosError(error)
        ? rejectWithValue(error.response?.data.message || error.message)
        : rejectWithValue('An unexpected error');
    }
  }
);
export default productFetchThunk;
