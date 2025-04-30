import {
  productFetchThunk,
  cleanUpProductsRecords,
} from '@store/products/productSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router';

const useProducts = () => {
  const dispatch = useAppDispatch();
  const { prefix } = useParams();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const userAccessToken = useAppSelector((state) => state.auth.accessToken);
  const productFullInfo = useMemo(
    () =>
      records.map((el) => ({
        ...el,
        quantity: cartItems[el.id] || 0,
        isLiked: wishlistItemsId.includes(el.id),
        isAuthenticated: userAccessToken ? true : false,
      })),
    [records, cartItems, wishlistItemsId, userAccessToken]
  );
  useEffect(() => {
    if (prefix) {
      // const promise = dispatch(productFetchThunk(prefix));
      dispatch(productFetchThunk(prefix));
      return () => {
        dispatch(cleanUpProductsRecords());
        // promise.abort();
      };
    }
  }, [prefix, dispatch]);
  return { loading, error, productFullInfo, prefix };
};

export default useProducts;
