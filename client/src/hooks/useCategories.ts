import {
  categoryFetchThunk,
  cleanUpCategoryRecord,
} from '@store/Category/CategorSlice';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { useEffect } from 'react';

const useCategories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.catogery);
  useEffect(() => {
    // const promise = dispatch(categoryFetchThunk());
    dispatch(categoryFetchThunk());

    // cleanUp
    return () => {
      // promise.abort();
      dispatch(cleanUpCategoryRecord());
    };
  }, [dispatch]);

  return { records, loading, error };
};

export default useCategories;
