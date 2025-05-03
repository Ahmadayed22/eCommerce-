import {
  cartItemChangeQuantity,
  cartItemRemove,
  cleanUpCartproductFullInfo,
  thunkGetProductsByItems,
} from '@store/cart/cartSlice';
import { resetOrderStatus } from '@store/orders/ordersSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { useCallback, useEffect } from 'react';
const useCart = () => {
  const { error, loading, productFullInfo, items } = useAppSelector(
    (state) => state.cart
  );

  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  const placeOrderStatus = useAppSelector((state) => state.orders.loading);

  const prdoucts = productFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const dispatch = useAppDispatch();
  useEffect(() => {
    // const promise = dispatch(thunkGetProductsByItems());
    dispatch(thunkGetProductsByItems());
    // cleanUp
    return () => {
      dispatch(cleanUpCartproductFullInfo());
      dispatch(resetOrderStatus());
      // promise.abort();
    };
  }, [dispatch]);

  const changeQunatityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },

    [dispatch]
  );
  return {
    userAccessToken,
    loading,
    error,
    prdoucts,
    changeQunatityHandler,
    removeItemHandler,
    placeOrderStatus,
  };
};

export default useCart;
