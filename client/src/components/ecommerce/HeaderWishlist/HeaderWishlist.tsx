import { HeaderContainer } from '@components/common';
import { useAppSelector } from '@store/reduxHooks';
import { CiViewList } from 'react-icons/ci';

const HeaderWishlist = () => {
  const totalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );

  return (
    <>
      <HeaderContainer
        totalQuantity={totalQuantity}
        urlEndPoint={`wishlist`}
        reactIcon={<CiViewList />}
      />
      <span className="border-r-2 w-2 h-full"></span>
    </>
  );
};

export default HeaderWishlist;
