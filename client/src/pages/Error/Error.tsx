import { Link } from 'react-router-dom';

import { LottieHandler } from '@components/feedbaks';
const Error = () => {
  return (
    <div className="mt-[15%] flex flex-col items-center  ">
      <LottieHandler type="notFound" />
      <p className="py-2 text-red-600 ">
        <Link to="/" replace={true}>
          How about going back to safety?
        </Link>
      </p>
    </div>
  );
};

export default Error;
