import { Product } from '@components/ecommerce';

const Products = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
        <div className="flex justify-center">
          <Product />
        </div>
        <div className="flex justify-center">
          <Product />
        </div>
        <div className="flex justify-center">
          <Product />
        </div>
        <div className="flex justify-center">
          <Product />
        </div>
        <div className="flex justify-center">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Products;
