import { Heading } from '@components/common';
import { Button } from 'flowbite-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signUpSchema, signUpType } from '@validation/signUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components/common/Form';
import useCheckEmailAvailability from '@hooks/useCheckEmailAvailability';

const Register = () => {
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
    console.log(data);
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
      console.log(isDirty, invalid);
    }
    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };
  return (
    <>
      <Heading title="User Register" />
      <div className="max-w-3xl mx-auto mt-[15%]">
        <form
          className="flex max-w-md flex-col gap-4"
          onSubmit={handleSubmit(submitForm)}
        >
          {/* First Name */}
          <Input
            label={'FirstName'}
            name={'firstName'}
            register={register}
            type={'text'}
            error={errors.firstName?.message}
            placeholder={'FirstName'}
            id={'firstName'}
          />

          {/* Last Name */}
          <Input
            label={'LastName'}
            name={'lastName'}
            register={register}
            type={'text'}
            error={errors.lastName?.message}
            placeholder={'LastName'}
            id={'lastName'}
          />

          {/* Email */}
          <Input
            label={'Email'}
            name={'email'}
            register={register}
            type={'email'}
            // error={errors.email?.message}
            placeholder={'Email'}
            id={'email'}
            onBlur={emailOnBlurHandler}
            error={
              errors.email?.message
                ? errors.email?.message
                : emailAvailabilityStatus === 'notAvailable'
                  ? 'This email is already in use.'
                  : emailAvailabilityStatus === 'failed'
                    ? 'Error from the server.'
                    : ''
            }
            formText={
              emailAvailabilityStatus === 'checking'
                ? "We're currently checking the availability of this email address. Please wait a moment."
                : ''
            }
            success={
              emailAvailabilityStatus === 'available'
                ? 'This email is available for use.'
                : ''
            }
            disabled={emailAvailabilityStatus === 'checking' ? true : false}
          />

          {/* Password */}
          <Input
            label={'Password'}
            name={'password'}
            register={register}
            type={'password'}
            error={errors.password?.message}
            placeholder={'Password'}
            id={'Password'}
          />

          {/* Confirm Password */}
          <Input
            label={'ConfirmPassword'}
            name={'confirmPassword'}
            register={register}
            type={'password'}
            error={errors.confirmPassword?.message}
            placeholder={'ConfirmPassword'}
            id={'confirmPassword'}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
};

export default Register;
