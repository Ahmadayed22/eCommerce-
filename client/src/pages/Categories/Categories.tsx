import { Heading, RenderList } from '@components/common';
import { Category } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';
import useCategories from '@hooks/useCategories';

const Categories = () => {
  const { records, loading, error } = useCategories();
  return (
    <>
      <Heading title={`Categories`} />
      <Loading loading={loading} error={error} type="category">
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
