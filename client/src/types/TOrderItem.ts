import { TProduct } from './TProduct';

type TOrderItem = {
  id: number;
  items: TProduct[];
  subtotal: number;
};

export default TOrderItem;
