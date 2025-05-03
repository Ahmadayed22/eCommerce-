import { TLoading } from '@customTypes/TLoading';
import ComponentType from './ComponentType';
import LottieHandler from '../LottieHandler/LottieHandler';

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
    return (
      <p>
        {' '}
        <LottieHandler type="error" message={error as string} />{' '}
      </p>
    );
  }
  return <>{children}</>;
};

export default Loading;
