import { TProduct } from '@customTypes/TProduct';
import { addToCart } from '@store/cart/cartSlice';
import { useAppDispatch } from '@store/reduxHooks';
import { Button } from 'flowbite-react';

const Product = ({ title, price, img, id }: TProduct) => {
  const dispatch = useAppDispatch();
  const addToCartHandeler = () => {
    dispatch(addToCart(id));
  };
  return (
    <div className="w-32 flex flex-col justify-between">
      <div className="w-full h-44 bg-[#f2f2f2] block ">
        <img
          src={img}
          alt={title}
          className="object-cover h-full w-full rounded"
        />
      </div>
      <h2 className="text-[18px] mt-2.5 mb-3 w-full ">{title}</h2>
      <h3 className="text-[12px] mb-2">{price} EGP</h3>
      <Button onClick={addToCartHandeler} className="cursor-pointer">
        {' '}
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
