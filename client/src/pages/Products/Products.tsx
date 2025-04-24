import { Heading, RenderList } from '@components/common';
import { Product } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';
import useProducts from '@hooks/useProducts';

const Products = () => {
  const { loading, error, productFullInfo, prefix } = useProducts();
  return (
    <>
      <Heading title={`${prefix} Products`} />
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
