import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/lib/common/components/button/Button';
import Input from '@/lib/common/components/input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from '../../validation';
import { useSignup } from '../../services';
import { useAuthenticationHandler } from '../../hooks/useAuthenticationHandler';
import { AUTHENTICATION_TAB } from '../../types';

export type SignUpFormType = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<AUTHENTICATION_TAB>>;
};

const SignupComponent = (props: Props) => {
  const { setActiveTab } = props;

  // ** Form **
  const formMethods = useForm<SignUpFormType>({
    mode: 'all',
    resolver: yupResolver(SignupSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = formMethods;

  // ** Custom Hook **
  const { signupHandler, signupLoading } = useAuthenticationHandler({
    setActiveTab,
  });

  const onSubmit = handleSubmit(async (value: SignUpFormType) => {
    const payload = {
      firstName: value.first_name,
      lastName: value.last_name,
      email: value.email,
      password: value.password,
    };
    await signupHandler({ payload });
  });

  return (
    <>
      <p className="flex flex-col mb-[10px]">
        <span className="font-bold text-[18px]">Signup</span>
        <span className="text-[16px]">
          Create a new account and click signup when you're done.
        </span>
      </p>
      <Input
        className="rounded-[8px] p-[4px]"
        name="first_name"
        labelName="First Name"
        register={register}
        placeholder="Enter your first name"
        error={errors.first_name}
      />
      <Input
        className="rounded-[8px] p-[4px]"
        name="last_name"
        labelName="Last Name"
        register={register}
        placeholder="Enter your last name"
        error={errors.last_name}
      />
      <Input
        className="rounded-[8px] p-[4px]"
        name="email"
        register={register}
        labelName="Email"
        placeholder="Enter your email"
        error={errors.email}
      />
      <Input
        className="rounded-[8px] p-[4px]"
        name="password"
        register={register}
        labelName="Password"
        placeholder="Enter your password"
        error={errors.password}
      />
      <Button
        isDisable={signupLoading}
        text="Signup"
        className="bg-slate-950"
        onClick={onSubmit}
      />
    </>
  );
};

export default SignupComponent;
