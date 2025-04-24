import { Heading } from '@components/common';
import { CartItemList, CartTotalPrice } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';
import useCart from '@hooks/useCart';

const Cart = () => {
  const { loading, error, prdoucts, changeQunatityHandler, removeItemHandler } =
    useCart();

  return (
    <>
      <Heading title={'Your Cart'} />
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
