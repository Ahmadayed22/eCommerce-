import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { thunkGetWishList } from '@store/wishlist/wishlistSlice';
import { useEffect, useMemo } from 'react';
import { cleanUpWishlistProductFullInfo } from '@store/wishlist/wishlistSlice';
const useWishList = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  useEffect(() => {
    const promise = dispatch(thunkGetWishList('productsFullInfo'));

    //   cleanUp
    return () => {
      promise.abort();
      dispatch(cleanUpWishlistProductFullInfo());
    };
  }, [dispatch]);
  const records = useMemo(
    () =>
      productFullInfo.map((el) => ({
        ...el,
        quantity: cartItems?.[el.id] || 0,
        isLiked: true,
      })),
    [cartItems, productFullInfo]
  );
  return { loading, error, records };
};

export default useWishList;
