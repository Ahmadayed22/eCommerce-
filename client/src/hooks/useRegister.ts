import { useForm, SubmitHandler } from 'react-hook-form';
import { signUpSchema, signUpType } from '@validation/signUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import useCheckEmailAvailability from '@hooks/useCheckEmailAvailability';
import { useAppDispatch, useAppSelector } from '@store/reduxHooks';
import { resetUI, thunkAuthRegister } from '@store/auth/authSlice';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
const useRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error, accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getFieldState,
    trigger,
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
  });

  const submitForm: SubmitHandler<signUpType> = (data) => {
    const { confirmPassword, ...rest } = data;

    dispatch(thunkAuthRegister(rest))
      .unwrap()
      .then(() => {
        navigate('/login?message=account_created');
      });
  };

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger('email');
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState('email');
    if (isDirty && !invalid && enteredEmail !== value) {
      checkEmailAvailability(value);
    }
    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    register,
    handleSubmit,
    emailOnBlurHandler,
    emailAvailabilityStatus,
    submitForm,
    errors,
    navigate,
    accessToken,
  };
};

export default useRegister;
