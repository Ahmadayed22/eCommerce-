import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/Store';
import AxiosErrorHandler from '@util/AxiosErrorHandler';
import axios from 'axios';

const thunkPlaceOrder = createAsyncThunk(
  'orders/thunkPlaceOrder',
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart, auth } = getState() as RootState;

    const orderItems = cart.productFullInfo.map((el) => ({
      id: el.id,
      title: el.title,
      price: el.price,
      img: el.img,
      quantity: cart.items[el.id],
    }));

    try {
      const res = await axios.post('/orders', {
        userId: auth.userInfo?.id,
        items: orderItems,
        subtotal,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(AxiosErrorHandler(error));
    }
  }
);

export default thunkPlaceOrder;
