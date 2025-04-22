import { TProduct } from '@customTypes/TProduct';
import CartItem from '../CartItem/CartItem';

type TCartItemsListProps = {
  products: TProduct[];
  changeQunatityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};
const CartItemList = ({
  products,
  changeQunatityHandler,
  removeItemHandler,
}: TCartItemsListProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQunatityHandler={changeQunatityHandler}
      removeItemHandler={removeItemHandler}
    />
  ));
  return <div>{renderList}</div>;
};

export default CartItemList;
