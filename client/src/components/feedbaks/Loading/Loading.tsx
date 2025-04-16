import { TLoading } from '@customTypes/TLoading';

type TLoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ loading, error, children }: TLoadingProps) => {
  if (loading === 'pending') {
    return <p className="text-5xl ">Loadind Please Wait .. </p>;
  }
  if (loading === 'failed') {
    return <p> {error} </p>;
  }
  return <>{children}</>;
};

export default Loading;
