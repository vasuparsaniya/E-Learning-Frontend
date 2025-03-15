import Button from 'src/lib/common/components/button/Button';
import Input from 'src/lib/common/components/input/Input';

type Props = {};

const LoginComponent = (props: Props) => {
  const {} = props;

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
        placeholder="Enter your email"
      />
      <Input
        className="rounded-[8px] p-[4px]"
        labelName="Password"
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <Button
        isDisable={false}
        text="Login"
        className="bg-slate-950"
        onClick={() => {}}
      />
    </>
  );
};

export default LoginComponent;
