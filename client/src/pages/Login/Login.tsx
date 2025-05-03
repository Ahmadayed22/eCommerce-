import { Heading } from '@components/common';
import { Input } from '@components/common/Form';
import useLogin from '@hooks/useLogin';

import { Button, Spinner } from 'flowbite-react';

import { Alert } from 'flowbite-react';

const Login = () => {
  const {
    loading,
    error,
    accessToken,
    register,
    handleSubmit,
    errors,
    submitForm,
    searchParams,
    navigate,
  } = useLogin();
  if (accessToken) {
    return navigate('/');
  }
  return (
    <>
      <Heading title="User Register" />
      <div className="max-w-3xl mx-auto mt-[15%]">
        <div className="max-w-md  mb-3 mx-2">
          {searchParams.get('message') === 'account_created' && (
            <Alert color="success" className="text-[16px]">
              <span className="font-medium ">Your Account Created </span>,
              Please Login In
            </Alert>
          )}
          {searchParams.get('message') === 'login_required' && (
            <Alert color="failure" className="text-[16px]">
              <span className="font-medium ">Login Requierd </span>, Please
              Login In
            </Alert>
          )}
        </div>

        <form
          className="flex max-w-md flex-col gap-4 mx-2"
          onSubmit={handleSubmit(submitForm)}
        >
          {/* Email */}
          <Input
            label={'Email'}
            name={'email'}
            register={register}
            type={'email'}
            error={errors.email?.message}
            placeholder={'Email'}
            id={'email'}
          />

          {/* Password */}
          <Input
            label={'Password'}
            name={'password'}
            register={register}
            type={'password'}
            error={errors.password?.message}
            placeholder={'Password'}
            id={'password'}
          />
          <Button
            className="cursor-pointer"
            type="submit"
            disabled={loading === 'pending'}
          >
            {loading === 'pending' ? (
              <>
                <Spinner aria-label="Spinner button " size="sm" light />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              'Submit'
            )}
          </Button>

          {/* Error */}
          {error && (
            <p className="!text-red-600 my-2 text-xl text-center">
              <span>Oops! </span>
              {error}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
