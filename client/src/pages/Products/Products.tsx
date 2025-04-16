import { Product } from '@components/ecommerce';
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
  const { records } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (prefix) {
      dispatch(productFetchThunk(prefix));
      return () => {
        dispatch(productsCleanUp());
      };
    }
  }, [prefix, dispatch]);
  const productsList =
    records.length > 0
      ? records.map((record) => (
          <div className="flex justify-center" key={record.id}>
            <Product {...record} />
          </div>
        ))
      : 'there is no products';
  return (
    <div className="px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
        {productsList}
      </div>
    </div>
  );
};

export default Products;
