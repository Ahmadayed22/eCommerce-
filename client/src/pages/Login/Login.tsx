import { Heading } from '@components/common';
import { Input } from '@components/common/Form';
import { signInSchema, signInType } from '@validation/signInSchema';
import { Button } from 'flowbite-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInType>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
  });
  const submitForm: SubmitHandler<signInType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Heading title="User Register" />
      <div className="max-w-3xl mx-auto mt-[15%]">
        <form
          className="flex max-w-md flex-col gap-4"
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
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
};

export default Register;
