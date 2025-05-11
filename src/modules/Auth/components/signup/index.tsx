import { useForm } from 'react-hook-form';
import Button from 'src/lib/common/components/button/Button';
import Input from 'src/lib/common/components/input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from '../../validation';
import { useSignup } from '../../services';

type SignUpFormType = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

type Props = {};

const SignupComponent = (props: Props) => {
  const {} = props;

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

  // ** API **
  const { signup, isLoading: signupLoading, error } = useSignup();

  const onSubmit = handleSubmit(async (value: SignUpFormType) => {
    console.log('===========submit value', value);
    const payload = {
      firstName: value.first_name,
      lastName: value.last_name,
      email: value.email,
      password: value.password,
    };
    const data = await signup({
      ...payload,
    });
    if (data && !error) {
    }
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
        isDisable={false}
        text="Signup"
        className="bg-slate-950"
        onClick={onSubmit}
      />
    </>
  );
};

export default SignupComponent;
