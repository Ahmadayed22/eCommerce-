import { Heading } from '@components/common';
import { useAppSelector } from '@store/reduxHooks';

const Account = () => {
  const accountInfo = useAppSelector((state) => state.auth.userInfo);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
      <Heading title="Account Info" />
      <ul className="divide-y divide-gray-200">
        <li className="py-3">
          <span className="font-semibold text-gray-700">First Name:</span>{' '}
          <span className="text-gray-900">{accountInfo?.firstName || '-'}</span>
        </li>
        <li className="py-3">
          <span className="font-semibold text-gray-700">Last Name:</span>{' '}
          <span className="text-gray-900">{accountInfo?.lastName || '-'}</span>
        </li>
        <li className="py-3">
          <span className="font-semibold text-gray-700">Email:</span>{' '}
          <span className="text-gray-900">{accountInfo?.email || '-'}</span>
        </li>
      </ul>
    </div>
  );
};

export default Account;
