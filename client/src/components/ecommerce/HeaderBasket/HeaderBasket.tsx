import { TiShoppingCart } from 'react-icons/ti';

const HeaderBasket = () => {
  return (
    <div className="relative cursor-pointer self-end">
      <TiShoppingCart className="text-4xl" />
      <div
        className="absolute h-6 w-6 -top-4 
      -right-2 rounded-2xl border bg-[#0dcaf0] text-[12px] text-center text-white"
      >
        0
      </div>
    </div>
  );
};

export default HeaderBasket;
