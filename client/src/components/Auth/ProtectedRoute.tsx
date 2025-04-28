import { useAppSelector } from '@store/reduxHooks';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  if (!accessToken) {
    return <Navigate to={'/login?message=login_required'} />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
