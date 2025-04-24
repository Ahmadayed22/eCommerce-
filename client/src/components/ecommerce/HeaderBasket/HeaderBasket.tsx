import { HeaderContainer } from '@components/common';
import { getCartTotalQuantitySelector } from '@store/cart/selectors';
import { useAppSelector } from '@store/reduxHooks';
import { TiShoppingCart } from 'react-icons/ti';

const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <>
      <HeaderContainer
        totalQuantity={totalQuantity}
        urlEndPoint={`cart`}
        reactIcon={<TiShoppingCart />}
      />
    </>
  );
};

export default HeaderBasket;
