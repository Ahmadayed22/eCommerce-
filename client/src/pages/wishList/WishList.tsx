import { Heading, RenderList } from '@components/common';
import { Product } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { thunkGetWishList } from '@store/wishlist/wishlistSlice';
import { useEffect, useMemo } from 'react';
import { productFullInfoCleanUp } from '@store/wishlist/wishlistSlice';
const WishList = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);
  useEffect(() => {
    dispatch(thunkGetWishList());
    return () => {
      dispatch(productFullInfoCleanUp());
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
  return (
    <>
      <Heading>Your WishList</Heading>
      <Loading loading={loading} error={error}>
        <div className="px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
            <RenderList
              records={records}
              renderItem={(record) => <Product {...record} />}
            />
          </div>
        </div>
      </Loading>
    </>
  );
};

export default WishList;
