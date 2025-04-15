import { Category } from '@components/ecommerce';

const Categories = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
        <div className="flex justify-center">
          <Category />
        </div>
        <div className="flex justify-center">
          <Category />
        </div>
        <div className="flex justify-center">
          <Category />
        </div>
        <div className="flex justify-center">
          <Category />
        </div>
        <div className="flex justify-center">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Categories;
