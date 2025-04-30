import { ModalPlacingOrder } from '@components/common';
import { TProduct } from '@customTypes/TProduct';
import { clearCartAfterPlceOrder } from '@store/cart/cartSlice';
import { thunkPlaceOrder } from '@store/orders/ordersSlice';
import { useAppDispatch } from '@store/reduxHooks';
import { Button } from 'flowbite-react';
import { useCallback, useState } from 'react';

type TProductProps = {
  products: TProduct[];
  userAccessToken: string | null;
};

const CartTotalPrice = ({ products, userAccessToken }: TProductProps) => {
  const totalPrice = products.reduce((acc, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === 'number') {
      return acc + price * quantity;
    } else {
      return acc;
    }
  }, 0);

  const [loading, setIsLoading] = useState(false);
  const [error, setIsError] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useAppDispatch();

  const handlePlaceOrderConfirm = useCallback(() => {
    setIsLoading(true);
    dispatch(thunkPlaceOrder(totalPrice))
      .unwrap()
      .then(() => {
        dispatch(clearCartAfterPlceOrder());
        setOpenModal(false);
      })
      .catch((error) => setIsError(error))
      .finally(() => setIsLoading(false));
  }, [dispatch, totalPrice]);

  return (
    <>
      <ModalPlacingOrder
        openModal={openModal}
        setOpenModal={setOpenModal}
        totalPrice={totalPrice}
        handlePlaceOrderConfirm={handlePlaceOrderConfirm}
        error={error}
        loading={loading}
        setIsError={setIsError}
      />
      <div className="flex justify-between mb-4">
        <span className="block text-2xl font-bold">Subtotal</span>
        <span className="block text-2xl font-bold">{totalPrice} JOD</span>
      </div>
      {userAccessToken && (
        <div className="flex justify-between mb-14">
          <span></span>
          <span className="block text-2xl font-bold">
            <Button
              className="cursor-pointer"
              color={'default'}
              onClick={() => setOpenModal(true)}
            >
              Place Order
            </Button>
          </span>
        </div>
      )}
    </>
  );
};

export default CartTotalPrice;
