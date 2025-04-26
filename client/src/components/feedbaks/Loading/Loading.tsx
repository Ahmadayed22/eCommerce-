import { TLoading } from '@customTypes/TLoading';
import ComponentType from './ComponentType';

type TLoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
  type: 'cart' | 'product' | 'category' | 'wishlist';
};

const Loading = ({
  loading,
  error,
  children,
  type = 'category',
}: TLoadingProps) => {
  if (loading === 'pending') {
    return <ComponentType type={type} />;
  }
  if (loading === 'failed') {
    return <p> {error} </p>;
  }
  return <>{children}</>;
};

export default Loading;
