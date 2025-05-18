import { useNavigate } from 'react-router-dom';
import { LoginFormType } from '../components/login';
import { SignUpFormType } from '../components/signup';
import { useLogin, useSignup } from '../services';
import { AUTHENTICATION_TAB } from '../types';
import { PRIVATE_NAVIGATION_CONSTANT } from 'src/lib/navigation/navigation.constant';

type AuthenticationHandlerProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<AUTHENTICATION_TAB>>;
};
export const useAuthenticationHandler = (props: AuthenticationHandlerProps) => {
  const { setActiveTab } = props;

  // ** Hook **
  const navigation = useNavigate();

  // ** API **
  const { login, isLoading: loginLoading, error: loginError } = useLogin();
  const { signup, isLoading: signupLoading, error: signupError } = useSignup();

  const signupHandler = async (args: {
    payload: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    };
  }) => {
    const { payload } = args;

    const data = await signup({
      ...payload,
    });
    if (data && !signupError) {
      setActiveTab(AUTHENTICATION_TAB.LOGIN);
    }
  };

  const loginHandler = async (args: {
    payload: { email: string; password: string };
  }) => {
    const { payload } = args;
    const data = await login({
      ...payload,
    });
    if (data && !loginError) {
      /**Navigate to dashboard */
      navigation(PRIVATE_NAVIGATION_CONSTANT.dashboard.view);
    }
  };

  return { loginHandler, loginLoading, signupHandler, signupLoading };
};
