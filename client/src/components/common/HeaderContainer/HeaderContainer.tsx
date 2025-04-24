// import { getCartTotalQuantitySelector } from '@store/cart/selectors';
// import { useAppSelector } from '@store/reduxHooks';
// import { TiShoppingCart } from 'react-icons/ti';
import { useNavigate } from 'react-router';

type THeaderContainerProps = {
  totalQuantity: number;
  urlEndPoint: string;
  reactIcon: React.ReactNode;
};
console.log('Header fire');
const HeaderContainer = ({
  totalQuantity,
  urlEndPoint,
  reactIcon,
}: THeaderContainerProps) => {
  const navagiate = useNavigate();
  return (
    <div className={`relative cursor-pointer self-end  `}>
      <div className="text-4xl " onClick={() => navagiate(`/${urlEndPoint}`)}>
        {reactIcon}
      </div>
      {totalQuantity > 0 && (
        <div
          className="absolute h-6 w-6 -top-4 
      -right-2 rounded-2xl border bg-[#0dcaf0] text-[12px] text-center text-white"
        >
          {totalQuantity}
        </div>
      )}
    </div>
  );
};

export default HeaderContainer;
