import Button from 'src/lib/common/components/button/Button';
import Input from 'src/lib/common/components/input/Input';
import { LoginSchema } from '../../validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuthenticationHandler } from '../../hooks/useAuthenticationHandler';
import { AUTHENTICATION_TAB } from '../../types';

export type LoginFormType = {
  email: string;
  password: string;
};

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<AUTHENTICATION_TAB>>;
};

const LoginComponent = (props: Props) => {
  const { setActiveTab } = props;

  // ** Form **
  const formMethods = useForm<LoginFormType>({
    mode: 'all',
    resolver: yupResolver(LoginSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = formMethods;

  // ** Custom Hook **
  const { loginHandler, loginLoading } = useAuthenticationHandler({
    setActiveTab,
  });

  const onSubmit = handleSubmit(async (value: LoginFormType) => {
    const payload = {
      email: value.email,
      password: value.password,
    };
    await loginHandler({ payload });
  });

  return (
    <>
      <p className="flex flex-col mb-[10px]">
        <span className="font-bold text-[18px]">Login</span>
        <span className="text-[16px]">
          Login your password here. After signup, you'll be logged in.
        </span>
      </p>
      <Input
        className="rounded-[8px] p-[4px]"
        labelName="Email"
        name="email"
        register={register}
        error={errors.email}
        placeholder="Enter your email"
      />
      <Input
        className="rounded-[8px] p-[4px]"
        labelName="Password"
        name="password"
        register={register}
        error={errors.password}
        placeholder="Enter your password"
        type="password"
      />
      <Button
        isDisable={loginLoading}
        text="Login"
        className="bg-slate-950"
        onClick={onSubmit}
      />
    </>
  );
};

export default LoginComponent;
