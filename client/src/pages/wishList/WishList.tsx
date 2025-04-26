import { Heading, RenderList } from '@components/common';
import { Product } from '@components/ecommerce';
import { Loading } from '@components/feedbaks';
import useWishList from '@hooks/useWishList';

const WishList = () => {
  const { loading, error, records } = useWishList();
  return (
    <>
      <Heading title={`Your WishList`} />
      <Loading loading={loading} error={error} type="wishlist">
        <div className="px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 mt-2 mb-5">
            <RenderList
              records={records}
              renderItem={(record) => <Product {...record} />}
            />
          </div>
        </div>
      </Loading>
    </>
  );
};

export default WishList;
