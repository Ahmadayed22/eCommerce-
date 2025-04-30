import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { resetUI, thunkAuthLogin } from '@store/auth/authSlice';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useSearchParams } from 'react-router';
import { signInSchema, signInType } from '@validation/signInSchema';
const useLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { loading, error, accessToken } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInType>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
  });

  const submitForm: SubmitHandler<signInType> = (data) => {
    if (
      searchParams.get('message') === 'account_created' ||
      searchParams.get('message') === 'login_required'
    ) {
      setSearchParams('');
    }
    dispatch(thunkAuthLogin(data))
      .unwrap()
      .then(() => {
        navigate('/');
      });
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    accessToken,
    register,
    handleSubmit,
    errors,
    submitForm,
    searchParams,
    setSearchParams,
    navigate,
  };
};

export default useLogin;
