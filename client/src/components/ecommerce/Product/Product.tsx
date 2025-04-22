import { TProduct } from '@customTypes/TProduct';
import { addToCart } from '@store/cart/cartSlice';
import { useAppDispatch } from '@store/reduxHooks';
import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import React from 'react';
const Product = ({ title, price, img, id, max, quantity }: TProduct) => {
  const [isBtnDisabled, setIsDisabled] = useState(false);
  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;
  const dispatch = useAppDispatch();
  const addToCartHandeler = () => {
    dispatch(addToCart(id));
    // handelDisble
    setIsDisabled(true);
  };

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }
    const timer = setTimeout(() => setIsDisabled(false), 300);
    return () => clearTimeout(timer);
  }, [isBtnDisabled]);
  return (
    <div className="w-32 flex flex-col justify-between">
      <div className="w-full h-44 bg-[#f2f2f2] block ">
        <img
          src={img}
          alt={title}
          className="object-cover h-full w-full rounded"
        />
      </div>
      <h2 className="text-[18px] mt-2.5 mb-3 w-full ">{title}</h2>
      <h3 className="text-[12px] mb-2">{price.toFixed(2)} JOD</h3>

      <Button
        disabled={isBtnDisabled || quantityReachedToMax}
        onClick={addToCartHandeler}
        className="cursor-pointer"
      >
        {quantityReachedToMax ? (
          'Out of stock'
        ) : isBtnDisabled ? (
          <>
            <Spinner size="sm" light />
            <span className="pl-3">Loading...</span>
          </>
        ) : (
          'Add to cart'
        )}
      </Button>
    </div>
  );
};

export default React.memo(Product);
