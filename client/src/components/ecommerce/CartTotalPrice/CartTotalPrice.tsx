import { TProduct } from '@customTypes/TProduct';

type TProductProps = {
  products: TProduct[];
};

const CartTotalPrice = ({ products }: TProductProps) => {
  const totalPrice = products.reduce((acc, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === 'number') {
      return acc + price * quantity;
    } else {
      return acc;
    }
  }, 0);
  return (
    <div className="flex justify-between mb-14">
      <span className="block text-2xl font-bold">Subtotal</span>
      <span className="block text-2xl font-bold">{totalPrice} JOD</span>
    </div>
  );
};

export default CartTotalPrice;
