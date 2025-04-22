import { Heading } from '@components/common';
import { CartItem, CartTotalPrice } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';
import { thunkGetProductsByItems } from '@store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { useEffect } from 'react';

const Cart = () => {
  const { error, loading, productFullInfo } = useAppSelector(
    (state) => state.cart
  );
  console.log(productFullInfo);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(thunkGetProductsByItems());
  }, [dispatch]);
  return (
    <>
      <Heading>Your Cart</Heading>
      <Loading loading={loading} error={error}>
        <CartItem />
        <CartItem />
        <CartItem />

        <CartTotalPrice />
      </Loading>
    </>
  );
};

export default Cart;
