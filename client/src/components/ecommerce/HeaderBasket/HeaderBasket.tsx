import { getCartTotalQuantitySelector } from '@store/cart/selectors';
import { useAppSelector } from '@store/reduxHooks';
import { TiShoppingCart } from 'react-icons/ti';
import { useNavigate } from 'react-router';

const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const navagiate = useNavigate();
  return (
    <div className="relative cursor-pointer self-end">
      <TiShoppingCart
        className="text-4xl "
        onClick={() => navagiate('/cart')}
      />
      <div
        className="absolute h-6 w-6 -top-4 
      -right-2 rounded-2xl border bg-[#0dcaf0] text-[12px] text-center text-white"
      >
        {totalQuantity}
      </div>
    </div>
  );
};

export default HeaderBasket;
