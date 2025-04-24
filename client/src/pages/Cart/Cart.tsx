import { Heading } from '@components/common';
import { CartItemList, CartTotalPrice } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';
import {
  cartItemChangeQuantity,
  cartItemRemove,
  cleanUpCartproductFullInfo,
  thunkGetProductsByItems,
} from '@store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { useCallback, useEffect } from 'react';

const Cart = () => {
  const { error, loading, productFullInfo, items } = useAppSelector(
    (state) => state.cart
  );
  const prdoucts = productFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(thunkGetProductsByItems());
    // cleanUp
    return () => {
      dispatch(cleanUpCartproductFullInfo());
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
  return (
    <>
      <Heading>Your Cart</Heading>
      <Loading loading={loading} error={error}>
        {prdoucts.length ? (
          <>
            <CartItemList
              products={prdoucts}
              changeQunatityHandler={changeQunatityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartTotalPrice products={prdoucts} />
          </>
        ) : (
          'Your Cart is Empty'
        )}
      </Loading>
    </>
  );
};

export default Cart;
