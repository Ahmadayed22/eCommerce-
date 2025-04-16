import { RenderList } from '@components/common';
import { Product } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';
import {
  productFetchThunk,
  productsCleanUp,
} from '@store/products/productSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Products = () => {
  const dispatch = useAppDispatch();
  const { prefix } = useParams();
  const { records, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (prefix) {
      dispatch(productFetchThunk(prefix));
      return () => {
        dispatch(productsCleanUp());
      };
    }
  }, [prefix, dispatch]);

  return (
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
  );
};

export default Products;
