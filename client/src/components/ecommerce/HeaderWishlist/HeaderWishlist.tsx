import { useAppSelector } from '@store/reduxHooks';
import { CiViewList } from 'react-icons/ci';
import { useNavigate } from 'react-router';

const HeaderWishlist = () => {
  const totalQuantity = useAppSelector((state) => state.wishlist.itemsId);
  const navagiate = useNavigate();
  return (
    <div className="relative cursor-pointer self-end border-r-2 pr-2  ">
      <CiViewList
        className="text-4xl  "
        onClick={() => navagiate('/wishlist')}
      />
      {totalQuantity.length > 0 ? (
        <div
          className="absolute h-6 w-6 -top-4 
      -right-0 rounded-2xl border bg-[#0dcaf0] text-[12px] text-center text-white"
        >
          {totalQuantity.length}
        </div>
      ) : null}
    </div>
  );
};

export default HeaderWishlist;
