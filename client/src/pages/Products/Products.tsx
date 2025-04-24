import { Heading, RenderList } from '@components/common';
import { Product } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';
import {
  productFetchThunk,
  productsCleanUp,
} from '@store/products/productSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router';

const Products = () => {
  const dispatch = useAppDispatch();
  const { prefix } = useParams();
  const { records, loading, error } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);
  console.log(wishlistItemsId.includes(5));
  const productFullInfo = useMemo(
    () =>
      records.map((el) => ({
        ...el,
        quantity: cartItems[el.id] || 0,
        isLiked: wishlistItemsId.includes(el.id),
      })),
    [records, cartItems, wishlistItemsId]
  );
  useEffect(() => {
    if (prefix) {
      dispatch(productFetchThunk(prefix));
      return () => {
        dispatch(productsCleanUp());
      };
    }
  }, [prefix, dispatch]);

  return (
    <>
      <Heading>
        {' '}
        <span>{prefix}</span> Products
      </Heading>
      <Loading loading={loading} error={error}>
        <div className="px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
            <RenderList
              records={productFullInfo}
              renderItem={(record) => <Product {...record} />}
            />
          </div>
        </div>
      </Loading>
    </>
  );
};

export default Products;
