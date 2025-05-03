import { Heading } from '@components/common';
import { CartItemList, CartTotalPrice } from '@components/ecommerce';
import { Loading, LottieHandler } from '@components/feedbaks';
import useCart from '@hooks/useCart';

const Cart = () => {
  const {
    userAccessToken,
    loading,
    error,
    prdoucts,
    changeQunatityHandler,
    removeItemHandler,
    placeOrderStatus,
  } = useCart();

  return (
    <>
      <Heading title={'Your Cart'} />
      <Loading loading={loading} error={error} type="cart">
        {prdoucts.length ? (
          <>
            <CartItemList
              products={prdoucts}
              changeQunatityHandler={changeQunatityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartTotalPrice
              products={prdoucts}
              userAccessToken={userAccessToken}
            />
          </>
        ) : placeOrderStatus === 'succeeded' ? (
          <LottieHandler
            type="success"
            message="Your order has been placed successfully"
          />
        ) : (
          <LottieHandler type="empty" message="Your Cart Is Empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;
