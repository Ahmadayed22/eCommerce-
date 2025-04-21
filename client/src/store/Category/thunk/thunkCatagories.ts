import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import TCategory from 'src/types/TCategory';

type TResponse = TCategory[];

const categoryFetchThunk = createAsyncThunk(
  'categories/fetchCategoriesThunk',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(`/categories`);
      return response.data;
    } catch (error) {
      return axios.isAxiosError(error)
        ? rejectWithValue(error.response?.data.message || error.message)
        : rejectWithValue('An unexpected error');
    }
  }
);
export default categoryFetchThunk;
