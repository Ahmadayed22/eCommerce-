import { TProduct } from '@customTypes/TProduct';
import { addToCart } from '@store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FcLike } from 'react-icons/fc';
import { thunkLikeToggle } from '@store/wishlist/wishlistSlice';
import React from 'react';
import ModalLoginRequierd from '@components/common/Modal/ModalLoginRequierd';

const Product = ({
  title,
  price,
  img,
  id,
  max,
  quantity,
  isLiked,
  isAuthenticated,
}: TProduct) => {
  const [isBtnDisabled, setIsDisabled] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  const dispatch = useAppDispatch();

  const { accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }
    const timer = setTimeout(() => setIsDisabled(false), 300);
    return () => clearTimeout(timer);
  }, [isBtnDisabled]);

  const addToCartHandeler = () => {
    dispatch(addToCart(id));
    // handelDisble
    setIsDisabled(true);
  };

  const likeToggleHandler = () => {
    if (isAuthenticated) {
      if (isLoading) return;
      setIsLoading(true);
      dispatch(thunkLikeToggle(id))
        .unwrap()
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    } else {
      setOpenModal(true);
    }
  };

  return (
    <>
      <ModalLoginRequierd openModal={openModal} setOpenModal={setOpenModal} />
      <div className="w-32 flex flex-col justify-between relative">
        <div
          onClick={likeToggleHandler}
          className="absolute right-2 top-2 cursor-pointer "
        >
          {isLoading ? (
            <Spinner size="md" />
          ) : isLiked ? (
            <FcLike className="text-2xl text-red-600 bg-amber-50  rounded  " />
          ) : (
            <FiHeart className="text-2xl text-red-600 bg-amber-50  rounded  " />
          )}
        </div>
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
          disabled={isBtnDisabled || quantityReachedToMax || !accessToken}
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
    </>
  );
};

export default React.memo(Product);
