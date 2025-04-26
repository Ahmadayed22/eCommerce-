import {
  WishListSkeleton,
  CartSkeleton,
  ProductSkeleton,
  CategoriesSkeleton,
} from '@skeleton/index';

type SkeletonType = 'cart' | 'product' | 'category' | 'wishlist';
const ComponentType = ({ type }: { type: SkeletonType }) => {
  const skeletonTypes = {
    category: CategoriesSkeleton,
    product: ProductSkeleton,
    cart: CartSkeleton,
    wishlist: WishListSkeleton,
  };
  const Component = skeletonTypes[type];
  return <Component />;
};

export default ComponentType;
