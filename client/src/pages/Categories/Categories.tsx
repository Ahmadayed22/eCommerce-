import { Category } from '@components/ecommerce';
import { categoryFetchThunk } from '@store/Category/CategorSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { useEffect } from 'react';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.catogery);
  useEffect(() => {
    dispatch(categoryFetchThunk());
  }, [dispatch]);

  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <div className="flex justify-center" key={record.id}>
            <Category {...record} />
          </div>
        ))
      : 'there are no categories';

  return (
    <>
      <div className="px-4 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
        {categoriesList}
      </div>
    </>
  );
};

export default Categories;
