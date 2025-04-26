import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosErrorHandler } from '@util';
import axios from 'axios';
import TCategory from 'src/types/TCategory';

type TResponse = TCategory[];

const categoryFetchThunk = createAsyncThunk(
  'categories/fetchCategoriesThunk',
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(`/categories`, {
        signal,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);
export default categoryFetchThunk;
