import { Heading, RenderList } from '@components/common';
import { Category } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';

import {
  categoryFetchThunk,
  cleanUpCategoryRecord,
} from '@store/Category/CategorSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { useEffect } from 'react';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.catogery);
  useEffect(() => {
    dispatch(categoryFetchThunk());

    // cleanUp
    return () => {
      dispatch(cleanUpCategoryRecord());
    };
  }, [dispatch]);

  return (
    <>
      <Heading>Categories </Heading>
      <Loading loading={loading} error={error}>
        <div className="px-4 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
          <RenderList
            records={records}
            renderItem={(record) => <Category {...record} />}
          />
        </div>
      </Loading>
    </>
  );
};

export default Categories;
