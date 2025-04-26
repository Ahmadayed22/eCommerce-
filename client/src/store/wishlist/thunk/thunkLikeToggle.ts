import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AxiosErrorHandler } from '@util';
const thunkLikeToggle = createAsyncThunk(
  'wishlist/thunkLikeToggle',
  async (id: number, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const isRecordExit = await axios.get(
        `/wishlist?userId=1&productId=${id}`,
        {
          signal,
        }
      );
      if (isRecordExit.data.length > 0) {
        await axios.delete(`/wishlist/${isRecordExit.data[0].id}`);
        return { type: 'remove', id };
      } else {
        await axios.post(`/wishlist`, { userId: '1', productId: id });

        return { type: 'add', id };
      }
    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default thunkLikeToggle;
